const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger-line");
const menu = document.querySelector(".nav-list");
const menuLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    menuLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.toggle("active");
  });
});

function toggleMenu() {
  menu.classList.toggle("opened");
  body.classList.toggle("non-scrolled");
  burgerLines.forEach((line) => {
    line.classList.toggle("active");
  });
  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
}
