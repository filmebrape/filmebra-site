document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE S4: EL REEL ---
    const s4Section = document.getElementById('s4');
    const overlay = document.getElementById('s4-overlay');
    const reelVideo = document.getElementById('reel-video');

    s4Section.addEventListener('click', () => {
        if (reelVideo.paused) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.pointerEvents = 'none';
                reelVideo.play();
            }, 500); 
        } else {
            reelVideo.pause();
        }
    });

    reelVideo.addEventListener('ended', () => {
        overlay.style.pointerEvents = 'auto'; 
        overlay.style.opacity = '1';
    });

    // --- ANIMACIONES AL SCROLLEAR (FADE-UP) ---
    // Seleccionamos todos los elementos con la clase .reveal
    const reveals = document.querySelectorAll('.reveal');

    // Configuramos cuándo debe dispararse la animación
    const revealOptions = {
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Le añade la clase 'active' que dispara la transición en CSS
                entry.target.classList.add('active');
                // Dejamos de observarlo para que la animación solo ocurra una vez
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Activamos el observador para cada elemento
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

});