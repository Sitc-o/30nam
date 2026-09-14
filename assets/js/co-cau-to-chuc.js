/* ================================================================
   CƠ CẤU TỔ CHỨC — Vanilla JS  |  Real Viettel Commerce data
   ================================================================ */
'use strict';

const LEADERS_MODAL = {
  phuong: {
    badge: 'Hội Đồng Quản Trị', rank: 'Thiếu tướng',
    name: 'ĐỖ MINH PHƯƠNG', role: 'Chủ tịch Tổng Công ty',
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Phuong.jpg',
    fallback: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop',
    bio: 'Thiếu tướng Đỗ Minh Phương từng giữ chức vụ Phó Tổng Giám đốc Tập đoàn Viettel kiêm Giám đốc Công ty Thương mại Viettel trong giai đoạn 5.2017–6.2018. Với bề dày kinh nghiệm quản lý cấp cao trong hệ thống Viettel, ông đã đóng góp quan trọng vào định hướng phát triển chiến lược của Tổng Công ty.',
    highlights: [
      'Phó Tổng Giám đốc Tập đoàn Viettel kiêm Giám đốc Công ty (5.2017–6.2018)',
      'Định hướng chiến lược phát triển kinh doanh thương mại Viettel',
      'Lãnh đạo giai đoạn chuyển mình và tái cơ cấu của Công ty'
    ]
  },
  hung: {
    badge: 'Ban Điều Hành', rank: 'Đại tá',
    name: 'PHẠM VĂN HÙNG', role: 'Tổng Giám đốc Tổng Công ty',
    img: 'assets/images/giam-doc-pham-van-hung.jpg',
    fallback: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format&fit=crop',
    bio: 'Đại tá Phạm Văn Hùng là nhà lãnh đạo có bề dày kinh nghiệm trong hệ thống Viettel. Ông đã đảm nhận vai trò Chủ tịch kiêm Giám đốc Công ty từ 6.2019 đến 6.2021 trước khi trở thành Tổng Giám đốc Tổng Công ty. Phong cách lãnh đạo thực tiễn và định hướng kết quả đã giúp Viettel Commerce đạt nhiều thành tích nổi bật trong giai đoạn chuyển đổi mạnh mẽ.',
    highlights: [
      'Chủ tịch kiêm Giám đốc Công ty (6.2019–6.2021)',
      'Tổng Giám đốc Tổng Công ty (6.2021–nay)',
      'Dẫn dắt chuyển đổi mô hình từ Công ty lên Tổng Công ty',
      'Thúc đẩy số hóa và hiện đại hóa hệ thống vận hành'
    ]
  },
  dung: {
    badge: 'Ban Điều Hành', rank: 'Trung tá',
    name: 'ĐINH THỊ DUNG', role: 'Phó Tổng Giám đốc kiêm Giám đốc TT Kinh doanh Thiết bị số',
    img: 'assets/images/Đinh Thị Dung_cut.png',
    fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop',
    bio: 'Trung tá Đinh Thị Dung đảm nhiệm vai trò kép là Phó Tổng Giám đốc Tổng Công ty và trực tiếp điều hành Trung tâm Kinh doanh Thiết bị số — đơn vị phân phối thiết bị công nghệ hàng đầu trong hệ thống Viettel.',
    highlights: [
      'Phó Tổng Giám đốc Tổng Công ty Thương mại Viettel',
      'Giám đốc Trung tâm Kinh doanh Thiết bị số',
      'Phụ trách mảng kinh doanh thiết bị công nghệ toàn quốc'
    ]
  },
  tuyen: {
    badge: 'Ban Điều Hành', rank: 'Trung tá QNCN',
    name: 'PHẠM TIẾN TUYỀN', role: 'Phó Tổng Giám đốc kiêm Giám đốc Trung tâm Phân phối',
    img: 'assets/images/Ảnh các anh/ChatGPT Image 11_38_43 15 thg 6, 2026.png',
    fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
    bio: 'Trung tá QNCN Phạm Tiến Tuyền giữ vai trò Phó Tổng Giám đốc và trực tiếp điều hành Trung tâm Phân phối — đơn vị vận hành hệ thống logistics và chuỗi cung ứng quy mô lớn, đảm bảo hàng hóa được phân phối thông suốt trên toàn quốc.',
    highlights: [
      'Phó Tổng Giám đốc Tổng Công ty Thương mại Viettel',
      'Giám đốc Trung tâm Phân phối',
      'Phụ trách hệ thống logistics và chuỗi cung ứng toàn quốc'
    ]
  }
};

