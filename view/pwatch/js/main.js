$(function () {

    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });

    // xem them
    $('#xt-tn').click(function (event) {
        $('.tuyenngon .text, #xt-tn').toggleClass('active');
    });

    // accordion
    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // gui lien he thanh cong
    $('#g-lienhe').click(function (event) {
        $('.overlay-lh, .block-hide_lh, .remove-lh').addClass('active');
    });
    $('.overlay-lh, .remove-lh').click(function (event) {
        $('.overlay-lh, .block-hide_lh, .remove-lh').removeClass('active');
    });

    // menu
    $('.navbar-light .navbar-toggler-icon').click(function (event) {
        $('.navbar-light .navbar-toggler-icon, .header .social, .top-bar .block-cart').toggleClass('active');
    });

    // ve top
    $(window).scroll(function () {
        gps = $('body').scrollTop();

        if (gps > 1280) {
            $('.ve-top').addClass('active');
        }
        if (gps < 1280) {
            $('.ve-top').removeClass('active');
        }
    });
    $('.ve-top').click(function () {
        $('body').animate({
            scrollTop: $('.header').offset().top
        }, 1000);
    })

    //  $('.').click(function(event) {
    //     $('.').addClass('active');
    // });

    // $('.').click(function(event) {
    //     $('.').removeClass('active');
    // });


    //  $('.').click(function(event) {
    //     $(this).toggleClass('active');
    // });;

    // initialize('21.00757415248039',
    //     '105.80296128988266',
    //     '',
    //     'maps-hide',
    //     'css/pic/icon-maps.png');

    // slide
    $('.slide').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
    });

    // slide san pham moi
    $('#slide-spm').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,

                }
            }
        ]
    });

    // slide 1
    $('#slide-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

    // slide 2
    $('#slide-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

    // slide 3
    $('#slide-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

    // slide 4
    $('#slide-4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });
    // slide san pham khac
    $('#slide-spk').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 929,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // slide san pham chi tiet
    $('#slide-to-spct').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slide-nho-spct',
    });
    $('#slide-nho-spct').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#slide-to-spct',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    focusOnSelect: false,
                }
            }
        ]
    });

})
