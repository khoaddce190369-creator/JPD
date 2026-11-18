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
              <div class="score-row"><span>Từ vựng & Điền câu</span>${scoreLabel(`practice-vocab-${l.id}`)}</div>
              <div class="score-row"><span>Ngữ pháp thực chiến</span>${scoreLabel(`practice-grammar-${l.id}`)}</div>
              <div class="score-row"><span>Hán tự đề thi</span>${scoreLabel(`practice-kanji-${l.id}`)}</div>
              <div class="score-row"><span>Small Test tổng hợp</span>${scoreLabel(`practice-core-${l.id}`)}</div>
            </div>
            <button class="btn btn-primary btn-block open-practice-lesson" data-id="${l.id}">Luyện tập</button>
          </div>`;
        }).join("")}
      </div>

      <!-- Midterm -->
      <section class="card">
        <div class="section-head" style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <h3>Midterm — 10 đề (Chuẩn Bài 4–5)</h3>
            <span class="text-muted">15 câu/đề • 4 vocab + 4 kanji + 7 grammar • 150 câu không trùng lặp</span>
          </div>
          <button class="btn btn-secondary btn-sm" id="toggleMidtermGuideBtn" type="button">
            📖 Cẩm nang ôn thi Bài 4–5
          </button>
        </div>

        <!-- Collapsible Midterm Guide Box -->
        <div id="midtermGuideBox" style="display:none; margin:16px 0; padding:18px; background:rgba(56,189,248,0.06); border:1px solid rgba(56,189,248,0.25); border-radius:12px; font-size:0.9rem; line-height:1.65;">
          <div style="font-weight:700; color:#38bdf8; font-size:1.05rem; margin-bottom:8px;">🎯 Trọng tâm ôn thi Midterm JPD123 (Bài 4 & 5 Dekiru Nihongo)</div>
          
          <div style="margin-bottom:12px;">
            <strong style="color:#f8fafc;">1. Từ vựng cốt lõi:</strong>
            <ul style="margin:4px 0 0 20px; color:#cbd5e1;">
              <li><strong>Bài 4:</strong> Phương hướng (北, 南, 東, 西, 真ん中), Phương tiện (車, 新幹線, 電車, 飛行機, 駅, 歩いて), Tính từ (新しい, 古い, 大きい, 小さい, 高い, 低い, きれい, 静か, にぎやか, 有名), Thời tiết & Món ăn (雨, 雪, 暖かい, 涼しい, 暑い, 寒い, 甘い, 辛い, 苦い, すっぱい).</li>
              <li><strong>Bài 5:</strong> Thời gian (今日, 明日, あさって, 昨日, おととい, 先週, 週末, 今朝, 先月, 去年), Nơi chốn & Hoạt động (家, 部屋, デパート, 美術館, ゲーム, 会います, 作ります, 買い物/食事/洗濯/掃除をします, 一人で, それから).</li>
            </ul>
          </div>

          <div style="margin-bottom:12px;">
            <strong style="color:#f8fafc;">2. 21 chữ Hán tự (Kanji):</strong>
            <ul style="margin:4px 0 0 20px; color:#cbd5e1;">
              <li><strong>Bài 4 (9 chữ):</strong> 東 (東京), 京 (東京), 名 (名前), 前 (名前・午前・前日), 国 (外国・くに), 男 (男の人・男女), 女 (女の人・男女), 区 (~区), 市 (~市).</li>
              <li><strong>Bài 5 (12 chữ):</strong> 先 (先生・先月・先週), 週 (先週・一週間・毎週), 毎 (毎日・毎週・毎月・毎年), 午 (午前・午後), 後 (午後・前後), 見 (見学・見ます), 食 (食事・食べ物), 飲 (飲食・飲み物・飲み水), 買 (買い物・買います), 物 (食べ物・飲み物・買い物・人物・見物), 行 (行きます), 休 (休日・休みの日・休みます).</li>
            </ul>
          </div>

          <div>
            <strong style="color:#f8fafc;">3. 19 Mẫu ngữ pháp trọng điểm:</strong>
            <ul style="margin:4px 0 0 20px; color:#cbd5e1;">
              <li><strong>Tính từ & Tồn tại:</strong> Nは Aです / Aくないです / Aじゃありません; A+N / ナA+な+N; N(nơi)に N(vật)があります; N(xe)で; ~から~まで どのくらいですか; とても / あまり (phủ định).</li>
              <li><strong>Quá khứ:</strong> Vました / Vませんでした; Tính từ い quá khứ: ~かったです / ~くなかったです; Tính từ な & Danh từ quá khứ: ~でした / ~じゃありませんでした.</li>
              <li><strong>Mong muốn & Mục đích:</strong> Nが ほしいです (muốn có vật); Vたいです (muốn làm gì); N(nơi)へ V(bỏ ます)に行きます (đi đâu để làm gì).</li>
              <li><strong>Hỏi đáp & Liên kết:</strong> どこかへ行きましたか -> いいえ、どこへも行きませんでした; どうして ~ですか -> ~ですから (chỉ lý do); それから (sau đó); Nと Vます (cùng ai).</li>
            </ul>
          </div>
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
  const guideBtn = document.getElementById("toggleMidtermGuideBtn");
  const guideBox = document.getElementById("midtermGuideBox");
  if (guideBtn && guideBox) {
    guideBtn.onclick = () => {
      const isHidden = guideBox.style.display === "none";
      guideBox.style.display = isHidden ? "block" : "none";
      guideBtn.innerText = isHidden ? "✕ Đóng cẩm nang" : "📖 Cẩm nang ôn thi Bài 4–5";
    };
  }
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
            <h3>1. Từ vựng & Ngữ cảnh (20 câu)</h3>
            ${scoreLabel(`practice-vocab-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceVocabWrap"></div>
        </div>

        <div class="card">
          <div class="section-head">
            <h3>2. Ngữ pháp thực chiến (20 câu)</h3>
            ${scoreLabel(`practice-grammar-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceGrammarWrap"></div>
        </div>

        <div class="card">
          <div class="section-head">
            <h3>3. Hán tự Kanji đề thi (16–20 câu)</h3>
            ${scoreLabel(`practice-kanji-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceKanjiWrap"></div>
        </div>

        <div class="card">
          <div class="section-head">
            <h3>4. Small Test tổng hợp (15 câu / 15 phút)</h3>
            ${scoreLabel(`practice-core-${id}`)}
          </div>
          <div class="quiz-wrap" id="practiceCoreWrap"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("backPracticeHubBtn").onclick = renderPracticeHub;
  document.getElementById("openOriginalLessonBtn").onclick = () => renderLesson(id);

  function loadPVocab() {
    buildMCQ("practiceVocabWrap", makePracticeVocab20(lesson), `practice-vocab-${id}`, loadPVocab);
  }
  function loadPGrammar() {
    buildMCQ("practiceGrammarWrap", makePracticeGrammar20(lesson), `practice-grammar-${id}`, loadPGrammar);
  }
  function loadPKanji() {
    buildMCQ("practiceKanjiWrap", makePracticeKanji20(lesson), `practice-kanji-${id}`, loadPKanji);
  }
  function loadPSmallTest() {
    buildMCQ("practiceCoreWrap", makePracticeCore20(lesson), `practice-core-${id}`, loadPSmallTest);
  }

  loadPVocab();
  loadPGrammar();
  loadPKanji();
  loadPSmallTest();
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
