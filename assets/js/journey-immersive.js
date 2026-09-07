(function () {
    'use strict';
    var TOTAL = 4;
    var current = 0;
    var isAnimating = false;
    var touchStartY = 0;
    var lastScrollTime = 0;
    var SCROLL_COOLDOWN = 950; // ms between transitions

    var sections     = document.querySelectorAll('.fp-section');
    var fpSections   = document.getElementById('fpSections');
    var dots         = document.querySelectorAll('.fp-dot');
    var progressBar  = document.getElementById('fpProgressBar');
    var counterEl    = document.getElementById('fpCounterCurrent');
    var scrollHint   = document.getElementById('fpScrollHint');

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function goTo(index) {
        if (index < 0 || index >= TOTAL) return;
        if (isAnimating) return;
        var now = Date.now();
        if (now - lastScrollTime < SCROLL_COOLDOWN) return;
        lastScrollTime = now;
        isAnimating = true;

        current = index;

        // Slide the wrapper vertically
        if (fpSections) {
            fpSections.style.transform = 'translateY(-' + (current * 100) + 'dvh)';
        }

        // Active states
        sections.forEach(function(s, i) {
            s.classList.toggle('is-active', i === current);
        });
        dots.forEach(function(d, i) {
            d.classList.toggle('is-active', i === current);
        });

        // Progress bar
        if (progressBar) {
            progressBar.style.width = ((current + 1) / TOTAL * 100) + '%';
        }

        // Counter
        if (counterEl) {
            counterEl.textContent = pad(current + 1);
        }

        // Hide scroll hint
        if (current > 0 && scrollHint) {
            scrollHint.classList.add('hidden');
        }

        setTimeout(function() { isAnimating = false; }, SCROLL_COOLDOWN);
    }

    // ── WHEEL ──
    window.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (Math.abs(e.deltaY) < 10) return;
        if (e.deltaY > 0) goTo(current + 1);
        else              goTo(current - 1);
    }, { passive: false });

    // ── TOUCH ──
    window.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', function(e) {
        var delta = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(delta) > 40) {
            if (delta > 0) goTo(current + 1);
            else           goTo(current - 1);
        }
    }, { passive: true });

    // ── KEYBOARD ──
    window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(current + 1); }
        if (e.key === 'ArrowUp'   || e.key === 'PageUp'  ) { e.preventDefault(); goTo(current - 1); }
    });

    // ── DOTS ──
    dots.forEach(function(d) {
        d.addEventListener('click', function() {
            goTo(parseInt(d.getAttribute('data-goto'), 10));
        });
    });

    // Init
    goTo(0);
})();
