// menu.js - Versión actualizada
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    
    const toggleMenu = () => {
        menu.classList.toggle('active');
        menuButton.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 
            'hidden' : 'auto';
    };
    
    menuButton.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.menu li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 650) {
                toggleMenu();
            }
        });
    });
    
    // Inicialización
    if (window.innerWidth <= 650) {
        menu.classList.remove('active');
        menuButton.classList.remove('active');
    }
});