/* ================================================================
   ORG SCROLLYTELLING — JavaScript Controller
   Strategy: IntersectionObserver (no GSAP CDN dependency needed)
   + GSAP ScrollTo for float-nav click jumps (loaded from CDN if available)
   Gracefully degrades to native scrollIntoView if GSAP absent.
   ================================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────
     0. DATA — Map tier metadata for each section
  ────────────────────────────────────────────── */
  const TIERS = [
    {
      section:  'section-leaders',
      tier:     1,
      eyebrow:  '01. BỘ NÃO CHIẾN LƯỢC',
      label:    'Ban Lãnh đạo Tổng Công ty',
      desc:     'Định hướng chiến lược, điều hành toàn diện hoạt động của Tổng Công ty.',
    },
    {
      section:  'section-depts',
      tier:     2,
      eyebrow:  '02. HỆ THẦN KINH ĐIỀU PHỐI',
      label:    'Khối Cơ quan Tổng Công ty',
      desc:     'Phòng ban điều phối nội bộ, tham mưu và hỗ trợ hoạt động vận hành.',
    },
    {
      section:  'section-centers',
      tier:     3,
      eyebrow:  '03. CÁNH TAY THỰC THI',
      label:    'Các Trung tâm trực thuộc',
      desc:     'Đơn vị kinh doanh, vận hành và phục vụ khách hàng trực tiếp.',
    },
    {
      section:  'section-party',
      tier:     4,
      eyebrow:  '04. NỀN TẢNG CHÍNH TRỊ',
      label:    'Đảng bộ & Tổ chức Quần chúng',
      desc:     'Lãnh đạo toàn diện, xây dựng đơn vị vững mạnh về chính trị và đoàn kết.',
    },
  ];

  /* ──────────────────────────────────────────────
     1. DOM REFS
  ────────────────────────────────────────────── */
  const mapEl       = document.querySelector('.org-scrolly-map');
  const connectorEl = mapEl?.querySelector('.org-map-connector');
  const eyebrowEl   = mapEl?.querySelector('.org-map-eyebrow');
  const labelEl     = mapEl?.querySelector('.org-map-label');
  const descEl      = mapEl?.querySelector('.org-map-desc');
  const pyrTiers    = mapEl ? mapEl.querySelectorAll('.pyr-tier') : [];
  const pyrLabels   = mapEl ? mapEl.querySelectorAll('.pyr-tier-label') : [];
  const pyrNums     = mapEl ? mapEl.querySelectorAll('.pyr-tier-num') : [];
  const navBtns     = document.querySelectorAll('.org-float-nav__btn');

  /* Helper: get tier elements by data-tier value */
  function getTierEl(collection, tierNum) {
    return Array.from(collection).find(el => el.dataset.tier === String(tierNum));
  }

  /* ──────────────────────────────────────────────
     2. STATE
  ────────────────────────────────────────────── */
  let activeTier = 0;
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  /* ──────────────────────────────────────────────
     3. UPDATE MAP PANEL
  ────────────────────────────────────────────── */
  function updateMap(tierData) {
    if (!mapEl || isMobile()) return;
    if (tierData.tier === activeTier) return;
    activeTier = tierData.tier;

    /* — Pyramid tiers — */
    pyrTiers.forEach(el => el.classList.remove('active'));
    pyrLabels.forEach(el => el.classList.remove('active'));
    pyrNums.forEach(el => el.classList.remove('active'));

    const activeTierEl   = getTierEl(pyrTiers,  tierData.tier);
    const activeLabelEl  = getTierEl(pyrLabels, tierData.tier);
    const activeNumEl    = getTierEl(pyrNums,   tierData.tier);
    activeTierEl?.classList.add('active');
    activeLabelEl?.classList.add('active');
    activeNumEl?.classList.add('active');

    /* — Text panel: fade out → swap → fade in — */
    [eyebrowEl, labelEl, descEl, connectorEl].forEach(el => {
      el?.classList.remove('visible');
    });

    setTimeout(() => {
      if (eyebrowEl) eyebrowEl.textContent = tierData.eyebrow;
      if (labelEl)   labelEl.textContent   = tierData.label;
      if (descEl)    descEl.textContent    = tierData.desc;

      requestAnimationFrame(() => {
        [eyebrowEl, labelEl, descEl, connectorEl].forEach(el => {
          el?.classList.add('visible');
        });
      });
    }, 200);

    /* — Float nav active dot — */
    navBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tier === String(tierData.tier));
    });
  }

  /* ──────────────────────────────────────────────
     4. STAGGER REVEAL — cards entering viewport
  ────────────────────────────────────────────── */
  function initStaggerReveal() {
    const items = document.querySelectorAll(
      '.org-story-section .ldr-section, .org-story-section .org-item'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('story-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    });

    items.forEach(el => observer.observe(el));
  }

  /* ──────────────────────────────────────────────
     5. SECTION TRACKER — which tier is in view?
  ────────────────────────────────────────────── */
  function initSectionTracker() {
    const sections = TIERS.map(t => document.getElementById(t.section));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = sections.indexOf(entry.target);
          if (idx !== -1) updateMap(TIERS[idx]);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-25% 0px -60% 0px',  /* fires when section crosses upper 25% of viewport */
    });

    sections.forEach(s => s && observer.observe(s));
  }

  /* ──────────────────────────────────────────────
     6. FLOAT NAV — smooth scroll to section
  ────────────────────────────────────────────── */
  function initFloatNav() {
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        /* Use GSAP ScrollToPlugin if available, else native */
        if (window.gsap && window.ScrollToPlugin) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetEl, offsetY: 90 },
            ease: 'power2.inOut',
          });
        } else {
          const top = targetEl.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ──────────────────────────────────────────────
     7. GSAP optional registration
  ────────────────────────────────────────────── */
  function tryRegisterGSAP() {
    if (window.gsap && window.ScrollToPlugin) {
      gsap.registerPlugin(ScrollToPlugin);
    }
  }

  /* ──────────────────────────────────────────────
     8. INIT — run after DOM ready
  ────────────────────────────────────────────── */
  function init() {
    tryRegisterGSAP();
    initStaggerReveal();
    initSectionTracker();
    initFloatNav();

    /* Trigger first tier immediately */
    updateMap(TIERS[0]);
    navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tier === '1');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
