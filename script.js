// Update year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight active nav link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Hamburger menu toggle
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (toggle) {
  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
