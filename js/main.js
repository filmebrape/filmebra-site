document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('reel-video');
    const overlay = document.getElementById('s4-overlay');

    // Escuchamos el clic directo en el contenedor s4
    document.getElementById('s4').addEventListener('click', () => {
        // Ejecución inmediata, sin esperas
        if (video.paused) {
            video.play().then(() => {
                overlay.style.opacity = '0';
            }).catch(error => {
                console.error("Safari bloqueó el audio, usuario debe dar clic nuevamente:", error);
            });
        } else {
            video.pause();
            overlay.style.opacity = '1';
        }
    });

    video.addEventListener('ended', () => {
        overlay.style.opacity = '1';
        video.load(); // Esto reinicia el video al inicio para la próxima vez
    });
});
