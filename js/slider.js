let specialtySlider = new Swiper('.specialty-swiper-container', {
    spaceBetween: 200,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
let imagesSlider = new Swiper('.images-swiper-container', {
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 1,
    breakpoints: {
        765: {
            slidesPerView: 4,
        },
        520: {
            slidesPerView: 2,
        }
    }
});
