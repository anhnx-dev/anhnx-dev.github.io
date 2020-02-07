$(function () {

    // back top
    $('.back-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // menu
    $('.dropdown-nav .inner .group-item').parent().parent().parent().addClass('dropdown-group');

    $('.dropdown-nav .inner .group-item .item').hover(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // content other
    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // other new
    $('.other-new .link-block').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });

    // menu reponsive
    if ($(window).width() < 992) {
        $('.top-bar .container').append('<span>menu</span><div class="at-menu"><span></span></div>');
        $('body').prepend('<nav class="menu-responsive"><div class="group"><div class="top"><span class="close-menu">Đóng</span></div><div class="search-menu"></div><div class="inner"></div></div></nav>');
        $('.menu-responsive .search-menu').prepend($('.form-search'));
        $('.menu-responsive .inner').append($('.top-bar .nav'));
        $('.menu-responsive .inner').prepend($('.menu-main .nav'));
        $('.menu-responsive .top').prepend($('.menu-responsive .inner .nav:nth-child(2) .nav-item:nth-child(1)'));
    // } else {
    //     $('.search').prepend($('.form-search'));
    //     $('.top-bar .container').append($('.top-bar .nav'));
    //     $('.menu-main .inner').prepend($('.menu-main .nav'));
    //     $('.top-bar .nav').prepend($('.menu-responsive .inner .nav:nth-child(2) .nav-item:nth-child(1)'));
    }
    // $(window).resize(function () {
    //     if ($(window).width() < 992) {
    //         $('.top-bar .container').append('<span>menu</span><div class="at-menu"><span></span></div>');
    //         $('body').prepend('<nav class="menu-responsive"><div class="group"><div class="top"><span class="close-menu">Đóng</span></div><div class="search-menu"></div><div class="inner"></div></div></nav>');
    //         $('.menu-responsive .search-menu').prepend($('.form-search'));
    //         $('.menu-responsive .inner').append($('.top-bar .nav'));
    //         $('.menu-responsive .inner').prepend($('.menu-main .nav'));
    //         $('.menu-responsive .top').prepend($('.menu-responsive .inner .nav:nth-child(2) .nav-item:nth-child(1)'));
    //     } else {
    //         $('.search').prepend($('.form-search'));
    //         $('.top-bar .container').append($('.top-bar .nav'));
    //         $('.menu-main .inner').prepend($('.menu-main .nav'));
    //         $('.top-bar .nav').prepend($('.menu-responsive .inner .nav:nth-child(2) .nav-item:nth-child(1)'));
    //     }
    // });

    $('.at-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu-responsive').toggleClass('active');
    });

    $('.close-menu').click(function (event) {
        $('.menu-responsive').removeClass('active');
        $('.at-menu').removeClass('active');
    });


    $('.menu-responsive .group .inner .nav-item .dropdown-nav').parent().append('<span class="next-prev"><span>');
    $('.menu-responsive .group .inner .nav-item .block-link .link').parent().append('<span class="next-prev02"><span>');

    $('.next-prev').click(function (event) {
        $(this).parent().toggleClass('active-dropdown');
        $(this).parent().parent().parent().toggleClass('active');
    });

    $('.next-prev02').click(function (event) {
        $(this).parent().toggleClass('active-dropdown');
        $(this).parent().parent().toggleClass('active');
    });



})