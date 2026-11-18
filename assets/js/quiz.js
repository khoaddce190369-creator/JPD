/* ============================================================
   quiz.js — MCQ builder, question generators, scoring
   Tối ưu toàn diện cho JPD123: Ngữ cảnh, Kanji đề thi, Ngữ pháp sâu
   ============================================================ */

function saveScore(key, score, total) {
  state.scores[key] = { score, total, at: new Date().toISOString() };
  saveState();
}

function scoreLabel(key) {
  const s = state.scores[key];
  if (!s) return `<span class="score-label">Chưa làm</span>`;
  const pct = Math.round((s.score / s.total) * 100);
  const cls = pct >= 80 ? "score-good" : pct >= 60 ? "score-warn" : "score-bad";
  return `<span class="score-label ${cls}">${s.score}/${s.total} (${pct}%)</span>`;
}

function getVocabQuizCount(vocabLength) {
  return Math.min(30, Math.max(20, Math.ceil(vocabLength * 0.45)));
}

/* ---- Generators: Từ vựng (Kết hợp Ngữ cảnh + Tra cứu) ---- */
function makeVocabQuestions(lesson, mode = "all") {
  const lid = Number(lesson.id);
  const contextPool = (typeof VOCAB_CONTEXT_BANK !== "undefined" && VOCAB_CONTEXT_BANK[lid])
    ? VOCAB_CONTEXT_BANK[lid]
    : [];

  if (mode === "context" && contextPool.length) {
    return shuffle([...contextPool]).slice(0, 20);
  }

  // Meaning & Reading generator from lesson.vocab
  const vocab = (lesson.vocab || []).filter(v => v.jp && v.vi).map(v => ({
    ...v,
    promptForm: v.reading || v.jp,
    promptLabel: v.reading ? `${v.reading} (${v.jp})` : v.jp
  }));
  const meaningPool = vocab.map(v => v.vi).filter(Boolean);
  const promptPool = vocab.map(v => v.promptForm).filter(Boolean);
  const readingPool = vocab.map(v => v.reading).filter(Boolean);
  const genQuestions = [];
  const shuffledVocab = shuffle(vocab);

  for (let i = 0; i < Math.min(25, shuffledVocab.length); i++) {
    const item = shuffledVocab[i];
    const type = i % 3;

    if (type === 0) {
      const choices = uniqueChoices(item.vi, meaningPool, 4);
      genQuestions.push({
        q: `Nghĩa của từ "${item.promptLabel}" là gì?`,
        choices,
        answer: choices.indexOf(item.vi),
        explain: item.reading ? `Kanji: ${item.jp} • Đọc: ${item.reading}` : `Nghĩa: ${item.vi}`
      });
    } else if (type === 1) {
      const choices = uniqueChoices(item.promptForm, promptPool, 4);
      genQuestions.push({
        q: `Từ tiếng Nhật nào có nghĩa là "${item.vi}"?`,
        choices,
        answer: choices.indexOf(item.promptForm),
        explain: item.reading ? `Kanji: ${item.jp} • Đọc: ${item.reading}` : `Từ: ${item.jp}`
      });
    } else if (item.reading && readingPool.length >= 4) {
      const choices = uniqueChoices(item.reading, readingPool, 4);
      genQuestions.push({
        q: `Cách đọc của "${item.jp}" là gì?`,
        choices,
        answer: choices.indexOf(item.reading),
        explain: `Kanji: ${item.jp} có cách đọc là ${item.reading} (${item.vi}).`
      });
    } else {
      const choices = uniqueChoices(item.vi, meaningPool, 4);
      genQuestions.push({
        q: `Chọn nghĩa đúng nhất cho "${item.promptLabel}"`,
        choices,
        answer: choices.indexOf(item.vi),
        explain: item.reading ? `Kanji: ${item.jp}` : ""
      });
    }
  }

  if (mode === "meaning") {
    return shuffle(genQuestions).slice(0, 20);
  }

  // mode === "all": 10 câu ngữ cảnh + 10 câu tra cứu nghĩa/cách đọc
  if (contextPool.length) {
    const selectedContext = sample(contextPool, Math.min(10, contextPool.length));
    const selectedMeaning = sample(genQuestions, Math.min(10, genQuestions.length));
    return shuffle([...selectedContext, ...selectedMeaning]);
  }
  return shuffle(genQuestions).slice(0, 20);
}

