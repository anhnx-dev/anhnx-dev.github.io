$(function () {

    $('.slider-home').slick({
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
        }
    ]
    });

    $('.co-operate .slider').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.agency .slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
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