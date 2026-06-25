/* Daniel Tuccillo — site interactions (vanilla JS, no dependencies) */
(function () {
  'use strict';

  // --- Mobile nav toggle ---
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close the menu after tapping a link
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // --- Footer year ---
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
