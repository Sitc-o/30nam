(()=>{
  const img=document.querySelector('.approved-home__visual');
  const stage=document.querySelector('.approved-home');
  if(!img||!stage)return;
  /* x,y = tâm điểm theo % ảnh gốc; d = đường kính theo % chiều rộng ảnh gốc (đo trực tiếp từ file ảnh) */
  const anchors=[
    {el:document.querySelector('.arrow-pulse'),x:.8930,y:.6672,d:.0498},
    {el:document.querySelector('.hotspot-arrow'),x:.8930,y:.6672,d:.0498,pad:1.6},
    {el:document.querySelector('.hotspot-video'),x:.0397,y:.7420,d:.0319,pad:2.4},
    {el:document.querySelector('.video-ring'),x:.0397,y:.7420,d:.0319},
    {el:document.querySelector('.corner-fold'),x:.75,y:.932,d:.026}
  ].filter(a=>a.el);
  function place(){
    if(!img.naturalWidth||!img.naturalHeight)return;
    const boxW=stage.clientWidth,boxH=stage.clientHeight;
    const fitMode=getComputedStyle(img).objectFit;
    const scaleCover=Math.max(boxW/img.naturalWidth,boxH/img.naturalHeight);
    const scaleContain=Math.min(boxW/img.naturalWidth,boxH/img.naturalHeight);
    const scale=fitMode==='contain'?scaleContain:scaleCover;
    const renderW=img.naturalWidth*scale,renderH=img.naturalHeight*scale;
    const offX=(renderW-boxW)/2,offY=(renderH-boxH)/2;
    anchors.forEach(({el,x,y,d,pad})=>{
      const cx=x*renderW-offX,cy=y*renderH-offY;
      el.style.left=cx+'px';
      el.style.top=cy+'px';
      if(d){
        const size=d*renderW*(pad||1);
        el.style.width=size+'px';
        el.style.height=size+'px';
      }
    });
  }
  if(img.complete)place();else img.addEventListener('load',place);
  window.addEventListener('resize',place);
})();
