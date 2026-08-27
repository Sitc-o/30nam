(()=>{
  'use strict';
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const $=(s,r=document)=>r.querySelector(s);

  const header=$('.v11-header');
  addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>20),{passive:true});

  const slides=$$('.media-slide');
  const dotsWrap=$('.slide-dots');
  let active=0,timer;
  slides.forEach((_,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Ảnh ${i+1}`);b.addEventListener('click',()=>show(i,true));dotsWrap?.appendChild(b)});
  const dots=$$('.slide-dots button');
  const show=(i,manual=false)=>{active=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===active));dots.forEach((d,n)=>d.classList.toggle('active',n===active));if(manual)restart()};
  const restart=()=>{clearInterval(timer);timer=setInterval(()=>show(active+1),5200)};
  $('.slide-prev')?.addEventListener('click',()=>show(active-1,true));
  $('.slide-next')?.addEventListener('click',()=>show(active+1,true));
  show(0);restart();

  const counterRoot=$('.v11-number-grid');
  const animateCounters=()=>$$('.v11-counter').forEach(el=>{if(el.dataset.done)return;const end=Number(el.dataset.target||0);const prefix=el.dataset.prefix||'';const suffix=el.dataset.suffix||'';const duration=1600;let start=null;const step=t=>{if(!start)start=t;const p=Math.min((t-start)/duration,1);const eased=1-Math.pow(1-p,4);const value=Math.round(end*eased);el.textContent=prefix+value.toLocaleString('vi-VN')+suffix;if(p<1)requestAnimationFrame(step);else el.dataset.done='1'};requestAnimationFrame(step)});
  if(counterRoot){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){animateCounters();obs.disconnect()}}),{threshold:.25});obs.observe(counterRoot)}

  $$('[data-tilt]').forEach(card=>{
    card.addEventListener('pointermove',e=>{if(matchMedia('(pointer:coarse)').matches)return;const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-3px)`});
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });

  const canvas=$('#heroNetwork');
  if(canvas){const ctx=canvas.getContext('2d');let w=0,h=0,dpr=1,pts=[];const resize=()=>{dpr=Math.min(devicePixelRatio||1,2);w=canvas.clientWidth;h=canvas.clientHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);const count=Math.max(30,Math.floor(w/35));pts=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.16,vy:(Math.random()-.5)*.16,r:Math.random()*1.5+.5}))};const draw=()=>{ctx.clearRect(0,0,w,h);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(35,141,202,.32)';ctx.fill()});for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);if(d<125){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(35,141,202,${.12*(1-d/125)})`;ctx.stroke()}}requestAnimationFrame(draw)};resize();draw();addEventListener('resize',resize)}
})();
