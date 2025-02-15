// Duplicating Cards
var card = (count) => {
    return `
    <div class="card">
        <h1 class="skill-count">${count < 10 ? '0' + count : count}</h1>
        <div class="skill-tag">
            <div class="tag-name">Web Engineerig</div>
            <span class="tag-icon"><i class="fa-thin fa-globe"></i></span>
        </div>
        <div class="skill-name">Web Scrapping</div>
        <p class="skill-desc">Lorem, ipsum dolor sit amet consectetur.</p>
    </div>
`.trim()
}

const skillSwiperWrapper = document.querySelector('.swiper-wrapper')
for (let index = 0; index <= 20; index = index + 2) {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide')
    swiperSlide.innerHTML = card(index + 1) + card(index + 2)
    // console.log(swiperSlide)
    skillSwiperWrapper.appendChild(swiperSlide)
}

// Swiper, Slider
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 5,
    grabCursor: true,
    loop: true,
    freeMode: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: true,
    //     pauseOnMouseEnter: true,
    // },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },

});

// Setting Year in Copyright Section
function setFooterYear() {
    const footerYear = document.querySelector('.copy-right .year')
    d = new Date();
    footerYear.innerHTML = d.getFullYear()

}
setFooterYear()
