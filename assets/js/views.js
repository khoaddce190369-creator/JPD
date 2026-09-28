/* ============================================================
   views.js — renderHome, renderRoadmap, renderLesson,
              renderSpeaking, renderExamHome, startExam, submitExam
   ============================================================ */

function markLessonDone(id) {
  if (!state.doneLessons.includes(id)) {
    state.doneLessons.push(id);
    saveState();
    showToast(`Bài ${id} hoàn thành!`, "success");
  }
  renderLesson(id);
}

/* ---------- HOME ---------- */
function renderHome() {
  setActiveNav("home");
  const main = document.getElementById("main");
  const lessonDone = state.doneLessons.length;
  const roadmapDone = Object.values(state.roadmapCheck).filter(Boolean).length;
  const totalPercent = Math.round(((lessonDone + roadmapDone) / (LESSONS.length + ROADMAP.length)) * 100);
  const quizDone = Object.keys(state.scores).length;

  main.innerHTML = `
    <div class="page">

      <!-- Stats row -->
      <div class="stat-row">
        <div class="stat-card stat-blue">
          <div class="stat-number" data-target="${lessonDone}">${lessonDone}</div>
          <div class="stat-label">/ 7 bài xong</div>
        </div>
        <div class="stat-card stat-amber">
          <div class="stat-number" data-target="${roadmapDone}">${roadmapDone}</div>
          <div class="stat-label">/ 30 ngày</div>
        </div>
        <div class="stat-card stat-green">
          <div class="stat-number" data-target="${totalPercent}">${totalPercent}</div>
          <div class="stat-label">% tiến độ</div>
        </div>
        <div class="stat-card stat-navy">
          <div class="stat-number" data-target="${quizDone}">${quizDone}</div>
          <div class="stat-label">quiz đã làm</div>
        </div>
      </div>

      <!-- Quick actions -->
      <div class="quick-actions">
        <button class="btn btn-primary btn-lg" id="goRoadmap">Lộ trình</button>
        <button class="btn btn-secondary btn-lg" id="goLesson1">Bài 1</button>
        <button class="btn btn-secondary btn-lg" id="goPracticeHub">Hub luyện tập</button>
        <button class="btn btn-secondary btn-lg" id="goSpeaking">Speaking hub</button>
        <button class="btn btn-secondary btn-lg" id="goExam">Mock test</button>
      </div>

      <!-- 7 bài map -->
      <section class="card">
        <div class="section-head"><h3>7 bài học</h3></div>
        <div class="lesson-map-grid">
          ${LESSONS.map(l => {
            const done = state.doneLessons.includes(l.id);
            const vScore = state.scores[`vocab-${l.id}`];
            const pct = vScore ? Math.round(vScore.score/vScore.total*100) : null;
            return `
            <div class="lesson-map-card ${done ? 'map-done' : ''}">
              <div class="map-head">
                <span class="map-num">${l.id}</span>
                ${done ? '<span class="badge badge-done">Done</span>' : ''}
              </div>
              <div class="map-title">${l.title}</div>
              ${pct !== null ? `<div class="map-score-bar"><div class="map-score-fill" style="width:${pct}%"></div></div>` : ''}
              <button class="btn btn-sm btn-secondary open-lesson" data-id="${l.id}">Mở</button>
            </div>`;
          }).join("")}
        </div>
      </section>

    </div>
  `;

  // Counter animation
  document.querySelectorAll(".stat-number[data-target]").forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (!target) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 25));
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(t);
    }, 20);
  });

  document.getElementById("goRoadmap").onclick = () => renderRoadmap();
  document.getElementById("goLesson1").onclick = () => renderLesson(1);
  document.getElementById("goPracticeHub").onclick = () => renderPracticeHub();
  document.getElementById("goSpeaking").onclick = () => renderSpeaking();
  document.getElementById("goExam").onclick = () => renderExamHome();
  document.querySelectorAll(".open-lesson").forEach(btn =>
    btn.onclick = () => renderLesson(Number(btn.dataset.id))
  );
  setTimeout(() => patchVocabularyTables(main), 0);
}

