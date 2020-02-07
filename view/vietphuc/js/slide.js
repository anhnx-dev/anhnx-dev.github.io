$(function () {

    $('.slider-home>.inner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.prize>.inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        vertical: true,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    vertical: false,
                }
            }
        ]
    });

    $('.group-logo .slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });

    $('.other-02 .group-02').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    });

    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-small'
    });
    $('.slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        arrows: true,
    });

})