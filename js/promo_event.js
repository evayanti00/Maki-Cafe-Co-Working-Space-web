
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');

// Geser otomatis setiap 4 detik
let currentIndex = 0;
const slideCount = track.children.length;
const slideWidth = track.children[0].offsetWidth;

function moveToSlide(index) {
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  moveToSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);

// Auto-slide
setInterval(nextSlide, 4000);