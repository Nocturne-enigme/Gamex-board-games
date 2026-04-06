const openBtn = document.getElementById("fixed-popup-btn");
const closeBtn = document.querySelector(".fixed-popup__button-close");
const popUp = document.querySelector(".fixed-popup");

function toggleIt() {
  popUp.classList.toggle("fixed-popup__open");
}
openBtn.addEventListener("click", toggleIt);
closeBtn.addEventListener("click", toggleIt);
