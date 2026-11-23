/* ============================================================
   audio.js — Japanese TTS & Speech Engine (JPD123 Study Hub)
   - Tối ưu hóa phát âm tiếng Nhật chuẩn Tokyo bản xứ
   - Kiến trúc Dual-Engine: Web Speech API (Ưu tiên Microsoft Natural Nanami/Keita, Google, Kyoko, Haruka)
     kết hợp Fallback tự động qua Google Japanese Audio Stream khi thiết bị thiếu bộ voice tiếng Nhật
   - Bộ xử lý phiên âm thông minh (cleanTextForSpeech) loại bỏ ký hiệu sóng 〜, dấu ngoặc, chữ cái thừa
   - Hỗ trợ phát âm Từ vựng, Flashcard, Hán tự, Katakana, Speaking Q&A & Bài đọc ứng dụng
   ============================================================ */

let jpVoiceCache = null;
let speechWatchdogTimer = null;
let currentFallbackAudio = null;

/**
 * Khởi tạo & nạp danh sách giọng đọc tiếng Nhật của hệ điều hành / trình duyệt
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
 * Tìm giọng đọc tiếng Nhật tự nhiên, chuẩn Tokyo và dễ nghe nhất
 * Phân cấp ưu tiên:
 * 1. Microsoft Neural / Online (Natural) Voices (Edge/Windows: Nanami, Keita, Aoi, Daichi)
 * 2. Google Japanese High-Quality Voices (Chrome desktop & mobile: Google 日本語)
 * 3. Apple Standard Japanese Voices (Safari/macOS/iOS: Kyoko, Otoya, Siri)
 * 4. Microsoft Desktop Native Voices (Windows: Haruka, Sayaka, Ayumi, Ichiro)
 * 5. Bất kỳ giọng nào có mã ngôn ngữ ja-JP hoặc bắt đầu bằng ja
 */
function selectBestJapaneseVoice(voices) {
  if (!voices || !voices.length) return null;

  // 1. Giọng Microsoft Online Natural / Neural chuẩn Tokyo (ngữ điệu tự nhiên nhất)
  // Ưu tiên đặc biệt cho Nanami (giọng nữ nhẹ nhàng, rõ từng âm tiết) và Keita (giọng nam chuẩn)
  const nanami = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang.startsWith("ja") || name.includes("japanese") || name.includes("日本語")) && name.includes("nanami");
  });
  if (nanami) return nanami;

  const keita = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang.startsWith("ja") || name.includes("japanese") || name.includes("日本語")) && name.includes("keita");
  });
  if (keita) return keita;

  const naturalAny = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang.startsWith("ja") || name.includes("japanese") || name.includes("日本語")) &&
           (name.includes("natural") || name.includes("online") || name.includes("neural"));
  });
  if (naturalAny) return naturalAny;

  // 2. Giọng Google 日本語 (Chrome trên Android / Desktop)
  const googleJp = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang.startsWith("ja") || name.includes("japanese") || name.includes("日本語")) && name.includes("google");
  });
  if (googleJp) return googleJp;

  // 3. Giọng Apple chất lượng cao (macOS / iOS: Kyoko, Otoya)
  const appleJp = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang.startsWith("ja") || name.includes("japanese")) &&
           (name.includes("kyoko") || name.includes("otoya") || name.includes("siri"));
  });
  if (appleJp) return appleJp;

  // 4. Giọng bản xứ Microsoft Desktop Windows (Haruka, Sayaka, Ayumi, Ichiro)
  const msJp = voices.find(v => {
    const name = (v.name || "").toLowerCase();
    const lang = (v.lang || "").toLowerCase();
    return (lang === "ja-jp" || lang === "ja_jp") &&
           (name.includes("haruka") || name.includes("sayaka") || name.includes("ayumi") || name.includes("ichiro"));
  });
  if (msJp) return msJp;

  // 5. Bất kỳ giọng nào có lang chuẩn ja-JP
  const jaJp = voices.find(v => {
    const lang = (v.lang || "").toLowerCase().replace("_", "-");
    return lang === "ja-jp";
  });
  if (jaJp) return jaJp;

  // 6. Bất kỳ giọng nào bắt đầu bằng ja
  const jaAny = voices.find(v => (v.lang || "").toLowerCase().startsWith("ja"));
  if (jaAny) return jaAny;

  // 7. Giọng có tên chứa Japanese hoặc 日本語
  return voices.find(v => {
    const name = (v.name || "").toLowerCase();
    return name.includes("japanese") || name.includes("日本語");
  }) || null;
}

