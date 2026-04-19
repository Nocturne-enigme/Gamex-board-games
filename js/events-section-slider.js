const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1040: {
      slidesPerView: 2,
    },
  },
  watchOverflow: true,
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
