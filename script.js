// Image Slider Logic
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    // Adjust the slider's position by moving the slider container
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optionally, you can add an automatic slide function
setInterval(() => moveSlide(1), 3000); // Move every 3 seconds