/**
 * Lấy giọng tiếng Nhật tốt nhất hiện tại
 */
function getJapaneseVoice() {
  if (!("speechSynthesis" in window)) return null;
  if (jpVoiceCache) return jpVoiceCache;
  const voices = window.speechSynthesis.getVoices() || [];
  jpVoiceCache = selectBestJapaneseVoice(voices);
  return jpVoiceCache;
}

/**
 * Làm sạch văn bản trước khi đưa vào bộ phát âm TTS:
 * - Đối với từ đơn & hậu tố đếm (〜人, 〜月, 〜日, 〜歳): Dùng reading chuẩn để tránh đọc nhầm âm Hán tự
 * - Đối với cụm từ, câu hoặc thành ngữ dài: Làm sạch và giữ nguyên để TTS phân tích ngữ pháp chuẩn xác
 * - Lược bỏ dấu ngã 〜 / ~, dấu gạch chéo (/), ghi chú trong ngoặc đơn (な), (～が)
 * - Chuyển đổi các từ viết tắt tiếng Anh (ATM, CD, Tシャツ) sang Katakana tự nhiên
 * - Chuyển đổi chỗ trống câu hỏi (___, （　　）) thành khoảng dừng ngắt giọng
 */
function cleanTextForSpeech(text, reading) {
  let s = "";

  const rawText = (text || "").trim();
  const rawReading = (reading || "").trim().replace(/^—$/, "");

  // Nếu là từ đơn hoặc hậu tố có reading chuẩn thì ưu tiên reading
  if (rawReading && rawReading.length > 0) {
    // Nếu text là cụm từ dài hoặc câu hoàn chỉnh có trợ từ và reading khớp độ dài
    if (rawText.length > 6 && /[をにへでがはとから]/.test(rawText) && !rawText.startsWith("〜") && !rawText.startsWith("~")) {
      s = rawText;
    } else {
      s = rawReading;
    }
  } else {
    s = rawText;
  }

  // Chuyển đổi các từ viết tắt / tiếng Anh thường gặp sang Katakana chuẩn tiếng Nhật
  s = s.replace(/[tTｔＴ]シャツ/g, "ティーシャツ");
  s = s.replace(/[aAａＡ][tTｔＴ][mMｍＭ]/g, "エーティーエム");
  s = s.replace(/[cCｃＣ][dDｄＤ]/g, "シーディー");
  s = s.replace(/[wWｗＷ][cCｃＣ]/g, "トイレ");
  s = s.replace(/[pPｐＰ][cCｃＣ]/g, "パソコン");
  s = s.replace(/[dDｄＤ][vVｖＶ][dDｄＤ]/g, "ディーブイディー");

  // Bỏ tiền tố cấu trúc ngữ pháp như V trong "Vたい", "Vてください", "Vています", "Vましょうか", "Vませんか"
  s = s.replace(/^V/g, "");

  // Lược bỏ ký hiệu gạch nối / dấu ngã đầu hoặc cuối từ (〜, ~, -, –)
  s = s.replace(/^[〜~\-–—\s]+|[〜~\-–—\s]+$/g, "");

  // Nếu có nhiều cách đọc phân tách bằng dấu gạch chéo / hoặc dấu chấm tròn ・ (VD: なに / なん -> lấy なに)
  if (s.includes("/")) s = s.split("/")[0].trim();
  if (s.includes("／")) s = s.split("／")[0].trim();
  if (s.includes("・")) s = s.split("・")[0].trim();

  // Bỏ ghi chú từ loại trong ngoặc đơn như (な), (～が), (お)
  // VD: いろいろ（な） -> いろいろ, （～が）多い -> 多い, あ（っ） -> あっ
  s = s.replace(/\([^)]*\)/g, "").replace(/（[^）]*）/g, "").trim();

  // Chuyển chỗ trống bài tập thành khoảng dừng nhẹ
  s = s.replace(/_{2,}/g, " ");

  // Bỏ nhãn câu hỏi như Q1:, Q2:, A:, B: nếu có ở đầu câu
  s = s.replace(/^Q\d+[:：]\s*/i, "");
  s = s.replace(/^[AB][:：]\s*/i, "");

  // Nếu sau khi làm sạch bị rỗng thì fallback về text ban đầu
  if (!s) {
    s = (rawText || "").replace(/^[〜~\-–—\s]+|[〜~\-–—\s]+$/g, "").trim();
  }

  return s;
}

/**
 * Dừng mọi âm thanh phát âm đang chạy (bao gồm cả TTS và audio fallback)
 */
