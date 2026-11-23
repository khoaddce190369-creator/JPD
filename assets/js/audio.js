/* ============================================================
   audio.js — Japanese TTS & Speech Engine (JPD123 Study Hub)
   - Tối ưu hóa phát âm tiếng Nhật chuẩn bản xứ qua Web Speech API
   - Xử lý sạch phiên âm (lược bỏ ký hiệu sóng 〜, dấu ngoặc, chữ V)
   - Bộ chọn giọng đọc thông minh (Ưu tiên giọng Natural, Google, Haruka, Nanami)
   - Hỗ trợ phát âm Từ vựng, Hán tự, Katakana, Speaking Q&A & Bài đọc
   ============================================================ */

let jpVoiceCache = null;
let speechWatchdogTimer = null;

/**
 * Khởi tạo & nạp danh sách giọng đọc tiếng Nhật
 */
function primeJapaneseVoices() {
  if (!("speechSynthesis" in window)) return;
  try {
    const list = window.speechSynthesis.getVoices();
    if (list && list.length) {
      jpVoiceCache = selectBestJapaneseVoice(list);
    }
    window.speechSynthesis.onvoiceschanged = () => {
      const updated = window.speechSynthesis.getVoices() || [];
      jpVoiceCache = selectBestJapaneseVoice(updated);
    };
  } catch (_) {}
}

/**
 * Tìm giọng đọc tiếng Nhật tự nhiên và chuẩn xác nhất
 */
function selectBestJapaneseVoice(voices) {
  if (!voices || !voices.length) return null;

  // 1. Giọng Natural / Neural chất lượng cao nhất (Edge / Chrome)
  const natural = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang.startsWith("ja") || name.includes("japanese") || name.includes("日本語")) &&
           (name.includes("natural") || name.includes("online") || name.includes("neural") || name.includes("nanami") || name.includes("keita"));
  });
  if (natural) return natural;

  // 2. Giọng Google 日本語 (Chrome trên Android / Desktop)
  const googleJp = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang.startsWith("ja") || name.includes("japanese")) && name.includes("google");
  });
  if (googleJp) return googleJp;

  // 3. Giọng bản xứ Microsoft Desktop (Haruka, Ayumi, Sayaka, Ichiro)
  const msJp = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang === "ja-jp" || lang === "ja_jp") && (name.includes("haruka") || name.includes("ayumi") || name.includes("ichiro") || name.includes("sayaka"));
  });
  if (msJp) return msJp;

  // 4. Bất kỳ giọng nào có lang là ja-JP
  const jaJp = voices.find(v => {
    const lang = (v.lang || "").toLowerCase().replace("_", "-");
    return lang === "ja-jp";
  });
  if (jaJp) return jaJp;

  // 5. Bất kỳ giọng nào bắt đầu bằng ja
  const jaAny = voices.find(v => (v.lang || "").toLowerCase().startsWith("ja"));
  if (jaAny) return jaAny;

  // 6. Giọng có tên chứa Japanese / 日本語
  return voices.find(v => {
    const name = (v.name || "").toLowerCase();
    return name.includes("japanese") || name.includes("日本語");
  }) || null;
}

function getJapaneseVoice() {
  if (!("speechSynthesis" in window)) return null;
  if (jpVoiceCache) return jpVoiceCache;
  const voices = window.speechSynthesis.getVoices() || [];
  jpVoiceCache = selectBestJapaneseVoice(voices);
  return jpVoiceCache;
}

/**
 * Làm sạch văn bản trước khi đưa vào bộ phát âm TTS:
 * - Ưu tiên đọc Hiragana/Katakana (reading) đối với từ đơn để tránh TTS đọc sai âm Hán tự
 * - Lược bỏ dấu ngã 〜 / ~, ngoặc đơn, chữ cái tiếng Anh (như V trong Vたい)
 * - Tách các lựa chọn có dấu gạch chéo (/ hoặc ・) để đọc từ chính xác
 */
