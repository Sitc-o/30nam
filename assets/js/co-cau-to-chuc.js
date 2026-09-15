const LEADERS = [
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Chu      ,,,,,.jpg',
    rank: 'Đồng chí',
    name: 'HỒ CÔNG VIỆT',
    roles: [
      { title: 'Trưởng phòng Xuất nhập khẩu', time: '(4.1997-11.1997)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đồng chí Hồ Công Việt sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh cương.jpg',
    rank: 'Đại tá',
    name: 'ĐỖ NGỌC CƯỜNG',
    roles: [
      { title: 'Phó Trưởng phòng Xuất nhập khẩu', time: '(4.1997-11.1997)' },
      { title: 'Trưởng phòng Xuất nhập khẩu', time: '(11.1997-5.1999)' },
      { title: 'Giám đốc Trung tâm Xuất nhập khẩu', time: '(6.1999-2.2005)' },
      { title: 'Giám đốc Công ty', time: '(3.2005-6.2014)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Đỗ Ngọc Cường sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Tinh.jpg',
    rank: 'Đại tá',
    name: 'TRẦN THANH TỊNH',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(1.2013-4.2013) (6.2014)' },
      { title: 'Giám đốc Công ty', time: '(7.2014-5.2017)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Trần Thanh Tịnh sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Phuong.jpg',
    rank: 'Thiếu tướng',
    name: 'ĐỖ MINH PHƯƠNG',
    roles: [
      { title: 'Phó Tổng Giám đốc Tập đoàn<br>kiêm Giám đốc Công ty', time: '(5.2017-6.2018)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Đỗ Minh Phương sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Hoa .jpg',
    rank: 'Thượng tá',
    name: 'VŨ TAM HÒA',
    roles: [
      { title: 'Chủ tịch kiêm Giám đốc Công ty', time: '(6.2018-6.2019)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Thượng tá Vũ Tam Hòa sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Hung GĐ.jpg',
    rank: 'Đại tá',
    name: 'PHẠM VĂN HÙNG',
    roles: [
      { title: 'Chủ tịch kiêm Giám đốc Công ty', time: '(6.2019-6.2021)' },
      { title: 'Giám đốc Công ty', time: '(6.2021-...)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Trung tá Phạm Văn Hùng sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/A Hung QUAN PHUC (2).jpg',
    rank: 'Đại tá',
    name: 'ĐỖ MẠNH HÙNG',
    roles: [
      { title: 'Chủ tịch Công ty', time: '(6.2021-4.2022)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Đỗ Mạnh Hùng sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/ngay 24 3 2022/Ngay 24 3 (lan 1)/anh BGĐ hien tai moi 22 3/Đại tá Đặng Hồng Thái PGĐ 1.jpg',
    rank: 'Đại tá',
    name: 'ĐẶNG HỒNG THÁI',
    roles: [
      { title: 'Phó Giám đốc Trung tâm', time: '(6.2002-2.2005)' },
      { title: 'Phó Giám đốc Công ty', time: '(3.2005-2.2009), (1.2013-4.2013), 6.2014-8.2014), (3.2017-...)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Đặng Hồng Thái sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Duy Hoa.jpg',
    rank: 'Đại tá',
    name: 'LÊ DUY HÒA',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(6.2006-3.2011)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Lê Duy Hòa sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh chi Thanh.jpg',
    rank: 'Đại tá',
    name: 'NGUYỄN CHÍ THANH',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(12.2007-6.2012)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Nguyễn Chí Thanh sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Thanh.jpg',
    rank: 'Đại tá',
    name: 'NGUYỄN VĂN THANH',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(4.2011-12.2014)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Nguyễn Văn Thanh sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Duy Tuan.jpg',
    rank: 'Thiếu tá',
    name: 'NGUYỄN DUY TUẤN',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(6.2012-5.2015)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Thiếu tá Nguyễn Duy Tuấn sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Vinh.jpg',
    rank: 'Đại tá',
    name: 'TRẦN KIM VĨNH',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(1.2013-4.2013)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Trần Thanh Tịnh sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh quang.jpg',
    rank: 'Thiếu tá QNCN',
    name: 'BÙI ÁNH QUANG',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(1.2013-4.2013)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Thiếu tá QNCN Bùi Ánh Quang sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Cương Phó GD.jpg',
    rank: 'Thiếu tá QNCN',
    name: 'NGUYỄN ĐỨC CƯỜNG',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(5.2015-...)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Thiếu tá QNCN Nguyễn Đức Cường sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/CHi Thanh Van.jpg',
    rank: 'Trung tá',
    name: 'PHẠM THỊ THANH VÂN',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(8.2015-10.2016)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Trung tá Phạm Thị Thanh Vân sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Anh BGĐ cac thoi ky/Anh Tuan Nguyen.jpg',
    rank: 'Thượng tá',
    name: 'NGUYỄN ANH TUẤN',
    roles: [
      { title: 'Phó Giám đốc Công ty', time: '(12.2019-...)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Thượng tá Nguyễn Anh Tuấn sẽ được cập nhật tại đây.'
  },
];

const grid = document.getElementById('ldrGrid');
if (grid) {
  const modal = document.getElementById('ldrModal');
  const mBackdrop = document.getElementById('ldrModalBackdrop');
  const mClose = document.getElementById('ldrModalClose');
  const mImg = document.getElementById('ldrModalImg');
  const mPlaceholder = document.getElementById('ldrModalPlaceholder');
  const mName = document.getElementById('ldrModalName');
  const mRole = document.getElementById('ldrModalRole');
  const mBio = document.getElementById('ldrModalBio');

  // Render cards
  grid.innerHTML = LEADERS.map((ldr, i) => `
      <figure class="ldr-card" tabindex="0" data-index="${i}">
        <div class="ldr-card__photo">
          <img src="${ldr.img}" alt="${ldr.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="ldr-card__placeholder" style="display:none">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
            </svg>
          </div>
        </div>
        <figcaption class="ldr-card__info">
          <span class="ldr-card__rank">${ldr.rank}</span>
          <span class="ldr-card__name">${ldr.name}</span>
          <div class="ldr-card__roles">
            ${ldr.roles.map(r => `
              <div class="ldr-card__role-item">
                <span class="ldr-card__role-title">${r.title}</span>
                <span class="ldr-card__role-time">${r.time}</span>
              </div>
            `).join('')}
          </div>
        </figcaption>

      </figure>
    `).join('');

  // Modal logic
  function openModal(index) {
    const ldr = LEADERS[index];
    mImg.src = ldr.img;
    mImg.onerror = () => { mImg.style.display = 'none'; mPlaceholder.style.display = 'flex'; };
    mImg.onload = () => { mImg.style.display = 'block'; mPlaceholder.style.display = 'none'; };
    mName.innerHTML = `<span class="ldr-modal__rank">${ldr.rank}</span> ${ldr.name}`;

    mRole.innerHTML = ldr.roles.map(r => `
        <div style="margin-bottom: 6px;">
          <strong style="color: #fff;">${r.title}</strong> <br>
          <span style="color: #ee0033; font-size: 14px;">${r.time}</span>
        </div>
      `).join('');

    mBio.innerHTML = '<p>' + ldr.bio + '</p>';

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('open'));
  }

  function closeModal() {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.hidden = true;
      document.body.style.overflow = '';
    }, 400);
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('.ldr-card');
    if (card) openModal(+card.dataset.index);
  });
  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const card = e.target.closest('.ldr-card');
      if (card) openModal(+card.dataset.index);
    }
  });

  mClose.addEventListener('click', closeModal);
  mBackdrop.addEventListener('click', closeModal);
}

function initSpotlightBento() {
  const grid = document.querySelector('.bento-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.bento-card'));
  let activeCard = null;

  cards.forEach((c, i) => c.dataset.index = i);

  function updateGrid(newActiveCard) {
    if (window.innerWidth < 768) return;
    if (newActiveCard === activeCard) return;

    const firstRects = cards.map(c => c.getBoundingClientRect());

    activeCard = newActiveCard;
    if (activeCard) {
      const rectTarget = activeCard.getBoundingClientRect();
      const minTop = Math.min(...cards.map(c => c.getBoundingClientRect().top));
      const isRow1 = Math.abs(rectTarget.top - minTop) < 20;

      const activeIdx = parseInt(activeCard.dataset.index);

      // Vòng tròn băng chuyền: C0 (Top-Left) -> C1 (Top-Right) -> C3 (Bottom-Right) -> C2 (Bottom-Left)
      const ring = [0, 1, 3, 2];
      const activeRingIdx = ring.indexOf(activeIdx);

      // Lấy 3 thẻ tiếp theo trong vòng tròn
      const othersRing = [
        ring[(activeRingIdx + 1) % 4],
        ring[(activeRingIdx + 2) % 4],
        ring[(activeRingIdx + 3) % 4]
      ];

      // Hàng trên chạy từ Trái sang Phải, Hàng dưới chạy từ Phải sang Trái (theo chiều kim đồng hồ)
      // Nếu activeCard nằm ở hàng 1 (isRow1), 3 thẻ kia bị đẩy xuống hàng 2 => Phải điền từ Phải sang Trái
      // Nếu activeCard nằm ở hàng 2, 3 thẻ kia bị đẩy lên hàng 1 => Điền từ Trái sang Phải
      const othersSequence = isRow1 ? [...othersRing].reverse() : [...othersRing];

      if (isRow1) {
        activeCard.style.order = 1;
        othersSequence.forEach((idx, pos) => {
          cards[idx].style.order = pos + 2; // 2, 3, 4
        });
      } else {
        othersSequence.forEach((idx, pos) => {
          cards[idx].style.order = pos + 1; // 1, 2, 3
        });
        activeCard.style.order = 4;
      }

      grid.classList.add('has-active');
      grid.dataset.active = cards.indexOf(activeCard);
      cards.forEach(c => {
        c.classList.toggle('is-expanded', c === activeCard);
        c.classList.toggle('is-collapsed', c !== activeCard);
      });
    } else {
      grid.classList.remove('has-active');
      grid.removeAttribute('data-active');
      cards.forEach(c => {
        c.classList.remove('is-expanded', 'is-collapsed');
        c.style.order = '';
      });
    }

    const lastRects = cards.map(c => c.getBoundingClientRect());

    cards.forEach((c, i) => {
      const f = firstRects[i];
      const l = lastRects[i];

      const dx = f.left - l.left;
      const dy = f.top - l.top;
      const dw = f.width / l.width;
      const dh = f.height / l.height;

      if (dx === 0 && dy === 0 && dw === 1 && dh === 1) return;

      c.animate([
        { transform: `translate(${dx}px, ${dy}px) scale(${dw}, ${dh})`, transformOrigin: 'top left' },
        { transform: 'translate(0, 0) scale(1, 1)', transformOrigin: 'top left' }
      ], {
        duration: 250,
        easing: 'ease-out',
        fill: 'both'
      });

      const imgWrap = c.querySelector('.bento-card__img-wrap');
      const body = c.querySelector('.bento-card__body');

      [imgWrap, body].forEach(el => {
        if (!el) return;
        el.animate([
          { transform: `scale(${1 / dw}, ${1 / dh})`, transformOrigin: 'top left' },
          { transform: 'scale(1, 1)', transformOrigin: 'top left' }
        ], {
          duration: 250,
          easing: 'ease-out',
          fill: 'both'
        });
      });
    });
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => updateGrid(card));
  });
  grid.addEventListener('mouseleave', () => updateGrid(null));
}

document.addEventListener('DOMContentLoaded', initSpotlightBento);

// REVEAL ANIMATIONS ON SCROLL (Fixed missing observer)
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
});

/* ─── DEPT GALLERY OVERLAY (HORIZONTAL SCROLL) ─────────── */
const deptOverlay = document.getElementById('deptOverlay');
const deptCloseBtn = document.getElementById('deptCloseBtn');
const deptScrollArea = document.getElementById('deptScrollArea');
const deptGalleryContent = document.getElementById('deptGalleryContent');
const deptRows = document.querySelectorAll('.dept-row');

const DEPT_DATA = {
  'DEP.01': {
    name: 'Phòng Chiến lược',
    desc: 'Tham mưu xây dựng chiến lược tổng thể, hoạch định kế hoạch dài hạn và phân tích cơ hội phát triển của Tổng Công ty. Đây là bộ não phân tích số liệu, dự báo xu hướng thị trường, đưa ra các kịch bản kinh doanh và các định hướng chiến lược trọng tâm nhằm duy trì vị thế cạnh tranh của Viettel Commerce trên thương trường.',
    images: [
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng Chiến lược.jpg',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng Chiến lược.jpg',
    ]
  },
  'DEP.02': {
    name: 'Phòng Hành chính',
    desc: 'Quản trị hành chính, văn thư lưu trữ và đảm bảo công tác hậu cần cho toàn bộ hoạt động của Tổng Công ty. Cung cấp môi trường làm việc chuyên nghiệp, trang thiết bị đầy đủ và điều phối các sự kiện nội bộ, giúp các phòng ban khác an tâm công tác.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng Hành chính.jpg',
    ]
  },
  'DEP.03': {
    name: 'Phòng Pháp chế & Đầu tư',
    desc: 'Tư vấn pháp lý, quản lý rủi ro, thẩm định hợp đồng và điều phối các hoạt động đầu tư của Tổng Công ty. Đảm bảo mọi hoạt động kinh doanh tuân thủ nghiêm ngặt quy định pháp luật và quy chế của Tập đoàn, đồng thời tối ưu hóa hiệu quả các dự án đầu tư.',
    images: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80',
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng PC và ĐT.jpg',
    ]
  },
  'DEP.04': {
    name: 'Phòng Nhân sự',
    desc: 'Tuyển dụng, đào tạo phát triển nhân tài, xây dựng chính sách đãi ngộ và văn hóa doanh nghiệp của Tổng Công ty. Xây dựng môi trường làm việc năng động, sáng tạo, tạo động lực cho cán bộ nhân viên cống hiến và phát triển sự nghiệp lâu dài.',
    images: [
      'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=800&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng Nhân sự.png',
    ]
  },
  'DEP.05': {
    name: 'Phòng Tài chính – Kế toán',
    desc: 'Quản lý tài chính doanh nghiệp, lập báo cáo kế toán, kiểm soát dòng tiền và đảm bảo tuân thủ các quy định tài chính. Tham mưu cho Ban Giám đốc về các quyết định tài chính chiến lược, đảm bảo nguồn vốn luôn lưu thông ổn định và hiệu quả.',
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng Tài chính.jpg',
    ]
  },
  'DEP.06': {
    name: 'Phòng Chính trị',
    desc: 'Công tác tư tưởng, chính trị; xây dựng đơn vị vững mạnh toàn diện về đạo đức, kỷ luật và tinh thần Viettel. Định hướng tư tưởng, lan tỏa văn hóa người lính, xây dựng khối đại đoàn kết thống nhất trong toàn Tổng Công ty.',
    images: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80',
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng Chính trị.jpg',
    ]
  },
  'DEP.07': {
    name: 'Phòng Công nghệ Thông tin',
    desc: 'Quản trị hạ tầng công nghệ, phát triển hệ thống số hóa và thúc đẩy chuyển đổi số toàn diện trong Tổng Công ty. Cung cấp các công cụ và nền tảng số hiện đại giúp tối ưu hóa quy trình nghiệp vụ, tăng cường năng suất lao động.',
    images: [
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
      'assets/images/Ảnh các phòng ban phục vụ 30 năm/Phòng CNTT.jpg',
    ]
  }
};

