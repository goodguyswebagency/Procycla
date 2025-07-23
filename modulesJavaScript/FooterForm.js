/*****************************/
/* Set form height on submit */
/*****************************/

export default function setFormHeight() {
   const block = document.querySelector(".footer_form-block");
   if (!block) return;
   console.log("Block:" + block);

   const form = block.querySelector("form");
   if (!form) return;
   console.log("Form: " + form);

   // 2) measure and store the height
   const storedHeight = block.getBoundingClientRect().height;
   console.log("Stored height: " + storedHeight + "px");

   // 3) when the form is submitted, lock the wrapper’s height
   form.addEventListener("submit", () => {
      block.style.height = storedHeight + "px";
   });
}