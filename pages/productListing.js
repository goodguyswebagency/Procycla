import { testimonialSliderInit } from "../modulesJavaScript/swiperCode.js";
import logosMarquee from "../modulesJavaScript/logosMarquee.js";

/*********************************/
/* Client segmentation tabs code */
/*********************************/

function clientSegmentation() {
  const tabs = Array.from(document.querySelectorAll('.client-segmentations_tab-toggle_wrapper'));
  const panels = Array.from(document.querySelectorAll('.client-segmentations_content_wrapper'));

  function activateTab(index) {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.classList.toggle('is-current', selected);
      tab.setAttribute('aria-selected', selected);
      tab.setAttribute('tabindex', selected ? '0' : '-1');
      panels[i].classList.toggle('is-current', selected);
      if (selected) {
        panels[i].removeAttribute('hidden');
        panels[i].focus();
      } else {
        panels[i].setAttribute('hidden', '');
      }
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activateTab(i));
    tab.addEventListener('keydown', (e) => {
      let targetIndex;
      switch (e.key) {
        case 'ArrowRight':
          targetIndex = (i + 1) % tabs.length;
          break;
        case 'ArrowLeft':
          targetIndex = (i - 1 + tabs.length) % tabs.length;
          break;
        case 'Home':
          targetIndex = 0;
          break;
        case 'End':
          targetIndex = tabs.length - 1;
          break;
        case 'Enter':
        case ' ':
          activateTab(i);
          e.preventDefault();
          return;
        default:
          return;
      }
      tabs[targetIndex].focus();
      e.preventDefault();
    });
  });

  const currentIndex = tabs.findIndex(tab => tab.classList.contains('is-current'));
  activateTab(currentIndex > -1 ? currentIndex : 0);
}

document.addEventListener("DOMContentLoaded", () => {
   logosMarquee();
   testimonialSliderInit();
   clientSegmentation();
});