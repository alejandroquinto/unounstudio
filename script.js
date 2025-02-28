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
