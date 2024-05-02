const btnChat = document.querySelector('.icon-button--chat');
const btnChatHead = document.querySelector('.button--chat');
const modalFeedback = document.querySelector('.feedback');
const btnModalClose = modalFeedback.querySelector('.icon-button--close');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuStyle = getComputedStyle(mobileMenu);

const btnCall = document.querySelector('.icon-button--call');
const btnCallHead = document.querySelector('.button--call');
const modalCall = document.querySelector('.call');
const btnCallClose = modalCall.querySelector('.icon-button--close');

let windowWidth = document.documentElement.clientWidth;

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
  modalFeedback.style.display = 'none';
  mobileMenu.style.opacity = '1';

  if (mobileMenu.style.display === 'none' || windowWidth >= 1120) {
    body.classList.remove('lock');
  } else if (mobileMenuStyle.display === 'none' && windowWidth < 1120) {
    body.classList.remove('lock');
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

  if (mobileMenu.style.display === 'none' || windowWidth >= 1120) {
    body.classList.remove('lock');
  } else if (mobileMenuStyle.display === 'none' && windowWidth < 1120) {
    body.classList.remove('lock');
  }
})

let observer = new MutationObserver(mutationRecords => {
  if (body.classList.contains('lock') && windowWidth >= 1120) {
    const bodyLock = document.querySelector('.lock');

    bodyLock.addEventListener('click', function(evt) {
      if (evt.target === bodyLock) {
        modalFeedback.style.display = 'none';
        modalCall.style.display = 'none';
        mobileMenu.style.opacity = '1';
        body.classList.remove('lock');
      }
    });
  }
});

observer.observe(body, {attributes: true})

