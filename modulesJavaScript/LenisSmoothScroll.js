/***********************/
/* Lenis smooth scroll */
/***********************/

export default function LenisSmoothScroll() {
   const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      smoothTouch: false,
   });

   // Smooth scroll for anchor links
   setTimeout(() => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
         const targetId = anchor.getAttribute("href");
         if (targetId !== "#") {
            const targetElement = document.querySelector(targetId);
            anchor.addEventListener("click", (e) => {
               e.preventDefault();
               if (targetElement) {
                  lenis.scrollTo(targetElement, { offset: 0, duration: 2, lerp: 0.05 });
               }
            });
         }
      });
   }, 150);

   if (window.ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
   }

   function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
   }
   requestAnimationFrame(raf);
}
