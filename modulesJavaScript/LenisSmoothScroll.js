/***********************/
/* Lenis smooth scroll */
/***********************/

export default function LenisSmoothScroll() {
   const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      smoothTouch: false,
   });

   if (window.ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
   }

   function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
   }
   requestAnimationFrame(raf);
}