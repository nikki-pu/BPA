function toggleMenu() {
    var menu = document.getElementById("overlay-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}
// Select all timeline events
const timelineEvents = document.querySelectorAll('.timeline-event');

function checkVisibility() {
    timelineEvents.forEach(event => {
        const rect = event.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the event is in view
        if (rect.top <= windowHeight * 0.8) {
            event.classList.add('visible');
        }
    });
}

// Trigger checkVisibility on scroll
window.addEventListener('scroll', checkVisibility);

// Initial check in case some events are already in view
checkVisibility();


// JavaScript to show the footer on scroll
// JavaScript to show the footer when scrolling to the bottom
window.addEventListener("scroll", function() {
    const footer = document.getElementById("scroll-footer");
    // Check if the user has scrolled to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add("show");
    } else {
        footer.classList.remove("show");
    }
});