const siteHeader     = document.getElementById('siteHeader');
const progressBar    = document.getElementById('progressBar');
const subnavPills    = document.querySelectorAll('.subnav__pill');
const deptRows       = document.querySelectorAll('.dept-row');
const deptPreview    = document.getElementById('deptPreview');
const deptPreviewImg = document.getElementById('deptPreviewImg');
const bioModal       = document.getElementById('bioModal');
const modalCloseBtn  = document.getElementById('modalCloseBtn');

/* Progress bar */
function updateProgress() {
  const d = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = (d > 0 ? (window.scrollY / d) * 100 : 0) + '%';
}

/* Header shadow */
function updateHeader() {
  siteHeader && siteHeader.classList.toggle('scrolled', window.scrollY > 10);
}

/* Active subnav pill */
const NAV_IDS  = ['section-leadership','section-departments','section-centers','section-party'];
const NAV_KEYS = ['leadership','departments','centers','party'];
function updateActiveNav() {
  let active = NAV_KEYS[0];
  NAV_IDS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top + window.scrollY - 160 <= window.scrollY) active = NAV_KEYS[i];
  });
  subnavPills.forEach(p => p.classList.toggle('active', p.dataset.section === active));
}

/* Scroll reveal */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = Array.from(entry.target.parentElement?.querySelectorAll('.reveal-item') || []);
    const delay = Math.min(siblings.indexOf(entry.target) * 80, 400);
    setTimeout(() => entry.target.classList.add('is-visible'), delay);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal-item').forEach(el => revealObs.observe(el));

/* Dept hover preview */
let previewTimer;
deptRows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    const src = row.dataset.img;
    if (!deptPreview || !src) return;
    clearTimeout(previewTimer);
    deptPreviewImg.style.opacity = '0';
    deptPreviewImg.style.transform = 'scale(1.05)';
    previewTimer = setTimeout(() => {
      deptPreviewImg.src = src;
      deptPreviewImg.style.transition = 'opacity 0.4s ease, transform 0.5s ease';
      deptPreviewImg.style.opacity = '1';
      deptPreviewImg.style.transform = 'scale(1)';
    }, 80);
  });
});

/* Smooth scroll subnav */
subnavPills.forEach(pill => {
  pill.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(pill.getAttribute('href'));
    if (!target) return;
    const hH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 64;
    const sH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--subnav-h'))  || 56;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - hH - sH - 16, behavior: 'smooth' });
  });
});

/* Hero scroll cta */
const heroScrollCta = document.querySelector('.hero__scroll-cta');
if (heroScrollCta) {
  heroScrollCta.addEventListener('click', e => {
    e.preventDefault();
    const t = document.getElementById('section-leadership');
    if (t) window.scrollTo({ top: t.offsetTop - 120, behavior: 'smooth' });
  });
}

/* Modal */
function openModal(id) {
  const d = LEADERS_MODAL[id];
  if (!d) return;
  const imgEl = document.getElementById('modalImg');
  imgEl.src = d.img;
  imgEl.alt = d.name;
  imgEl.onerror = () => { imgEl.src = d.fallback; imgEl.onerror = null; };
  document.getElementById('modalBadge').textContent = d.badge;
  document.getElementById('modalRank').textContent  = d.rank;
  document.getElementById('modalName').textContent  = d.name;
  document.getElementById('modalRole').textContent  = d.role;
  document.getElementById('modalBio').textContent   = d.bio;
  document.getElementById('modalHighlights').innerHTML = (d.highlights||[])
    .map(h => `<div class="modal__highlight-item"><span class="modal__highlight-dot"></span><span>${h}</span></div>`)
    .join('');
  bioModal.classList.add('is-open');
  bioModal.focus();
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  bioModal.classList.remove('is-open');
  document.body.style.overflow = '';
}
bioModal.addEventListener('click', e => { if (e.target === bioModal) closeModal(); });
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && bioModal.classList.contains('is-open')) closeModal();
});
window.openModal = openModal;
window.closeModal = closeModal;

/* RAF scroll */
let raf;
window.addEventListener('scroll', () => {
  if (raf) cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => { updateHeader(); updateProgress(); updateActiveNav(); });
}, { passive: true });

updateHeader(); updateProgress(); updateActiveNav();
