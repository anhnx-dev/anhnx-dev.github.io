$(function () {
    $('.slider-partner').slick({
        dots: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider-feel').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.other .group-item').slick({
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.slider-home').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    });
})
