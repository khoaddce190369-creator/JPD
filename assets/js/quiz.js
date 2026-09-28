/* ============================================================
   quiz.js — MCQ builder, question generators, scoring
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

function makeVocabQuestions(lesson) {
  const vocab = lesson.vocab.filter(v => v.jp && v.vi).map(v => ({
    ...v,
    promptForm: v.reading || v.jp,
    promptLabel: v.reading ? `${v.reading} (${v.jp})` : v.jp
  }));
  const count = getVocabQuizCount(vocab.length);
  const meaningPool = vocab.map(v => v.vi).filter(Boolean);
  const promptPool = vocab.map(v => v.promptForm).filter(Boolean);
  const questions = [];
  const shuffled = shuffle(vocab);

  for (let i = 0; i < count; i++) {
    const item = shuffled[i % shuffled.length];
    const type = i % 3;

    if (type === 0) {
      const choices = uniqueChoices(item.vi, meaningPool, 4);
      questions.push({
        q: `Nghĩa của từ "${item.promptLabel}" là gì?`,
        choices, answer: choices.indexOf(item.vi),
        explain: item.reading ? `Kanji: ${item.jp}` : ""
      });
      continue;
    }
    if (type === 1) {
      const choices = uniqueChoices(item.promptForm, promptPool, 4);
      questions.push({
        q: `Từ hiragana/katakana nào có nghĩa "${item.vi}"?`,
        choices, answer: choices.indexOf(item.promptForm),
        explain: item.reading ? `Kanji: ${item.jp}` : ""
      });
      continue;
    }
    const choices = uniqueChoices(item.vi, meaningPool, 4);
    questions.push({
      q: `Chọn nghĩa đúng nhất cho "${item.promptLabel}"`,
      choices, answer: choices.indexOf(item.vi),
      explain: item.reading ? `Kanji: ${item.jp}` : ""
    });
  }
  return shuffle(questions);
}

function makeKanjiQuestions(lesson) {
  const pool = lesson.kanji || [];
  const selected = sample(pool, Math.min(6, pool.length));
  const readingPool = pool.map(x => x.reading).filter(Boolean);
  const meaningPool = pool.map(x => x.meaning).filter(Boolean);
  const questions = [];

  selected.forEach(k => {
    const readingChoices = uniqueChoices(k.reading, readingPool, 4);
    questions.push({
      q: `Cách đọc của kanji "${k.word}" là gì?`,
      choices: readingChoices, answer: readingChoices.indexOf(k.reading),
      explain: `Nghĩa: ${k.meaning}`
    });
    const meaningChoices = uniqueChoices(k.meaning, meaningPool, 4);
    questions.push({
      q: `Nghĩa của kanji "${k.word}" là gì?`,
      choices: meaningChoices, answer: meaningChoices.indexOf(k.meaning),
      explain: `Cách đọc: ${k.reading}`
    });
  });
  return shuffle(questions);
}

function makeExamSet() {
  const vocabQ = [], grammarQ = [], kanjiQ = [];

  LESSONS.forEach(lesson => {
    sample(lesson.vocab, 3).forEach(item => {
      const meaningPool = LESSONS.flatMap(x => x.vocab.map(v => v.vi));
      const choices = uniqueChoices(item.vi, meaningPool, 4);
      vocabQ.push({
        q: `Nghĩa của "${item.jp}" là gì?`,
        choices, answer: choices.indexOf(item.vi),
        explain: item.reading ? `Cách đọc: ${item.reading}` : ""
      });
    });

    const g = sample((GRAMMAR_BANK[lesson.id] || []), 2);
    g.forEach(([q, choices, answer, explain]) => {
      grammarQ.push({ q, choices, answer, explain });
    });

    sample(lesson.kanji, 1).forEach(k => {
      const choices = uniqueChoices(k.meaning, LESSONS.flatMap(x => x.kanji.map(y => y.meaning)), 4);
      kanjiQ.push({
        q: `Nghĩa của "${k.word}" là gì?`,
        choices, answer: choices.indexOf(k.meaning),
        explain: `Cách đọc: ${k.reading}`
      });
    });
  });

  return [...sample(vocabQ, 10), ...sample(grammarQ, 8), ...sample(kanjiQ, 7)];
}

/* ---- MCQ Builder ---- */
function buildMCQ(containerId, questions, scoreKey) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;

  wrap.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-count">${questions.length} câu hỏi</span>
      <button class="btn btn-primary" id="${containerId}-submit">Nộp bài</button>
    </div>
    ${questions.map((q, qi) => `
      <div class="q-block" id="${containerId}-q${qi}">
        <div class="q-text"><strong>Câu ${qi + 1}.</strong> <span class="jp">${q.q}</span></div>
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
            : `<span class="badge badge-danger">Sai — đáp án: <span class="jp">${q.choices[q.answer]}</span></span>`}
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
          ${pct >= 80 ? "Đạt tốt." : pct >= 60 ? "Ổn, nhưng nên làm lại 1 vòng." : "Chưa ổn. Học lại phần này rồi quiz lại."}
        </div>
      </div>
      <div class="review-list">${review.join("")}</div>
    `;

    document.getElementById(`${containerId}-result`).scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
}

/* ---- Practice question generators ---- */
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
  return makePracticeQuestionsFromRows(lesson.vocab || [], 20, "từ");
}

