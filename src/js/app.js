/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import StickyHeader from './modules/StickyHeader.js';
import { SmoothScroll } from './modules/SmoothScroll.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import initializeAllSliders from './modules/SwiperInit.js';
import ShowMoreToggle from './modules/ShowMoreToggle.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header sticky
  new StickyHeader('.js-header-sticky', 'is-sticky');
  // nav active anchor
  const smoothScroll = new SmoothScroll('.js-anchor', '--scroll-offset', 650);
  // header nav mobile toggle
  new HeaderBtnToggle();
  // slider init
  initializeAllSliders();
  // show moore video
  new ShowMoreToggle();
});