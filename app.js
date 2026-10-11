
const slides = document.querySelectorAll('.slide');

slides.forEach(function (slide) {

    slide.addEventListener('click', function () {
        removeActive();
        slide.classList.add('active');
    });

});

function removeActive() {
    slides.forEach(function (slide) {
        slide.classList.remove('active');
    });
}
