/* ============================================================
   main.js — App init, navigation, routing
   ============================================================ */

function setActiveNav(view) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
}

function renderView(view) {
  window.scrollTo({ top: 0, behavior: "instant" });
  if (view === "home") renderHome();
  else if (view === "roadmap") renderRoadmap();
  else if (view === "speaking") renderSpeaking();
  else if (view === "exam") renderExamHome();
  else if (view === "practice") renderPracticeHub();
  else if (view.startsWith("lesson-")) renderLesson(Number(view.split("-")[1]));
}

function closeMobileSidebar() {
  const app = document.querySelector(".app");
  if (app && app.classList.contains("sidebar-mobile-open")) {
    app.classList.remove("sidebar-mobile-open");
    document.body.classList.remove("menu-open");
  }
}

function openMobileSidebar() {
  const app = document.querySelector(".app");
  if (app) {
    app.classList.add("sidebar-mobile-open");
    document.body.classList.add("menu-open");
  }
}

function toggleMobileSidebar() {
  const app = document.querySelector(".app");
  if (!app) return;
  if (app.classList.contains("sidebar-mobile-open")) {
    closeMobileSidebar();
  } else {
    openMobileSidebar();
  }
}

function updateSidebarLessonNav() {
  const lessonNav = document.getElementById("lessonNav");
  if (!lessonNav) return;
  lessonNav.querySelectorAll(".nav-btn").forEach(btn => {
    const view = btn.dataset.view;
    if (view && view.startsWith("lesson-")) {
      const id = Number(view.replace("lesson-", ""));
      const isDone = isLessonDone(id);
      btn.classList.toggle("nav-lesson-done", isDone);
      let badge = btn.querySelector(".nav-check-badge");
      if (isDone) {
        if (!badge) {
          badge = document.createElement("span");
          badge.className = "nav-check-badge";
          badge.textContent = "✓";
          btn.appendChild(badge);
        }
      } else {
        if (badge) badge.remove();
      }
    }
  });
}

function initNav() {
  const lessonNav = document.getElementById("lessonNav");
  lessonNav.innerHTML = LESSONS.map(l => {
    const isDone = isLessonDone(l.id);
    return `
      <button class="nav-btn ${isDone ? 'nav-lesson-done' : ''}" data-view="lesson-${l.id}">
        <span class="nav-btn-text">Bài ${l.id} — ${l.title}</span>
        ${isDone ? '<span class="nav-check-badge">✓</span>' : ''}
      </button>
    `;
  }).join("");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      renderView(btn.dataset.view);
      if (window.innerWidth <= 1024) {
        closeMobileSidebar();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

/* ---- Reset progress ---- */
document.getElementById("resetProgressBtn").onclick = () => {
  // Use a modal-style confirm instead of native confirm
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-content">
      <h3 class="modal-title">Reset tiến độ?</h3>
      <p class="text-muted">Toàn bộ tiến độ và điểm quiz sẽ bị xóa. Thao tác này không thể hoàn tác.</p>
      <div class="btn-row" style="justify-content:flex-end;margin-top:20px">
        <button class="btn btn-secondary" id="cancelReset">Hủy</button>
        <button class="btn btn-danger" id="confirmReset">Reset</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => overlay.classList.add("modal-visible"));

  const closeResetModal = () => {
    overlay.classList.remove("modal-visible");
    document.body.classList.remove("modal-open");
    setTimeout(() => overlay.remove(), 300);
  };

  overlay.querySelector("#cancelReset").onclick = closeResetModal;
  overlay.querySelector("#confirmReset").onclick = () => {
    document.body.classList.remove("modal-open");
    localStorage.removeItem("jpd123_local_full");
    location.reload();
  };
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      closeResetModal();
    }
  });
};

/* ---- Back to Top Floating Button ---- */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---- Sidebar toggle ---- */
function initSidebarToggle() {
  const app      = document.querySelector(".app");
  const btnHead  = document.getElementById("sidebarToggle");
  const btnEdge  = document.getElementById("sidebarEdgeToggle");
  const btnClose = document.getElementById("sidebarMobileClose");
  const backdrop = document.getElementById("sidebarBackdrop");
  if (!app) return;

  const isMobile = () => window.innerWidth <= 1024;

  // Restore last state on desktop
  const saved = localStorage.getItem("jpd123_sidebar");
  if (!isMobile() && saved === "collapsed") {
    app.classList.add("sidebar-collapsed");
  }

  function handleToggle() {
    if (isMobile()) {
      toggleMobileSidebar();
    } else {
      app.classList.toggle("sidebar-collapsed");
      localStorage.setItem(
        "jpd123_sidebar",
        app.classList.contains("sidebar-collapsed") ? "collapsed" : "open"
      );
    }
  }

  if (btnHead) btnHead.addEventListener("click", handleToggle);
  if (btnEdge) btnEdge.addEventListener("click", handleToggle);
  if (btnClose) btnClose.addEventListener("click", closeMobileSidebar);
  if (backdrop) backdrop.addEventListener("click", closeMobileSidebar);

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      closeMobileSidebar();
    }
  });
}

/* ---- Backup & Restore (Frontend only) ---- */
function initBackupRestore() {
  const expBtn = document.getElementById("exportProgressBtn");
  const impBtn = document.getElementById("importProgressBtn");
  const fileInput = document.getElementById("importFileInput");

  if (expBtn) {
    expBtn.onclick = () => exportStateBackup();
  }

  if (impBtn && fileInput) {
    impBtn.onclick = () => fileInput.click();
    fileInput.onchange = e => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const success = importStateBackup(ev.target.result);
        if (success) {
          setTimeout(() => location.reload(), 600);
        }
      };
      reader.readAsText(file);
      fileInput.value = "";
    };
  }
}

/* ---- Boot ---- */
primeJapaneseVoices();
initNav();
initSidebarToggle();
initBackToTop();
initBackupRestore();
renderProgress();
renderHome();
