/* ============================================================
   audio.js — Japanese TTS with SpeechSynthesis API
   ============================================================ */

let jpVoiceCache = null;

function primeJapaneseVoices() {
  if (!("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      jpVoiceCache = null;
      window.speechSynthesis.getVoices();
    };
  } catch (_) {}
}

function getJapaneseVoice() {
  if (!("speechSynthesis" in window)) return null;
  if (jpVoiceCache) return jpVoiceCache;
  const voices = window.speechSynthesis.getVoices() || [];
  jpVoiceCache =
    voices.find(v => (v.lang || "").toLowerCase() === "ja-jp") ||
    voices.find(v => (v.lang || "").toLowerCase().startsWith("ja")) ||
    null;
  return jpVoiceCache;
}

function stopVocabularyAudio() {
  if ("speechSynthesis" in window) {
    try { window.speechSynthesis.cancel(); } catch (_) {}
  }
  document.querySelectorAll(".speak-btn.playing").forEach(btn => {
    btn.classList.remove("playing");
  });
}

function playVocabularyAudio(text, reading, btn) {
  if (!("speechSynthesis" in window)) {
    showToast("Trình duyệt hiện tại chưa hỗ trợ phát âm.", "error");
    return;
  }
  const toSpeak = (reading || text || "").trim();
  if (!toSpeak) return;

  stopVocabularyAudio();
  btn.classList.add("playing");

  const utter = new SpeechSynthesisUtterance(toSpeak);
  utter.lang = "ja-JP";
  utter.rate = 0.9;
  utter.pitch = 1;

  const voice = getJapaneseVoice();
  if (voice) utter.voice = voice;

  utter.onend = () => btn.classList.remove("playing");
  utter.onerror = () => btn.classList.remove("playing");

  window.speechSynthesis.speak(utter);
}

function makeSpeakerButton(jp, reading) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "speak-btn";
  btn.title = "Nghe phát âm";
  btn.setAttribute("aria-label", `Nghe phát âm ${jp || ""}`);
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  btn.onclick = () => playVocabularyAudio(jp, reading, btn);
  return btn;
}

function patchVocabularyTables(scope = document) {
  const lessonCards = scope.querySelectorAll(".card");
  if (!lessonCards.length) return;

  lessonCards.forEach(card => {
    const h3 = card.querySelector(".section-head h3");
    if (!h3) return;
    const title = (h3.textContent || "").trim().toLowerCase();
    if (!title.includes("từ vựng")) return;

    const table = card.querySelector("table");
    if (!table) return;

    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(row => {
      if (row.dataset.audioPatched === "1") return;
      const jpCells = row.querySelectorAll("td.jp");
      if (jpCells.length < 2) {
        const cells = row.querySelectorAll("td");
        if (cells.length < 3) return;
        var jpCell = cells[0];
        var readingCell = cells[1];
      } else {
        var jpCell = jpCells[0];
        var readingCell = jpCells[1];
      }

      const strong = jpCell.querySelector("strong");
      const jp = (strong ? strong.textContent : jpCell.textContent || "").trim();
      const reading = (readingCell.textContent || "").trim().replace(/^—$/, "");

      if (!jp) return;

      const wrap = document.createElement("div");
      wrap.className = "vocab-cell";

      const textHolder = document.createElement("strong");
      textHolder.textContent = jp;
      textHolder.className = "jp";

      wrap.appendChild(textHolder);
      wrap.appendChild(makeSpeakerButton(jp, reading));

      jpCell.innerHTML = "";
      jpCell.appendChild(wrap);
      row.dataset.audioPatched = "1";
    });
  });
}

// Stop audio on tab hide
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopVocabularyAudio();
});
window.addEventListener("beforeunload", stopVocabularyAudio);
