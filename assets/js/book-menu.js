(()=>{
  const trigger=document.querySelector('.hotspot-menu, .simple-menu');
  const menu=document.querySelector('.book-menu');
  const backdrop=document.querySelector('.menu-backdrop');
  const closers=document.querySelectorAll('[data-close-menu]');
  if(!trigger||!menu)return;

  const here=location.pathname.split('/').pop()||'index.html';
  menu.querySelectorAll('a[href]').forEach(a=>{
    if((a.getAttribute('href')||'').split('#')[0]===here) a.classList.add('active');
  });

  function open(){menu.classList.add('open');backdrop?.classList.add('open');menu.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true');document.body.classList.add('menu-open')}
  function close(){menu.classList.remove('open');backdrop?.classList.remove('open');menu.setAttribute('aria-hidden','true');trigger.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}
  trigger.addEventListener('click',open);
  closers.forEach(x=>x.addEventListener('click',close));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
