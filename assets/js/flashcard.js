/* ============================================================
   flashcard.js — Vocab selection & 3-mode study system
   ============================================================ */

/* ---- State ---- */
let _studyVocab   = [];
let _studyIndex   = 0;
let _studyFlipped = false;
let _studyMode    = "flashcard"; // "flashcard" | "fill-meaning" | "fill-word"
let _studyKnown   = new Set();
let _studyWrong   = new Set();
let _studyShuffled = [];

/* ============================================================
   SELECTION BAR — attaches to vocab table in renderLesson
   ============================================================ */
function initVocabSelection(lesson) {
  const section = document.getElementById("vocabTableSection");
  if (!section) return;

  // Inject checkboxes into table
  const table = section.querySelector("table");
  if (!table) return;

  // Add checkbox column header
  const thead = table.querySelector("thead tr");
  const checkTh = document.createElement("th");
  checkTh.className = "col-check";
  checkTh.innerHTML = `<input type="checkbox" id="selectAllVocab" title="Chọn tất cả">`;
  thead.prepend(checkTh);

  // Add checkbox to each row
  const rows = table.querySelectorAll("tbody tr");
  rows.forEach((row, i) => {
    const v = lesson.vocab[i];
    if (!v) return;
    const td = document.createElement("td");
    td.className = "col-check";
    td.innerHTML = `<input type="checkbox" class="vocab-check"
      data-jp="${escAttr(v.jp)}"
      data-reading="${escAttr(v.reading || "")}"
      data-vi="${escAttr(v.vi)}">`;
    row.prepend(td);
  });

  // Select-all toggle
  document.getElementById("selectAllVocab").addEventListener("change", function () {
    table.querySelectorAll(".vocab-check").forEach(cb => {
      cb.checked = this.checked;
    });
    updateSelectionBar();
  });

  // Individual checkbox changes
  table.addEventListener("change", e => {
    if (!e.target.classList.contains("vocab-check")) return;
    updateSelectionBar();
    // Sync select-all state
    const all  = [...table.querySelectorAll(".vocab-check")];
    const chk  = all.filter(x => x.checked);
    const selAll = document.getElementById("selectAllVocab");
    if (selAll) {
      selAll.checked = chk.length === all.length;
      selAll.indeterminate = chk.length > 0 && chk.length < all.length;
    }
  });



  updateSelectionBar();
}

