import { testimonialSliderInit } from "../modulesJavaScript/swiperCode.js";
import logosMarquee from "../modulesJavaScript/logosMarquee.js"

/**************************/
/* GSAP process animation */
/**************************/

function processAnimation() {
   let startValue;
   let endValue;

   if (window.innerWidth > 991) {
      startValue = "top 75%";
      endValue = "top 55%";
   } else {
      startValue = "top 85%";
      endValue = "top 65%";
   }

   gsap.utils.toArray(".process_usp_wrapper").forEach((el) => {
      gsap.from(el, {
         opacity: 0,
         scrollTrigger: {
            trigger: el,
            start: startValue,
            end: endValue,
            scrub: true,
            markers: false,
         },
      });
   });
}

document.addEventListener("DOMContentLoaded", () => {
   logosMarquee();
   processAnimation();
   testimonialSliderInit();
});
