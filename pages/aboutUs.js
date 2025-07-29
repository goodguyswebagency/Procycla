/*********************/
/* About values code */
/*********************/

export default function aboutValues() {
   const aboutTabsWrapper = document.querySelector(".values_tabs");
   const aboutTabs = aboutTabsWrapper.querySelectorAll(".values_tab_wrapper");

   // Attach event listener to each tab
   aboutTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
         if (tab.classList.contains("is-open")) {
            tab.classList.remove("is-open");
         } else {
            aboutTabs.forEach((aboutTabLoop) =>
               aboutTabLoop.classList.remove("is-open")
            );
            tab.classList.add("is-open");
         }
      });
   });
}

document.addEventListener("DOMContentLoaded", () => {
   aboutValues();
});