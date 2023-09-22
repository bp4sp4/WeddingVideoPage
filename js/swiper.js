var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, //브라우저가 768보다 클 때
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3, //브라우저가 1024보다 클 때
      spaceBetween: 50,
    },
  },
});
