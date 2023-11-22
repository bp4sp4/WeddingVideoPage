// Swiper 슬라이더 초기화
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

$(".mySwiper").each(function (elem, target) {
  var swp = target.swiper;
  $(this).hover(
    function () {
      swp.autoplay.stop();
    },
    function () {
      swp.autoplay.start();
    }
  );
});
