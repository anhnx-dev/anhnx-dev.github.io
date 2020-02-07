$(function () {

    $('.slider-home').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false,
            }
        }]
    });

    $('.library .videos').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.history>.container>.inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    $('.leader>.container>.inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    $('.partner>.container>.inner').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 1200,
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

    $('.accordion .header').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 10000,
            settings: "unslick",
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