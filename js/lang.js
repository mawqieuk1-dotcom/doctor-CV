const translations = {
    ar: {
        page_title: 'ليلى العتيبي | UI/UX Designer',
        brand_name: 'ليلى العتيبي',
        nav_home: 'الرئيسية', nav_gallery: 'معرض الأعمال', nav_tools: 'أدوات التصميم', nav_platforms: 'منصاتي', nav_contact: 'تواصل',
        hero_badge: 'مصممة UI/UX', hero_hello: 'مرحباً، أنا', hero_name: 'ليلى العتيبي',
        hero_desc: 'أحول الأفكار إلى تجارب بصرية ساحرة. متخصصة في تصميم واجهات المستخدم وتجربة المستخدم.',
        hero_btn1: 'شاهد أعمالي', hero_btn2: 'تواصل معي',
        stat_projects: 'مشروع', stat_clients: 'عميل', stat_awards: 'جائزة',
        gallery_title: 'معرض الأعمال', gallery_sub: 'آخر أعمالي الإبداعية',
        gal1: 'تطبيق جوال', gal2: 'موقع ويب', gal3: 'هوية بصرية', gal4: 'لوحة معلومات', gal5: 'متجر إلكتروني', gal6: 'نظام إدارة',
        tools_title: 'أدوات التصميم', tools_sub: 'البرامج والتقنيات التي أستخدمها',
        platforms_title: 'منصاتي الإبداعية', platforms_sub: 'حيث أنشر أعمالي وأتواصل مع مجتمع المصممين',
        behance_desc: 'معرض أعمالي الاحترافي', dribbble_desc: 'لقطات سريعة من تصاميمي', linkedin_desc: 'شبكتي المهنية',
        contact_title: 'تواصل معي', contact_sub: 'هل لديك مشروع إبداعي؟ دعنا نتحدث!',
        form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_msg: 'الرسالة', form_submit: 'إرسال',
        copyright: '© 2026 ليلى العتيبي. قالب من <strong>موقعك</strong> – Mawqeak'
    },
    en: {
        page_title: 'Laila Al-Otaibi | UI/UX Designer',
        brand_name: 'Laila Al-Otaibi',
        nav_home: 'Home', nav_gallery: 'Gallery', nav_tools: 'Tools', nav_platforms: 'Platforms', nav_contact: 'Contact',
        hero_badge: 'UI/UX Designer', hero_hello: 'Hi, I am', hero_name: 'Laila Al-Otaibi',
        hero_desc: 'I turn ideas into stunning visual experiences. Specialized in UI/UX design.',
        hero_btn1: 'View My Work', hero_btn2: 'Contact Me',
        stat_projects: 'Projects', stat_clients: 'Clients', stat_awards: 'Awards',
        gallery_title: 'Portfolio', gallery_sub: 'My latest creative work',
        gal1: 'Mobile App', gal2: 'Website', gal3: 'Brand Identity', gal4: 'Dashboard', gal5: 'E-Commerce', gal6: 'Management System',
        tools_title: 'Design Tools', tools_sub: 'Software & technologies I use',
        platforms_title: 'My Creative Platforms', platforms_sub: 'Where I share my work and connect with the design community',
        behance_desc: 'My professional portfolio', dribbble_desc: 'Quick shots of my designs', linkedin_desc: 'My professional network',
        contact_title: 'Contact Me', contact_sub: 'Have a creative project? Let\'s talk!',
        form_name: 'Name', form_email: 'Email', form_msg: 'Message', form_submit: 'Send',
        copyright: '© 2026 Laila Al-Otaibi. Template by <strong>Mawqeak</strong>'
    }
};

let currentLang = 'ar';
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const btn = document.getElementById('langToggle');
    if (btn) btn.innerHTML = lang === 'ar' ? '<i class="fas fa-globe"></i> English' : '<i class="fas fa-globe"></i> العربية';
    localStorage.setItem('lang', lang);
}
function switchLanguage() { setLanguage(currentLang === 'ar' ? 'en' : 'ar'); }
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('lang') || 'ar');
    document.getElementById('langToggle')?.addEventListener('click', switchLanguage);
});
