const handleChange = (offset) => {
    const activeSlide = document.querySelector('[data-active]');

    const slides = [
        ...document.querySelectorAll('.clinic-services__slider-item'),
    ];

    const currentIndex = slides.indexOf(activeSlide);

    let newIndex = currentIndex + offset;

    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    if (newIndex >= slides.length) {
        newIndex = 0;
    }

    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
};

const prev = () => handleChange(-1);
const next = () => handleChange(1);
