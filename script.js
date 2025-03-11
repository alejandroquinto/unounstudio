// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

const circles = document.querySelectorAll('.circle-image');

let draggedCircle = null;

circles.forEach(circle => {
    circle.addEventListener('dragstart', function () {
        draggedCircle = this;
        setTimeout(() => this.classList.add('hidden'), 0);
    });

    circle.addEventListener('dragend', function () {
        draggedCircle = null;
        this.classList.remove('hidden');
    });

    circle.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    circle.addEventListener('drop', function () {
        if (draggedCircle !== this) {
            const parent = this.parentNode;
            parent.insertBefore(draggedCircle, this.nextSibling);
        }
    });
});

const words = [
    "design", 
    "futures", 
    "buildings", 
    "spaces", 
    "places", 
    "designs", 
    "ideas", 
    "connections", 
    "networks", 
    "possibilities", 
    "stories", 
    "environments", 
    "solutions", 
    "visions",
    "data",
];

let currentIndex = 0;
const dynamicWordElement = document.getElementById("dynamic-word");

function changeWord() {
    currentIndex = (currentIndex + 1) % words.length; // Loop back to the start
    dynamicWordElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        dynamicWordElement.textContent = words[currentIndex];
        dynamicWordElement.style.opacity = 1; // Fade in
    }, 300); // Delay to sync with the CSS fade-out
}

// Change word every 1 seconds
setInterval(changeWord, 1000);

// Array of images for the background
const heroImages = [
    "assets/background1.jpg",
    "assets/background2.jpg",
    "assets/background3.jpg",
    "assets/background4.jpg"
];

let currentImageIndex = 0;
const heroSection = document.querySelector(".hero-section");
let slideDirection = true; // true = slide left, false = slide right

function changeHeroBackground() {
    heroSection.classList.add(slideDirection ? "slide-left" : "slide-right"); // Start sliding

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;

        // Reset slide effect
        heroSection.classList.remove("slide-left", "slide-right");
        slideDirection = !slideDirection; // Toggle direction
    }, 1500); // Matches the slide duration in CSS
}

// Change image every 5 seconds
setInterval(changeHeroBackground, 5000);
