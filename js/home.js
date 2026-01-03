// fungsi utama navigasi
function filterMaki(target) {
    let sectionId = '';

    switch (target) {
        case 'home':
            sectionId = 'home';
            break;

        case 'menu':
            sectionId = 'menu';
            break;

        case 'gallerycafe':
            sectionId = 'gallerycafe';
            break;

        case 'promo&event':
            sectionId = 'promo-event';
            break;

        case 'kontak&lokasi':
            sectionId = 'kontak-lokasi';
            break;

        default:
            console.warn('Section tidak ditemukan');
            return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

/* ===== Klik Header Kembali ke Home ===== */
const header = document.getElementById('header');

if (header) {
    header.addEventListener('click', function () {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

/* ===== Slideshow Suasana Cafe ===== */

const useCssSlide = true;

let currentSlide = 0;
const slides = document.querySelector('.slides');

if (slides && !useCssSlide) {
    const totalSlides = slides.children.length;
    const slideInterval = 5000; // 5 detik

    function showSlide(index) {
        const slideWidth = slides.children[0].clientWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    setInterval(nextSlide, slideInterval);
}