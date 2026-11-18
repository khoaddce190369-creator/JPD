/* ============================================================
   views.js — JPD123 Study Hub Ultimate Views
   - renderHome: Dashboard 3 Cột mốc thi (30/11 -> 20/12)
   - renderRoadmap: Chiến dịch 21 ngày tốc chiến 8+ & Lộ trình 30 ngày
   - renderLesson: Chi tiết bài học, Flashcard, Quiz
   - renderSpeaking: Speaking Hub 35 bài đọc, 63 câu talking, 62 bộ tranh, audio & TTS
   - renderExamHome, startExam, submitExam: Mock test FE chấm điểm & giải thích
   ============================================================ */

/* Helper: Web Speech API phát âm tiếng Nhật */
function playJapaneseSpeech(text) {
  if (!window.speechSynthesis) {
    alert("Trình duyệt của bạn không hỗ trợ tính năng Web Speech API.");
    return;
  }
  window.speechSynthesis.cancel();
  // Strip romaji / parentheses if any
  const clean = text.replace(/\([^)]*\)/g, '').replace(/（[^）]*）/g, '');
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = 'ja-JP';
  u.rate = 0.88;
  window.speechSynthesis.speak(u);
}

function markLessonDone(id) {
  toggleLessonDone(id);
  renderLesson(id);
}

/* ============================================================
   1. HOME VIEW — DASHBOARD CHIẾN DỊCH THI 8+
   ============================================================ */
function renderHome() {
  window.scrollTo({ top: 0, behavior: "instant" });
  setActiveNav("home");
  const main = document.getElementById("main");
  const lessonDone = state.doneLessons.length;
  const roadmapDone = Object.values(state.roadmapCheck).filter(Boolean).length;
  const totalUnits = (typeof LESSONS !== 'undefined' ? LESSONS.length : 7) + 21;
  const totalPercent = Math.min(100, Math.round(((lessonDone + roadmapDone) / totalUnits) * 100));
  const quizDone = Object.keys(state.scores).length;

  main.innerHTML = `
    <div class="page">

      <!-- Strategic Exam Milestones Banner -->
      <div class="milestone-container">
        <div class="milestone-card active-phase">
          <div class="milestone-date">📅 30/11/2026 — KHỞI ĐỘNG</div>
          <div class="milestone-title">Bắt đầu học JPD123 trên lớp</div>
          <div class="milestone-desc">Bắt đầu học chính thức. Quét ngay Bài 4 & 5 để đón đầu Midterm sau 10 ngày.</div>
        </div>
        <div class="milestone-card active-phase">
          <div class="milestone-date">🎯 ~09/12/2026 — MIDTERM</div>
          <div class="milestone-title">Thi Giữa Kỳ (Bài 4 & 5)</div>
          <div class="milestone-desc">Đúng 10 ngày ôn tập! Cày nát 10 đề Midterm (150 câu không lặp) nhắm 9.0+ Midterm.</div>
        </div>
        <div class="milestone-card active-phase">
          <div class="milestone-date">🏆 19–20/12/2026 — FINAL EXAM</div>
          <div class="milestone-title">Thi Cuối Kỳ (Speaking + FE)</div>
          <div class="milestone-desc">35 bài đọc + 62 bộ tranh thi nói + Mock Test FE 25 câu. Cán đích 8+ toàn môn!</div>
        </div>
      </div>

      <!-- Stats row -->
      <div class="stat-row">
        <div class="stat-card stat-blue">
          <div class="stat-number" data-target="${lessonDone}">${lessonDone}</div>
          <div class="stat-label">/ 7 bài xong</div>
        </div>
        <div class="stat-card stat-amber">
          <div class="stat-number" data-target="${roadmapDone}">${roadmapDone}</div>
          <div class="stat-label">mục tiêu xong</div>
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
      <div class="quick-actions" style="margin-bottom:24px;">
        <button class="btn btn-primary btn-lg" id="goRoadmap">🎯 Lộ trình 21 ngày thi 8+</button>
        <button class="btn btn-secondary btn-lg" id="goPractice">⚡ 10 Đề Midterm</button>
        <button class="btn btn-secondary btn-lg" id="goSpeaking">🎙️ Speaking Hub</button>
        <button class="btn btn-secondary btn-lg" id="goExam">📝 Mock Test FE</button>
      </div>

      <!-- Lessons overview list -->
      <section class="card">
        <div class="section-head">
          <h3>Nội dung 7 bài học Dekiru Nihongo</h3>
          <span class="text-muted">Trọn bộ 500 từ vựng • 96 Kanji • 53 Ngữ pháp</span>
        </div>
        <div class="lesson-overview-list">
          ${LESSONS.map(l => {
            const isDone = isLessonDone(l.id);
            return `
            <div class="lesson-overview-row ${isDone ? 'is-done' : ''}" data-id="${l.id}">
              <div class="lesson-row-left">
                <span class="lesson-badge ${isDone ? 'badge-done' : ''}">${isDone ? '✓' : l.id}</span>
                <div>
                  <div class="lesson-row-title">${l.title}</div>
                  <div class="lesson-row-desc text-muted">${l.vnTitle} • ${l.vocab ? l.vocab.length : 0} từ • ${l.kanji ? l.kanji.length : 0} kanji</div>
                </div>
              </div>
              <div class="lesson-row-right">
                <button class="btn btn-sm ${isDone ? 'btn-secondary' : 'btn-primary'} open-lesson-btn" data-id="${l.id}">
                  ${isDone ? 'Ôn lại' : 'Học ngay'}
                </button>
              </div>
            </div>`;
          }).join("")}
        </div>
      </section>

    </div>
  `;

  document.getElementById("goRoadmap").onclick = () => renderRoadmap();
  document.getElementById("goPractice").onclick = () => renderPracticeHub();
  document.getElementById("goSpeaking").onclick = () => renderSpeaking();
  document.getElementById("goExam").onclick = () => renderExamHome();

  document.querySelectorAll(".open-lesson-btn").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      renderLesson(Number(btn.dataset.id));
    };
  });
  document.querySelectorAll(".lesson-overview-row").forEach(row => {
    row.onclick = () => renderLesson(Number(row.dataset.id));
  });
}

