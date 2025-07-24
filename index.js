import LenisSmoothScroll from "./modulesJavaScript/LenisSmoothScroll.js";
import buttonsHover from "./modulesJavaScript/ButtonHover.js"
import navigationScroll from "./modulesJavaScript/NavigationScroll.js";
import setFormHeight from "./modulesJavaScript/FooterForm.js";

/**************************/
/* Set select placeholder */
/**************************/

function setSelectPlaceholder() {
   const selects = document.querySelectorAll("select");
   selects.forEach((select) => {
      const firstOption = select.querySelector("option");
      if (!firstOption) return;
      firstOption.disabled = true;
      firstOption.hidden = true;
      firstOption.selected = true;
      firstOption.classList.add("form-option-hidden");
      select.classList.add("is-placeholder");
      select.addEventListener("change", () => {
         if (select.selectedIndex === 0) {
            select.classList.add("is-placeholder");
         } else {
            select.classList.remove("is-placeholder");
         }
      });
   });
}

/************************************/
/* Run all code on DOMContentLoaded */
/************************************/

document.addEventListener("DOMContentLoaded", () => {
   LenisSmoothScroll();
   buttonsHover();
   setSelectPlaceholder();
   navigationScroll();
   setFormHeight();
});