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

});
