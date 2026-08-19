/* ==========================================================================
   Jaikosh Lifts — Header component
   Include this file on every page + add <div id="site-header-mount"></div>
   at the top of <body>. Set <body data-page="home"> (or services / products /
   about / components / process / contact) so the matching nav link gets the
   "active" style automatically.
   ========================================================================== */

(function () {
  const HEADER_HTML = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-info">
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>
          25, Dhanko ka mohalla, Nevta, Sanganer, Jaipur
        </a>
        <a href="tel:+91 9521053846">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>
          +91 9521053846
        </a>
        <a href="mailto:info@jaikoshlifts.com">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
          info@jaikoshlifts.com
        </a>
      </div>
      <div class="topbar-social">
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7C16.5 3.6 15.5 3.5 14.3 3.5c-2.4 0-4 1.5-4 4.1v2.3H7.5V13H10.3v8Z"/></svg></a>
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="1"/></svg></a>
        <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.7 14.3c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a15.7 15.7 0 0 1-7-5.4c-.6-.8-1-1.7-1-2.7 0-.9.5-1.7 1-2.2.2-.2.5-.3.7-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.4 0 .6a10 10 0 0 0 3 3c.2.2.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.4 0 .2 0 .8-.4 1.4Z"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.4H3.6V20h3.3Zm-1.6-5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 20h-3.3v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9.5V8.4h3.2v1.6h.1a3.5 3.5 0 0 1 3.2-1.7c3.4 0 4.4 2.2 4.4 5.2Z"/></svg></a>
      </div>
    </div>
  </div>

  <header class="site-header">
    <div class="container nav">
      <a href="index.html" class="brand">
        <span class="brand-mark">
    <img src="images/Header logo.png" alt="Jaikosh Lifts Logo">
</span>
      </a>

      <ul class="nav-links">
        <li><a href="index.html" data-page="home">Home</a></li>
        <li><a href="services.html" data-page="services">Our Services</a></li>
        <li class="has-dropdown">
          <button type="button" class="nav-link-btn" data-page="products">
            Products
            <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <ul class="dropdown">
            <li><a href="home-elevator.html">Home Elevator</a></li>
            <li><a href="hospital-elevator.html">Hospital Elevator</a></li>
            <li><a href="goods-elevator.html">Goods Elevator</a></li>
            <li><a href="capsule-elevator.html">Capsule Elevator</a></li>
            <li><a href="vacuum-elevator.html">Vacuum Elevator</a></li>
          </ul>
        </li>
        <li><a href="about.html" data-page="about">About us</a></li>
        <li class="has-dropdown">
          <button type="button" class="nav-link-btn" data-page="components">
            Components
            <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <ul class="dropdown">
            <li><a href="door-series.html">Door Series</a></li>
            <li><a href="cabin-series.html">Cabin Series</a></li>
          </ul>
        </li>
        <li><a href="installation-process.html" data-page="process">Installation Process</a></li>
        <li><a href="contact.html" data-page="contact">Contact us</a></li>
      </ul>

      <div class="header-actions">
        <a href="contact.html#quote" class="btn btn-primary">
          Get a Quote
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <button class="hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
  <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
    <div class="mobile-nav-head">
      <span class="brand-text"><strong>Jaikosh Lifts</strong></span>
      <button class="mobile-nav-close" id="mobileNavClose" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <ul class="mobile-nav-links">
      <li><a href="index.html" data-page="home">Home</a></li>
      <li><a href="services.html" data-page="services">Our Services</a></li>
      <li class="msub-item">
        <button type="button" class="msub-toggle" data-page="products">
          Products
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <ul class="mobile-submenu">
          <li><a href="home-elevator.html">Home Elevator</a></li>
          <li><a href="hospital-elevator.html">Hospital Elevator</a></li>
          <li><a href="goods-elevator.html">Goods Elevator</a></li>
          <li><a href="capsule-elevator.html">Capsule Elevator</a></li>
          <li><a href="vacuum-elevator.html">Vacuum Elevator</a></li>
        </ul>
      </li>
      <li><a href="about.html" data-page="about">About us</a></li>
      <li class="msub-item">
        <button type="button" class="msub-toggle" data-page="components">
          Components
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <ul class="mobile-submenu">
          <li><a href="door-series.html">Door Series</a></li>
          <li><a href="cabin-series.html">Cabin Series</a></li>
        </ul>
      </li>
      <li><a href="installation-process.html" data-page="process">Installation Process</a></li>
      <li><a href="contact.html" data-page="contact">Contact us</a></li>
    </ul>
    <div class="mobile-nav-foot">
      <a href="contact.html#quote" class="btn btn-primary btn-block">Get a Quote</a>
      <a href="tel:+919649761085" class="btn btn-ghost-purple btn-block">Call Us: +91 96497 61085</a>
    </div>
  </nav>
  `;

  const mount = document.getElementById("site-header-mount");
  if (mount) {
    mount.innerHTML = HEADER_HTML;
    highlightActiveLinks();
  }

  function highlightActiveLinks() {
    const page = document.body.getAttribute("data-page");
    if (!page) return;
    document.querySelectorAll(`.nav-links a[data-page="${page}"]`).forEach(a => a.classList.add("active"));
  }
})();
