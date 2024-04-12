// Open Burger Menu
let burgerBTN = document.getElementById("header-burgerBTN");
let headerNavMenu = document.getElementById("header-nav-menu");
let burgerBTN_Click = true;

burgerBTN.addEventListener("click", () => {
    if (burgerBTN_Click) {
        headerNavMenu.style.display = "flex";
        headerNavMenu.style.opacity = "1";
        headerNavMenu.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    } else {
        headerNavMenu.style.display = "flex";
        headerNavMenu.style.opacity = "0";
        headerNavMenu.style.transform = "translate3d(110px, -250px, 0px) scale3d(0, 0, 1)";
    }
    
    burgerBTN_Click = !burgerBTN_Click;
});

// Header buttons background
document.addEventListener("DOMContentLoaded", function () {
    var currentURL = window.location.href;
    var homeBtn = document.getElementById("header-home-btn");
    var aboutBtn = document.getElementById("header-about-btn");
    var projectsBtn = document.getElementById("header-projects-btn");

    if (
        currentURL.endsWith("home_page") ||
        currentURL.endsWith("index.html") ||
        currentURL.endsWith("/")
    ) {
        homeBtn.style.background = "rgba(242, 242, 242, 0.137)";
    } else if (currentURL.includes("about-me-page.html")) {
        aboutBtn.style.background = "rgba(242, 242, 242, 0.137)";
    } else if (currentURL.includes("projects-page.html")) {
        projectsBtn.style.background = "rgba(242, 242, 242, 0.137)";
    }
});
