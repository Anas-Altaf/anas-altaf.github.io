function setUpSlider() {
    // Swiper, Slider
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 5,
        grabCursor: true,
        loop: true,
        freeMode: true,
        mousewheel: true,
        keyboard: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },

    });
}
// // on dom load
// document.addEventListener('DOMContentLoaded', function () {
//     setUpSlider()
// })

setUpSlider()