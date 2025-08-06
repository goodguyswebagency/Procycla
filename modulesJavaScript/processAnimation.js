/**************************/
/* GSAP process animation */
/**************************/

export default function processAnimation() {
   let startValueIn;
   let endValueIn;
   let startValueOut;
   let endValueOut;

   if (window.innerWidth > 991) {
      startValueIn = "top 75%";
      endValueIn = "top 55%";
      startValueOut = "top 35%";
      endValueOut = "top 0%";
   } else {
      startValueIn = "top 75%";
      endValueIn = "top 65%";
      startValueOut = "top 35%";
      endValueOut = "top 0%";
   }

   gsap.utils.toArray(".process_usp_wrapper").forEach((el) => {
      gsap.set(el, { opacity: 0 });

      const fadeOutEnabled = el.getAttribute("data-fade-out") !== "false";

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: el,
            start: startValueIn,
            end: endValueOut,
            scrub: true,
            markers: false,
         },
      });

      tl.to(el, { opacity: 1, duration: 1, ease: "none" }).to(el, {
         opacity: 1,
         duration: 2.25,
         ease: "none",
      });
      if (fadeOutEnabled) {
         tl.to(el, { opacity: 0, duration: 1, ease: "none" });
      }
   });
}
