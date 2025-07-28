import processAnimation from "../modulesJavaScript/processAnimation.js";
import faq from "../modulesJavaScript/faq.js";

/**************************/
/* Hotspot card animation */
/**************************/

function hotspotCards() {
   // Get all buttons
   const button1 = document.getElementById("hotspot-button-1");
   const button2 = document.getElementById("hotspot-button-2");
   const button3 = document.getElementById("hotspot-button-3");

   // Get all cards
   const card1 = document.getElementById("hotspot-card-1");
   const card2 = document.getElementById("hotspot-card-2");
   const card3 = document.getElementById("hotspot-card-3");
   const cards = document.querySelectorAll("._3d-showcase_card_wrapper");

   // Helper function
   function closeAll() {
      cards.forEach((card) => card.classList.remove("is-open"));
   }

   // Event listeners
   button1.addEventListener("click", () => {
      closeAll();
      card1.classList.add("is-open");
   });
   button2.addEventListener("click", () => {
      closeAll();
      card2.classList.add("is-open");
   });
   button3.addEventListener("click", () => {
      closeAll();
      card3.classList.add("is-open");
   });

   // Close card
   const closeButtons = document.querySelectorAll("._3d-showcase_card_close");
   closeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
         const wrapper = event.currentTarget.closest(
            "._3d-showcase_card_wrapper"
         );
         if (wrapper) wrapper.classList.remove("is-open");
      });
   });
}

document.addEventListener("DOMContentLoaded", () => {
   hotspotCards();
   processAnimation();
   faq();
});