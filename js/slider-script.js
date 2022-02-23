$('.main__card-row').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    deaggable: true,
    swipe: true,
    touchTreshold: 10,
    // waitForAnimate: false,
    // centerMode: true,
    virableWidth: true,
    responsive: [{

        breakpoint: 1000,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 700,
        settings: {
            slidesToShow: 1,
        }
    }],
    appendArrows: $(".slider__nav"),
    appendDots: $(".slider__nav-dots")
});