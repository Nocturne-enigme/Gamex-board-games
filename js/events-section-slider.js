const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1280: {
  //     slidesPerView: 3,
  //   },
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    //   // bulletClass: "pagination__button",
    //   // bulletActiveClass: "pagination__button--active",
  },

  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});
