$(function () {

    // ve top
    $('.ve-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    // color product
    $('.item.color>span').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $('.nav-footer .link>strong').click(function (event) {
        $(this).parent().addClass('active').siblings().removeClass("active");
    });

    if ($(window).width() > 767 && $(window).width() < 992) {
        $('.enemy-transfer').append($('.nav-footer .product'));
        $('.enemy-transfer').append($('.nav-footer .social'));
    }
    else {
        $('.nav-footer').append($('.enemy-transfer .product'));
        $('.nav-footer').append($('.enemy-transfer .social'));
    }
    if ($(window).width() < 768) {
        
    }
    else {
        
    }

    $(window).resize(function () {
        if ($(window).width() > 767 && $(window).width() < 992) {
            $('.enemy-transfer').append($('.nav-footer .product'));
            $('.enemy-transfer').append($('.nav-footer .social'));
        }
        else {
            $('.nav-footer').append($('.enemy-transfer .product'));
            $('.nav-footer').append($('.enemy-transfer .social'));
        }
        if ($(window).width() < 768) {
            
        }
        else {

        }
    });


    

})