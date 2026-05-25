AOS.init({ duration: 800, once: true });

const darkToggle=document.getElementById('darkModeToggle'),darkCSS=document.getElementById('dark-mode-css'),body=document.body;
function setDark(e){if(e){body.classList.add('dark');darkCSS.disabled=false;darkToggle.innerHTML='<i class="fas fa-sun"></i>';}else{body.classList.remove('dark');darkCSS.disabled=true;darkToggle.innerHTML='<i class="fas fa-moon"></i>';}localStorage.setItem('darkMode',e?'enabled':'disabled');}
darkToggle.addEventListener('click',()=>setDark(!body.classList.contains('dark')));
if(localStorage.getItem('darkMode')==='enabled')setDark(true);

const header=document.getElementById('header'),bottomNav=document.getElementById('bottomNav');let ls=0;
window.addEventListener('scroll',()=>{let s=window.pageYOffset||document.documentElement.scrollTop;if(s>ls&&s>80){header.classList.add('header-hidden');if(bottomNav)bottomNav.classList.add('bottom-nav-hidden');}else{header.classList.remove('header-hidden');if(bottomNav)bottomNav.classList.remove('bottom-nav-hidden');}ls=s;updateActiveNav();animateToolBars();});

function updateActiveNav(){const sec=['home','gallery','tools','platforms','contact'];let c='home';sec.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=150)c=id;});document.querySelectorAll('.nav-list a, .bottom-nav-item').forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')==='#'+c)l.classList.add('active');});}

const counters=document.querySelectorAll('.counter');let animated=false;
function animateCounters(){counters.forEach(c=>{const t=+c.getAttribute('data-target'),inc=t/40;const u=()=>{const cur=+c.innerText;if(cur<t){c.innerText=Math.ceil(cur+inc);setTimeout(u,30);}else c.innerText=t;};u();});}
window.addEventListener('scroll',()=>{const stats=document.querySelector('.hero-stats');if(stats&&!animated&&stats.getBoundingClientRect().top<window.innerHeight-100){animateCounters();animated=true;}});

function animateToolBars(){document.querySelectorAll('.tool-fill').forEach(bar=>{const rect=bar.getBoundingClientRect();if(rect.top<window.innerHeight&&(bar.style.width==='0px'||bar.style.width==='0%')){bar.style.width=bar.getAttribute('data-width')+'%';}});}

// Lightbox
const galleryItems = [
    { icon: 'fas fa-mobile-alt', title: 'تطبيق جوال', desc: 'تصميم UI/UX لتطبيق توصيل طلبات' },
    { icon: 'fas fa-globe', title: 'موقع ويب', desc: 'تصميم موقع شركة تقنية' },
    { icon: 'fas fa-paint-brush', title: 'هوية بصرية', desc: 'تصميم شعار وهوية متكاملة' },
    { icon: 'fas fa-chart-pie', title: 'لوحة معلومات', desc: 'تصميم Dashboard تحليلي' },
    { icon: 'fas fa-shopping-cart', title: 'متجر إلكتروني', desc: 'تصميم تجربة تسوق كاملة' },
    { icon: 'fas fa-th', title: 'نظام إدارة', desc: 'تصميم لوحة تحكم ERP' }
];
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightboxContent');
    const item = galleryItems[index];
    content.innerHTML = `<i class="${item.icon}"></i><h3>${item.title}</h3><p>${item.desc}</p>`;
    lightbox.classList.add('active');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }
document.getElementById('lightbox').addEventListener('click', function(e) { if(e.target === this) closeLightbox(); });

// Contact Form
function submitContact(){const name=document.getElementById('name')?.value?.trim()||'',email=document.getElementById('email')?.value?.trim()||'',msg=document.getElementById('message')?.value?.trim()||'لا يوجد',fb=document.getElementById('formFeedback');if(!name){fb.textContent='الاسم مطلوب';fb.style.color='red';return;}if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fb.textContent='بريد إلكتروني غير صحيح';fb.style.color='red';return;}fb.style.color='';const m=`*رسالة جديدة*\n\nالاسم: ${name}\nالبريد: ${email}\nالرسالة: ${msg}`;window.open(`https://wa.me/966507652943?text=${encodeURIComponent(m)}`,'_blank');fb.textContent='✅ تم!';fb.style.color='green';document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('message').value='';setTimeout(()=>{fb.textContent='';},5000);}
