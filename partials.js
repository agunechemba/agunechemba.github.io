/* ============================================================
   partials.js — shared header & footer for every page
   Load with:  <script src="/partials.js" defer></script>

   Each page needs two empty slots:
     <div id="site-header"></div>
     <div id="site-footer"></div>
   ============================================================ */
(function () {
  'use strict';

  /* ---------- shared assets ---------- */
  var LOGO_SMALL = 'https://agunechembaekene.wordpress.com/wp-content/uploads/2026/09/agunechemba-ekene-dp-small.png';

  /* ---------- HEADER ---------- */
  var HEADER_HTML =
    '<header class="header" id="header">\n' +
    '  <div class="header__inner">\n' +
    '    <a class="brand" href="https://agunechemba.github.io/" aria-label="Agunechemba Ekene — home">\n' +
    '      <img class="brand__logo" src="' + LOGO_SMALL + '" alt="" width="34" height="34"\n' +
    '           loading="eager" decoding="async" />\n' +
    '      <span class="brand__name"><span>Agunechemba </span>Ekene</span>\n' +
    '    </a>\n' +
    '    <nav class="nav" aria-label="Primary">\n' +
    '      <a href="https://agunechemba.github.io/PPH">PPH</a>\n' +
    '      <a href="https://agunechemba.github.io/projects.html">Projects</a> \n' +
    '      <a href="https://www.linkedin.com/in/agunechembaekene/" target="_blank" rel="noopener noreferrer">LinkedIn</a>\n' +
    '      <a href="https://wa.me/2349066115252" class="cta" target="_blank" rel="noopener noreferrer">Contact</a>\n' +
    '    </nav>\n' +
    '  </div>\n' +
    '</header>';

/* ---------- FOOTER ---------- */
var FOOTER_HTML =
  '<footer class="footer" id="about">\n' +
  '  <div class="footer__inner">\n' +
  '    <p style="margin:0">&copy; <span id="year">2026</span> ' +
  '       <a href="https://agunechemba.github.io/">Agunechemba Ekene</a></p>\n' +
  '    <p style="margin:0">\n' +
  '      <a href="https://agunechemba.github.io/PPH">PPH</a> \u00b7\n' +
  '      <a href="https://agunechemba.github.io/projects.html">Projects</a> \u00b7\n' +
  '      <a href="https://www.linkedin.com/in/agunechembaekene/" target="_blank" rel="noopener noreferrer">LinkedIn</a>\n' +
  '    </p>\n' +
  '  </div>\n' +
  '</footer>';

  /* ---------- mount ---------- */
  function mount() {
    var headerSlot = document.getElementById('site-header');
    var footerSlot = document.getElementById('site-footer');

    if (headerSlot) {
      headerSlot.insertAdjacentHTML('beforebegin', HEADER_HTML);
      headerSlot.remove();
    }
    if (footerSlot) {
      footerSlot.insertAdjacentHTML('beforebegin', FOOTER_HTML);
      footerSlot.remove();
    }

    /* current year */
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    /* sticky-header scrolled state */
    var header = document.getElementById('header');
    if (header) {
      var onScroll = function () {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* tell page scripts the chrome is ready */
    document.dispatchEvent(new CustomEvent('partials:ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
