document.addEventListener('DOMContentLoaded', function() {
    // Prevenir que el menú se salga de la pantalla
    const navItems = document.querySelectorAll('#main-nav > ul > li');
    
    navItems.forEach(item => {
        const dropdown = item.querySelector('.nav-dropdown');
        if (dropdown) {
            item.addEventListener('mouseenter', function() {
                const rect = dropdown.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                
                // Si se sale por la derecha, ajustar a la izquierda
                if (rect.right > viewportWidth - 20) {
                    dropdown.style.left = 'auto';
                    dropdown.style.right = '0';
                    dropdown.style.transformOrigin = 'top right';
                } else {
                    dropdown.style.left = '0';
                    dropdown.style.right = 'auto';
                    dropdown.style.transformOrigin = 'top left';
                }
            });
        }
    });
    
    // Cerrar todos los dropdowns al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#main-nav')) {
            navItems.forEach(item => {
                const dropdown = item.querySelector('.nav-dropdown');
                if (dropdown) {
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                }
            });
        }
    });
    
    // Scroll suave para enlaces internos del dropdown
    document.querySelectorAll('.dropdown-section a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


