import '../scss/style.scss'
import './buttonShowAll'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper from 'swiper/bundle';

let init = false;
let swiper;

function swiperCard() {
  if (document.documentElement.clientWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper('.container__slider', {
        modules: [Navigation, Pagination],

        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener('resize', swiperCard);
