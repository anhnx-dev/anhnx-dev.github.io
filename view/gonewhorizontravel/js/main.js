$(function () {


    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });
    
    if ($(window).width() < 992) {
        $('.dropdown').prepend('<span class="btn-dropdown"></span>');
        $('.header-main .container').append('<div class="at-menu"><span></span></div>');
        $('.slider-tour .container > .row').append($('.slider-tour .left .manhung'));
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.dropdown').prepend('<span class="btn-dropdown"></span>');
            $('.header-main .container').append('<div class="at-menu"><span></span></div>');
            $('.slider-tour .container > .row').append($('.slider-tour .left .manhung'));
        }
    });

    $('.at-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu-main').toggleClass('active');
    });

    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $('#accordion .card').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });
    $('.footer-top .block').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });    
 

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // js dotdotdot
    $('.item-news .summary').dotdotdot({
        after: 'a.btn-xts'
    });

   

})