import { testimonialSliderInit } from "../modulesJavaScript/swiperCode.js";
import logosMarquee from "../modulesJavaScript/logosMarquee.js";

function appendFinsweetScript() {
   const fsScript = document.createElement("script");
   fsScript.type = "module";
   fsScript.src =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js";
   fsScript.setAttribute("fs-list", "");
   document.head.appendChild(fsScript);
}

document.addEventListener("DOMContentLoaded", () => {
   appendFinsweetScript();
   testimonialSliderInit();
   logosMarquee();
});
