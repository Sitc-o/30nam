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

    // ── HASH CHANGE (Sync with section) ──
    window.addEventListener('hashchange', function() {
        var hash = window.location.hash;
        var type = hash.replace('#', '');
        var indexMap = {
            'khoi-nguon': 0,
            'troi-day': 1,
            'tang-toc': 2,
            'vuon-tam': 3
        };
        if (indexMap[type] !== undefined) {
            goTo(indexMap[type]);
        }
    });

    // ── OPEN MODAL FROM CTA ──
    var modal = document.querySelector('.journey-modal');
    var modalTitle = modal ? modal.querySelector('[data-j-title]') : null;
    var modalText = modal ? modal.querySelector('[data-j-text]') : null;
    var modalFull = modal ? modal.querySelector('[data-j-full]') : null;
    var modalImg = modal ? modal.querySelector('[data-j-img]') : null;

    var ctas = document.querySelectorAll('.fp-cta');
    ctas.forEach(function(cta) {
        cta.addEventListener('click', function(e) {
            e.preventDefault();
            if (!modal) return;
            if (modalTitle) modalTitle.textContent = cta.dataset.title || '';
            if (modalText) modalText.textContent = cta.dataset.text || '';
            if (modalFull) modalFull.href = cta.dataset.href || '#';
            if (modalImg) modalImg.href = cta.dataset.img || '#';
            modal.classList.add('open');
        });
    });

    // Init
    var initialHash = window.location.hash;
    var initialIndex = 0;
    var type = initialHash.replace('#', '');
    var indexMap = {
        'khoi-nguon': 0,
        'troi-day': 1,
        'tang-toc': 2,
        'vuon-tam': 3
    };
    if (indexMap[type] !== undefined) {
        initialIndex = indexMap[type];
    }
    
    if (fpSections) {
        fpSections.style.transition = 'none';
    }
    goTo(initialIndex);
    
    // Restore transition after first paint
    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            if (fpSections) {
                fpSections.style.transition = '';
            }
        });
    });
})();
