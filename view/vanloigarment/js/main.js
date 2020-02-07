$(function () {


    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active-dropdown').siblings().removeClass("active-dropdown");
    });
    
    if ($(window).width() < 992) {
        $('.dropdown').prepend('<span class="btn-dropdown"></span>');
        $('.menu-main .container').append('<div class="at-menu"><span></span></div>');
        $('.menu-main .container').prepend($('.header .mobile'));
        $('.menu-main .container .nav').prepend($('.menu-main .container .search'));
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.dropdown').prepend('<span class="btn-dropdown"></span>');
            $('.menu-main .container').append('<div class="at-menu"><span></span></div>');
            $('.menu-main .container').prepend($('.header .mobile'));
            $('.menu-main .container .nav').prepend($('.menu-main .container .search'));
        }
    });

    $('.at-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu-main').toggleClass('active');
    });

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });
    

})