function escAttr(str) {
  return (str || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function getSelectedVocab() {
  return [...document.querySelectorAll(".vocab-check:checked")].map(cb => ({
    jp:      cb.dataset.jp,
    reading: cb.dataset.reading,
    vi:      cb.dataset.vi,
  }));
}

function updateSelectionBar() {
  const selected = getSelectedVocab();
  const bar = document.getElementById("vocabSelectionBar");
  if (!bar) return;

  if (selected.length > 0) {
    bar.classList.add("bar-active");
    const countEl = bar.querySelector(".sel-count");
    if (countEl) countEl.textContent = `${selected.length} từ đã chọn`;
  } else {
    bar.classList.remove("bar-active");
  }
}

/* ============================================================
   STUDY MODAL ENTRY POINT
   ============================================================ */
function openVocabStudy(vocabList) {
  if (!vocabList || !vocabList.length) {
    showToast("Chọn ít nhất 1 từ để học.", "error");
    return;
  }
  _studyVocab   = vocabList;
  _studyMode    = "flashcard-jp";
  _studyIndex   = 0;
  _studyFlipped = false;
  _studyKnown   = new Set();
  _studyWrong   = new Set();
  _studyShuffled = shuffle([..._studyVocab]);

  renderStudyModal();
}

/* ============================================================
   MODAL SHELL
   ============================================================ */
function renderStudyModal() {
  let modal = document.getElementById("studyModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "studyModal";
    modal.className = "study-modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="study-modal">
      <div class="study-modal-header">
        <span class="study-modal-title">Học từ vựng — ${_studyVocab.length} từ</span>
        <div class="study-tabs">
          <button class="study-tab ${_studyMode === 'flashcard-jp' ? 'active' : ''}" data-mode="flashcard-jp">Thẻ (Nhật ➔ Việt)</button>
          <button class="study-tab ${_studyMode === 'flashcard-vi' ? 'active' : ''}" data-mode="flashcard-vi">Thẻ (Việt ➔ Nhật)</button>
          <button class="study-tab ${_studyMode === 'quiz' ? 'active' : ''}" data-mode="quiz">Trắc nghiệm</button>
        </div>
        <button class="study-close" id="closeStudyModal">✕</button>
      </div>
      <div class="study-modal-body" id="studyModalBody"></div>
    </div>
  `;

  // Tabs
  modal.querySelectorAll(".study-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      _studyMode    = btn.dataset.mode;
      _studyIndex   = 0;
      _studyFlipped = false;
      _studyKnown   = new Set();
      _studyWrong   = new Set();
      _studyShuffled = shuffle([..._studyVocab]);
      modal.querySelectorAll(".study-tab").forEach(t => t.classList.toggle("active", t === btn));
      renderStudyBody();
    });
  });

  document.getElementById("closeStudyModal").addEventListener("click", closeStudyModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeStudyModal(); });

  requestAnimationFrame(() => modal.classList.add("study-modal-visible"));
  renderStudyBody();
}

function closeStudyModal() {
  const modal = document.getElementById("studyModal");
  if (!modal) return;
  modal.classList.remove("study-modal-visible");
  setTimeout(() => modal.remove(), 280);
}

/* ============================================================
   RENDER BODY per mode
   ============================================================ */
function renderStudyBody() {
  const body = document.getElementById("studyModalBody");
  if (!body) return;

  if (_studyMode === "flashcard-jp" || _studyMode === "flashcard-vi") {
    renderFlashcardMode(body);
  } else if (_studyMode === "quiz") {
    renderQuizMode(body);
  }
}

/* ---- progress header ---- */
function progressHtml(done, total) {
  const pct = Math.round((done / total) * 100);
  return `
    <div class="study-progress">
      <span class="study-prog-text">${done} / ${total}</span>
      <div class="study-prog-bar"><div class="study-prog-fill" style="width:${pct}%"></div></div>
    </div>
  `;
}

/* ============================================================
   FLASHCARD MODE
   ============================================================ */
function renderFlashcardMode(body) {
  if (_studyShuffled.length === 0) { renderStudyDone(body); return; }

  const card = _studyShuffled[_studyIndex];
  const done  = _studyKnown.size + _studyWrong.size;
  const total = _studyVocab.length;
  const remaining = _studyShuffled.length;

  const speakSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  const speakBtnHtml = `<button type="button" class="speak-btn flashcard-speak" data-jp="${escAttr(card.jp)}" data-reading="${escAttr(card.reading)}" title="Nghe phát âm">${speakSvg}</button>`;

  const isViMode = _studyMode === "flashcard-vi";

  const frontHtml = isViMode ? `
    <div class="fc-word" style="font-size:24px; font-weight:700;">${card.vi}</div>
    <div class="fc-hint">Nhấn để lật</div>
  ` : `
    <div class="fc-word jp">${card.jp} ${speakBtnHtml}</div>
    ${card.reading ? `<div class="fc-reading jp">${card.reading}</div>` : ""}
    <div class="fc-hint">Nhấn để lật</div>
  `;

  body.innerHTML = `
    ${progressHtml(done, total)}

    <div class="study-info-row">
      <span class="study-remaining">${remaining} thẻ còn lại</span>
      <span class="study-legend">
        <span class="leg-known">✓ ${_studyKnown.size} nhớ</span>
        <span class="leg-wrong">✗ ${_studyWrong.size} chưa nhớ</span>
      </span>
    </div>

    <div class="flashcard ${_studyFlipped ? 'flipped' : ''}" id="theFlashcard">
      <div class="fc-front">
        ${frontHtml}
      </div>
      <div class="fc-back">
        <div class="fc-word jp">${card.jp} ${speakBtnHtml}</div>
        ${card.reading ? `<div class="fc-reading jp">${card.reading}</div>` : ""}
        <div class="fc-meaning">${card.vi}</div>
      </div>
    </div>

    <div class="fc-actions ${_studyFlipped ? '' : 'hidden'}">
      <button class="btn btn-fc-wrong" id="fcWrong">✗ Chưa nhớ</button>
      <button class="btn btn-fc-known" id="fcKnown">✓ Đã nhớ</button>
    </div>

    ${!_studyFlipped ? `<div class="fc-flip-hint">Nhấn vào thẻ để xem đáp án</div>` : ""}
  `;

  document.getElementById("theFlashcard").addEventListener("click", () => {
    _studyFlipped = !_studyFlipped;
    renderFlashcardMode(body);
  });

  document.querySelectorAll(".flashcard-speak").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      if (typeof playVocabularyAudio === "function") {
        playVocabularyAudio(btn.dataset.jp, btn.dataset.reading, btn);
      }
    });
  });

  if (_studyFlipped) {
    document.getElementById("fcKnown").addEventListener("click", () => {
      _studyKnown.add(card.jp);
      _studyShuffled.splice(_studyIndex, 1);
      if (_studyShuffled.length === 0) { renderStudyDone(body); return; }
      _studyIndex   = _studyIndex % _studyShuffled.length;
      _studyFlipped = false;
      renderFlashcardMode(body);
    });

    document.getElementById("fcWrong").addEventListener("click", () => {
      _studyWrong.add(card.jp);
      // Move card to end of queue
      _studyShuffled.splice(_studyIndex, 1);
      _studyShuffled.push(card);
      if (_studyIndex >= _studyShuffled.length) _studyIndex = 0;
      _studyFlipped = false;
      renderFlashcardMode(body);
    });
  }

  // Keyboard shortcut
  body.setAttribute("tabindex", "0");
  body.focus();
  body.onkeydown = e => {
    if (e.key === " " || e.key === "Enter") {
      if (!_studyFlipped) { _studyFlipped = true; renderFlashcardMode(body); }
    } else if (e.key === "ArrowRight" && _studyFlipped) {
      document.getElementById("fcKnown")?.click();
    } else if (e.key === "ArrowLeft" && _studyFlipped) {
      document.getElementById("fcWrong")?.click();
    }
  };
}

/* ============================================================
   QUIZ MODE (Trắc nghiệm 2 chiều)
   ============================================================ */
function renderQuizMode(body) {
  if (_studyIndex >= _studyShuffled.length) { renderStudyDone(body); return; }

  const card = _studyShuffled[_studyIndex];
  const total = _studyShuffled.length;
  const done = _studyKnown.size + _studyWrong.size;

  if (!card.quizState) {
    const isJpToVi = Math.random() > 0.5;
    let pool, correct;
    if (isJpToVi) {
      correct = card.vi;
      pool = _studyVocab.map(v => v.vi);
    } else {
      correct = card.jp;
      pool = _studyVocab.map(v => v.jp);
    }
    const choices = uniqueChoices(correct, pool, 4);
    card.quizState = { isJpToVi, correct, choices, answered: null };
  }

  const { isJpToVi, correct, choices, answered } = card.quizState;

  const speakSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  const speakBtnHtml = `<button type="button" class="speak-btn flashcard-speak" data-jp="${escAttr(card.jp)}" data-reading="${escAttr(card.reading)}" title="Nghe phát âm">${speakSvg}</button>`;

  const promptHtml = isJpToVi 
    ? `<div class="fc-word jp">${card.jp} ${speakBtnHtml}</div>${card.reading ? `<div class="fc-reading jp">${card.reading}</div>` : ""}<div class="fill-label">Nghĩa tiếng Việt là gì?</div>`
    : `<div class="fc-meaning" style="font-size:24px; font-weight:700;">${card.vi}</div><div class="fill-label">Từ tiếng Nhật là gì?</div>`;

  body.innerHTML = `
    ${progressHtml(_studyIndex, total)}

    <div class="fill-card" style="padding-bottom: 24px;">
      ${promptHtml}
      <div class="quiz-choices" style="margin-top:24px; display:flex; flex-direction:column; gap:10px;">
        ${choices.map((c, i) => {
          let cls = "choice";
          if (answered) {
            if (c === correct) cls += " correct";
            else if (c === answered) cls += " wrong";
            else cls += " disabled";
          }
          const choiceId = `q_choice_${i}`;
          return `
            <label class="${cls}" style="justify-content: flex-start; margin:0;" for="${choiceId}">
              <input type="radio" name="quiz_choice" id="${choiceId}" value="${escAttr(c)}" ${answered ? "disabled" : ""}>
              <span class="${!isJpToVi ? 'jp' : ''}" style="font-size: 15px;">${c}</span>
            </label>
          `;
        }).join("")}
      </div>
      <div id="fillFeedback" style="margin-top:16px;"></div>
    </div>

    <div class="fill-nav">
      <span class="fill-pos">${_studyIndex + 1} / ${total}</span>
      <button class="btn btn-secondary btn-sm" id="fillSkip" style="${answered ? 'display:none' : ''}">Bỏ qua</button>
      <button class="btn btn-primary btn-sm" id="quizNext" style="${answered ? '' : 'display:none'}">Tiếp tục →</button>
    </div>
  `;

  if (!answered) {
    document.querySelectorAll("input[name='quiz_choice']").forEach(radio => {
      radio.addEventListener("change", () => {
        const userChoice = radio.value;
        card.quizState.answered = userChoice;
        if (userChoice === correct) {
          _studyKnown.add(card.jp);
          card.quizState.feedback = `<div class="fill-result fill-correct">✓ Đúng rồi!</div>`;
        } else {
          _studyWrong.add(card.jp);
          card.quizState.feedback = `<div class="fill-result fill-wrong">✗ Sai rồi! Đáp án đúng: <b class="${!isJpToVi ? 'jp' : ''}">${correct}</b></div>`;
        }
        renderQuizMode(body);
      });
    });

    document.getElementById("fillSkip").onclick = () => {
      _studyWrong.add(card.jp);
      card.quizState.answered = "SKIP";
      card.quizState.feedback = `<div class="fill-result fill-wrong">✗ Đã bỏ qua! Đáp án đúng: <b class="${!isJpToVi ? 'jp' : ''}">${correct}</b></div>`;
      renderQuizMode(body);
    };
  } else {
    const feedback = document.getElementById("fillFeedback");
    if (feedback && card.quizState.feedback) feedback.innerHTML = card.quizState.feedback;

    document.getElementById("quizNext").onclick = () => {
      _studyIndex++;
      renderQuizMode(body);
    };
  }

  document.querySelectorAll(".flashcard-speak").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      if (typeof playVocabularyAudio === "function") {
        playVocabularyAudio(btn.dataset.jp, btn.dataset.reading, btn);
      }
    });
  });
}

/* ============================================================
   DONE SCREEN
   ============================================================ */
function renderStudyDone(body) {
  const total  = _studyVocab.length;
  const known  = _studyMode === "flashcard" ? _studyKnown.size : _studyKnown.size;
  const wrong  = _studyMode === "flashcard" ? _studyWrong.size : _studyWrong.size;
  const pct    = Math.round((known / total) * 100);
  const cls    = pct >= 80 ? "result-good" : pct >= 60 ? "result-warn" : "result-bad";

  body.innerHTML = `
    <div class="study-done">
      <div class="study-done-icon">${pct >= 80 ? "🎉" : pct >= 60 ? "💪" : "📖"}</div>
      <div class="study-done-title">Hoàn thành!</div>
      <div class="quiz-result ${cls}" style="margin-top:12px;text-align:center">
        <strong>${known}/${total} từ (${pct}%)</strong>
        <div class="result-msg">
          ${pct >= 80 ? "Rất tốt! Tiếp tục duy trì." : pct >= 60 ? "Ổn — ôn thêm các từ chưa nhớ." : "Luyện lại thêm vài lần nữa."}
        </div>
      </div>
      <div class="study-done-stats">
        <div class="done-stat done-known"><span>${known}</span> đã nhớ</div>
        <div class="done-stat done-wrong"><span>${wrong}</span> chưa nhớ</div>
      </div>
      <div class="btn-row" style="justify-content:center;margin-top:16px;gap:10px">
        <button class="btn btn-primary" id="studyAgainBtn">Học lại</button>
        ${wrong > 0 ? `<button class="btn btn-secondary" id="studyWrongBtn">Ôn từ chưa nhớ (${wrong})</button>` : ""}
        <button class="btn btn-secondary" id="closeStudyDoneBtn">Đóng</button>
      </div>
    </div>
  `;

  document.getElementById("studyAgainBtn").onclick = () => {
    _studyIndex   = 0;
    _studyFlipped = false;
    _studyKnown   = new Set();
    _studyWrong   = new Set();
    _studyShuffled = shuffle([..._studyVocab]);
    renderStudyBody();
  };

  document.getElementById("closeStudyDoneBtn").onclick = closeStudyModal;

  const wrongBtn = document.getElementById("studyWrongBtn");
  if (wrongBtn) {
    wrongBtn.onclick = () => {
      const wrongVocab = _studyVocab.filter(v => _studyWrong.has(v.jp));
      _studyIndex   = 0;
      _studyFlipped = false;
      _studyKnown   = new Set();
      _studyWrong   = new Set();
      _studyShuffled = shuffle([...wrongVocab]);
      _studyVocab   = wrongVocab;
      const title = document.querySelector(".study-modal-title");
      if (title) title.textContent = `Học từ vựng — ${wrongVocab.length} từ`;
      renderStudyBody();
    };
  }
}
