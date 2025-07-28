/**********************/
/* FAQ animation code */
/**********************/

export default function faq() {
   const faqWrapper = document.querySelector(".faq_slot");
   const faqs = faqWrapper.querySelectorAll(".faq_slot_wrapper");

   // Attach event listener to each faq
   faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
         if (faq.classList.contains("is-open")) {
            faq.classList.remove("is-open");
         } else {
            faqs.forEach((faqLoop) => faqLoop.classList.remove("is-open"));
            faq.classList.add("is-open");
         }
      });
   });
}