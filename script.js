const wrapper = document.querySelector('.wrapper');
const loginBtnPopup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

loginBtnPopup.addEventListener('click', () => wrapper.classList.add('active-popup'));
closeIcon.addEventListener('click', () => wrapper.classList.remove('active-popup'));

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('show-register');
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.remove('show-register');
});