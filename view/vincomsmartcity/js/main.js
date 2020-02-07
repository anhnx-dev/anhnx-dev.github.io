$(function () {

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // fix top
    $(window).scroll(function () {
        gps = $(this).scrollTop();

        if (gps > 200) {
            $('.header').addClass('fixed');
            $('.header .dropdown-menu').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
            $('.header .dropdown-menu').removeClass('fixed');
        }
    });

    $(window).scroll(function () {
        dv = $(this).scrollTop();

        if (dv > 100) {
            $('.header .dropdown-menu').addClass('fixed');
        } else {
            $('.header .dropdown-menu').removeClass('fixed');
        }
    });

    $('#btn-s').click(function () {
        // alert('sdfsdfsdfdsf');
        $('html, body').animate({
            scrollTop:$('#form-adv').offset().top
        }, 1000);
        return false;
    })

    if ($(window).width() < 768) {
        $('.header .container').append('<div class="at-menu"><span></span></div>');
        $('.nav-item:nth-child(2)').append($('.header>.container>.dropdown-menu'));
    }
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.header .container').append('<div class="at-menu"><span></span></div>');
            $('.nav-item:nth-child(2)').append($('.header>.container>.dropdown-menu'));
        }
    });

    // menu 
    $('.menu-main .dropdown-menu').parent().addClass('dropdown');
    $('.header .dropdown-menu').parent().parent().addClass('no-fixed');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });

    $('.at-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu-main').toggleClass('active');
    });

    
    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

})