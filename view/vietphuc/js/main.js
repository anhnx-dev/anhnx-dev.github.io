$(function () {

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });

    // search
    $('.form-search > a').click(function(event) {
        $(this).parent().toggleClass('active');
    });

    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

})