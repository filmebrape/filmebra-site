const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

/* PARALLAX EFFECT */
const parallax = document.querySelector(".parallax-image");

window.addEventListener("scroll", () => {
  if (!parallax) return;

  const rect = parallax.parentElement.getBoundingClientRect();
  const speed = 0.3;

  const offset = rect.top * speed;

  parallax.style.transform = `translateY(${offset}px)`;
});

const track = document.querySelector(".carousel-track");
const carousel = document.querySelector(".carousel");

let speed = 0.4;
let position = 0;
let isHovered = false;

// clone elements until we fill screen twice
function fillTrack() {
  const trackWidth = track.scrollWidth;
  const containerWidth = carousel.offsetWidth;

  while (track.scrollWidth < containerWidth * 2) {
    track.innerHTML += track.innerHTML;
  }
}

fillTrack();

// hover pause
carousel.addEventListener("mouseenter", () => isHovered = true);
carousel.addEventListener("mouseleave", () => isHovered = false);

function animate() {
  if (!isHovered) {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    // recycle elements ONLY when fully out of view (off-screen)
    const first = track.children[0];
    const firstWidth = first.offsetWidth + 60;

    if (Math.abs(position) >= firstWidth) {
      track.appendChild(first);
      position += firstWidth;
    }
  }

  requestAnimationFrame(animate);
}

animate();