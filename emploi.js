const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
    const offset = -currentIndex * 100 / totalSlides;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});

updateSlider();