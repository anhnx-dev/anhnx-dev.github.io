$(function () {
    $('.slider-home').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
    });
    $('.slider-icons .group-item').slick({
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.other-tour .slider').slick({
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.tour-03 .group-item').slick({
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.news-feel .feel .group-item').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4500,
    });
    $('.other-service .group-item').slick({
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesPerRow: 1,
                arrows: false,
            }
        }]
    });
})
