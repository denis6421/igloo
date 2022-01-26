import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";
import { globalInit } from "../index.js";

window.onload = () => {
  createSlider();
  globalInit();
};

const createSlider = () => {
  new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoWidth: true,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 400,
    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
  });
};
