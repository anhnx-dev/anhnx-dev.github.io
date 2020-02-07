$(function () {


    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });
    
    if ($(window).width() > 767 && $(window).width() < 991 ) {
        $('.header .container').append('<div class="at-menu"><span></span></div>');
        $('.footer .facebook').append('<div class="append-f"></div>');
        $('.footer .facebook .append-f').append($('.footer .center .group-link .link.link2'));
        $('.footer .facebook .append-f').append($('.footer .copyright .number'));
    }
    if ($(window).width() < 767) {
        $('.header').append('<div class="append-h"><div class="container"></div></div>');
        $('.header .append-h .container').append('<div class="at-menu"><span></span></div>');
        $('.header .append-h .container').append($('.header .all>a.mobile'));
        $('.footer .facebook').append('<div class="append-f"></div>');
        $('.footer .facebook .append-f').append($('.footer .center .group-link .link.link2'));
        $('.footer .facebook .append-f').append($('.footer .copyright .number'));
    }


    $('.at-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu-main').toggleClass('active');
    });

    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });
    

})