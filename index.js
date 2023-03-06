const btn = document.querySelector('.info-image');
const showHamburger = document.querySelector('.show-hamburger');
const menuLinks = document.querySelectorAll('.menu-links');
const closeBtn = document.querySelector('.close-cross');

function checkHamburger() {
  showHamburger.classList.remove('hidden');
}

btn.addEventListener('click', checkHamburger);

function closeButton() {
  showHamburger.classList.add('hidden');
}

closeBtn.addEventListener('click', closeButton);

menuLinks.forEach((link) => link.addEventListener('click', () => {
  showHamburger.classList.add('hidden');
}));
