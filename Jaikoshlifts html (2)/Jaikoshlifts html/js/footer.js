/* ==========================================================================
   Jaikosh Lifts — Footer component
   Include this file on every page + add <div id="site-footer-mount"></div>
   near the end of <body>.
   ========================================================================== */

(function () {
  const YEAR = new Date().getFullYear();

  const FOOTER_HTML = `
  <footer class="site-footer">
    <div class="container footer-top">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand">
          <br>
          <br>
          <br>
<span class="brand-mark">
    <img src="images/Header logo.png" alt="Jaikosh Lifts">
</span>
        <span class="brand-text"><strong>Jaikosh Lifts</strong></span>
          </a>
          <p>Rising Higher, Safely with Jaikosh Lifts. Delivering safe, efficient and modern elevator solutions for every need.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7C16.5 3.6 15.5 3.5 14.3 3.5c-2.4 0-4 1.5-4 4.1v2.3H7.5V13H10.3v8Z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="1"/></svg></a>
            <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.7 14.3c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a15.7 15.7 0 0 1-7-5.4c-.6-.8-1-1.7-1-2.7 0-.9.5-1.7 1-2.2.2-.2.5-.3.7-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.4 0 .6a10 10 0 0 0 3 3c.2.2.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.4 0 .2 0 .8-.4 1.4Z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.4H3.6V20h3.3Zm-1.6-5a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 20h-3.3v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9.5V8.4h3.2v1.6h.1a3.5 3.5 0 0 1 3.2-1.7c3.4 0 4.4 2.2 4.4 5.2Z"/></svg></a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="components.html">Components</a></li>
            <li><a href="installation-process.html">Installation Process</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Our Services</h5>
          <ul>
            <li><a href="services.html#installation">Installation Services</a></li>
            <li><a href="services.html#maintenance">Maintenance Services</a></li>
            <li><a href="services.html#modernization">Modernization</a></li>
            <li><a href="services.html#amc">AMC / CMC Contracts</a></li>
            <li><a href="services.html#repair">Lift Repair & Breakdown</a></li>
            <li><a href="services.html#safety">Safety Inspection</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact Info</h5>
          <ul class="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>
              25, Dhanko ka mohalla, Nevta, Sanganer, Jaipur
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>
              +91 9649761085
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              info@jaikoshlifts.com
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>&copy; ${YEAR} Jaikosh Lifts | All Rights Reserved</span>
    </div>
  </footer>
  `;

  const mount = document.getElementById("site-footer-mount");
  if (mount) mount.innerHTML = FOOTER_HTML;
})();
