function toggleMenu() {
    var menu = document.getElementById("overlay-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}