function makePracticeCore20(lesson) {
  return makePracticeQuestionsFromRows((lesson.vocab || []).slice(0, 20), 20, "core vocab");
}

function makePracticeGrammar20(lesson) {
  const bank = (typeof GRAMMAR_BANK !== "undefined" && GRAMMAR_BANK[lesson.id]) ? GRAMMAR_BANK[lesson.id] : [];
  const base = bank.map(([q, choices, answer, explain]) => ({ q, choices, answer, explain }));

  const allPatterns = LESSONS.flatMap(l => (l.grammar || []).map(g => g.pattern));
  const extra = (lesson.grammar || []).slice(0, 8).map(g => {
    const choices = uniqueChoices(g.pattern, allPatterns, 4);
    return { q: `Mẫu nào phù hợp nhất với ý nghĩa: "${g.use}"?`, choices, answer: choices.indexOf(g.pattern), explain: `Ví dụ: ${g.example}` };
  });

  const merged = shuffle([...base, ...extra]);
  if (merged.length >= 20) return merged.slice(0, 20);
  while (merged.length < 20 && (lesson.grammar || []).length) {
    const g = lesson.grammar[merged.length % lesson.grammar.length];
    const choices = uniqueChoices(g.pattern, allPatterns, 4);
    merged.push({ q: `Chọn mẫu đúng cho: "${g.use}"`, choices, answer: choices.indexOf(g.pattern), explain: `Ví dụ: ${g.example}` });
  }
  return shuffle(merged).slice(0, 20);
}

function makePracticeKanji20(lesson) {
  const pool = lesson.kanji || [];
  if (!pool.length) return [];
  const meanings = pool.map(k => k.meaning).filter(Boolean);
  const words = pool.map(k => k.word).filter(Boolean);
  const readings = pool.map(k => k.reading).filter(Boolean);
  const questions = [];

  for (let i = 0; i < 20; i++) {
    const k = pool[i % pool.length];
    const type = i % 4;
    if (type === 0) { const c = uniqueChoices(k.meaning, meanings, 4); questions.push({ q: `Nghĩa của "${k.word}" là gì?`, choices: c, answer: c.indexOf(k.meaning), explain: `Cách đọc: ${k.reading}` }); continue; }
    if (type === 1) { const c = uniqueChoices(k.reading, readings, 4); questions.push({ q: `Cách đọc của "${k.word}" là gì?`, choices: c, answer: c.indexOf(k.reading), explain: `Nghĩa: ${k.meaning}` }); continue; }
    if (type === 2) { const c = uniqueChoices(k.word, words, 4); questions.push({ q: `Kanji nào có nghĩa "${k.meaning}"?`, choices: c, answer: c.indexOf(k.word), explain: `Cách đọc: ${k.reading}` }); continue; }
    const c = uniqueChoices(k.meaning, meanings, 4); questions.push({ q: `Chọn nghĩa đúng nhất cho "${k.word}"`, choices: c, answer: c.indexOf(k.meaning), explain: `Cách đọc: ${k.reading}` });
  }
  return shuffle(questions);
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
  const vocabStart = (setNo - 1) % MIDTERM_POOLS.vocab.length;
  const kanjiStart = ((setNo - 1) * 2) % MIDTERM_POOLS.kanji.length;
  const grammarStart = ((setNo - 1) * 3) % MIDTERM_POOLS.grammar.length;
  return [
    ...practiceCloneQuestions(practiceRotateTake(MIDTERM_POOLS.vocab, vocabStart, 4)).map(q => ({ ...q, group: "Từ vựng" })),
    ...practiceCloneQuestions(practiceRotateTake(MIDTERM_POOLS.kanji, kanjiStart, 4)).map(q => ({ ...q, group: "Kanji" })),
    ...practiceCloneQuestions(practiceRotateTake(MIDTERM_POOLS.grammar, grammarStart, 7)).map(q => ({ ...q, group: "Ngữ pháp" }))
  ];
}
