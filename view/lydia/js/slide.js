$(function () {

    $('.slider-adv .inner').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.slider-news .center').slick({
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        rows: 3,
        slidesPerRow: 1,
    });

    $('.customer-reviews .inner').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-small'
    });
    $('.slider-small').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        arrows: false,
    });

    $('.other-03 .group-item').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });

})