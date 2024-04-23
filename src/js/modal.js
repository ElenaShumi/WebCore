const btnChat = document.querySelector('.icon-button--chat');
const modalFeedback = document.querySelector('.feedback');
const btnModalClose = modalFeedback.querySelector('.icon-button--burger');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');

btnChat.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.style.display = 'block';
  mobileMenu.style.opacity = '0.05';
  body.classList.add('lock');
})

btnModalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.style.display = 'none'
  mobileMenu.style.opacity = '1';
  body.classList.remove('lock');
})