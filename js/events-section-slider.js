// const swiper = new Swiper(".swiper", {
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 20,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },
//     1280: {
//       slidesPerView: 3,
//     },
//   },
//   pagination: {
//     el: ".pagination",
//     clickable: true,
//     bulletClass: "pagination__button",
//     bulletActiveClass: "pagination__button--active",
//   },

//   navigation: {
//     nextEl: ".carousel-button.next",
//     prevEl: ".carousel-button.prev",
//   },
// });
const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
