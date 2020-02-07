$(function () {

    // slider top
    $('.slider-top .inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // slider menu news new 
    $('#slider-s').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        dots: false,
    });
    // slider menu news new 
    $('.slider-logo .inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // slider nha truong
    $('.slider-nt').slick({
        dots: false,
        speed: 500,
    });

    // slider other
    $('#news-other2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        dost: false,
    });
    $('#news-other3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        dost: false,
    });

    var i = 1;
    $('.section-dttc #slider-dttc').each(function () {
        $(this).addClass('slider' + i);
        i = i + 1;
    });
    for (j = 1; j <= i; j++) {
        $('.slider' + j + '').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            dots: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };

})
