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
    img: 'assets/images/giam-doc-pham-van-hung.jpg',
    rank: 'Đại tá',
    name: 'PHẠM VĂN HÙNG',
    roles: [
      { title: 'Chủ tịch kiêm Giám đốc Công ty', time: '(6.2019-6.2021)' },
      { title: 'Tổng Giám đốc Công ty', time: '(6.2021-...)' }
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
  //-------------------------------------------
  {
    img: 'assets/images/luong-the-quang.jpg',
    rank: 'Đại tá',
    name: 'LƯƠNG THẾ QUANG',
    roles: [
      { title: 'Bí thư Đảng ủy', time: '(12.2019-...)' },
      { title: 'Phó Tổng Giám đốc Tổng Công ty', time: '(...-9.2026)' },
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Đại tá Lương Thế Quang sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/HAT01391_cut.png',
    rank: 'Trung tá',
    name: 'PHẠM THỊ DUNG',
    roles: [
      { title: 'Phó Tổng Giám đốc Tổng Công ty', time: '(...-...)' },
      { title: 'Giám đốc Trung tâm Kinh doanh Thiết bị số', time: '(...-...)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Trung tá Phạm Thị Dung sẽ được cập nhật tại đây.'
  },
  {
    img: 'assets/images/Ảnh các anh/ChatGPT Image 11_38_43 15 thg 6, 2026.png',
    rank: 'Trung tá QNCN',
    name: 'PHẠM TIẾN TUYỀN',
    roles: [
      { title: 'Phó Tổng Giám đốc Tổng Công ty', time: '(...-...)' },
      { title: 'Giám đốc Trung tâm Phân phối', time: '(...-...)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Trung tá QNCN Phạm Tiến Tuyền sẽ được cập nhật tại đây.'
  },
];

/* ================================================================
   HELPERS
   ================================================================ */
const PLACEHOLDER_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg>`;
const CHEVRON_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

function personHTML(ldr, i) {
  const rolesHTML = ldr.roles.map(r => `
    <div class="ldr-person__role-item">
      ${r.title} <span class="ldr-person__role-time">${r.time}</span>
    </div>`).join('');

  return `
  <div class="ldr-person" data-index="${i}">
    <div class="ldr-person__photo" data-photo-zoom="${ldr.img}" title="Bấm để xem ảnh lớn">
      <img src="${ldr.img}" alt="${ldr.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
      <div class="ldr-person__photo-placeholder" style="display:none">${PLACEHOLDER_SVG}</div>
    </div>
    <div class="ldr-person__info">
      ${ldr.rank ? `<span class="ldr-person__rank">${ldr.rank}</span>` : ''}
      <h3 class="ldr-person__name">${ldr.name}</h3>
      <div class="ldr-person__roles">${rolesHTML}</div>
      <div class="ldr-person__bio-wrap">
        <p class="ldr-person__bio">${ldr.bio}</p>
      </div>
      <button class="ldr-person__toggle" type="button">
        Xem thêm thông tin ${CHEVRON_SVG}
      </button>
    </div>
  </div>`;
}

/* ================================================================
   SPLIT leaders into current / past
   ================================================================ */
const IDX = {
  chuTich: LEADERS.findIndex(l => l.name === 'ĐỖ MINH PHƯƠNG'),
  tgd:     LEADERS.findIndex(l => l.name === 'PHẠM VĂN HÙNG'),
  phoTrai: LEADERS.findIndex(l => l.name === 'PHẠM THỊ DUNG'),
  phoPhai: LEADERS.findIndex(l => l.name === 'PHẠM TIẾN TUYỀN')
};

const otherCurrent = [], past = [];
for (let i = 0; i < LEADERS.length; i++) {
  if (Object.values(IDX).includes(i)) continue;
  const isCurrent = LEADERS[i].roles.some(r => r.time.includes('...'));
  (isCurrent ? otherCurrent : past).push(i);
}

/* ================================================================
   RENDER — Current leaders (hierarchy)
   ================================================================ */
const treeCurrent = document.getElementById('ldrTreeCurrent');
if (treeCurrent) {
  let html = '';

  // Level 1: Chủ Tịch Tổng Công Ty
  if (IDX.chuTich !== -1) {
    html += `<div class="ldr-level-label">Chủ Tịch Tổng Công Ty</div>`;
    html += `<div class="ldr-person-list"><div class="ldr-person-row single">`;
    html += personHTML(LEADERS[IDX.chuTich], IDX.chuTich);
    html += `</div></div>`;
  }

  // Level 2: Tổng Giám Đốc
  if (IDX.tgd !== -1) {
    html += `<div class="ldr-level-label">Tổng Giám Đốc</div>`;
    html += `<div class="ldr-person-list"><div class="ldr-person-row single">`;
    html += personHTML(LEADERS[IDX.tgd], IDX.tgd);
    html += `</div></div>`;
  }

  // Level 3: Phó Tổng Giám Đốc
  if (IDX.phoTrai !== -1 || IDX.phoPhai !== -1) {
    html += `<div class="ldr-level-label">Phó Tổng Giám Đốc</div>`;
    html += `<div class="ldr-person-list"><div class="ldr-person-row">`;
    if (IDX.phoTrai !== -1) html += personHTML(LEADERS[IDX.phoTrai], IDX.phoTrai);
    if (IDX.phoPhai !== -1) html += personHTML(LEADERS[IDX.phoPhai], IDX.phoPhai);
    html += `</div></div>`;
  }

  // Level 4: Giám Đốc & Phó Giám Đốc
  if (otherCurrent.length > 0) {
    html += `<div class="ldr-level-label">Giám Đốc &amp; Phó Giám Đốc</div>`;
    html += `<div class="ldr-person-list"><div class="ldr-person-row">`;
    otherCurrent.forEach(id => { html += personHTML(LEADERS[id], id); });
    html += `</div></div>`;
  }

  treeCurrent.innerHTML = html;
}

/* ================================================================
   RENDER — Past leaders (grid, 2-column)
   ================================================================ */
const gridPast = document.getElementById('ldrGridPast');
if (gridPast) {
  let html = `<div class="ldr-person-list"><div class="ldr-person-row">`;
  past.forEach(id => { html += personHTML(LEADERS[id], id); });
  html += `</div></div>`;
  gridPast.innerHTML = html;
}

/* ================================================================
   TOGGLE bio expand / collapse
   ================================================================ */
document.body.addEventListener('click', e => {
  const btn = e.target.closest('.ldr-person__toggle');
  if (!btn) return;
  const person = btn.closest('.ldr-person');
  const isExpanded = person.classList.toggle('expanded');
  btn.innerHTML = isExpanded
    ? `Thu gọn ${CHEVRON_SVG}`
    : `Xem thêm thông tin ${CHEVRON_SVG}`;
});

/* ================================================================
   LIGHTBOX — click photo to zoom
   ================================================================ */
const lightbox   = document.getElementById('ldrLightbox');
const lbImg      = document.getElementById('ldrLightboxImg');
const lbClose    = document.getElementById('ldrLightboxClose');

function openLightbox(src) {
  if (!lightbox) return;
  lbImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.body.addEventListener('click', e => {
  const ph = e.target.closest('[data-photo-zoom]');
  if (ph) { e.stopPropagation(); openLightbox(ph.dataset.photoZoom); }
});
if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', e => {
  if (e.target === lightbox || e.target === lbImg) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

