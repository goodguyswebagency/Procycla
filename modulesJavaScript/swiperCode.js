// Swiper module JavaScript
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// Swiper CSS inject
const swiperCssLink = document.createElement("link");
swiperCssLink.rel = "stylesheet";
swiperCssLink.href =
   "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
document.head.appendChild(swiperCssLink);

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

/****************************/
/* Testimonials swiper code */
/****************************/

export function testimonialSliderInit() {
   const testimonialSliders = document.querySelectorAll(".testimonials_slider");
   if (testimonialSliders) {
      testimonialSliders.forEach((slider) => {
         const swiperElement = slider.querySelector(".swiper");
         new Swiper(swiperElement, {
            slidesPerView: 1,
            spaceBetween: 1.25 * rem,
            loop: false,
            grabCursor: true,
            draggable: true,
            breakpoints: {
               992: {
                  slidesPerView: 1.5,
               }
            }
         });
      });
   }
}
