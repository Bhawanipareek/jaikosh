/* ==========================================================================
   Jaikosh Lifts — Shared site behaviour
   Runs on every page, after header.js / footer.js have injected their markup.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", init);

function init() {
  setupMobileNav();
  setupDesktopDropdownKeyboard();
  setupMobileSubmenus();
  setupHeaderScrollShadow();
}

/* ---------- Mobile drawer open/close ---------- */
function setupMobileNav() {
  const hamburger = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileNav");
  const overlay = document.getElementById("mobileNavOverlay");
  const closeBtn = document.getElementById("mobileNavClose");
  if (!hamburger || !drawer || !overlay) return;

  const open = () => {
    drawer.classList.add("open");
    overlay.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-locked");
  };
  const close = () => {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  };

  hamburger.addEventListener("click", () => {
    drawer.classList.contains("open") ? close() : open();
  });
  closeBtn && closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------- Mobile "Products" accordion submenu ---------- */
function setupMobileSubmenus() {
  document.querySelectorAll(".mobile-nav-links .msub-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".msub-item");
      item.classList.toggle("open");
    });
  });
}

/* ---------- Desktop dropdown: allow keyboard / tap-to-open on touch ---------- */
function setupDesktopDropdownKeyboard() {
  document.querySelectorAll(".has-dropdown").forEach((li) => {
    const btn = li.querySelector(".nav-link-btn");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = li.classList.contains("open");
      document.querySelectorAll(".has-dropdown.open").forEach((el) => el.classList.remove("open"));
      if (!isOpen) li.classList.add("open");
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach((el) => el.classList.remove("open"));
    }
  });
}

/* ---------- Slight shadow/height change once user scrolls ---------- */
function setupHeaderScrollShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 8
      ? "0 4px 18px rgba(16,21,58,.10)"
      : "0 2px 14px rgba(16,21,58,.06)";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

