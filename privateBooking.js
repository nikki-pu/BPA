// Form submission event
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message
});

function toggleMenu() {
    var menu = document.getElementById("overlay-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}
// JavaScript to show the footer only when scrolling all the way to the bottom
