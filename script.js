// Form Submission
document.getElementById('inscricao-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const nome = this.querySelector('input[type="text"]').value;
    const whatsapp = this.querySelector('input[type="tel"]').value;
    const whatsappUrl = `https://wa.me/5548999999999?text=Inscrição%20Curso%20Cílios:%20${encodeURIComponent(nome)}%20-%20${whatsapp}`;
    window.open(whatsappUrl, '_blank');
    alert('Inscrição enviada! Redirecionando para WhatsApp da Munique.');
    this.reset();
});

// Smooth Scroll para Links (se adicionar nav)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animações Scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
document.querySelectorAll('section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});

// Contador Urgência (simples, 48h fictício)
function updateCountdown() {
    const now = new Date();
    const end = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48h
    const diff = end - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    document.querySelector('#urgencia p').innerHTML += `<br>Tempo restante: ${hours}h`;
}
updateCountdown();
setInterval(updateCountdown, 3600000); // Update hourly
