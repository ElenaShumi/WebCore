const btnMenu = document.querySelector('.button--burger');
const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuClose = mobileMenu.querySelector('.icon-button--close');
const body = document.querySelector('body');

btnMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  mobileMenu.style.display = 'flex';
  body.classList.add('lock');
})

btnMenuClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  mobileMenu.style.display = 'none'
  body.classList.remove('lock');
})