const menubaritems=document.querySelector('.menu-bar-items');

function hamburgermenu(){
    
    menubaritems.innerHTML=`<ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="destination.html">Destinations
                            <div class="dropdown">
                                <ul>
                                    <li><a href="#" class="dropdown-menu">Patna</a></li>
                                    <li><a href="#" class="dropdown-menu">Rajgir</a></li>
                                    <li><a href="#" class="dropdown-menu">Bodh Gaya</a></li>
                                    <li><a href="#" class="dropdown-menu">Kaimur</a></li>
                                    <li><a href="#" class="dropdown-menu">Vaishali</a></li>
                                    <li><a href="#" class="dropdown-menu">Muzaffarpur</a></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">Glories</a></li>
    
                </ul>`
}

menubaritems.addEventListener('click',hamburgermenu);






// JavaScript for auto-slider with hover pause and dots
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slides.length;

let autoSlide; // To store the interval for auto-sliding

// Function to update the slide position
function updateSlidePosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveDot();
}

// Function to update the active dot
function updateActiveDot() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Auto-slide functionality
function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }, 3000); // 3 seconds interval
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Start auto-slide initially
startAutoSlide();

// Previous button functionality
prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    startAutoSlide();
});

// Next button functionality
nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
    startAutoSlide();
});

// Pause auto-slide on hover and resume on leave
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// Dots navigation functionality
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        stopAutoSlide();
        currentIndex = parseInt(e.target.dataset.index);
        updateSlidePosition();
        startAutoSlide();
    });
});

