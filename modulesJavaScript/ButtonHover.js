/**************************/
/* Button hover animation */
/**************************/

export default function buttonsHover() {
   const buttons = document.querySelectorAll(".button.is-link");

   buttons.forEach((btn) => {
      const underline = btn.querySelector(".button-underline");

      if (!underline) return;

      btn.addEventListener("mouseenter", () => {
         underline.classList.remove("animate");
         void underline.offsetWidth;
         underline.classList.add("animate");
      });

      underline.addEventListener("animationend", () => {
         underline.classList.remove("animate");
      });
   });
}