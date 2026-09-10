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
    name: 'ĐINH THỊ DUNG',
    roles: [
      { title: 'Phó Tổng Giám đốc Tổng Công ty', time: '(...-...)' },
      { title: 'Giám đốc Trung tâm Kinh doanh Thiết bị số', time: '(...-...)' }
    ],
    bio: 'Tiểu sử và thông tin chi tiết về Trung tá Đinh Thị Dung sẽ được cập nhật tại đây.'
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

const grid = document.getElementById('ldrGrid');
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
        <strong style="color: #f2f2f2;">${r.title}</strong> <br>
        <span style="color: #f2f2f2; font-size: 14px;">${r.time}</span>
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