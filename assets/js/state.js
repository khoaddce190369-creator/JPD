/* ============================================================
   state.js — localStorage, progress, utility helpers
   ============================================================ */

function loadState() {
  try {
    const raw = localStorage.getItem("jpd123_local_full");
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      doneLessons: Array.isArray(parsed.doneLessons) ? parsed.doneLessons : [],
      scores: (parsed.scores && typeof parsed.scores === "object") ? parsed.scores : {},
      roadmapCheck: (parsed.roadmapCheck && typeof parsed.roadmapCheck === "object") ? parsed.roadmapCheck : {},
      lessonSections: (parsed.lessonSections && typeof parsed.lessonSections === "object") ? parsed.lessonSections : {},
      practiceDone: (parsed.practiceDone && typeof parsed.practiceDone === "object") ? parsed.practiceDone : {},
      customRoadmap: Array.isArray(parsed.customRoadmap) ? parsed.customRoadmap : null
    };
  } catch(e) {
    return {
      doneLessons: [],
      scores: {},
      roadmapCheck: {},
      lessonSections: {},
      practiceDone: {},
      customRoadmap: null
    };
  }
}

const state = loadState();

function saveState() {
  localStorage.setItem("jpd123_local_full", JSON.stringify(state));
  renderProgress();
  if (typeof updateSidebarLessonNav === "function") {
    updateSidebarLessonNav();
  }
}

/* ---- Completion Status Helpers ---- */
function toggleLessonDone(id) {
  const numId = Number(id);
  const idx = state.doneLessons.indexOf(numId);
  const willBeDone = idx === -1;
  if (willBeDone) {
    state.doneLessons.push(numId);
    showToast(`Bài ${numId}: Đã hoàn thành! 🎉`, "success");
  } else {
    state.doneLessons.splice(idx, 1);
    showToast(`Bài ${numId}: Đã chuyển sang Chưa hoàn thành`, "info");
  }
  saveState();
  return willBeDone;
}

function isLessonDone(id) {
  return state.doneLessons.includes(Number(id));
}

function toggleSectionDone(key) {
  state.lessonSections[key] = !state.lessonSections[key];
  const isDone = !!state.lessonSections[key];
  saveState();
  showToast(isDone ? "Đã đánh dấu hoàn thành mục này!" : "Đã hủy đánh dấu mục này.", isDone ? "success" : "info");
  return isDone;
}

function isSectionDone(key) {
  return !!state.lessonSections[key];
}

function toggleRoadmapDay(day) {
  const numDay = Number(day);
  state.roadmapCheck[numDay] = !state.roadmapCheck[numDay];
  const isDone = !!state.roadmapCheck[numDay];
  saveState();
  showToast(isDone ? `Ngày ${numDay}: Đã hoàn thành!` : `Ngày ${numDay}: Chưa hoàn thành.`, isDone ? "success" : "info");
  return isDone;
}

function isRoadmapDayDone(day) {
  return !!state.roadmapCheck[Number(day)];
}

function togglePracticeLesson(id) {
  const key = `lesson-${id}`;
  state.practiceDone[key] = !state.practiceDone[key];
  const isDone = !!state.practiceDone[key];
  saveState();
  showToast(isDone ? `Luyện tập Bài ${id}: Đã hoàn thành!` : `Luyện tập Bài ${id}: Chưa hoàn thành.`, isDone ? "success" : "info");
  return isDone;
}

function isPracticeLessonDone(id) {
  return !!state.practiceDone[`lesson-${id}`];
}

function toggleMidtermDone(setNo) {
  const key = `midterm-${setNo}`;
  state.practiceDone[key] = !state.practiceDone[key];
  const isDone = !!state.practiceDone[key];
  saveState();
  showToast(isDone ? `Đề Midterm ${setNo}: Đã hoàn thành!` : `Đề Midterm ${setNo}: Chưa hoàn thành.`, isDone ? "success" : "info");
  return isDone;
}

function isMidtermDone(setNo) {
  return !!state.practiceDone[`midterm-${setNo}`];
}

/* ---- Backup / Restore ---- */
function exportStateBackup() {
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `JPD123_TienDo_${dateStr}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast("Đã tải xuống file sao lưu tiến độ!", "success");
  } catch (e) {
    showToast("Lỗi tải file sao lưu: " + e.message, "error");
  }
}

function importStateBackup(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== "object") throw new Error("Dữ liệu JSON không hợp lệ");
    state.doneLessons = Array.isArray(parsed.doneLessons) ? parsed.doneLessons : [];
    state.scores = (parsed.scores && typeof parsed.scores === "object") ? parsed.scores : {};
    state.roadmapCheck = (parsed.roadmapCheck && typeof parsed.roadmapCheck === "object") ? parsed.roadmapCheck : {};
    state.lessonSections = (parsed.lessonSections && typeof parsed.lessonSections === "object") ? parsed.lessonSections : {};
    state.practiceDone = (parsed.practiceDone && typeof parsed.practiceDone === "object") ? parsed.practiceDone : {};
    state.customRoadmap = Array.isArray(parsed.customRoadmap) ? parsed.customRoadmap : null;
    saveState();
    showToast("Khôi phục tiến độ thành công!", "success");
    return true;
  } catch (e) {
    showToast("Lỗi nhập dữ liệu: " + e.message, "error");
    return false;
  }
}

function renderProgress() {
  const totalUnits = LESSONS.length + ROADMAP.length;
  const lessonDone = state.doneLessons.length;
  const roadmapDone = Object.values(state.roadmapCheck).filter(Boolean).length;
  const percent = Math.round(((lessonDone + roadmapDone) / totalUnits) * 100);

  const fill = document.getElementById("progressFill");
  const text = document.getElementById("progressText");
  if (fill) {
    fill.style.width = percent + "%";
    // Color by level
    if (percent >= 75) fill.style.background = "linear-gradient(90deg, #16a34a, #22c55e)";
    else if (percent >= 40) fill.style.background = "linear-gradient(90deg, #f59e0b, #fbbf24)";
    else fill.style.background = "linear-gradient(90deg, #2563eb, #3b82f6)";
  }
  if (text) {
    text.textContent = `${percent}%`;
  }

  // Update header stats
  const hLessonDone = document.getElementById("hdr-lesson-done");
  const hRoadmapDone = document.getElementById("hdr-roadmap-done");
  const hPercent = document.getElementById("hdr-percent");
  if (hLessonDone) hLessonDone.textContent = lessonDone + "/7";
  if (hRoadmapDone) hRoadmapDone.textContent = roadmapDone + "/30";
  if (hPercent) hPercent.textContent = percent + "%";
}

/* ---- Utility helpers ---- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function uniqueChoices(correct, pool, count = 4) {
  const filtered = [...new Set(pool.filter(x => x && x !== correct))];
  return shuffle([correct, ...sample(filtered, count - 1)]);
}

/* ---- Toast notifications ---- */
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-msg">${message}</span>
      <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    </div>
  `;
  container.appendChild(toast);

  // Auto dismiss after 3s
  setTimeout(() => {
    toast.classList.add("toast-out");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
