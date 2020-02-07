$(function () {

    // search
    $('.search .fa-search').click(function(event) {
        $('.search').toggleClass('active');
    });

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        gps = $('html,body').scrollTop();
        if (gps > 1080) {
            $('.ve-top').addClass('active');
        } else {
            $('.ve-top').removeClass('active');
        }
    });

})