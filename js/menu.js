// menu.js - Versión optimizada
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    
    // Función optimizada para toggle
    const toggleMenu = () => {
        menu.classList.toggle('active');
        menuButton.innerHTML = menu.classList.contains('active') ? 
            '&times;' : '&#9776;'; // Usando entidades HTML para los íconos
        document.body.style.overflow = menu.classList.contains('active') ? 
            'hidden' : 'auto';
    };
    
    // Evento click para el botón
    menuButton.addEventListener('click', toggleMenu);
    
    // Cerrar menú al seleccionar opción (móvil)
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
        menuButton.innerHTML = '&#9776;'; // Ícono hamburguesa
    }
});