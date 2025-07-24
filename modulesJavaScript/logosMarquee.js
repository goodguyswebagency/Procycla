/***************************/
/* Logos marquee animation */
/***************************/

export default function logosMarquee() {
   let speed = 25;
   setTimeout(() => {
      const leftWrapper = document.querySelector(
         ".logos_marquee_wrapper.animate-left"
      );
      if (leftWrapper) {
         const widthPx = leftWrapper.offsetWidth;
         const durationSec = widthPx / speed;
         document.documentElement.style.setProperty(
            "--logosMarqueeLeft",
            `${durationSec}s`
         );
      }
      const rightWrapper = document.querySelector(
         ".logos_marquee_wrapper.animate-right"
      );
      if (rightWrapper) {
         const widthPx = rightWrapper.offsetWidth;
         const durationSec = widthPx / speed;
         document.documentElement.style.setProperty(
            "--logosMarqueeRight",
            `${durationSec}s`
         );
      }
   }, 300);
}