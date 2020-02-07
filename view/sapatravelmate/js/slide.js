$(function () {
    $('.slider-home .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.slider-home .btn-slider .inner',
    });
    $('.slider-home .btn-slider .inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-home .slider',
        centerMode: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0',
    });
    $('.sell-much .group-item>.inner').slick({
        dots: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 2,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesPerRow: 1,
            }
        }]
    });
    $('.start .inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
    $('.slider-friend').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.news-home .group-item').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.leader .inner').slick({
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
})