function openDeptOverlay(id) {
  const data = DEPT_DATA[id];
  if (!data) return;

  deptGalleryContent.innerHTML = `
    <!-- Khối 1: Giới thiệu -->
    <div class="editorial-block editorial-block--intro">
      <span class="dept-code">${id}</span>
      <h2>${data.name}</h2>
      <p>${data.desc}</p>
      <div class="polaroid">
        <img src="${data.images[0]}" alt="${data.name} image 1" />
      </div>
    </div>
    
    <!-- Khối 2: Asymmetric -->
    <div class="editorial-block editorial-block--collage">
      <div class="collage-col-left">
        <img src="${data.images[1]}" alt="Image 2" />
        <img src="${data.images[2]}" alt="Image 3" />
      </div>
      <div class="collage-col-right">
        <img src="${data.images[3]}" alt="Image 4" />
      </div>
    </div>
    
    <!-- Khối 3: Panorama -->
    <div class="editorial-block editorial-block--panorama">
      <img src="${data.images[4]}" alt="Panorama" />
      <h3 class="panorama-text">Vững bước tiên phong</h3>
    </div>
  `;

  if (deptOverlay) {
    deptOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    if (deptScrollArea) deptScrollArea.scrollLeft = 0;
  }
}

function closeDeptOverlay() {
  if (deptOverlay) {
    deptOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

deptRows.forEach(row => {
  row.addEventListener('click', () => {
    const codeEl = row.querySelector('.dept-row__code');
    if (codeEl) {
      openDeptOverlay(codeEl.textContent.trim());
    }
  });
});

if (deptCloseBtn) deptCloseBtn.addEventListener('click', closeDeptOverlay);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && deptOverlay && deptOverlay.classList.contains('is-active')) {
    closeDeptOverlay();
  }
});