/* ============================================================
   2. ROADMAP VIEW — CHIẾN DỊCH 21 NGÀY THI 8+ & 30 NGÀY CƠ BẢN
   ============================================================ */
let activeRoadmapMode = 'sprint'; // 'sprint' hoặc 'standard'

function renderRoadmap() {
  window.scrollTo({ top: 0, behavior: "instant" });
  setActiveNav("roadmap");
  const main = document.getElementById("main");

  const isSprint = activeRoadmapMode === 'sprint';
  const data = isSprint ? ROADMAP_SPRINT : (state.customRoadmap || ROADMAP);
  
  // Calculate done count for current mode
  let doneCount = 0;
  data.forEach(item => {
    const key = isSprint ? `sprint-${item.day}` : item.day;
    if (isSprint ? state.roadmapCheck[key] : isRoadmapDayDone(item.day)) doneCount++;
  });

  main.innerHTML = `
    <div class="page">
      <div class="page-header" style="flex-wrap:wrap; gap:12px;">
        <div>
          <h2>Lộ trình học tập</h2>
          <span class="text-muted">${doneCount}/${data.length} mục tiêu đã hoàn thành</span>
        </div>
        
        <!-- Toggle Mode Buttons -->
        <div class="btn-row">
          <button class="btn btn-sm ${isSprint ? 'btn-primary' : 'btn-secondary'}" id="toggleSprintMode">
            🎯 Chiến dịch 21 ngày thi 8+ (30/11 – 20/12)
          </button>
          <button class="btn btn-sm ${!isSprint ? 'btn-primary' : 'btn-secondary'}" id="toggleStandardMode">
            Lộ trình 30 ngày cơ bản
          </button>
        </div>
      </div>

      <!-- Roadmap Content -->
      <div class="roadmap-container">
        ${isSprint ? renderSprintRoadmapHtml(data) : renderStandardRoadmapHtml(data)}
      </div>
    </div>
  `;

  document.getElementById("toggleSprintMode").onclick = () => {
    activeRoadmapMode = 'sprint';
    renderRoadmap();
  };
  document.getElementById("toggleStandardMode").onclick = () => {
    activeRoadmapMode = 'standard';
    renderRoadmap();
  };

  // Bind toggle day checkmarks
  document.querySelectorAll(".toggle-sprint-day").forEach(btn => {
    btn.onclick = () => {
      const day = Number(btn.dataset.day);
      const key = `sprint-${day}`;
      state.roadmapCheck[key] = !state.roadmapCheck[key];
      saveState();
      renderRoadmap();
    };
  });

  document.querySelectorAll(".toggle-standard-day").forEach(btn => {
    btn.onclick = () => {
      const day = Number(btn.dataset.day);
      toggleRoadmapDay(day);
      renderRoadmap();
    };
  });
}