/* ---- Generators: Kanji (Dạng câu hỏi đề thi chính thức) ---- */
function makeKanjiQuestions(lesson, limit = null) {
  const lid = Number(lesson.id);
  const examPool = (typeof KANJI_EXAM_BANK !== "undefined" && KANJI_EXAM_BANK[lid])
    ? KANJI_EXAM_BANK[lid]
    : [];

  if (examPool.length) {
    const list = shuffle([...examPool]);
    return limit ? list.slice(0, limit) : list;
  }

  // Fallback to mechanical if bank unavailable
  const pool = lesson.kanji || [];
  const selected = sample(pool, Math.min(8, pool.length));
  const readingPool = pool.map(x => x.reading).filter(Boolean);
  const meaningPool = pool.map(x => x.meaning).filter(Boolean);
  const questions = [];

  selected.forEach(k => {
    const readingChoices = uniqueChoices(k.reading, readingPool, 4);
    questions.push({
      q: `Cách đọc của kanji "${k.word}" là gì?`,
      choices: readingChoices,
      answer: readingChoices.indexOf(k.reading),
      explain: `Nghĩa: ${k.meaning}`
    });
    const meaningChoices = uniqueChoices(k.meaning, meaningPool, 4);
    questions.push({
      q: `Nghĩa của kanji "${k.word}" là gì?`,
      choices: meaningChoices,
      answer: meaningChoices.indexOf(k.meaning),
      explain: `Cách đọc: ${k.reading}`
    });
  });
  return shuffle(questions);
}

/* ---- Generators: Ngữ pháp chuyên sâu ---- */
function makeGrammarQuestions(lessonId, limit = null) {
  const lid = Number(lessonId);
  const bank = (typeof GRAMMAR_EXTENDED_BANK !== "undefined" && GRAMMAR_EXTENDED_BANK[lid])
    ? GRAMMAR_EXTENDED_BANK[lid]
    : ((typeof GRAMMAR_BANK !== "undefined" && GRAMMAR_BANK[lid]) ? GRAMMAR_BANK[lid] : []);

  const mapped = bank.map(([q, choices, answer, explain]) => ({ q, choices, answer, explain }));
  const shuffled = shuffle(mapped);
  return limit ? shuffled.slice(0, limit) : shuffled;
}

/* ---- Generators: Small Test (15 câu mô phỏng kiểm tra trên lớp) ---- */
function makeSmallTest(lessonId) {
  const lid = Number(lessonId);
  const lesson = LESSONS.find(l => l.id === lid) || { id: lid, vocab: [], kanji: [] };

  // 1. 5 câu Từ vựng ngữ cảnh
  const vPool = (typeof VOCAB_CONTEXT_BANK !== "undefined" && VOCAB_CONTEXT_BANK[lid])
    ? VOCAB_CONTEXT_BANK[lid]
    : [];
  let vSelected = [];
  if (vPool.length >= 5) {
    vSelected = sample(vPool, 5);
  } else {
    vSelected = makeVocabQuestions(lesson, "all").slice(0, 5);
  }
  const vocabQ = vSelected.map(q => ({ ...q, group: "Từ vựng" }));

  // 2. 4 câu Kanji đề thi
  const kPool = (typeof KANJI_EXAM_BANK !== "undefined" && KANJI_EXAM_BANK[lid])
    ? KANJI_EXAM_BANK[lid]
    : [];
  let kSelected = [];
  if (kPool.length >= 4) {
    kSelected = sample(kPool, 4);
  } else {
    kSelected = makeKanjiQuestions(lesson, 4);
  }
  const kanjiQ = kSelected.map(q => ({ ...q, group: "Hán tự Kanji" }));

  // 3. 6 câu Ngữ pháp
  const gList = makeGrammarQuestions(lid, 6);
  const grammarQ = gList.map(q => ({ ...q, group: "Ngữ pháp" }));

  return [
    ...vocabQ,
    ...kanjiQ,
    ...grammarQ
  ];
}

