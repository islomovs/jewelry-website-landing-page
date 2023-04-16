// change header background

const header = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll-header", window.scrollY > 70);
});

const menu = document.querySelector(".menu__mobile");
const menuToggler = document.querySelector(".menu__toggler");

// Open Menu
function toggleClass() {
  menu.classList.toggle("show-menu");
  menuToggler.classList.toggle("show-menu");
}

menuToggler.addEventListener("click", toggleClass);

// hide menu when clicked on menu links

let navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    menuToggler.classList.remove("show-menu");
  });
});

// on scroll reveal animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);