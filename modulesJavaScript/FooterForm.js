/*****************************/
/* Set form height on submit */
/*****************************/

export default function setFormHeight() {
   const block = document.querySelector(".footer_form-block");
   if (!block) return;

   const form = block.querySelector("form");
   if (!form) return;

   // 2) measure and store the height
   const storedHeight = block.getBoundingClientRect().height;

   // 3) when the form is submitted, lock the wrapper’s height
   form.addEventListener("submit", () => {
      block.style.height = storedHeight + "px";
   });
}