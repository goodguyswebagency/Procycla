/**************************/
/* GSAP process animation */
/**************************/

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
         markers: true,
      },
   });
});
