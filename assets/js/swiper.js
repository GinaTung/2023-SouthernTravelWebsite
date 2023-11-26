var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
