// Typing effect simple
const phrases = ['Security Researcher','CTF Player','Offensive Security','Bug Bounty'];
let i = 0, j = 0, current = '', isDeleting=false;
const typedEl = document.getElementById('typed');
function type(){ 
  const full = phrases[i];
  if(!isDeleting){
    current = full.slice(0, ++j);
  } else {
    current = full.slice(0, --j);
  }
  if(typedEl) typedEl.textContent = current;
  if(!isDeleting && current === full){ isDeleting = true; setTimeout(type, 900); }
  else if(isDeleting && current === ''){ isDeleting = false; i = (i+1)%phrases.length; setTimeout(type, 300); }
  else { setTimeout(type, isDeleting?60:120); }
}
if(typedEl) type();

// nav link active on scroll
const sections = document.querySelectorAll('main section, header');
const navLinks = document.querySelectorAll('.nav-links a');
function onScroll(){
  const pos = window.scrollY + 120;
  sections.forEach(sec=>{
    if(sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos){
      navLinks.forEach(a=> a.classList.remove('active'));
      const id = sec.getAttribute('id');
      const link = document.querySelector('.nav-links a[href="#'+id+'"]');
      if(link) link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScroll);

// hover photo lift
const photo = document.querySelector('.photo');
if(photo){
  photo.addEventListener('mouseenter', ()=> photo.style.transform = 'translateY(-10px) rotate(-1deg) scale(1.03)');
  photo.addEventListener('mouseleave', ()=> photo.style.transform = 'translateY(0) rotate(0) scale(1)');
}

// toggle theme (simple)
const toggle = document.getElementById('toggle');
toggle && toggle.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
  toggle.textContent = document.documentElement.classList.contains('light') ? '☀' : '☾';
  if(document.documentElement.classList.contains('light')){
    document.documentElement.style.setProperty('--bg', '#f4f7fb');
  } else {
    document.documentElement.style.setProperty('--bg', '#0b0f14');
  }
});

// SCROLL REVEAL EFFECT
const revealElements = document.querySelectorAll('.section, .skill, .card, .site-footer');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});
