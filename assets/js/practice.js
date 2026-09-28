/* ============================================================
   practice.js — Practice Hub, Midterm 10 đề
   ============================================================ */

let currentPracticeMidterm = null;
let currentPracticeMidtermSetNo = null;
let practiceMidtermTimer = null;
let practiceMidtermTimeLeft = 0;

function renderPracticeHub() {
  window.scrollTo({ top: 0, behavior: "instant" });
  setActiveNav("practice");
  const main = document.getElementById("main");

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h2>Hub luyện tập</h2>
        <span class="text-muted">Bài 1–7 • 80 câu/bài • 10 đề Midterm</span>
      </div>

      <!-- Lesson practice grid -->
      <div class="practice-grid">
        ${LESSONS.map(l => {
          const isDone = isPracticeLessonDone(l.id);
          return `
          <div class="practice-card ${isDone ? 'practice-done' : ''}">
            <div class="practice-card-head">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="practice-num">Bài ${l.id}</span>
                <button class="status-toggle-btn ${isDone ? 'status-done' : 'status-undone'} toggle-practice-lesson" data-id="${l.id}" title="Bấm để đổi trạng thái">
                  ${isDone ? '✓ Hoàn thành' : '○ Chưa xong'}
                </button>
              </div>
              <span class="practice-title">${l.title}</span>
            </div>
            <div class="practice-scores">
              <div class="score-row"><span>Vocab</span>${scoreLabel(`practice-vocab-${l.id}`)}</div>
              <div class="score-row"><span>Grammar</span>${scoreLabel(`practice-grammar-${l.id}`)}</div>
              <div class="score-row"><span>Core</span>${scoreLabel(`practice-core-${l.id}`)}</div>
              <div class="score-row"><span>Kanji</span>${scoreLabel(`practice-kanji-${l.id}`)}</div>
            </div>
            <button class="btn btn-primary btn-block open-practice-lesson" data-id="${l.id}">Luyện tập</button>
          </div>`;
        }).join("")}
      </div>

      <!-- Midterm -->
      <section class="card">
        <div class="section-head">
          <h3>Midterm — 10 đề</h3>
          <span class="text-muted">15 câu • 4 vocab + 4 kanji + 7 grammar</span>
        </div>
        <div class="midterm-grid">
          ${Array.from({ length: 10 }, (_, i) => {
            const setNo = i + 1;
            const isDone = isMidtermDone(setNo);
            return `
            <div class="midterm-item ${isDone ? 'midterm-done' : ''}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div class="midterm-num">Đề ${setNo}</div>
                <button class="status-toggle-btn ${isDone ? 'status-done' : 'status-undone'} toggle-midterm-done" data-set="${setNo}" title="Bấm để đổi trạng thái">
                  ${isDone ? '✓ Xong' : '○ Chưa'}
                </button>
              </div>
              <div class="midterm-score">${scoreLabel(`midterm-${setNo}`)}</div>
              <button class="btn btn-sm btn-primary open-midterm-practice" data-set="${setNo}">Làm</button>
            </div>`;
          }).join("")}
        </div>
      </section>
    </div>
  `;

  document.querySelectorAll(".open-practice-lesson").forEach(btn =>
    btn.onclick = () => renderPracticeLesson(Number(btn.dataset.id))
  );
  document.querySelectorAll(".open-midterm-practice").forEach(btn =>
    btn.onclick = () => startPracticeMidterm(Number(btn.dataset.set))
  );
  document.querySelectorAll(".toggle-practice-lesson").forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      togglePracticeLesson(Number(btn.dataset.id));
      renderPracticeHub();
    };
  });
  document.querySelectorAll(".toggle-midterm-done").forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      toggleMidtermDone(Number(btn.dataset.set));
      renderPracticeHub();
    };
  });
}

function renderPracticeLesson(id) {
  window.scrollTo({ top: 0, behavior: "instant" });
  const lesson = LESSONS.find(x => x.id === id);
  if (!lesson) return renderPracticeHub();

  setActiveNav("practice");
  const main = document.getElementById("main");

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <div>
          <h2>${lesson.title}</h2>
          <span class="text-muted">${lesson.vnTitle}</span>
        </div>
        <div class="btn-row">
          <button class="btn btn-secondary" id="backPracticeHubBtn">← Hub</button>
          <button class="btn btn-secondary" id="openOriginalLessonBtn">Bài học gốc</button>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="section-head">
            <h3>Từ vựng toàn bài</h3>
            ${scoreLabel(`practice-vocab-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceVocabWrap"></div>
        </div>

        <div class="card">
          <div class="section-head">
            <h3>Ngữ pháp</h3>
            ${scoreLabel(`practice-grammar-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceGrammarWrap"></div>
        </div>

        <div class="card">
          <div class="section-head">
            <h3>Core vocab</h3>
            ${scoreLabel(`practice-core-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceCoreWrap"></div>
        </div>

        <div class="card">
          <div class="section-head">
            <h3>Kanji</h3>
            ${scoreLabel(`practice-kanji-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceKanjiWrap"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("backPracticeHubBtn").onclick = renderPracticeHub;
  document.getElementById("openOriginalLessonBtn").onclick = () => renderLesson(id);
  buildMCQ("practiceVocabWrap", makePracticeVocab20(lesson), `practice-vocab-${id}`);
  buildMCQ("practiceGrammarWrap", makePracticeGrammar20(lesson), `practice-grammar-${id}`);
  buildMCQ("practiceCoreWrap", makePracticeCore20(lesson), `practice-core-${id}`);
  buildMCQ("practiceKanjiWrap", makePracticeKanji20(lesson), `practice-kanji-${id}`);
}

function startPracticeMidterm(setNo) {
  window.scrollTo({ top: 0, behavior: "instant" });
  currentPracticeMidtermSetNo = setNo;
  currentPracticeMidterm = makeMidtermSet(setNo);
  practiceMidtermTimeLeft = 15 * 60;
  clearInterval(practiceMidtermTimer);

  const main = document.getElementById("main");
  main.innerHTML = `
    <div class="page">
      <div class="exam-bar">
        <span class="exam-title">Đề Midterm ${setNo} — 4 vocab · 4 kanji · 7 ngữ pháp</span>
        <div class="timer" id="practiceMidtermTimer">15:00</div>
      </div>

      <section class="card">
        <div id="practiceMidtermWrap">
          ${currentPracticeMidterm.map((q, qi) => `
            <div class="q-block">
              <div class="q-group-tag">${q.group}</div>
              <div class="q-text"><strong>${qi + 1}.</strong> <span class="jp">${q.q}</span></div>
              ${q.choices.map((choice, ci) => `
                <label class="choice">
                  <input type="radio" name="practice-midterm-q${qi}" value="${ci}">
                  <span class="jp">${choice}</span>
                </label>
              `).join("")}
            </div>
          `).join("")}
        </div>
        <div class="btn-row" style="margin-top:16px">
          <button class="btn btn-primary" id="submitPracticeMidtermBtn">Nộp đề</button>
          <button class="btn btn-secondary" id="cancelPracticeMidtermBtn">Hủy</button>
        </div>
        <div id="practiceMidtermResult"></div>
      </section>
    </div>
  `;

  practiceMidtermTimer = setInterval(() => {
    practiceMidtermTimeLeft--;
    const el = document.getElementById("practiceMidtermTimer");
    if (el) {
      const m = String(Math.floor(practiceMidtermTimeLeft / 60)).padStart(2, "0");
      const s = String(practiceMidtermTimeLeft % 60).padStart(2, "0");
      el.textContent = `${m}:${s}`;
      if (practiceMidtermTimeLeft <= 60) el.classList.add("timer-urgent");
    }
    if (practiceMidtermTimeLeft <= 0) { clearInterval(practiceMidtermTimer); submitPracticeMidterm(); }
  }, 1000);

  document.getElementById("submitPracticeMidtermBtn").onclick = submitPracticeMidterm;
  document.getElementById("cancelPracticeMidtermBtn").onclick = () => { clearInterval(practiceMidtermTimer); renderPracticeHub(); };
}

function submitPracticeMidterm() {
  clearInterval(practiceMidtermTimer);
  if (!currentPracticeMidterm || !currentPracticeMidterm.length) return;

  let score = 0;
  const review = [];

  currentPracticeMidterm.forEach((q, qi) => {
    const chosen = document.querySelector(`input[name="practice-midterm-q${qi}"]:checked`);
    const val = chosen ? Number(chosen.value) : -1;
    if (val === q.answer) score++;
    review.push(`
      <div class="q-review">
        <span class="q-group-tag">${q.group}</span>
        <span>${qi + 1}.</span>
        ${val === q.answer
          ? `<span class="badge badge-done">Đúng</span>`
          : `<span class="badge badge-danger">Sai — <span class="jp">${q.choices[q.answer]}</span></span>`}
        ${q.explain ? `<span class="review-explain">${q.explain}</span>` : ""}
      </div>
    `);
  });

  saveScore(`midterm-${currentPracticeMidtermSetNo}`, score, currentPracticeMidterm.length);
  const pct = Math.round((score / currentPracticeMidterm.length) * 100);
  if (pct >= 60) {
    state.practiceDone[`midterm-${currentPracticeMidtermSetNo}`] = true;
    saveState();
  }
  const cls = pct >= 80 ? "result-good" : pct >= 60 ? "result-warn" : "result-bad";

  document.getElementById("practiceMidtermResult").innerHTML = `
    <div class="quiz-result ${cls}" style="margin-top:16px">
      <strong>Đề ${currentPracticeMidtermSetNo}: ${score}/${currentPracticeMidterm.length} — ${pct}%</strong>
      <div class="result-msg">
        ${pct >= 80 ? "Rất ổn — chuyển sang đề tiếp." :
          pct >= 60 ? "Ổn — làm thêm 1–2 đề để kín lỗ hổng." :
          "Ôn lại bài 4–5 rồi làm lại đề này."}
      </div>
    </div>
    <div class="btn-row" style="margin-top:12px">
      <button class="btn btn-primary" id="retryThisMidtermBtn">Làm lại</button>
      <button class="btn btn-secondary" id="backToPracticeHubAfterMidtermBtn">Về hub</button>
    </div>
    <div class="review-list" style="margin-top:12px">${review.join("")}</div>
  `;

  document.getElementById("retryThisMidtermBtn").onclick = () => startPracticeMidterm(currentPracticeMidtermSetNo);
  document.getElementById("backToPracticeHubAfterMidtermBtn").onclick = renderPracticeHub;
}
