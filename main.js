const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

// Open mobile menu
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full"); // Slide in menu
    mobileMenu.classList.add("translate-x-0"); // Ensure it's in view
});

// Close mobile menu
closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0"); // Slide out menu
    mobileMenu.classList.add("-translate-x-full"); // Ensure it's off-screen
});