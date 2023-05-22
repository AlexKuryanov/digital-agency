const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-list");
const menuLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("opened");
  body.classList.toggle("non-scrolled");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
