document.addEventListener("DOMContentLoaded", () => {
   const target = document.querySelector(".form-success");
   if (!target) return;

   const observer = new MutationObserver(() => {
      if (window.getComputedStyle(target).display === "block") {
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
   });

   observer.observe(target, {
      attributes: true,
      attributeFilter: ["style", "class"],
   });
});