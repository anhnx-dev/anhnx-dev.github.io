$(function () {

    $('.slider-hp').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.support .inner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.highlights-tour .right .row').slick({
        dots: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 3,
        fade: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    rows: 3,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 3,
                    slidesPerRow: 1,
                }
            }
        ]
    });

    $('.our-services .inner .row').slick({
        dots: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 2,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 992,
            settings: {
                rows: 2,
                slidesPerRow: 1,
            }
        }
    ]
    });

    $('.slider-tour .right .inner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
    });

    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-small'
    });
    $('.slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        arrows: false,
    });

    $('.slider-big2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-small2'
    });
    $('.slider-small2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-big2',
        dots: false,
        arrows: false,
    });
})