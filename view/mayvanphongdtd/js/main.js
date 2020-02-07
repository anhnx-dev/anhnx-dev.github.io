$(function(){

    //chuoi chuoi va rat nhieu chuoi

    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });

    // fix top
    $(window).scroll(function(){
        gps = $('body').scrollTop();

        if (gps > 500){
            $('.fixed-top').addClass('active');
        }
        if (gps < 500){
            $('.fixed-top').removeClass('active');
        }
     });

    //ve top
    $(window).scroll(function(){
        gps = $('body').scrollTop();

        if (gps > 500){
            $('.ve-top-mobile').addClass('active');
        }
        if (gps < 500){
            $('.ve-top-mobile').removeClass('active');
        }
     });

     $('.ve-top-mobile').click(function(){ 
        $('body').animate({scrollTop:$('.header').offset().top},1000);
        return false;
     });

    // slide
    $('.slide-main').slick({
        speed: 1000,
        autoplay: true,
        arrows: false,
        infinite: false,
        dots: true,
    });
    $('.slide-right').slick({
        slidesToShow: 3,
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
    $('.section .nav-menu').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        rtl: true,
        responsive: [
            {
            breakpoint: 768,
                settings: "unslick"
            }
        ]
    });
    $('.tt-sk .block-item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 992,
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
            },
            {
            breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.main-sp-ct .section-slide .block-item').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.main-tt-ct .block-tin').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.slide-anh_to').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-anh_nho',
    });
    $('.slide-anh_nho').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slide-anh_to',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
    });

    //maps
    $('.footer-main .maps-an a img').click(function(event) {
        $('.overlay-hide, .maps-hide, .remove-hide').addClass('active-hide');
    });

    $('.remove-hide, .overlay-hide').click(function(event) {
        $('.overlay-hide, .maps-hide, .remove-hide').removeClass('active-hide');
    });

    $('.main-gh .tt-kh .block-nut .send').click(function(event) {
        $('.overlay-hide, .dathang-tc, .page-lh-gh').addClass('active-hide');
    });
    
    $('.main-lh .content-lh .info_reply .block-nut .send').click(function(event) {
        $('.overlay-hide, .dathang-tc, .page-lh-gh').addClass('active-hide');
    });

    $('.remove-hide, .overlay-hide').click(function(event) {
        $('.overlay-hide, .dathang-tc, .remove-hide, .page-lh-gh').removeClass('active-hide');
    });

    $('.menu .menu-mobile').click(function(event) {
        $('body, .menu .menu-mobile').toggleClass('active');
    });

    $('.header .btn-search').click(function(event) {
        $('.top-lss .search').toggleClass('active');
    });

    $('.nav-tabs_mobile .nut-menu').click(function(event) {
        $('.nav-tabs_mobile .nut-menu, .tab-ttsp .nav-mobile').toggleClass('active');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(1)').click(function(event) {
        $('.tab-ttsp .nav-tabs li:nth-child(1)').addClass('active');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(2)').click(function(event) {
        $('.tab-ttsp .nav-tabs li:nth-child(2)').addClass('active');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(3)').click(function(event) {
        $('.tab-ttsp .nav-tabs li:nth-child(3)').addClass('active');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(1)').click(function(event) {
        $('#menu_tab1').addClass('active in');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(2)').click(function(event) {
        $('#menu_tab2').addClass('active in');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(3)').click(function(event) {
        $('#menu_tab3').addClass('active in');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(1)').click(function(event) {
        $('#menu_tab2, #menu_tab3').removeClass('active in');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(2)').click(function(event) {
        $('#menu_tab1, #menu_tab3').removeClass('active in');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(3)').click(function(event) {
        $('#menu_tab1, #menu_tab2').removeClass('active in');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(1)').click(function(event) {
        $('.tab-ttsp .nav-tabs li:nth-child(2), .tab-ttsp .nav-tabs li:nth-child(3)').removeClass('active');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(2)').click(function(event) {
        $('.tab-ttsp .nav-tabs li:nth-child(1), .tab-ttsp .nav-tabs li:nth-child(3)').removeClass('active');
    });

    $('.tab-ttsp .nav-mobile li:nth-child(3)').click(function(event) {
        $('.tab-ttsp .nav-tabs li:nth-child(1), .tab-ttsp .nav-tabs li:nth-child(2)').removeClass('active');
    });

    $('.section-1 .nut-menu').click(function(event) {
        $('.section-1 .nut-menu, .section-1 .section-menu .nav-menu').toggleClass('active');
    });

    $('.section-2 .nut-menu').click(function(event) {
        $('.section-2 .nut-menu, .section-2 .section-menu .nav-menu').toggleClass('active');
    });

    $('.section-3 .nut-menu').click(function(event) {
        $('.section-3 .nut-menu, .section-3 .section-menu .nav-menu').toggleClass('active');
    });

    $('.section-4 .nut-menu').click(function(event) {
        $('.section-4 .nut-menu, .section-4 .section-menu .nav-menu').toggleClass('active');
    });

    $('.section-5 .nut-menu').click(function(event) {
        $('.section-5 .nut-menu, .section-5 .section-menu .nav-menu').toggleClass('active');
    });

     $('.ve-top').click(function(){ 
        $('body').animate({scrollTop:$('.header').offset().top},1000);
        return false;
     });;
})