(()=>{
 const revealObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:0});
 document.querySelectorAll('.reveal').forEach(x=>revealObserver.observe(x));
 document.querySelectorAll('[data-org]').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.org-item').classList.toggle('open')));
 const modal=document.querySelector('.journey-modal');
 const title=modal?.querySelector('[data-j-title]'), text=modal?.querySelector('[data-j-text]'), full=modal?.querySelector('[data-j-full]'), imgLink=modal?.querySelector('[data-j-img]');
 let utterance=null;
 document.querySelectorAll('.journey-card').forEach(card=>card.addEventListener('click',()=>{
   if(!modal)return; title.textContent=card.dataset.title; text.textContent=card.dataset.text; full.href=card.dataset.href; if(imgLink) imgLink.href=card.dataset.img||'#'; modal.classList.add('open');
 }));
 modal?.querySelectorAll('[data-j-close]').forEach(x=>x.addEventListener('click',()=>{modal.classList.remove('open');speechSynthesis.cancel();if(window.location.hash.startsWith('#modal-')) history.replaceState(null, null, window.location.pathname + window.location.search);}));
 modal?.querySelector('[data-j-voice]')?.addEventListener('click',()=>{speechSynthesis.cancel();utterance=new SpeechSynthesisUtterance(title.textContent+'. '+text.textContent);utterance.lang='vi-VN';utterance.rate=.92;speechSynthesis.speak(utterance)});
 modal?.querySelector('[data-j-stop]')?.addEventListener('click',()=>speechSynthesis.cancel());

  function handleModalHash() {
      const hash = window.location.hash;
      if (hash.startsWith('#modal-')) {
          const type = hash.replace('#modal-', '');
          const urlMap = {
              'khoi-nguon': 'khoi-nguon-1997-2005.html',
              'troi-day': 'troi-day-2006-2014.html',
              'tang-toc': 'tang-toc-2015-2027.html',
              'vuon-tam': 'vuon-tam-2023-2027.html'
          };
          const targetHref = urlMap[type];
          if (targetHref && modal) {
              const card = document.querySelector(`.journey-card[data-href="${targetHref}"]`);
              if (card) {
                  title.textContent=card.dataset.title; text.textContent=card.dataset.text; full.href=card.dataset.href; if(imgLink) imgLink.href=card.dataset.img||'#'; modal.classList.add('open');
              }
          }
      }
  }
  handleModalHash();
  window.addEventListener('hashchange', handleModalHash);

  const homeBtn=document.querySelector('.home-menu-button'), homeMenu=document.querySelector('.home-overlay-menu');
 homeBtn?.addEventListener('click',()=>homeMenu?.classList.toggle('open'));

 const portraitDialog=document.getElementById('portraitDialog');
 document.querySelectorAll('[data-portrait-open]').forEach(btn=>btn.addEventListener('click',()=>portraitDialog?.showModal()));
 portraitDialog?.querySelector('.portrait-close')?.addEventListener('click',()=>portraitDialog.close());

 // Ảnh từng phòng ban: điền vào đây khi có ảnh thật, ví dụ:
 // 'Phòng Chiến lược':['assets/images/departments/chien-luoc-1.jpg','assets/images/departments/chien-luoc-2.jpg']
 const DEPT_PHOTOS={};
 const deptIcon='<svg viewBox="0 0 24 24" width="34%" height="34%" fill="currentColor"><path d="M21 5H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM5 8l3.5 4.5 2.5 3L15 11l4 6H5V8z"/></svg>';
 const deptDialog=document.getElementById('deptDialog'), deptTitle=document.getElementById('deptDialogTitle'), deptGrid=document.getElementById('deptDialogGrid');
 document.querySelectorAll('.dept-open').forEach(btn=>btn.addEventListener('click',()=>{
   const name=btn.dataset.dept;
   if(deptTitle)deptTitle.textContent=name;
   const photos=DEPT_PHOTOS[name]||[];
   if(deptGrid)deptGrid.innerHTML=photos.length?photos.map(src=>`<figure class="dept-photo"><img src="${src}" alt="${name}"></figure>`).join(''):Array.from({length:3}).map(()=>`<figure class="dept-photo">${deptIcon}</figure>`).join('');
   deptDialog?.showModal();
 }));
 deptDialog?.querySelector('.portrait-close')?.addEventListener('click',()=>deptDialog.close());

 // Đảng bộ & các tổ chức quần chúng: đoạn giới thiệu + link "Đọc đầy đủ" + ảnh minh họa.
 // Điền link/ảnh khi có dữ liệu, ví dụ: link:'cong-doan.html', photos:['assets/images/....jpg']
 const ORG_POPUPS={
   'ĐẢNG BỘ TỔNG CÔNG TY':{text:'Đảng bộ Tổng Công ty giữ vai trò lãnh đạo toàn diện, tăng cường nền tảng chính trị, kỷ cương, đoàn kết và xây dựng đơn vị vững mạnh toàn diện. Trong suốt chặng đường hình thành và phát triển, Đảng bộ luôn bám sát chủ trương, đường lối của Đảng, gắn công tác xây dựng Đảng với nhiệm vụ sản xuất kinh doanh, phát huy vai trò hạt nhân chính trị, quy tụ sức mạnh đoàn kết của toàn thể cán bộ, đảng viên trong Tổng Công ty.',link:'cong-tac-dang.html',photos:[]},
   'CÔNG ĐOÀN CƠ SỞ TỔNG CÔNG TY':{text:'Công đoàn cơ sở Tổng Công ty là tổ chức đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của người lao động; đồng hành cùng chuyên môn chăm lo đời sống vật chất, tinh thần, tổ chức các phong trào thi đua lao động sản xuất và xây dựng môi trường làm việc đoàn kết, gắn bó. Nội dung chi tiết và hình ảnh hoạt động sẽ được cập nhật đầy đủ trong thời gian tới.',link:'',photos:[]},
   'HỘI PHỤ NỮ CƠ SỞ TỔNG CÔNG TY':{text:'Hội Phụ nữ cơ sở Tổng Công ty là tổ chức tập hợp, chăm lo quyền lợi và đời sống của nữ cán bộ, người lao động; tích cực tham gia các phong trào thi đua, hoạt động xã hội và góp phần xây dựng gia đình cán bộ công nhân viên ấm no, bình đẳng, hạnh phúc. Nội dung chi tiết và hình ảnh hoạt động sẽ được cập nhật đầy đủ trong thời gian tới.',link:'',photos:[]},
   'ĐOÀN CƠ SỞ TỔNG CÔNG TY':{text:'Đoàn cơ sở Tổng Công ty là tổ chức tập hợp, giáo dục và phát huy vai trò xung kích, sáng tạo của đoàn viên thanh niên trong lao động, học tập và các phong trào tình nguyện, góp phần xây dựng lực lượng kế cận cho sự phát triển bền vững của đơn vị. Nội dung chi tiết và hình ảnh hoạt động sẽ được cập nhật đầy đủ trong thời gian tới.',link:'',photos:[]}
 };
 const orgPopup=document.getElementById('orgPopup'), orgPopupTitle=document.getElementById('orgPopupTitle'), orgPopupExcerpt=document.getElementById('orgPopupExcerpt'), orgPopupLink=document.getElementById('orgPopupLink'), orgPopupPhotos=document.getElementById('orgPopupPhotos');
 document.querySelectorAll('.org-popup-open').forEach(btn=>btn.addEventListener('click',()=>{
   const name=btn.dataset.orgPopup, data=ORG_POPUPS[name]||{text:'',link:'',photos:[]};
   if(orgPopupTitle)orgPopupTitle.textContent=name;
   if(orgPopupExcerpt)orgPopupExcerpt.textContent=data.text;
   if(orgPopupLink){
     if(data.link){orgPopupLink.href=data.link;orgPopupLink.hidden=false;}
     else{orgPopupLink.hidden=true;}
   }
   if(orgPopupPhotos)orgPopupPhotos.innerHTML=data.photos.length?data.photos.map(src=>`<figure class="dept-photo"><img src="${src}" alt="${name}"></figure>`).join(''):Array.from({length:2}).map(()=>`<figure class="dept-photo">${deptIcon}</figure>`).join('');
   orgPopup?.showModal();
 }));
 orgPopup?.querySelector('.portrait-close')?.addEventListener('click',()=>orgPopup.close());

 const searchDialog=document.querySelector('.search-dialog'), searchOpen=document.querySelector('.search-open'), searchClose=document.querySelector('.search-close'), searchInput=document.getElementById('globalSearch'), searchResults=document.getElementById('searchResults');
 searchOpen?.addEventListener('click',()=>{searchDialog.showModal();setTimeout(()=>searchInput.focus(),80)});
 searchClose?.addEventListener('click',()=>searchDialog.close());
 const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 searchInput?.addEventListener('input',()=>{
   const q=norm(searchInput.value.trim());
   if(q.length<2){searchResults.innerHTML='<p>Nhập ít nhất 2 ký tự để tìm kiếm.</p>';return}
   const found=(window.SITE_SEARCH_INDEX||[]).filter(x=>norm(x.title+' '+x.page+' '+x.excerpt).includes(q)).slice(0,30);
   searchResults.innerHTML=found.length?found.map(x=>`<a class="search-result" href="${x.url}"><small>${x.page}</small><b>${x.title}</b><p>${x.excerpt||''}</p></a>`).join(''):'<p>Không tìm thấy nội dung phù hợp.</p>';
 });
})();

/* JS for org tabs in mo-hinh-to-chuc.html */
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".org-tab-select");
  const contents = document.querySelectorAll(".org-tab-content");
  if (!select) return;
  select.addEventListener("change", (e) => {
    contents.forEach(c => c.classList.remove("active"));
    const targetContent = document.getElementById(e.target.value);
    if (targetContent) {
        targetContent.classList.add("active");
    }
  });
});
/* JS for org tabs via URL hash */
document.addEventListener('DOMContentLoaded', () => {
  const tabChinhQuyen = document.getElementById('tab-chinh-quyen');
  const tabDang = document.getElementById('tab-dang');
  if (!tabChinhQuyen || !tabDang) return;
  
  function updateTabs() {
    if (window.location.hash === '#tab-dang') {
      tabChinhQuyen.style.display = 'none';
      tabDang.style.display = 'block';
    } else {
      tabChinhQuyen.style.display = 'block';
      tabDang.style.display = 'none';
    }
  }
  
  window.addEventListener('hashchange', updateTabs);
  updateTabs();
});
