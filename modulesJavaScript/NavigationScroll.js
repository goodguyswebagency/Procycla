/**************************/
/* Navigation scroll code */
/**************************/

export default function navigationScroll() {
   const nav = document.querySelector(".navigation");
   const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
   let lastScrollY = window.scrollY;
   let downAccum = 0;
   let upAccum = 0;

   window.addEventListener("scroll", () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      /* OPTIONAL Toggle the is-scrolled class */
      // Toggle .is-scrolled
      if (currentY >= 3 * rem) {
         nav.classList.add("is-scrolled");
      } else {
         nav.classList.remove("is-scrolled");
      }

      // If the user is in the top 10rem of the page force the navigation shown
      const topThresholdPx = 10 * rem;
      if (currentY <= topThresholdPx) {
         nav.style.transform = "translateY(0%)";
         nav.style.opacity = "1";
         // Reset any accumulated “downward” or “upward” scroll so bounce doesn’t hide it
         downAccum = upAccum = 0;
         lastScrollY = currentY;
         return;
      }

      // Accumulate scroll direction
      if (delta > 0) {
         downAccum += delta;
         upAccum = 0;
      } else if (delta < 0) {
         upAccum += -delta;
         downAccum = 0;
      }

      // Hide nav after 5rem downward
      if (downAccum >= 5 * rem) {
         nav.style.transform = "translateY(-100%)";
         nav.style.opacity = "0";
         downAccum = 0;
      }
      // Show nav after 5rem upward
      else if (upAccum >= 5 * rem) {
         nav.style.transform = "translateY(0%)";
         nav.style.opacity = "1";
         upAccum = 0;
      }

      lastScrollY = currentY;
   });
}