/* ---- Generators: Final Exam (25 câu thi thử toàn diện) ---- */
function makeExamSet() {
  const vocabQ = [], grammarQ = [], kanjiQ = [];

  LESSONS.forEach(lesson => {
    const lid = lesson.id;
    // Vocab context
    const vList = (typeof VOCAB_CONTEXT_BANK !== "undefined" && VOCAB_CONTEXT_BANK[lid])
      ? VOCAB_CONTEXT_BANK[lid]
      : [];
    if (vList.length) vocabQ.push(...sample(vList, 2));

    // Grammar
    const gList = (typeof GRAMMAR_EXTENDED_BANK !== "undefined" && GRAMMAR_EXTENDED_BANK[lid])
      ? GRAMMAR_EXTENDED_BANK[lid]
      : ((typeof GRAMMAR_BANK !== "undefined" && GRAMMAR_BANK[lid]) ? GRAMMAR_BANK[lid] : []);
    if (gList.length) {
      sample(gList, 2).forEach(([q, choices, answer, explain]) => {
        grammarQ.push({ q, choices, answer, explain });
      });
    }

    // Kanji
    const kList = (typeof KANJI_EXAM_BANK !== "undefined" && KANJI_EXAM_BANK[lid])
      ? KANJI_EXAM_BANK[lid]
      : [];
    if (kList.length) kanjiQ.push(...sample(kList, 1));
  });

  return shuffle([
    ...sample(vocabQ, 10),
    ...sample(grammarQ, 8),
    ...sample(kanjiQ, 7)
  ]);
}

