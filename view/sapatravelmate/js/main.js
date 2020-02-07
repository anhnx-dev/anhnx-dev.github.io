$(function () {

    $('.btn-14').click(function (event) {
        $(this).parent().toggleClass('active');
    });

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        gps = $('html,body').scrollTop();
        if (gps > 500) {
            $('.ve-top').addClass('active');
        } else {
            $('.ve-top').removeClass('active');
        }
    });
    
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });
    });
})