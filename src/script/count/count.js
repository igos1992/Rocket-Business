const countSwitching = document.querySelector(
    '.clinic-services__count-switching',
);
countLength = document.querySelector('.clinic-services__count-length');
slidesLength = document.querySelectorAll('.clinic-services__slider-item');
countPrev = document.querySelector('.clinic-services__prev');
countNext = document.querySelector('.clinic-services__next');

countSwitching.textContent = 1;
countLength.textContent = slidesLength.length;

countNext.addEventListener('click', function () {
    countSwitching.textContent = ++countSwitching.textContent;
    if (countSwitching.textContent > slidesLength.length) {
        countSwitching.textContent = 1;
    }
});

countPrev.addEventListener('click', function () {
    countSwitching.textContent = --countSwitching.textContent;
    if (countSwitching.textContent < 1) {
        countSwitching.textContent = slidesLength.length;
    }
});
