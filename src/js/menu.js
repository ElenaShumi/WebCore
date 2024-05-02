const btnMenu = document.querySelector('.button--burger');
const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuClose = mobileMenu.querySelector('.icon-button--close');
const body = document.querySelector('body');

let windowWidth = document.documentElement.clientWidth;

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

let observer = new MutationObserver(mutationRecords => {
  if (body.classList.contains('lock') && windowWidth < 1120) {
    const bodyLock = document.querySelector('.lock');

    bodyLock.addEventListener('click', function(evt) {
      if (evt.target === bodyLock) {
        mobileMenu.style.display = 'none'
        body.classList.remove('lock');
      }
    });
  }
});

observer.observe(body, {attributes: true})