if (deptScrollArea) {
  deptScrollArea.addEventListener('wheel', (e) => {
    // Chỉ cuộn ngang khi trên desktop
    if (window.innerWidth > 768) {
      e.preventDefault();
      deptScrollArea.scrollLeft += e.deltaY;
    }
  });
}

// --- CUSTOM LIGHTBOX CHO ẢNH TRONG GALLERY ---
const initLightbox = () => {
  const lightbox = document.createElement('div');
  lightbox.className = 'custom-lightbox';
  lightbox.innerHTML = `
    <div class="custom-lightbox-backdrop"></div>
    <div class="custom-lightbox-content">
      <img src="" class="custom-lightbox-img" alt="Phóng to" draggable="false" />
    </div>
    <button class="custom-lightbox-close" title="Đóng (Esc)">&times;</button>
    <button class="custom-lightbox-prev" title="Ảnh trước (Mũi tên trái)">&lsaquo;</button>
    <button class="custom-lightbox-next" title="Ảnh tiếp (Mũi tên phải)">&rsaquo;</button>
  `;
  document.body.appendChild(lightbox);

  const imgEl = lightbox.querySelector('.custom-lightbox-img');
  const backdrop = lightbox.querySelector('.custom-lightbox-backdrop');
  const closeBtn = lightbox.querySelector('.custom-lightbox-close');
  const prevBtn = lightbox.querySelector('.custom-lightbox-prev');
  const nextBtn = lightbox.querySelector('.custom-lightbox-next');

  let currentImages = [];
  let currentIndex = 0;
  let currentZoom = 1;
  let isDragging = false;
  let startX, startY;
  let translateX = 0, translateY = 0;

  const openLightbox = (images, index) => {
    currentImages = images;
    currentIndex = index;
    updateImage();
    lightbox.classList.add('is-active');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-active');
  };

  const updateTransform = () => {
    imgEl.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
  };

  const updateImage = () => {
    imgEl.src = currentImages[currentIndex];
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  };

  const prevImage = (e) => {
    if(e) e.stopPropagation();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
    updateImage();
  };

  const nextImage = (e) => {
    if(e) e.stopPropagation();
    currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
    updateImage();
  };

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);

  // Bàn phím
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // Lăn chuột phóng to / thu nhỏ
  lightbox.addEventListener('wheel', (e) => {
    if (!lightbox.classList.contains('is-active')) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      currentZoom += 0.15; // Lăn lên -> Phóng to
    } else {
      currentZoom -= 0.15; // Lăn xuống -> Thu nhỏ
    }
    if (currentZoom < 0.5) currentZoom = 0.5;
    if (currentZoom > 5) currentZoom = 5;
    updateTransform();
  }, { passive: false });

  // Kéo thả khi phóng to (Pan)
  imgEl.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    imgEl.style.cursor = 'grabbing';
  });
  
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  });
  
  window.addEventListener('mouseup', () => {
    isDragging = false;
    imgEl.style.cursor = 'grab';
  });

  // Lắng nghe click vào ảnh trong Overlay
  document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.closest('#deptGalleryContent')) {
      const container = e.target.closest('#deptGalleryContent');
      // Lấy danh sách ảnh hiện tại trong gallery
      const allImgNodes = Array.from(container.querySelectorAll('img'));
      const allImgs = allImgNodes.map(img => img.src);
      const index = allImgNodes.indexOf(e.target);
      if (index !== -1) {
        openLightbox(allImgs, index);
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', initLightbox);
