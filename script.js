// 1. පිටුව පහළට යන විට Navigation එකේ පෙනුම වෙනස් කිරීම
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.tabs-nav-section');
    if (window.scrollY > 100) {
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// 2. Tabs මාරු කිරීමේ ක්‍රියාවලිය
function switchTab(tabId, element) {
    // සියලුම පැනල සැඟවීම
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // සියලුම ටැබ් වල active ලකුණ ඉවත් කිරීම
    document.querySelectorAll('.tnav-item').forEach(item => {
        item.classList.remove('active');
    });

    // තෝරාගත් පැනලය පෙන්වීම
    document.getElementById('panel-' + tabId).classList.add('active');
    element.classList.add('active');

    // පේජ් එක ටිකක් ඉහළට ස්ක්‍රෝල් කිරීම
    window.scrollTo({
        top: document.getElementById('tabs-anchor').offsetTop - 20,
        behavior: 'smooth'
    });
}

// 3. Trip Planner - දින ගණන අනුව ප්ලෑන් එක පෙන්වීම
function generatePlan() {
    const resultArea = document.getElementById('plan-result');
    resultArea.classList.add('show');
    
    // සරලව ඇනිමේෂන් එකක් ලබා දීම
    resultArea.style.opacity = "0";
    setTimeout(() => {
        resultArea.style.opacity = "1";
        resultArea.style.transition = "0.5s";
    }, 100);
}

// 4. Scroll වන විට Animation එකතු කිරීම (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
