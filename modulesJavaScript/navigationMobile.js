export default function navigationMobile() {
   const navOpen = document.querySelector(".navigation_mobile-button_open");
   const navClose = document.querySelector(".navigation_mobile-button_close");
   const navWrapper = document.querySelector(".navigation_links_wrapper");
   const nav = document.querySelector(".navigation");

   navOpen.addEventListener("click", () => {
      navWrapper.classList.add("is-open");
      nav.classList.add("is-open");
      navOpen.classList.add("is-open");
      navClose.classList.add("is-open");
   });

   navClose.addEventListener("click", () => {
      navWrapper.classList.remove("is-open");
      nav.classList.remove("is-open");
      navOpen.classList.remove("is-open");
      navClose.classList.remove("is-open");
   });
}
