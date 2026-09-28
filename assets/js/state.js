/* ============================================================
   state.js — localStorage, progress, utility helpers
   ============================================================ */

function loadState() {
  try {
    const raw = localStorage.getItem("jpd123_local_full");
    return raw ? JSON.parse(raw) : { doneLessons: [], scores: {}, roadmapCheck: {} };
  } catch(e) {
    return { doneLessons: [], scores: {}, roadmapCheck: {} };
  }
}

const state = loadState();

function saveState() {
  localStorage.setItem("jpd123_local_full", JSON.stringify(state));
  renderProgress();
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