/* ---------- ROADMAP ---------- */
function renderRoadmap() {
  setActiveNav("roadmap");
  const main = document.getElementById("main");
  const data = state.customRoadmap || ROADMAP;
  const doneCount = Object.values(state.roadmapCheck).filter(Boolean).length;

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <div>
          <h2>Lộ trình</h2>
          <span class="text-muted">${doneCount}/${data.length} ngày hoàn thành</span>
        </div>
        <button class="btn btn-secondary btn-sm" id="editRoadmapBtn">
          Chỉnh sửa lộ trình
        </button>
      </div>

      <div class="roadmap-grid">
        ${data.map(item => `
          <div class="plan-day ${state.roadmapCheck[item.day] ? 'plan-done' : ''}">
            <div class="plan-top">
              <span class="plan-num">Ngày ${item.day}</span>
              <button class="btn btn-sm ${state.roadmapCheck[item.day] ? 'btn-done' : 'btn-secondary'} toggle-day" data-day="${item.day}">
                ${state.roadmapCheck[item.day] ? 'Xong' : 'Đánh dấu'}
              </button>
            </div>
            <div class="plan-title">${item.title}</div>
            <ul class="plan-tasks">
              ${item.tasks.map(t => `<li>${t}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll(".toggle-day").forEach(btn => {
    btn.onclick = () => {
      const day = Number(btn.dataset.day);
      state.roadmapCheck[day] = !state.roadmapCheck[day];
      saveState();
      showToast(state.roadmapCheck[day] ? `Ngày ${day} xong!` : `Bỏ đánh dấu ngày ${day}.`);
      renderRoadmap();
    };
  });

  document.getElementById("editRoadmapBtn").onclick = () => renderRoadmapEdit();
}

function renderRoadmapEdit() {
  const main = document.getElementById("main");
  const data = state.customRoadmap || ROADMAP;
  
  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <div>
          <h2>Chỉnh sửa Lộ trình</h2>
          <span class="text-muted">Cập nhật nội dung lộ trình của bạn</span>
        </div>
        <div class="btn-row">
          <button class="btn btn-secondary" id="cancelEditBtn">Hủy</button>
          <button class="btn btn-primary" id="saveEditBtn">Lưu lại</button>
        </div>
      </div>
      <div class="roadmap-grid">
        ${data.map((item, i) => `
          <div class="plan-day plan-edit-day" data-index="${i}" data-day="${item.day}">
            <div class="plan-top">
              <span class="plan-num" style="display:flex; align-items:center; gap:4px">
                Ngày <input type="number" class="plan-day-input" value="${item.day}" style="width:40px; padding:2px; text-align:center; font-size:11px; font-weight:700; border:1px solid var(--line); border-radius:4px; outline:none;">
              </span>
              <button class="btn btn-sm btn-danger delete-plan-btn" title="Xóa thẻ này">Xóa</button>
            </div>
            <input type="text" class="plan-title-input" value="${escAttr(item.title)}" placeholder="Tiêu đề...">
            <textarea class="plan-tasks-input" rows="4" placeholder="Mỗi dòng 1 task...">${item.tasks.join("\n")}</textarea>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  
  document.getElementById("cancelEditBtn").onclick = () => renderRoadmap();
  
  // Xóa thẻ khỏi giao diện (chưa lưu vào storage cho đến khi nhấn Save)
  document.querySelectorAll(".delete-plan-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Bạn có chắc muốn xóa thẻ này không?")) {
        btn.closest(".plan-edit-day").remove();
      }
    };
  });

  document.getElementById("saveEditBtn").onclick = () => {
    const newRoadmap = [];
    document.querySelectorAll(".plan-edit-day").forEach(card => {
      const day = Number(card.querySelector(".plan-day-input").value) || Number(card.dataset.day);
      const title = card.querySelector(".plan-title-input").value;
      const tasks = card.querySelector(".plan-tasks-input").value.split("\n").map(s => s.trim()).filter(Boolean);
      newRoadmap.push({ day, title, tasks });
    });
    state.customRoadmap = newRoadmap;
    saveState();
    showToast("Đã lưu lộ trình mới!", "success");
    renderRoadmap();
  };
}


/* ---------- LESSON ---------- */
function renderLesson(id) {
  setActiveNav(`lesson-${id}`);
  const lesson = LESSONS.find(x => x.id === id);
  const main = document.getElementById("main");
  const grammarQuestions = (GRAMMAR_BANK[id] || []).map(([q, choices, answer, explain]) => ({ q, choices, answer, explain }));
  const kanjiQuestions = makeKanjiQuestions(lesson);
  const isDone = state.doneLessons.includes(id);

  main.innerHTML = `
    <div class="page">

      <!-- Lesson header -->
      <div class="lesson-header">
        <div class="lesson-header-left">
          <h2>${lesson.title}</h2>
          <p class="text-muted">${lesson.objective}</p>
        </div>
        <div class="lesson-header-right">
          <button class="btn ${isDone ? 'btn-done' : 'btn-primary'}" id="doneLessonBtn">
            ${isDone ? 'Đã hoàn thành' : 'Đánh dấu xong'}
          </button>
        </div>
      </div>

      <!-- 1. Vocab -->
      <section class="card" id="vocabTableSection">
        <div class="section-head">
          <h3>Từ vựng <span class="count-badge">${lesson.vocab.length}</span></h3>
          ${scoreLabel(`vocab-${id}`)}
        </div>

        <!-- Selection action bar -->
        <div class="vocab-selection-bar" id="vocabSelectionBar">
          <span class="sel-count">0 từ đã chọn</span>
          <div class="btn-row">
            <button class="btn btn-primary btn-sm" id="studySelectedBtn">Học từ đã chọn</button>
            <button class="btn btn-secondary btn-sm" id="clearSelectionBtn">Bỏ chọn</button>
          </div>
        </div>

        <div class="table-responsive">
          <table>
            <thead><tr><th>Từ</th><th>Đọc</th><th>Nghĩa</th></tr></thead>
            <tbody>
              ${lesson.vocab.map(v => `
                <tr>
                  <td class="jp"><strong>${v.jp}</strong></td>
                  <td class="jp">${v.reading || "—"}</td>
                  <td>${v.vi}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <div class="quiz-wrap" id="vocabQuizWrap"></div>
      </section>

      <!-- 2. Grammar -->
      <section class="card">
        <div class="section-head">
          <h3>Ngữ pháp <span class="count-badge">${lesson.grammar.length}</span></h3>
          ${scoreLabel(`grammar-${id}`)}
        </div>
        <div class="grammar-list">
          ${lesson.grammar.map(g => `
            <div class="grammar-card">
              <div class="grammar-pattern jp"><code>${g.pattern}</code></div>
              <div class="grammar-use">${g.use}</div>
              <div class="grammar-example jp">${g.example}</div>
            </div>
          `).join("")}
        </div>
        <div class="quiz-wrap" id="grammarQuizWrap"></div>
      </section>

      <!-- 3+4. Katakana & Passage -->
      <div class="grid-2">
        <section class="card">
          <div class="section-head"><h3>Katakana</h3></div>
          <div class="kata-grid">
            ${lesson.katakana.map(k => `
              <div class="kata-item">
                <div class="jp kata-word">${k.word}</div>
                <div class="kata-note">${k.note}</div>
              </div>
            `).join("")}
          </div>
          <div class="note" style="margin-top:12px">Đọc 3 vòng: chậm → vừa → nhanh.</div>
        </section>

        <section class="card">
          <div class="section-head"><h3>Passage</h3></div>
          <div class="reading jp">${lesson.reading}</div>
        </section>
      </div>

      <!-- 5. Kanji -->
      <section class="card">
        <div class="section-head">
          <h3>Kanji <span class="count-badge">${lesson.kanji.length}</span></h3>
          ${scoreLabel(`kanji-${id}`)}
        </div>
        <div class="k-grid">
          ${lesson.kanji.map(k => `
            <div class="kanji-item">
              <div class="kanji-word jp">${k.word}</div>
              <div class="kanji-reading jp">${k.reading}</div>
              <div class="kanji-meaning">${k.meaning}</div>
            </div>
          `).join("")}
        </div>
        <div class="quiz-wrap" id="kanjiQuizWrap"></div>
      </section>

      <!-- 6. Speaking -->
      <section class="card">
        <div class="section-head"><h3>Speaking drill</h3></div>
        <div class="speaking-list">
          ${lesson.speaking.map((s, i) => `
            <div class="speaking-item">
              <div class="speaking-label">Q${i + 1}</div>
              <div class="speaking-q jp">${s.q}</div>
              <div class="speaking-a jp">${s.a}</div>
            </div>
          `).join("")}
        </div>
        <div class="callout" style="margin-top:12px">Trả lời trong 3–6 giây. Đúng mẫu trước, thêm ý sau.</div>
      </section>

    </div>
  `;

  document.getElementById("doneLessonBtn").onclick = () => markLessonDone(id);
  buildMCQ("vocabQuizWrap", makeVocabQuestions(lesson), `vocab-${id}`);
  buildMCQ("grammarQuizWrap", grammarQuestions, `grammar-${id}`);
  buildMCQ("kanjiQuizWrap", kanjiQuestions, `kanji-${id}`);

  // Init vocab selection + study mode
  initVocabSelection(lesson);

  document.getElementById("studySelectedBtn").onclick = () => {
    openVocabStudy(getSelectedVocab());
  };

  document.getElementById("clearSelectionBtn").onclick = () => {
    document.querySelectorAll(".vocab-check").forEach(cb => cb.checked = false);
    const sa = document.getElementById("selectAllVocab");
    if (sa) { sa.checked = false; sa.indeterminate = false; }
    updateSelectionBar();
  };

  setTimeout(() => patchVocabularyTables(main), 0);
}

/* ---------- SPEAKING ---------- */
function renderSpeaking() {
  setActiveNav("speaking");
  const main = document.getElementById("main");

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h2>Speaking Hub</h2>
        <div class="speaking-checklist">
          <span class="check-item">5' đọc</span>
          <span class="check-sep">→</span>
          <span class="check-item">5' shadowing</span>
          <span class="check-sep">→</span>
          <span class="check-item">10' Q&A</span>
          <span class="check-sep">→</span>
          <span class="check-item">5' ghi âm</span>
        </div>
      </div>

      <div class="grid-2">
        ${SPEAKING_BANK.map(set => `
          <div class="card">
            <div class="section-head"><h3>${set.title}</h3></div>
            <div class="speaking-list">
              ${set.prompts.map((p, i) => `
                <div class="speaking-item">
                  <div class="speaking-label">Q${i + 1}</div>
                  <div class="speaking-q jp">${p.q}</div>
                  <div class="speaking-a jp">${p.a}</div>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <section class="card">
        <div class="section-head"><h3>Reading bank</h3></div>
        ${LESSONS.map(lesson => `
          <div class="reading-item">
            <div class="reading-label">${lesson.title}</div>
            <div class="reading jp">${lesson.reading}</div>
          </div>
        `).join("")}
      </section>

      <section class="card">
        <div class="section-head"><h3>Tips</h3></div>
        <div class="tips-list">
          <div class="tip-item">Trả lời đúng mẫu câu hỏi</div>
          <div class="tip-item">Phát âm rõ trợ từ は / が / を / に</div>
          <div class="tip-item">Thêm 1 ý nhỏ bằng そして / でも / から</div>
          <div class="tip-item">Nếu nghe chưa rõ, xin hỏi lại ngay thay vì im lâu</div>
        </div>
      </section>
    </div>
  `;
}

/* ---------- EXAM ---------- */
let currentExam = null;
let examTimer = null;
let examTimeLeft = 20 * 60;

function renderExamHome() {
  setActiveNav("exam");
  const main = document.getElementById("main");
  const lastScore = state.scores["mock-all"];

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <div>
          <h2>Mock Test</h2>
          <span class="text-muted">25 câu trộn vocab + grammar + kanji • 20 phút</span>
        </div>
        ${lastScore ? `<div class="last-score">${scoreLabel("mock-all")}</div>` : ""}
      </div>

      <section class="card">
        <div class="threshold-row">
          <div class="threshold-item">
            <span class="threshold-pct text-success">≥ 80%</span>
            <span class="threshold-desc">Đủ tốt — nhắm 8+</span>
          </div>
          <div class="threshold-sep"></div>
          <div class="threshold-item">
            <span class="threshold-pct text-warn">65–79%</span>
            <span class="threshold-desc">Còn lỗ hổng</span>
          </div>
          <div class="threshold-sep"></div>
          <div class="threshold-item">
            <span class="threshold-pct text-danger">&lt; 65%</span>
            <span class="threshold-desc">Cần quay lại bài yếu</span>
          </div>
        </div>
        <div style="margin-top:16px">
          <button class="btn btn-primary btn-lg" id="startExamBtn">Bắt đầu mock</button>
        </div>
      </section>
    </div>
  `;
  document.getElementById("startExamBtn").onclick = startExam;
}

function startExam() {
  currentExam = makeExamSet();
  examTimeLeft = 20 * 60;
  clearInterval(examTimer);

  const main = document.getElementById("main");
  main.innerHTML = `
    <div class="page">
      <div class="exam-bar">
        <span class="exam-title">Mock test — 25 câu</span>
        <div class="timer" id="examTimer">20:00</div>
      </div>

      <section class="card">
        ${currentExam.map((q, qi) => `
          <div class="q-block">
            <div class="q-text"><strong>${qi + 1}.</strong> <span class="jp">${q.q}</span></div>
            ${q.choices.map((choice, ci) => `
              <label class="choice">
                <input type="radio" name="exam-q${qi}" value="${ci}">
                <span class="jp">${choice}</span>
              </label>
            `).join("")}
          </div>
        `).join("")}
        <div class="btn-row" style="margin-top:16px">
          <button class="btn btn-primary" id="submitExamBtn">Nộp</button>
          <button class="btn btn-secondary" id="cancelExamBtn">Hủy</button>
        </div>
        <div id="examResult"></div>
      </section>
    </div>
  `;

  examTimer = setInterval(() => {
    examTimeLeft--;
    const el = document.getElementById("examTimer");
    if (el) {
      const m = String(Math.floor(examTimeLeft / 60)).padStart(2, "0");
      const s = String(examTimeLeft % 60).padStart(2, "0");
      el.textContent = `${m}:${s}`;
      if (examTimeLeft <= 60) el.classList.add("timer-urgent");
    }
    if (examTimeLeft <= 0) { clearInterval(examTimer); submitExam(); }
  }, 1000);

  document.getElementById("submitExamBtn").onclick = submitExam;
  document.getElementById("cancelExamBtn").onclick = () => { clearInterval(examTimer); renderExamHome(); };
}

function submitExam() {
  clearInterval(examTimer);
  if (!currentExam) return;
  let score = 0;
  currentExam.forEach((q, qi) => {
    const chosen = document.querySelector(`input[name="exam-q${qi}"]:checked`);
    if (chosen && Number(chosen.value) === q.answer) score++;
  });
  const pct = Math.round((score / currentExam.length) * 100);
  saveScore("mock-all", score, currentExam.length);

  const cls = pct >= 80 ? "result-good" : pct >= 65 ? "result-warn" : "result-bad";
  document.getElementById("examResult").innerHTML = `
    <div class="quiz-result ${cls}" style="margin-top:16px">
      <strong>${score}/${currentExam.length} — ${pct}%</strong>
      <div class="result-msg">
        ${pct >= 80 ? "Rất ổn. Qua Speaking hub thêm 10 phút." :
          pct >= 65 ? "Còn lỗ hổng — xem lại bài sai nhiều nhất." :
          "Cần quay lại các bài yếu rồi làm lại."}
      </div>
    </div>
    <div class="btn-row" style="margin-top:12px">
      <button class="btn btn-primary" id="retryExamBtn">Làm lại</button>
      <button class="btn btn-secondary" id="toSpeakingBtn">Speaking hub</button>
    </div>
  `;
  document.getElementById("retryExamBtn").onclick = startExam;
  document.getElementById("toSpeakingBtn").onclick = renderSpeaking;
}
