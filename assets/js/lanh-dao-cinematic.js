(() => {
  'use strict';

  /* ─── 1. LENIS SMOOTH SCROLL ─── */
  const lenis = new Lenis({
    duration: 1.15,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  gsap.registerPlugin(ScrollTrigger);

  /* ─── 2. INTRO ANIMATION ─── */
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to('.intro__eyebrow', { opacity: 1, y: 0, duration: .7, delay: .35 })
    .to('.intro__title',   { opacity: 1, y: 0, duration: 1.1 }, '-=.3')
    .to('.intro__line',    { opacity: 1, scaleX: 1, duration: .8, ease: 'power2.inOut' }, '-=.6')
    .to('.intro__sub',     { opacity: 1, y: 0, duration: .8 }, '-=.5')
    .to('.intro__scroll',  { opacity: 1, duration: .6 }, '-=.3');

  /* ─── 3. LEADER SECTIONS SCROLL LOGIC ─── */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {

    const dots = document.querySelectorAll('.dot-nav__item');

    document.querySelectorAll('.ldr-section').forEach((sec, i) => {
      const overlay = sec.querySelector('.ldr-hero__overlay');
      const bg      = sec.querySelector('.ldr-hero__bg');
      const content = sec.querySelector('.ldr-content');
      const cards   = sec.querySelectorAll('.ldr-card-wrap');

      // 1. Hiệu ứng làm mờ/tối ảnh Hero khi nội dung bắt đầu trượt lên
      if (overlay && content) {
        gsap.to(overlay, {
          opacity: 1, // Kéo opacity từ 0 lên 1 (CSS đã setup gradient đen/đỏ)
          ease: 'none',
          scrollTrigger: {
            trigger: content,
            start: 'top 90%', // Bắt đầu làm tối khi content chạm 90% màn hình
            end: 'top 15%',   // Tối hoàn toàn khi content lên gần top
            scrub: true
          }
        });
      }

      // 2. Hiệu ứng Parallax nhẹ (Ken Burns) cho ảnh Hero
      if (bg) {
        gsap.to(bg, {
          scale: 1.06,
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // 3. Hiệu ứng hiện các ảnh phụ (Cards) khi scroll tới
      cards.forEach(card => {
        gsap.fromTo(card, { opacity: 0, y: 120 }, {
          opacity: 1, y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // 4. Dot Navigation Active State
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: self => {
          if (self.isActive && dots[i]) {
            dots.forEach(d => d.classList.remove('is-active'));
            dots[i].classList.add('is-active');
          }
        }
      });
    });

    // Xử lý Click Dot Navigation
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const target = document.getElementById(dot.dataset.target);
        if (target) {
          lenis.scrollTo(target, { offset: 0, duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) });
        }
      });
    });

    return () => {}; // Cleanup function for matchMedia
  });

  /* ─── 4. MOBILE LOGIC ─── */
  mm.add('(max-width: 1023px)', () => {
    document.querySelectorAll('.ldr-card-wrap, .ldr-text-block').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });
  });

  /* ─── 5. REFRESH ON LOAD ─── */
  window.addEventListener('load', () => ScrollTrigger.refresh(true));

})();
