$(function () {

    // ve top
    $('.ve-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });

    // menu right 
    $('.nav-right>ul>li').click(function (event) {
        $(this).toggleClass('active');
    });

    // new tab 
    $('.new-tab .a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // product information
    $('.product-information .a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });


    if ($(window).width() < 992) {
        $('.dropdown').prepend('<span class="btn-dropdown"></span>');
        $('.header .col-12').prepend('<div class="active-search"></div>');
        $('.header .col-12').append('<div class="at-menu"><span></span></div>');
    } else {

    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.dropdown').prepend('<span class="btn-dropdown"></span>');
            $('.header .col-12').prepend('<div class="active-search"></div>');
            $('.header .col-12').append('<div class="at-menu"><span></span></div>');
        } else {

        }
    });

    // responsive
    $('.active-search').click(function (event) {
        $(this).toggleClass('active');
        $('.search').toggleClass('active');
        $('.at-menu').removeClass('active');
        $('.menu-main').removeClass('active');
    });

    $('.at-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu-main').toggleClass('active');
        $('.active-search').removeClass('active');
        $('.search').removeClass('active');
    });

    $('.btn-dropdown').click(function (event) {
        $(this).parent().toggleClass('active-dropdown');
    });

    // su ly kl
    $('.news-other .slick-arrow').parent().parent().removeClass("active");

})