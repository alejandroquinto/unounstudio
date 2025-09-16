/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      const el=document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    }
  });
});

/* Mobile menu */
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle){ toggle.addEventListener('click',()=>nav.classList.toggle('open')); }

/* Theme toggle (lux ↔ light) */
(function(){
  const btn=document.querySelector('.theme-toggle');
  if(!btn) return;
  const saved=localStorage.getItem('unoun-theme') || 'lux';
  document.body.classList.toggle('lux', saved==='lux');
  btn.addEventListener('click',()=>{
    const isLux=document.body.classList.toggle('lux');
    localStorage.setItem('unoun-theme', isLux ? 'lux' : 'light');
  });
})();

/* No lightbox — images don't open on click */
