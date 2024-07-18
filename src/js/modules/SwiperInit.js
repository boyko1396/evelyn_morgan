import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

function SliderInit(sliderSelector, params) {
  const sliderElement = document.querySelector(sliderSelector);

  if (!sliderElement) {
    return;
  }

  const swiper = new Swiper(sliderElement, {
    slidesPerView: 1,
    spaceBetween: 0,
    autoheight: true,
    navigation: {
      nextEl: params.nextEl,
      prevEl: params.prevEl,
    },
    ...params.settings,
  });

  return swiper;
}

function initializeAllSliders() {
  const reviewsSliderParams = {
    nextEl: '.js-swiper-button-next-1',
    prevEl: '.js-swiper-button-prev-1',
    settings: {
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
        577: {
          slidesPerView: 2,
        }
      }
    }
  };

  const resultsSliderParams = {
    nextEl: '.js-swiper-button-next-2',
    prevEl: '.js-swiper-button-prev-2',
    settings: {
      slidesPerView: 2,
      spaceBetween: 12,
      breakpoints: {
        768: {
          slidesPerView: 5,
        },
        577: {
          slidesPerView: 3,
        }
      }
    }
  };

  SliderInit('.js-reviews-slider-init', reviewsSliderParams);
  SliderInit('.js-results-slider-init', resultsSliderParams);
}

document.addEventListener('DOMContentLoaded', initializeAllSliders);

export default initializeAllSliders;