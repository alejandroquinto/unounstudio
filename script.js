/* Smooth scroll for in-page anchors */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id && id.length>1){
      e.preventDefault();
      const el=document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      closeMenu(); // close mobile drawer after navigating
    }
  });
});

/* Mobile menu + accessibility */
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
function openMenu(){
  nav.classList.add('open');
  document.body.classList.add('no-scroll');
  if(toggle) toggle.setAttribute('aria-expanded','true');
}
function closeMenu(){
  nav.classList.remove('open');
  document.body.classList.remove('no-scroll');
  if(toggle) toggle.setAttribute('aria-expanded','false');
}
if(toggle){
  toggle.addEventListener('click',()=>{
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') closeMenu();
});

/* Header submenu (Apps) */
const subToggles = document.querySelectorAll('.sub-toggle');
subToggles.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const li = btn.closest('.has-sub');
    const nowOpen = li.classList.toggle('open');
    btn.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
  });
});
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.has-sub')){
    document.querySelectorAll('.has-sub').forEach(li=>{
      li.classList.remove('open');
      const b = li.querySelector('.sub-toggle');
      if(b) b.setAttribute('aria-expanded','false');
    });
  }
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('.has-sub').forEach(li=>{
      li.classList.remove('open');
      const b = li.querySelector('.sub-toggle');
      if(b) b.setAttribute('aria-expanded','false');
    });
  }
});
document.querySelectorAll('.submenu a').forEach(a=>{
  a.addEventListener('click', ()=> { if(typeof closeMenu==='function') closeMenu(); });
});

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