/* ---- MCQ Builder ---- */
function buildMCQ(containerId, questions, scoreKey, onResetCallback = null) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="quiz-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <span class="quiz-count"><strong>${questions.length}</strong> câu hỏi</span>
      <div style="display:flex; gap:8px;">
        ${onResetCallback ? `<button class="btn btn-secondary btn-sm" id="${containerId}-refresh-btn" type="button" title="Đổi bộ câu hỏi khác">↻ Đổi đề</button>` : ''}
        <button class="btn btn-primary" id="${containerId}-submit">Nộp bài</button>
      </div>
    </div>
    ${questions.map((q, qi) => `
      <div class="q-block" id="${containerId}-q${qi}">
        <div class="q-text">
          <strong>Câu ${qi + 1}.</strong>
          ${q.group ? `<span class="badge badge-info" style="margin-right:6px; font-size:0.75rem;">${q.group}</span>` : ''}
          <span class="jp">${q.q}</span>
        </div>
        ${q.choices.map((choice, ci) => `
          <label class="choice" for="${containerId}-q${qi}-c${ci}">
            <input type="radio" id="${containerId}-q${qi}-c${ci}" name="${containerId}-q${qi}" value="${ci}">
            <span class="jp">${choice}</span>
          </label>
        `).join("")}
      </div>
    `).join("")}
    <div id="${containerId}-result"></div>
  `;

  if (onResetCallback) {
    const refreshBtn = document.getElementById(`${containerId}-refresh-btn`);
    if (refreshBtn) refreshBtn.onclick = () => onResetCallback();
  }

  document.getElementById(`${containerId}-submit`).onclick = () => {
    let score = 0;
    const review = [];
    questions.forEach((q, qi) => {
      const chosen = document.querySelector(`input[name="${containerId}-q${qi}"]:checked`);
      const val = chosen ? Number(chosen.value) : -1;
      if (val === q.answer) score++;

      const block = document.getElementById(`${containerId}-q${qi}`);
      if (block) {
        block.querySelectorAll(".choice").forEach((label, ci) => {
          label.classList.remove("choice-correct", "choice-wrong", "choice-missed");
          if (ci === q.answer) label.classList.add("choice-correct");
          else if (ci === val && val !== q.answer) label.classList.add("choice-wrong");
        });
      }

      review.push(`
        <div class="q-review">
          <span>Câu ${qi + 1}:</span>
          ${val === q.answer
            ? `<span class="badge badge-done">Đúng</span>`
            : `<span class="badge badge-danger">Sai — đáp án: <strong class="jp">${q.choices[q.answer]}</strong></span>`}
          ${q.explain ? `<span class="review-explain">${q.explain}</span>` : ""}
        </div>
      `);
    });

    saveScore(scoreKey, score, questions.length);
    const pct = Math.round((score / questions.length) * 100);
    const cls = pct >= 80 ? "result-good" : pct >= 60 ? "result-warn" : "result-bad";

    document.getElementById(`${containerId}-result`).innerHTML = `
      <div class="quiz-result ${cls}">
        <strong>Kết quả: ${score}/${questions.length} (${pct}%)</strong>
        <div class="result-msg">
          ${pct >= 80
            ? "Xuất sắc! Bạn đã nắm rất vững kiến thức phần này. 🎉"
            : pct >= 60
              ? "Khá tốt! Hãy đọc lại các câu giải thích ở dưới để đạt điểm tối đa."
              : "Chưa đạt mục tiêu 8+. Hãy xem kỹ đáp án và làm lại thêm 1 lần nhé!"}
        </div>
        ${onResetCallback ? `<button class="btn btn-secondary btn-sm" id="${containerId}-retry-btn" style="margin-top:10px;">↻ Làm đề mới</button>` : ''}
      </div>
      <div class="review-list">${review.join("")}</div>
    `;

    if (onResetCallback) {
      const retryBtn = document.getElementById(`${containerId}-retry-btn`);
      if (retryBtn) retryBtn.onclick = () => onResetCallback();
    }

    document.getElementById(`${containerId}-result`).scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
}

/* ---- Practice Hub Generators ---- */
function makePracticeQuestionsFromRows(rows, total = 20, label = "từ") {
  const vocab = (rows || []).filter(v => v.jp && v.vi);
  if (!vocab.length) return [];

  const meaningPool = vocab.map(v => v.vi).filter(Boolean);
  const jpPool = vocab.map(v => v.jp).filter(Boolean);
  const readingPool = vocab.map(v => v.reading).filter(Boolean);
  const questions = [];

  for (let i = 0; i < total; i++) {
    const item = vocab[i % vocab.length];
    const type = i % 4;

    if (type === 0) {
      const choices = uniqueChoices(item.vi, meaningPool, 4);
      questions.push({ q: `Nghĩa của ${label} "${item.jp}" là gì?`, choices, answer: choices.indexOf(item.vi), explain: item.reading ? `Cách đọc: ${item.reading}` : "" });
      continue;
    }
    if (type === 1) {
      const choices = uniqueChoices(item.jp, jpPool, 4);
      questions.push({ q: `Từ tiếng Nhật nào có nghĩa "${item.vi}"?`, choices, answer: choices.indexOf(item.jp), explain: item.reading ? `Cách đọc: ${item.reading}` : "" });
      continue;
    }
    if (type === 2 && item.reading) {
      const choices = uniqueChoices(item.reading, readingPool, 4);
      questions.push({ q: `Cách đọc của "${item.jp}" là gì?`, choices, answer: choices.indexOf(item.reading), explain: `Nghĩa: ${item.vi}` });
      continue;
    }
    const choices = uniqueChoices(item.vi, meaningPool, 4);
    questions.push({ q: `Chọn nghĩa đúng nhất cho "${item.jp}"`, choices, answer: choices.indexOf(item.vi), explain: item.reading ? `Cách đọc: ${item.reading}` : "" });
  }
  return shuffle(questions);
}

function makePracticeVocab20(lesson) {
  const lid = Number(lesson.id);
  const contextPool = (typeof VOCAB_CONTEXT_BANK !== "undefined" && VOCAB_CONTEXT_BANK[lid])
    ? VOCAB_CONTEXT_BANK[lid]
    : [];
  if (contextPool.length >= 20) return shuffle([...contextPool]).slice(0, 20);
  return makeVocabQuestions(lesson, "all");
}

function makePracticeCore20(lesson) {
  return makeSmallTest(lesson.id);
}

function makePracticeGrammar20(lesson) {
  return makeGrammarQuestions(lesson.id, 20);
}

function makePracticeKanji20(lesson) {
  return makeKanjiQuestions(lesson, 20);
}

function practiceRotateTake(arr, start, count) {
  const out = [];
  if (!arr || !arr.length) return out;
  for (let i = 0; i < count; i++) out.push(arr[(start + i) % arr.length]);
  return out;
}

function practiceCloneQuestions(list) {
  return list.map(q => ({ ...q, choices: [...q.choices] }));
}

function makeMidtermSet(setNo) {
  const vocabStart = ((setNo - 1) * 4) % MIDTERM_POOLS.vocab.length;
  const kanjiStart = ((setNo - 1) * 4) % MIDTERM_POOLS.kanji.length;
  const grammarStart = ((setNo - 1) * 7) % MIDTERM_POOLS.grammar.length;
  return [
    ...practiceCloneQuestions(practiceRotateTake(MIDTERM_POOLS.vocab, vocabStart, 4)).map(q => ({ ...q, group: "Từ vựng" })),
    ...practiceCloneQuestions(practiceRotateTake(MIDTERM_POOLS.kanji, kanjiStart, 4)).map(q => ({ ...q, group: "Kanji" })),
    ...practiceCloneQuestions(practiceRotateTake(MIDTERM_POOLS.grammar, grammarStart, 7)).map(q => ({ ...q, group: "Ngữ pháp" }))
  ];
}