function stopVocabularyAudio() {
  clearTimeout(speechWatchdogTimer);

  if ("speechSynthesis" in window) {
    try { window.speechSynthesis.cancel(); } catch (_) {}
  }

  if (currentFallbackAudio) {
    try {
      currentFallbackAudio.pause();
      currentFallbackAudio.currentTime = 0;
    } catch (_) {}
    currentFallbackAudio = null;
  }

  document.querySelectorAll(".speak-btn.playing, .play-tts-btn.playing, .flashcard-speak.playing").forEach(btn => {
    btn.classList.remove("playing");
  });
}

/**
 * Fallback phát âm bằng Audio stream chuẩn Tokyo (Google TTS API)
 * Đảm bảo 100% người dùng trên bất kỳ máy tính/điện thoại nào cũng nghe được giọng chuẩn
 * dù máy chưa cài gói ngôn ngữ tiếng Nhật
 */
function playOnlineFallbackAudio(text, btn) {
  stopVocabularyAudio();
  if (btn) btn.classList.add("playing");

  const clean = encodeURIComponent(text);
  const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=${clean}`;

  const audio = new Audio(audioUrl);
  currentFallbackAudio = audio;

  const doneSpeaking = () => {
    clearTimeout(speechWatchdogTimer);
    if (btn) btn.classList.remove("playing");
    if (currentFallbackAudio === audio) currentFallbackAudio = null;
  };

  audio.onended = doneSpeaking;
  audio.onerror = () => {
    doneSpeaking();
    if (typeof showToast === "function") {
      showToast("Không thể tải âm thanh phát âm trực tuyến.", "warning");
    }
  };

  const approxDurationMs = Math.max(1500, text.length * 350);
  speechWatchdogTimer = setTimeout(doneSpeaking, approxDurationMs + 1500);

  audio.play().catch(() => {
    doneSpeaking();
  });
}

/**
 * Phát âm một từ vựng / ngữ pháp với hiệu ứng trực quan trên nút bấm
 * Tự động chọn giọng đọc chuẩn nhất của thiết bị, hoặc tự động kích hoạt fallback âm thanh bản xứ
 */
function playVocabularyAudio(text, reading, btn) {
  const toSpeak = cleanTextForSpeech(text, reading);
  if (!toSpeak) return;

  stopVocabularyAudio();

  // Kiểm tra Web Speech API và giọng đọc tiếng Nhật
  const hasSpeech = "speechSynthesis" in window;
  const voice = hasSpeech ? getJapaneseVoice() : null;

  // Nếu trình duyệt không hỗ trợ Web Speech API HOẶC máy tính KHÔNG CÓ giọng tiếng Nhật nào cài sẵn:
  // Tự động chuyển sang audio stream bản xứ Tokyo chất lượng cao
  if (!hasSpeech || !voice) {
    playOnlineFallbackAudio(toSpeak, btn);
    return;
  }

  if (btn) btn.classList.add("playing");

  try {
    const utter = new SpeechSynthesisUtterance(toSpeak);
    utter.lang = "ja-JP";
    utter.rate = 0.88; // Tốc độ vừa phải, rõ ràng từng âm tiết cho người học
    utter.pitch = 1.0;  // Âm điệu tự nhiên, êm tai
    utter.voice = voice;

    const doneSpeaking = () => {
      clearTimeout(speechWatchdogTimer);
      if (btn) btn.classList.remove("playing");
    };

    utter.onend = doneSpeaking;
    utter.onerror = (e) => {
      // Nếu Web Speech API bị lỗi hoặc gián đoạn, tự động thử phát bằng Fallback Audio
      if (e && e.error !== "canceled") {
        playOnlineFallbackAudio(toSpeak, btn);
      } else {
        doneSpeaking();
      }
    };

    // Watchdog an toàn: Tự gỡ trạng thái playing nếu browser không kích hoạt onend
    const approxDurationMs = Math.max(1500, toSpeak.length * 350);
    speechWatchdogTimer = setTimeout(doneSpeaking, approxDurationMs + 1000);

    window.speechSynthesis.speak(utter);
  } catch (_) {
    playOnlineFallbackAudio(toSpeak, btn);
  }
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
  return `<button type="button" class="speak-btn ${extraClass}" onclick="event.stopPropagation(); playVocabularyAudio('${safeJp}', '${safeReading}', this);" title="Nghe phát âm chuẩn Tokyo" aria-label="Nghe phát âm ${safeJp}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></button>`;
}

function makeSpeakerButton(jp, reading) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "speak-btn";
  btn.title = "Nghe phát âm chuẩn Tokyo";
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
