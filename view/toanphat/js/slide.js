$(function () {

    // slide home
    $('#slider-bg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        asNavFor: '#slider-thutu '
    });
    $('#slider-thutu').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '#slider-bg',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    });

    // slide ttck
    $('#slider-ttsk').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // slider logo
    $('#slider-logo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
    });

    // slider other
    $('#slider-other').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    });

    // news other3
    $('#slider-other3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    });

    // slider block right
    var i = 1;
    $('.block-news-left .slider-block-right .inner').each(function () {
        $(this).addClass('slider' + i);
        i = i + 1;
    });
    for (j = 1; j <= i; j++) {
        $('.slider' + j + '').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            dots: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };

    // slider library videos
    var i = 1;
    $('.slider-library-videos .inner').each(function () {
        $(this).addClass('slider2' + i);
        i = i + 1;
    });
    for (j = 1; j <= i; j++) {
        $('.slider2' + j + '').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            dots: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };

})
