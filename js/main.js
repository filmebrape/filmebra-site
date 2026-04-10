document.addEventListener('DOMContentLoaded', () => {
    
    const reelVideo = document.getElementById('reel-video');
    const overlay = document.getElementById('s4-overlay');

    // Escuchamos el clic directamente sobre el video
    reelVideo.addEventListener('click', () => {
        if (reelVideo.paused) {
            reelVideo.play();
            overlay.style.opacity = '0';
        } else {
            reelVideo.pause();
            overlay.style.opacity = '1';
        }
    });

    // Si el video termina, mostramos el overlay de nuevo
    reelVideo.addEventListener('ended', () => {
        overlay.style.opacity = '1';
    });
});
