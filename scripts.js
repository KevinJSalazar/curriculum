// Botón "Ir arriba"
const goTopBtn = document.getElementById('go-top');
goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        document.body.classList.add('show-go-top');
    } else {
        document.body.classList.remove('show-go-top');
    }
});

// Botón modo oscuro
const btn = document.getElementById('toggle-dark');
btn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Modo claro';
        btn.setAttribute('aria-pressed', 'true');
    } else {
        btn.textContent = '🌑 Modo oscuro';
        btn.setAttribute('aria-pressed', 'false');
    }
};