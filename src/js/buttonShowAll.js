const sectionsBrand = Array.prototype.slice.call(document.querySelectorAll('.menu-brand__item'));
const sectionsTechnic = Array.prototype.slice.call(document.querySelectorAll('.menu-technic__item'));
const btnBrand = document.querySelector('.brand__button');
const btnTechnic = document.querySelector('.technic__button');

let countBrand;
let countTechnic;
let bool = true;
let windowWidth = document.documentElement.clientWidth;

function showHide(sections, bool){
  if(bool) {
    sections.forEach(function(section, index) {
      switch (sections) {
        case sectionsBrand: 
          if(index >= countBrand) section.classList.add('hide');
          break;
        case sectionsTechnic: 
          if(index >= countTechnic) section.classList.add('hide');
          break;
      }
    });
  }else {
    sections.forEach(function(section) {
      section.classList.remove('hide')
    });
  }
}

function button(btn, sections) {
  btn.addEventListener('click', function(e) {
    bool = !bool;
    showHide(sections, bool);
    if (!bool) {
      btn.classList.add('container__button--hide');
      btn.textContent = 'Скрыть';
    } else {
      btn.classList.remove('container__button--hide');
      btn.textContent = 'Показать все';
    }
  });
}


button(btnBrand, sectionsBrand);
button(btnTechnic, sectionsTechnic);

if(windowWidth >= 768 && windowWidth < 968) {
  countBrand = 6;
  countTechnic = 3;
  showHide(sectionsBrand, bool);
  showHide(sectionsTechnic, bool);
} else if(windowWidth >= 968 && windowWidth < 1120) {
  countBrand = 8;
  countTechnic = 4;
  showHide(sectionsBrand, bool);
  showHide(sectionsTechnic, bool);
} else if(windowWidth >= 1120 && windowWidth < 1376) {
  countBrand = 6;
  countTechnic = 3;
  showHide(sectionsBrand, bool);
  showHide(sectionsTechnic, bool);
} else if(windowWidth >= 1376 && windowWidth < 1648) {
  countBrand = 8;
  countTechnic = 4;
  showHide(sectionsBrand, bool);
  showHide(sectionsTechnic, bool);
} else if(windowWidth >= 1648 && windowWidth < 1920) {
  countBrand = 10;
  countTechnic = 5;
  showHide(sectionsBrand, bool);
  showHide(sectionsTechnic, bool);
} else if(windowWidth >= 1920) {
  countBrand = 12;
  countTechnic = 6;
  showHide(sectionsBrand, bool);
  showHide(sectionsTechnic, bool);
}
