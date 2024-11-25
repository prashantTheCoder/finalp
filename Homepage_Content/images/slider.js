// JavaScript for auto-slider with navigation
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the slide position
function updateSlidePosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide functionality
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}, 3000); // 3 seconds interval

// Previous button functionality
prevBtn.addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-slide on manual interaction
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    autoSlide = setInterval(() => { // Restart auto-slide
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }, 3000);
});

// Next button functionality
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-slide on manual interaction
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
    autoSlide = setInterval(() => { // Restart auto-slide
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }, 3000);
});
