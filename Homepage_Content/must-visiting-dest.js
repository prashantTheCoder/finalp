
    const carousel = document.querySelector('#carouselExampleIndicators');

    // Bootstrap Carousel instance
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 3000, // Set interval time for auto-slide (in ms)
        pause: false // Disable pausing on hover by default
    });

    // Add event listeners for hover
    carousel.addEventListener('mouseenter', () => {
        carouselInstance.cycle(); // Start auto-sliding
    });

    carousel.addEventListener('mouseleave', () => {
        carouselInstance.pause(); // Pause auto-sliding when not hovered
    });

