const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    showSlide(slideIndex);
}

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");  // Hide all slides
    slides[index].style.display = "block";  // Show the current slide
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