function cleanTextForSpeech(text, reading) {
  let s = "";

  // Với từ vựng đơn, nếu có reading chuẩn (Hiragana/Katakana) thì dùng reading để phát âm chuẩn 100%
  if (reading && reading !== "—" && reading.trim().length > 0) {
    s = reading.trim();
  } else {
    s = (text || "").trim();
  }

  // Chuyển đổi các từ viết tắt / tiếng Anh thường gặp sang phiên âm tiếng Nhật
  s = s.replace(/\bATM\b/gi, "エーティーエム");
  s = s.replace(/\bTシャツ\b/gi, "ティーシャツ");
  s = s.replace(/\bＴシャツ\b/g, "ティーシャツ");
  s = s.replace(/\bCD\b/gi, "シーディー");

  // Bỏ tiền tố cấu trúc như V trong "Vたい", "Vてください", "Vています", "Vましょうか", "Vませんか"
  s = s.replace(/^V/g, "");

  // Lược bỏ ký hiệu gạch nối / dấu ngã đầu hoặc cuối từ (〜, ~, -, –)
  s = s.replace(/^[〜~\-–—\s]+|[〜~\-–—\s]+$/g, "");

  // Nếu có nhiều cách đọc phân tách bằng dấu gạch chéo / hoặc dấu chấm tròn ・ (VD: なに / なん -> lấy なに)
  if (s.includes("/")) s = s.split("/")[0].trim();
  if (s.includes("／")) s = s.split("／")[0].trim();
  if (s.includes("・")) s = s.split("・")[0].trim();

  // Bỏ ghi chú trong ngoặc đơn (VD: お（っ） -> あっ, （お）名前 -> お名前)
  s = s.replace(/\([^)]*\)/g, "").replace(/（[^）]*）/g, "").trim();

  // Bỏ nhãn câu hỏi như Q1:, Q2:, A:, B: nếu có ở đầu câu
  s = s.replace(/^Q\d+[:：]\s*/i, "");
  s = s.replace(/^[AB][:：]\s*/i, "");

  // Nếu sau khi làm sạch bị rỗng thì fallback về text ban đầu đã loại bỏ ký tự đặc biệt
  if (!s) {
    s = (text || "").replace(/^[〜~\-–—\s]+|[〜~\-–—\s]+$/g, "").trim();
  }

  return s;
}

/**
 * Dừng mọi âm thanh phát âm đang chạy
 */
function stopVocabularyAudio() {
  clearTimeout(speechWatchdogTimer);
  if ("speechSynthesis" in window) {
    try { window.speechSynthesis.cancel(); } catch (_) {}
  }
  document.querySelectorAll(".speak-btn.playing, .play-tts-btn.playing, .flashcard-speak.playing").forEach(btn => {
    btn.classList.remove("playing");
  });
}

/**
 * Phát âm một từ vựng / ngữ pháp với hiệu ứng trực quan trên nút bấm
 */
function playVocabularyAudio(text, reading, btn) {
  if (!("speechSynthesis" in window)) {
    if (typeof showToast === "function") {
      showToast("Trình duyệt chưa hỗ trợ Web Speech API phát âm.", "error");
    }
    return;
  }

  const toSpeak = cleanTextForSpeech(text, reading);
  if (!toSpeak) return;

  stopVocabularyAudio();

  if (btn) btn.classList.add("playing");

  const utter = new SpeechSynthesisUtterance(toSpeak);
  utter.lang = "ja-JP";
  utter.rate = 0.88; // Tốc độ vừa phải, rõ ràng cho người học
  utter.pitch = 1.0;

  const voice = getJapaneseVoice();
  if (voice) utter.voice = voice;

  const doneSpeaking = () => {
    clearTimeout(speechWatchdogTimer);
    if (btn) btn.classList.remove("playing");
  };

  utter.onend = doneSpeaking;
  utter.onerror = doneSpeaking;

  // Watchdog an toàn: Tự gỡ trạng thái playing nếu browser không kích hoạt onend
  const approxDurationMs = Math.max(1500, toSpeak.length * 350);
  speechWatchdogTimer = setTimeout(doneSpeaking, approxDurationMs + 1000);

  window.speechSynthesis.speak(utter);
}

/**
 * Phát âm câu dài, câu hỏi hoặc bài đọc (dùng chung cho toàn bộ app)
 */
function playJapaneseSpeech(text, btn = null) {
  playVocabularyAudio(text, null, btn);
}

/**
 * Helper tạo thẻ HTML cho nút phát âm chuẩn hóa
 */
function renderSpeakerBtnHtml(jp, reading, extraClass = "") {
  const safeJp = (jp || "").replace(/"/g, "&quot;");
  const safeReading = (reading || "").replace(/"/g, "&quot;");
  return `<button type="button" class="speak-btn ${extraClass}" onclick="event.stopPropagation(); playVocabularyAudio('${safeJp}', '${safeReading}', this);" title="Nghe phát âm" aria-label="Nghe phát âm ${safeJp}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></button>`;
}

function makeSpeakerButton(jp, reading) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "speak-btn";
  btn.title = "Nghe phát âm";
  btn.setAttribute("aria-label", `Nghe phát âm ${jp || ""}`);
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  btn.onclick = (e) => {
    e.stopPropagation();
    playVocabularyAudio(jp, reading, btn);
  };
  return btn;
}

/**
 * Tự động gắn nút phát âm vào bảng từ vựng nếu bảng chưa có nút
 */
function patchVocabularyTables(scope = document) {
  const tables = scope.querySelectorAll(".card table");
  if (!tables.length) return;

  tables.forEach(table => {
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(row => {
      if (row.dataset.audioPatched === "1") return;
      if (row.querySelector(".speak-btn")) {
        row.dataset.audioPatched = "1";
        return;
      }
      const cells = row.querySelectorAll("td");
      if (cells.length < 2) return;

      const jpCell = cells[0];
      const readingCell = cells[1];

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

// Khởi chạy khi tài liệu sẵn sàng
if (typeof window !== "undefined") {
  primeJapaneseVoices();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopVocabularyAudio();
  });
  window.addEventListener("beforeunload", stopVocabularyAudio);
}
