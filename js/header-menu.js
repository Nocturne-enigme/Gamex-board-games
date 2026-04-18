const bntOpen = document.querySelectorAll(".header__burger-btn");
const btnClose = document.querySelectorAll(".header__btn-close");
const list = document.querySelectorAll(".header__list");

const toggleMenu = () =>
  list.forEach((item) => item.classList.toggle("header__list--open"));
bntOpen.forEach((btn) => btn.addEventListener("click", toggleMenu));
btnClose.forEach((btn) => btn.addEventListener("click", toggleMenu));
