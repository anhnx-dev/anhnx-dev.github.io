$(function () {

    // search
    $('.form-search > a').click(function (event) {
        $(this).parent().toggleClass('active');
    });

    // ve top
    $('.ve-top').click(function(){ 
        $('body').animate({scrollTop:$('#header').offset().top},1000);
        return false;
     });

    // accordion 1
    $('.accordion-1 .a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // accordion 2
    $('.accordion-2 .a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $('.topbar .col-9').append('<div class="menu-mobile"><span></sapn></div>');

    $('.menu-mobile').click(function(event) {
        $(this).toggleClass('active');
        $('.menu-main').toggleClass('active');
    });
    $('.dropdown').click(function(event) {
        $(this).toggleClass('active');
    });

    // di chuyen khoi co dien kien
    if ($(window).width() < 992) {
        $('.menu-main').append($('.nav-tb'));
        $('.topbar .col-9').prepend($('.form-search'));
    } else {
        $('.menu-tb').append($('.nav-tb'));
        $('.search').prepend($('.form-search'));
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.menu-main').append($('.nav-tb'));
            $('.topbar .col-9').prepend($('.form-search'));
        } else {
            $('.menu-tb').append($('.nav-tb'));
            $('.search').prepend($('.form-search'));
        }
    });
    
})