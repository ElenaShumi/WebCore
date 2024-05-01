const btnChat = document.querySelector('.icon-button--chat');
const btnChatHead = document.querySelector('.button--chat');
const modalFeedback = document.querySelector('.feedback');
const btnModalClose = modalFeedback.querySelector('.icon-button--close');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');

const btnCall = document.querySelector('.icon-button--call');
const btnCallHead = document.querySelector('.button--call');
const modalCall = document.querySelector('.call');
const btnCallClose = modalCall.querySelector('.icon-button--close');

btnChat.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.style.display = 'block';
  mobileMenu.style.opacity = '0.05';
  body.classList.add('lock');
})

btnChatHead.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.style.display = 'block';
  mobileMenu.style.opacity = '0.05';
  body.classList.add('lock');
})

btnModalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.style.display = 'none'
  mobileMenu.style.opacity = '1';

  if (mobileMenu.style.display === 'none') {
    body.classList.remove('lock');
    console.log('мобильное меню закрыто')
  } 
})

btnCall.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCall.style.display = 'block';
  mobileMenu.style.opacity = '0.05';
  body.classList.add('lock');
})

btnCallHead.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCall.style.display = 'block';
  mobileMenu.style.opacity = '0.05';
  body.classList.add('lock');
})

btnCallClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCall.style.display = 'none'
  mobileMenu.style.opacity = '1';
  
  if (mobileMenu.style.display === 'none') {
    body.classList.remove('lock');
    console.log('мобильное меню закрыто')
  } 
})


// modalFeedback.addEventListener('click', function(evt) {
//   if (evt.target === modalFeedback) {
//     modalFeedback.style.display = 'none'
//     mobileMenu.style.opacity = '1';
//     body.classList.remove('lock');
//   }
// })

// modalCall.addEventListener('click', (e) => {
//   if (e.target === modalCall) {
//     modalCall.style.display = 'none'
//     mobileMenu.style.opacity = '1';
//     body.classList.remove('lock');
//   }
// });