const burger = document.querySelector('.header__burger');
const addNavMenuOpen = document.querySelector('.nav-menu');
const addNavMenuButtonOpen = document.querySelector('.nav-menu__button');

burger.addEventListener('click', function () {
    this.classList.toggle('active');
    addNavMenuOpen.classList.toggle('open');
    addNavMenuButtonOpen.classList.toggle('open');
});
