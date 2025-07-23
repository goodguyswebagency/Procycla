/**************************/
/* Button hover animation */
/**************************/

function buttonsHover() {
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

/**************************/
/* Navigation scroll code */
/**************************/

function navigationScroll() {
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

/*****************************/
/* Set form height on submit */
/*****************************/

function setFormHeight() {
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

/************************************/
/* Run all code on DOMContentLoaded */
/************************************/

document.addEventListener("DOMContentLoaded", () => {
   buttonsHover();
   setSelectPlaceholder();
   navigationScroll();
   setFormHeight();
});