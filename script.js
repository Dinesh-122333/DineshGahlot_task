let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const intervalTime = 3000; // Change the interval time as needed (in milliseconds)

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// document.getElementById('nextBtn').addEventListener('click', nextSlide);
// document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Automatically advance the carousel
setInterval(nextSlide, intervalTime);
