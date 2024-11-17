function toggleMenu() {
    var menu = document.getElementById("overlay-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}

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


window.addEventListener('scroll', checkVisibility);


checkVisibility();



