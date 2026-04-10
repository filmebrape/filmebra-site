document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('reel-video');
    const overlay = document.getElementById('s4-overlay');

    document.getElementById('s4').addEventListener('click', () => {
        if (video.paused) {
            // Usamos una promesa para capturar si el navegador bloquea la reproducción
            video.play().then(() => {
                overlay.style.opacity = '0';
            }).catch(error => {
                console.log("Reproducción bloqueada por el navegador:", error);
                alert("Por favor, haz clic nuevamente para iniciar el video.");
            });
        } else {
            video.pause();
            overlay.style.opacity = '1';
        }
    });
});