function renderSprintRoadmapHtml(data) {
  let html = '';
  let currentPhase = '';

  data.forEach(item => {
    if (item.phase !== currentPhase) {
      currentPhase = item.phase;
      html += `
        <div class="roadmap-phase-header">
          <span class="roadmap-phase-title">${currentPhase}</span>
          <span class="roadmap-phase-badge">${item.phase.includes('Midterm') ? 'Trọng tâm 1' : item.phase.includes('Final') ? 'Về đích' : 'Tăng tốc'}</span>
        </div>
      `;
    }

    const key = `sprint-${item.day}`;
    const isDone = !!state.roadmapCheck[key];
    html += `
      <div class="plan-day ${isDone ? 'plan-done' : ''}" style="margin-bottom:12px;">
        <div class="plan-top">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="plan-num" style="background:#0284c7; color:#fff; padding:2px 8px; border-radius:4px; font-size:12px;">${item.date}</span>
            <strong style="font-size:14px; color:#0f172a;">${item.title}</strong>
          </div>
          <button class="status-toggle-btn ${isDone ? 'status-done' : 'status-undone'} toggle-sprint-day" data-day="${item.day}" title="Bấm để đổi trạng thái">
            ${isDone ? '✓ Đã xong' : '○ Chưa xong'}
          </button>
        </div>
        <ul class="plan-tasks" style="margin-top:8px;">
          ${item.tasks.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  });

  return html;
}

function renderStandardRoadmapHtml(data) {
  return `
    <div class="roadmap-grid">
      ${data.map(item => {
        const isDone = isRoadmapDayDone(item.day);
        return `
        <div class="plan-day ${isDone ? 'plan-done' : ''}">
          <div class="plan-top">
            <span class="plan-num">Ngày ${item.day}</span>
            <button class="status-toggle-btn ${isDone ? 'status-done' : 'status-undone'} toggle-standard-day" data-day="${item.day}" title="Bấm để đổi trạng thái">
              ${isDone ? '✓ Hoàn thành' : '○ Chưa xong'}
            </button>
          </div>
          <div class="plan-title">${item.title}</div>
          <ul class="plan-tasks">
            ${item.tasks.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>`;
      }).join("")}
    </div>
  `;
}

function renderRoadmapEdit() {
  renderRoadmap();
}


function renderLesson(id) {
  window.scrollTo({ top: 0, behavior: "instant" });
  setActiveNav(`lesson-${id}`);
  const lesson = LESSONS.find(x => x.id === id);
  const main = document.getElementById("main");
  const isDone = isLessonDone(id);

  // Bank counts for labels
  const gBank = (typeof GRAMMAR_EXTENDED_BANK !== "undefined" && GRAMMAR_EXTENDED_BANK[id])
    ? GRAMMAR_EXTENDED_BANK[id]
    : ((typeof GRAMMAR_BANK !== "undefined" && GRAMMAR_BANK[id]) ? GRAMMAR_BANK[id] : []);
  const gTotal = gBank.length;

  const kBank = (typeof KANJI_EXAM_BANK !== "undefined" && KANJI_EXAM_BANK[id])
    ? KANJI_EXAM_BANK[id]
    : (lesson.kanji || []);
  const kTotal = kBank.length;

  main.innerHTML = `
    <div class="page">

      <!-- Lesson header -->
      <div class="lesson-header">
        <div class="lesson-header-left">
          <h2>${lesson.title}</h2>
          <p class="text-muted">${lesson.objective}</p>
        </div>
        <div class="lesson-header-right">
          <button class="btn ${isDone ? 'btn-done' : 'btn-secondary'} btn-toggle-lesson" id="doneLessonBtn" title="${isDone ? 'Bấm để chuyển về Chưa hoàn thành' : 'Bấm để đánh dấu Hoàn thành'}">
            ${isDone ? '✓ Đã hoàn thành (Bấm để hủy)' : '○ Đánh dấu hoàn thành'}
          </button>
        </div>
      </div>

      <!-- 1. Vocab -->
      <section class="card" id="vocabTableSection">
        <div class="section-head">
          <h3>1. Từ vựng <span class="count-badge">${lesson.vocab.length}</span></h3>
          <div class="section-actions">
            ${scoreLabel(`vocab-${id}`)}
            <button class="status-toggle-btn ${isSectionDone(`l${id}-vocab`) ? 'status-done' : 'status-undone'} toggle-section-btn" data-key="l${id}-vocab" title="Đánh dấu đã học xong từ vựng">
              ${isSectionDone(`l${id}-vocab`) ? '✓ Đã xong' : '○ Chưa xong'}
            </button>
          </div>
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

        <!-- Vocab Practice Toolbar -->
        <div class="quiz-control-bar" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:20px; margin-bottom:10px; padding:10px 14px; background:rgba(56,189,248,0.05); border:1px solid rgba(56,189,248,0.2); border-radius:10px;">
          <div style="font-weight:600; font-size:0.92rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
            <span>📝 Luyện tập Từ vựng</span>
            <span class="badge badge-info" style="font-size:0.75rem;">Đa dạng câu hỏi</span>
          </div>
          <div class="btn-row" style="gap:6px;">
            <button class="btn btn-xs btn-primary quiz-vmode-btn" data-mode="all">Toàn diện (20 câu)</button>
            <button class="btn btn-xs btn-secondary quiz-vmode-btn" data-mode="context">Điền câu ngữ cảnh (20 câu)</button>
            <button class="btn btn-xs btn-secondary quiz-vmode-btn" data-mode="meaning">Tra nghĩa & Đọc</button>
          </div>
        </div>
        <div class="quiz-wrap" id="vocabQuizWrap"></div>
      </section>

      <!-- 2. Grammar -->
      <section class="card">
        <div class="section-head">
          <h3>2. Ngữ pháp <span class="count-badge">${lesson.grammar.length}</span></h3>
          <div class="section-actions">
            ${scoreLabel(`grammar-${id}`)}
            <button class="status-toggle-btn ${isSectionDone(`l${id}-grammar`) ? 'status-done' : 'status-undone'} toggle-section-btn" data-key="l${id}-grammar" title="Đánh dấu đã học xong ngữ pháp">
              ${isSectionDone(`l${id}-grammar`) ? '✓ Đã xong' : '○ Chưa xong'}
            </button>
          </div>
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

        <!-- Grammar Practice Toolbar -->
        <div class="quiz-control-bar" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:20px; margin-bottom:10px; padding:10px 14px; background:rgba(168,85,247,0.05); border:1px solid rgba(168,85,247,0.2); border-radius:10px;">
          <div style="font-weight:600; font-size:0.92rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
            <span>📝 Luyện tập Ngữ pháp</span>
            <span class="badge badge-info" style="font-size:0.75rem;">${gTotal} câu ngân hàng</span>
          </div>
          <div class="btn-row" style="gap:6px;">
            <button class="btn btn-xs btn-primary quiz-gmode-btn" data-limit="all">Toàn bộ (${gTotal} câu)</button>
            <button class="btn btn-xs btn-secondary quiz-gmode-btn" data-limit="10">Rút gọn 10 câu</button>
          </div>
        </div>
        <div class="quiz-wrap" id="grammarQuizWrap"></div>
      </section>

      <!-- 3+4. Katakana & Passage -->
      <div class="grid-2">
        <section class="card">
          <div class="section-head">
            <h3>3. Katakana</h3>
            <button class="status-toggle-btn ${isSectionDone(`l${id}-kata`) ? 'status-done' : 'status-undone'} toggle-section-btn" data-key="l${id}-kata">
              ${isSectionDone(`l${id}-kata`) ? '✓ Đã xong' : '○ Chưa xong'}
            </button>
          </div>
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
          <div class="section-head">
            <h3>4. Passage</h3>
            <button class="status-toggle-btn ${isSectionDone(`l${id}-reading`) ? 'status-done' : 'status-undone'} toggle-section-btn" data-key="l${id}-reading">
              ${isSectionDone(`l${id}-reading`) ? '✓ Đã xong' : '○ Chưa xong'}
            </button>
          </div>
          <div class="reading jp">${lesson.reading}</div>
        </section>
      </div>

      <!-- 5. Kanji -->
      <section class="card">
        <div class="section-head">
          <h3>5. Kanji <span class="count-badge">${lesson.kanji.length}</span></h3>
          <div class="section-actions">
            ${scoreLabel(`kanji-${id}`)}
            <button class="status-toggle-btn ${isSectionDone(`l${id}-kanji`) ? 'status-done' : 'status-undone'} toggle-section-btn" data-key="l${id}-kanji" title="Đánh dấu đã học xong Kanji">
              ${isSectionDone(`l${id}-kanji`) ? '✓ Đã xong' : '○ Chưa xong'}
            </button>
          </div>
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

        <!-- Kanji Practice Toolbar -->
        <div class="quiz-control-bar" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:20px; margin-bottom:10px; padding:10px 14px; background:rgba(34,197,94,0.05); border:1px solid rgba(34,197,94,0.2); border-radius:10px;">
          <div style="font-weight:600; font-size:0.92rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
            <span>📝 Luyện tập Hán tự Kanji</span>
            <span class="badge badge-info" style="font-size:0.75rem;">${kTotal} câu dạng đề thi</span>
          </div>
          <div class="btn-row" style="gap:6px;">
            <button class="btn btn-xs btn-primary quiz-kmode-btn" data-limit="all">Đề thi đầy đủ (${kTotal} câu)</button>
            <button class="btn btn-xs btn-secondary quiz-kmode-btn" data-limit="8">Rút gọn 8 câu</button>
          </div>
        </div>
        <div class="quiz-wrap" id="kanjiQuizWrap"></div>
      </section>

      <!-- 6. Speaking -->
      <section class="card">
        <div class="section-head">
          <h3>6. Speaking drill</h3>
          <button class="status-toggle-btn ${isSectionDone(`l${id}-speaking`) ? 'status-done' : 'status-undone'} toggle-section-btn" data-key="l${id}-speaking">
            ${isSectionDone(`l${id}-speaking`) ? '✓ Đã xong' : '○ Chưa xong'}
          </button>
        </div>
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

      <!-- 7. Small Test Tổng Hợp Chuẩn FPT -->
      <section class="card" id="smallTestSection" style="border: 1px solid rgba(245,158,11,0.3); background: rgba(245,158,11,0.02);">
        <div class="section-head" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div>
            <h3 style="color:#fbbf24;">7. Bài kiểm tra Small Test tổng hợp Bài ${id}</h3>
            <span class="text-muted">15 câu • 5 Từ vựng ngữ cảnh + 4 Kanji đề thi + 6 Ngữ pháp • Đạt 8+ trước khi qua bài mới</span>
          </div>
          <div class="section-actions">
            ${scoreLabel(`smalltest-${id}`)}
            <button class="status-toggle-btn ${isSectionDone(`l${id}-smalltest`) ? 'status-done' : 'status-undone'} toggle-section-btn" data-key="l${id}-smalltest" title="Đánh dấu đã hoàn thành Small Test">
              ${isSectionDone(`l${id}-smalltest`) ? '✓ Đã xong' : '○ Chưa xong'}
            </button>
          </div>
        </div>
        <div class="quiz-wrap" id="smallTestQuizWrap"></div>
      </section>

    </div>
  `;

  document.getElementById("doneLessonBtn").onclick = () => {
    toggleLessonDone(id);
    renderLesson(id);
  };
  document.querySelectorAll(".toggle-section-btn").forEach(btn => {
    btn.onclick = () => {
      toggleSectionDone(btn.dataset.key);
      renderLesson(id);
    };
  });

  // 1. Vocab Quiz Init
  let currentVocabMode = "all";
  function loadVocabQuiz() {
    buildMCQ("vocabQuizWrap", makeVocabQuestions(lesson, currentVocabMode), `vocab-${id}`, loadVocabQuiz);
  }
  loadVocabQuiz();
  document.querySelectorAll(".quiz-vmode-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".quiz-vmode-btn").forEach(b => {
        b.classList.remove("btn-primary");
        b.classList.add("btn-secondary");
      });
      btn.classList.remove("btn-secondary");
      btn.classList.add("btn-primary");
      currentVocabMode = btn.dataset.mode;
      loadVocabQuiz();
    };
  });

  // 2. Grammar Quiz Init
  let currentGrammarLimit = null;
  function loadGrammarQuiz() {
    buildMCQ("grammarQuizWrap", makeGrammarQuestions(id, currentGrammarLimit), `grammar-${id}`, loadGrammarQuiz);
  }
  loadGrammarQuiz();
  document.querySelectorAll(".quiz-gmode-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".quiz-gmode-btn").forEach(b => {
        b.classList.remove("btn-primary");
        b.classList.add("btn-secondary");
      });
      btn.classList.remove("btn-secondary");
      btn.classList.add("btn-primary");
      currentGrammarLimit = btn.dataset.limit === "all" ? null : Number(btn.dataset.limit);
      loadGrammarQuiz();
    };
  });

  // 5. Kanji Quiz Init
  let currentKanjiLimit = null;
  function loadKanjiQuiz() {
    buildMCQ("kanjiQuizWrap", makeKanjiQuestions(lesson, currentKanjiLimit), `kanji-${id}`, loadKanjiQuiz);
  }
  loadKanjiQuiz();
  document.querySelectorAll(".quiz-kmode-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".quiz-kmode-btn").forEach(b => {
        b.classList.remove("btn-primary");
        b.classList.add("btn-secondary");
      });
      btn.classList.remove("btn-secondary");
      btn.classList.add("btn-primary");
      currentKanjiLimit = btn.dataset.limit === "all" ? null : Number(btn.dataset.limit);
      loadKanjiQuiz();
    };
  });

  // 7. Small Test Init
  function loadSmallTest() {
    buildMCQ("smallTestQuizWrap", makeSmallTest(id), `smalltest-${id}`, loadSmallTest);
  }
  loadSmallTest();

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


/* ============================================================
   4. SPEAKING HUB VIEW — NÂNG CẤP TOÀN DIỆN CHUẨN MIN THEP
   ============================================================ */
let activeSpeakingTab = 'reading'; // 'reading', 'talking', 'pictures', 'tips'
let speakingLessonFilter = 'all';

function renderSpeaking() {
  window.scrollTo({ top: 0, behavior: "instant" });
  setActiveNav("speaking");
  const main = document.getElementById("main");

  const spk = typeof SPEAKING_DATA !== 'undefined' ? SPEAKING_DATA : null;
  const readings = spk ? spk.reading : [];
  const talkings = spk ? spk.talking_without_pictures : [];
  const pictures = spk ? spk.talking_with_pictures : [];
  const tips = spk ? spk.tips : [];

  main.innerHTML = `
    <div class="page">
      <div class="page-header" style="flex-wrap:wrap; gap:12px;">
        <div>
          <h2>Speaking Hub — Luyện thi Nói JPD123</h2>
          <span class="text-muted">35 bài đọc • 63 câu talking • 62 bộ tranh • Bí kíp 8.5+</span>
        </div>
      </div>

      <!-- Speaking Tabs -->
      <div class="spk-tabs">
        <button class="spk-tab-btn ${activeSpeakingTab === 'reading' ? 'active' : ''}" data-tab="reading">
          📖 35 Bài đọc (Reading)
        </button>
        <button class="spk-tab-btn ${activeSpeakingTab === 'talking' ? 'active' : ''}" data-tab="talking">
          💬 63 Câu hỏi phản xạ (Talking)
        </button>
        <button class="spk-tab-btn ${activeSpeakingTab === 'pictures' ? 'active' : ''}" data-tab="pictures">
          🖼️ 62 Bộ tranh thi nói (Pictures)
        </button>
        <button class="spk-tab-btn ${activeSpeakingTab === 'tips' ? 'active' : ''}" data-tab="tips">
          💡 Bí kíp Speaking 8.5+ & Thang điểm
        </button>
      </div>

      <!-- Tab Content Area -->
      <div id="spkTabContent">
        ${renderSpeakingTabContent(activeSpeakingTab, readings, talkings, pictures, tips)}
      </div>
    </div>
  `;

  // Tab switcher
  document.querySelectorAll(".spk-tab-btn").forEach(btn => {
    btn.onclick = () => {
      activeSpeakingTab = btn.dataset.tab;
      renderSpeaking();
    };
  });

  // Event delegation for speech buttons
  main.addEventListener("click", (e) => {
    const ttsBtn = e.target.closest(".play-tts-btn");
    if (ttsBtn) {
      const text = ttsBtn.dataset.text;
      if (text) playJapaneseSpeech(text);
      return;
    }

    const toggleExtra = e.target.closest(".toggle-extra-btn");
    if (toggleExtra) {
      const targetId = toggleExtra.dataset.target;
      const el = document.getElementById(targetId);
      if (el) {
        const isHidden = el.style.display === "none";
        el.style.display = isHidden ? "block" : "none";
        toggleExtra.textContent = isHidden ? "Ẩn Romaji & Dịch" : "Hiện Romaji & Dịch";
      }
      return;
    }
  });
}

function renderSpeakingTabContent(tab, readings, talkings, pictures, tips) {
  if (tab === 'reading') {
    return `
      <div>
        <div style="margin-bottom:16px; padding:12px; background:rgba(56,189,248,0.06); border-radius:8px; border:1px solid rgba(56,189,248,0.2); font-size:13.5px; color:#334155;">
          <strong>🎯 Mục tiêu phần Reading (4 điểm thi FE):</strong> Đọc to, phát âm tròn vành rõ chữ, ngắt nghỉ đúng dấu phẩy (、) và dấu chấm (。). Bấm nút <strong>🔊 Đọc giọng máy (TTS)</strong> hoặc bật <strong>Audio người thật</strong> để luyện shadowing.
        </div>
        ${readings.map(r => `
          <div class="spk-reading-card">
            <div class="spk-card-head">
              <span class="spk-badge">Bài đọc ${r.no} • ${r.hint || 'JPD123'}</span>
              <div class="btn-row">
                <button class="btn btn-sm btn-primary play-tts-btn" data-text="${r.text.replace(/"/g, '&quot;')}">
                  🔊 Đọc giọng máy (TTS)
                </button>
                <button class="btn btn-sm btn-secondary toggle-extra-btn" data-target="reading-extra-${r.no}">
                  Hiện Romaji & Dịch
                </button>
              </div>
            </div>

            <div class="spk-japanese-text jp">${r.text}</div>

            ${r.audio ? `
              <div class="spk-audio-row">
                <span style="font-size:12.5px; font-weight:600; color:#0369a1;">🎧 Bản thu âm giọng thật:</span>
                <audio controls preload="none" src="${r.audio}" style="height:32px; max-width:280px;"></audio>
              </div>
            ` : ''}

            <div class="spk-extra-box" id="reading-extra-${r.no}" style="display:none;">
              <div style="font-weight:600; color:#0369a1; margin-bottom:4px;">Phiên âm Romaji:</div>
              <div style="color:#475569; margin-bottom:10px; font-size:13px; font-style:italic;">${r.romaji || ''}</div>
              <div style="font-weight:600; color:#0369a1; margin-bottom:4px;">Bản dịch tiếng Việt:</div>
              <div style="color:#334155;">${r.translation || ''}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (tab === 'talking') {
    return `
      <div>
        <div style="margin-bottom:16px; padding:12px; background:rgba(16,185,129,0.06); border-radius:8px; border:1px solid rgba(16,185,129,0.2); font-size:13.5px; color:#334155;">
          <strong>🎯 Mục tiêu phần Talking (6 điểm thi FE):</strong> Tự nhìn câu hỏi tiếng Nhật, trả lời to thành tiếng trước khi bấm xem câu trả lời mẫu. Hãy luôn nói tối thiểu 2 câu (kèm 1 câu giải thích lý do) để đạt 8.5+.
        </div>
        ${talkings.map(t => `
          <div class="spk-qa-box">
            <div class="spk-qa-q">
              <span class="spk-badge" style="background:#e2e8f0; color:#334155;">#${t.no}</span>
              <span class="jp">${t.question}</span>
              <button class="btn btn-sm btn-secondary play-tts-btn" style="padding:2px 8px; font-size:11px; margin-left:auto;" data-text="${t.question.replace(/"/g, '&quot;')}">
                🔊 Nghe câu hỏi
              </button>
            </div>
            <div class="spk-qa-hint">Ý nghĩa: ${t.hint}</div>

            <details class="spk-details">
              <summary>💡 Bấm xem câu trả lời mẫu 8.5+</summary>
              <div class="spk-details-content">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                  <strong class="jp" style="font-size:15px; color:#15803d;">${t.example}</strong>
                  <button class="btn btn-sm btn-secondary play-tts-btn" style="padding:2px 8px; font-size:11px;" data-text="${t.example.replace(/"/g, '&quot;')}">
                    🔊 Nghe câu trả lời
                  </button>
                </div>
                ${t.romaji ? `
                  <div style="font-size:12px; color:#64748b; font-style:italic;">
                    Q: ${t.romaji.question || ''}<br>A: ${t.romaji.example || ''}
                  </div>
                ` : ''}
              </div>
            </details>
          </div>
        `).join("")}
      </div>
    `;
  } else if (tab === 'pictures') {
    return `
      <div>
        <div style="margin-bottom:16px; padding:12px; background:rgba(99,102,241,0.06); border-radius:8px; border:1px solid rgba(99,102,241,0.2); font-size:13.5px; color:#334155;">
          <strong>🎯 Phần thi nói theo tranh:</strong> Giám khảo sẽ chỉ vào tranh và hỏi bạn câu hỏi liên quan. Hãy quan sát tranh và luyện trả lời trôi chảy.
        </div>
        ${pictures.map(p => `
          <div class="spk-qa-box" style="margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="spk-badge" style="background:#ede9fe; color:#6366f1;">Bộ tranh #${p.no}</span>
            </div>

            ${p.image && p.image.src ? `
              <div style="text-align:center; margin-bottom:12px;">
                <img src="${p.image.src}" alt="${p.image.alt || 'Tranh thi nói JPD123'}" class="spk-pic-img" style="max-height:260px; object-fit:contain;">
              </div>
            ` : ''}

            <div style="display:flex; flex-direction:column; gap:10px;">
              ${(p.questions || []).map((q, qi) => `
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                    <strong class="jp" style="font-size:15px; color:#0f172a;">Q${qi + 1}: ${q.question}</strong>
                    <button class="btn btn-sm btn-secondary play-tts-btn" style="padding:2px 8px; font-size:11px;" data-text="${q.question.replace(/"/g, '&quot;')}">
                      🔊 Nghe
                    </button>
                  </div>
                  <div style="font-size:12.5px; color:#64748b; margin-bottom:8px;">${q.hint || ''}</div>
                  <div style="background:#f0fdf4; border-left:3px solid #16a34a; padding:6px 10px; border-radius:0 6px 6px 0;">
                    <div style="font-size:14px; font-weight:600; color:#15803d;" class="jp">Đáp án: ${q.example || ''}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (tab === 'tips') {
    return `
      <div>
        <div class="card" style="margin-bottom:16px;">
          <div class="section-head">
            <h3>Cấu trúc bài thi Speaking FE (Tổng 10 điểm)</h3>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px; font-size:13.5px; line-height:1.6;">
            <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:14px;">
              <strong style="color:#15803d; font-size:15px;">Phần 1: Reading (4.0 điểm)</strong>
              <ul style="margin:8px 0 0 18px; color:#14532d;">
                <li>Chuẩn bị: 2–3 phút đọc nhẩm bài đọc.</li>
                <li>Thi: Đọc to bài đọc trong 1–1.5 phút.</li>
                <li>Tiêu chí: Phát âm chính xác âm ngắt (っ), trường âm (ー), ngắt nghỉ đúng chỗ.</li>
              </ul>
            </div>
            <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:14px;">
              <strong style="color:#1d4ed8; font-size:15px;">Phần 2: Talking (6.0 điểm)</strong>
              <ul style="margin:8px 0 0 18px; color:#1e40af;">
                <li>Giám khảo hỏi 2–3 câu hỏi tự do hoặc hỏi theo tranh.</li>
                <li>Tiêu chí: Phản xạ nhanh, đúng ngữ pháp, không ngập ngừng quá 5 giây.</li>
                <li>Điểm cộng 8.5+: Biết mở rộng thêm 1 câu giải thích lý do bằng ～ですから.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="section-head">
            <h3>6 Bí kíp lấy điểm 8.5+ Speaking từ Min Thep</h3>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px; font-size:13.5px; line-height:1.6;">
            <div style="padding:12px; background:#f8fafc; border-left:4px solid #0284c7; border-radius:0 8px 8px 0;">
              <strong>1. Vào phòng thi tự tin:</strong> Chào to rõ ràng khi mở cửa: <em>失礼します (Shitsurei shimasu)</em> và <em>よろしくお願いします (Yoroshiku onegaishimasu)</em>.
            </div>
            <div style="padding:12px; background:#f8fafc; border-left:4px solid #0284c7; border-radius:0 8px 8px 0;">
              <strong>2. Đọc bài đọc không cần quá nhanh:</strong> Đọc với tốc độ vừa phải, nhấn rõ trợ từ は (đọc là wa), を (o), へ (e).
            </div>
            <div style="padding:12px; background:#f8fafc; border-left:4px solid #0284c7; border-radius:0 8px 8px 0;">
              <strong>3. Công thức trả lời câu hỏi 8.5+:</strong> Câu trả lời = [Câu trả lời chính] + [Liên từ nối] + [Câu bổ trợ].<br>
              <em>Ví dụ:</em> Q: あなたの町はどんなところですか。<br>
              A: わたしの町はにぎやかです。<strong>そして</strong>、きれいな川もあります。(Thêm từ nối そして để lấy trọn điểm ngữ pháp).
            </div>
            <div style="padding:12px; background:#f8fafc; border-left:4px solid #0284c7; border-radius:0 8px 8px 0;">
              <strong>4. Nếu nghe không rõ:</strong> Đừng im lặng! Hãy bình tĩnh nói ngay: <em>すみません、もう一度お願いします (Xin lỗi, xin thầy/cô nhắc lại một lần nữa ạ)</em>. Giám khảo không hề trừ điểm khi bạn xin nhắc lại lịch sự.
            </div>
            <div style="padding:12px; background:#f8fafc; border-left:4px solid #0284c7; border-radius:0 8px 8px 0;">
              <strong>5. Luyện tập Shadowing mỗi ngày 10 phút:</strong> Bật audio người thật trong tab Reading và nhại lại đúng ngữ điệu.
            </div>
            <div style="padding:12px; background:#f8fafc; border-left:4px solid #0284c7; border-radius:0 8px 8px 0;">
              <strong>6. Luôn mỉm cười và nói lời cảm ơn khi kết thúc:</strong> <em>どうもありがとうございました (Doumo arigatou gozaimashita)</em>.
            </div>
          </div>
        </div>
      </div>
    `;
  }
  return '';
}

/* ============================================================
   5. EXAM VIEW — MOCK TEST FINAL EXAM CHẤM ĐIỂM & GIẢI THÍCH
   ============================================================ */
let currentExam = null;
let examTimer = null;
let examTimeLeft = 20 * 60;

function renderExamHome() {
  window.scrollTo({ top: 0, behavior: "instant" });
  setActiveNav("exam");
  const main = document.getElementById("main");
  const lastScore = state.scores["mock-all"];

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <div>
          <h2>Mock Test Final Exam</h2>
          <span class="text-muted">25 câu trộn vocab + grammar + kanji 7 bài • 20 phút</span>
        </div>
        ${lastScore ? `<div class="last-score">${scoreLabel("mock-all")}</div>` : ""}
      </div>

      <section class="card">
        <div class="threshold-row">
          <div class="threshold-item">
            <span class="threshold-pct text-success">≥ 80% (20/25)</span>
            <span class="threshold-desc">Mục tiêu 8+ đạt chuẩn!</span>
          </div>
          <div class="threshold-sep"></div>
          <div class="threshold-item">
            <span class="threshold-pct text-warn">65–79%</span>
            <span class="threshold-desc">Còn lỗ hổng kiến thức</span>
          </div>
          <div class="threshold-sep"></div>
          <div class="threshold-item">
            <span class="threshold-pct text-danger">&lt; 65%</span>
            <span class="threshold-desc">Cần quay lại bài yếu</span>
          </div>
        </div>
        <div style="margin-top:20px; text-align:center;">
          <button class="btn btn-primary btn-lg" id="startExamBtn" style="padding:14px 32px; font-size:16px;">
            Bắt đầu thi thử Mock Test FE
          </button>
        </div>
      </section>
    </div>
  `;
  document.getElementById("startExamBtn").onclick = startExam;
}

function startExam() {
  window.scrollTo({ top: 0, behavior: "instant" });
  currentExam = makeExamSet();
  examTimeLeft = 20 * 60;
  clearInterval(examTimer);

  const main = document.getElementById("main");
  main.innerHTML = `
    <div class="page">
      <div class="exam-bar">
        <span class="exam-title">Mock Test Final Exam — 25 câu</span>
        <div class="timer" id="examTimer">20:00</div>
      </div>

      <section class="card">
        ${currentExam.map((q, qi) => `
          <div class="q-block" id="exam-qblock-${qi}">
            <div class="q-text"><strong>${qi + 1}.</strong> <span class="jp">${q.q}</span></div>
            ${q.choices.map((choice, ci) => `
              <label class="choice" id="choice-lbl-${qi}-${ci}">
                <input type="radio" name="exam-q${qi}" value="${ci}">
                <span class="jp">${choice}</span>
              </label>
            `).join("")}
            <div id="exam-explain-${qi}" class="exam-review-explain" style="display:none;"></div>
          </div>
        `).join("")}
        <div class="btn-row" style="margin-top:20px" id="examActionRow">
          <button class="btn btn-primary btn-lg" id="submitExamBtn">Nộp bài</button>
          <button class="btn btn-secondary btn-lg" id="cancelExamBtn">Hủy</button>
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
    const qBlock = document.getElementById(`exam-qblock-${qi}`);
    const explainBox = document.getElementById(`exam-explain-${qi}`);
    const isCorrect = chosen && Number(chosen.value) === q.answer;

    if (isCorrect) {
      score++;
      if (qBlock) qBlock.classList.add("q-correct");
    } else {
      if (qBlock) qBlock.classList.add("q-incorrect");
    }

    // Highlight right answer and show explanation
    const correctLbl = document.getElementById(`choice-lbl-${qi}-${q.answer}`);
    if (correctLbl) correctLbl.style.fontWeight = "bold";

    if (explainBox) {
      explainBox.style.display = "block";
      explainBox.innerHTML = `
        <strong>${isCorrect ? '✓ Đúng!' : '✗ Sai!'}</strong> Đáp án đúng là: <strong>${q.choices[q.answer]}</strong>.
        ${q.explain ? `<div>💡 <em>${q.explain}</em></div>` : ''}
      `;
    }
  });

  const pct = Math.round((score / currentExam.length) * 100);
  saveScore("mock-all", score, currentExam.length);

  const cls = pct >= 80 ? "result-good" : pct >= 65 ? "result-warn" : "result-bad";
  document.getElementById("examResult").innerHTML = `
    <div class="quiz-result ${cls}" style="margin-top:20px; padding:18px;">
      <strong style="font-size:22px;">Điểm số: ${score}/${currentExam.length} — ${pct}%</strong>
      <div class="result-msg" style="margin-top:6px; font-size:14px;">
        ${pct >= 80 ? "🎉 Rất xuất sắc! Kiến thức của bạn đã sẵn sàng cho mục tiêu 8+ JPD123." :
          pct >= 65 ? "⚠️ Khá tốt nhưng còn một số câu sai. Hãy cuộn lên xem kỹ phần giải thích chi tiết." :
          "❌ Cần rà soát lại các bài yếu rồi thử lại nhé!"}
      </div>
    </div>
    <div class="btn-row" style="margin-top:16px">
      <button class="btn btn-primary" id="retryExamBtn">Làm lại đề khác</button>
      <button class="btn btn-secondary" id="toSpeakingBtn">Qua Speaking Hub luyện nói</button>
    </div>
  `;
  document.getElementById("retryExamBtn").onclick = startExam;
  document.getElementById("toSpeakingBtn").onclick = renderSpeaking;
  
  // Hide submit button to avoid double submit
  const actionRow = document.getElementById("examActionRow");
  if (actionRow) actionRow.style.display = "none";
}
