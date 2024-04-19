import '../scss/style.scss'
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
// ____________________________________________________________________________________

const sections = Array.prototype.slice.call(document.querySelectorAll('.menu-brand__item'));
const btn = document.querySelector('.container__button');
let count;
let bool = true;
let windowWidth = document.documentElement.clientWidth;

function showHide(bool){
  if(bool) {
    sections.forEach(function(section, index) {
      if(index >= count) section.classList.add('hide');
    });
  }else {
    sections.forEach(function(section) {
      section.classList.remove('hide')
    });
  }
}

btn.addEventListener('click', function(e) {
  bool = !bool;
  showHide(bool);
  if (!bool) {
    btn.classList.add('container__button--hide');
    btn.textContent = 'Скрыть';
  } else {
    btn.classList.remove('container__button--hide');
    btn.textContent = 'Показать все';
  }
});


if(windowWidth >= 768 && windowWidth < 968) {
  count = 6;
  showHide(bool);
} else if(windowWidth >= 968 && windowWidth < 1120) {
  count = 8;
  showHide(bool);
} else if(windowWidth >= 1120 && windowWidth < 1376) {
  count = 6;
  showHide(bool);
} else if(windowWidth >= 1376 && windowWidth < 1648) {
  count = 8;
  showHide(bool);
} else if(windowWidth >= 1648 && windowWidth < 1920) {
  count = 10;
  showHide(bool);
} else if(windowWidth >= 1920) {
  count = 12;
  showHide(bool);
}
