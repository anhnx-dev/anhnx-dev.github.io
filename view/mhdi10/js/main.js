$(function () {

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // page about us
    $(window).scroll(function () {
        gps = $('html,body').scrollTop();
        if (gps > 570) {
            $('.nav-section').addClass('fixed-top');
            $('.button-nav-section').addClass('active');
        }
        if (gps < 571) {
            $('.nav-section').removeClass('fixed-top');
            $('.button-nav-section').removeClass('active');
        }
    });
    $('.nav-link1').click(function () {
        $('html,body').animate({
            scrollTop: $('#general-introduction').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link2').click(function () {
        $('html,body').animate({
            scrollTop: $('#history').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link3').click(function () {
        $('html,body').animate({
            scrollTop: $('#vision-mission').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link4').click(function () {
        $('html,body').animate({
            scrollTop: $('#why-us').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link5').click(function () {
        $('html,body').animate({
            scrollTop: $('#leader').offset().top
        }, 1000, );
        return false;
    });

    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').prepend('<span class="btn-dropdown"></span>');
    $('.btn-dropdown').click(function (event) {
        $(this).parent().toggleClass('active-dd');
    });

    // ground
    $('.header>a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $('#active-form-recruitment').click(function (event) {
        $('.form-recruitment').toggleClass('active');
        return false;
    });

    $('.btn-14').click(function (event) {
        $(this).parent().toggleClass('active');
    });

    if ($(window).width() < 1200) {
        $('#footer .right').append($('.inner-registration'));
    } else {
        $('#footer .left .registration').append($('.inner-registration'));
    }
    $(window).resize(function () {
        if ($(window).width() < 1200) {
            $('#footer .right').append($('.inner-registration'));
        } else {
            $('#footer .left .registration').append($('.inner-registration'));
        }
    });

    

})