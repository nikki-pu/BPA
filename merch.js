// Toggle overlay menu visibility
function toggleMenu() {
    var menu = document.getElementById("overlay-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}

// Adding click ripple effect to each button
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    // Create a new span element for the ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');

    // Position the ripple at the click location
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left - 50}px`; // Adjusting for ripple size
    ripple.style.top = `${e.clientY - rect.top - 50}px`;  // Adjusting for ripple size

    // Append the ripple effect to the button
    button.appendChild(ripple);

    // Remove the ripple after the animation completes
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});