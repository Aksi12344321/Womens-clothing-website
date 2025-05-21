// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  /*  slidesPerView: 3, */
  slidesPerView: 2, //Делаем от мобилки и выше
  spaceBetween: 16,
  loop: true,

  breakpoints: {
    767.98: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

// Аккордеон для мобильной навигации
import accordion from "./modules/accordion.js";
accordion();
