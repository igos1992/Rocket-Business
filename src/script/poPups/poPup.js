const modalController = ({ modal, btnOpen, btnClose }) => {
    const buttonElements = document.querySelectorAll(btnOpen); // Все кнопки для открытия модалки
    const modalElem = document.querySelector(modal); // Всё модальное окно


    // Стили для модалки (transition - скорость открытия модалки)
    modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    `;

    const closeModal = (event) => {
        const target = event.target;

        // Для закрытия на любой точке экрана
        if (
            target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === 'Escape'
        ) {
            modalElem.style.opacity = 0;
            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, 300);
            window.removeEventListener('keydown', closeModal);
        }
    };

    // Открытие модалки
    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal);
    };

    // Открытие на одну кнопку
    // buttonElement.addEventListener('click', openModal);

    // Открытие на кнопку, которую нажали
    buttonElements.forEach((btn) => {
        btn.addEventListener('click', openModal);
    });

    // Для закрытия на любой точке экрана, крестик, esc
    modalElem.addEventListener('click', closeModal);


};

modalController({
    modal: '.make-an-appointment',
    btnOpen: '.button-modal',
    btnClose: '.modal__close',
});

modalController({
    modal: '.more-detailed',
    btnOpen: '.button-more-detailed',
    btnClose: '.modal__close',
});
