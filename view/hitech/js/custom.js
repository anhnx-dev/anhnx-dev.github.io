$(function () {

    // back top
    $('body').append('<span class="back-top"><img src="css/icons/back-top.png" alt=""></span>');
    $(window).scroll(function () {
        var scrollY = window.pageYOffset;
        if (scrollY > 1080) {
            $('.back-top').addClass('active');
        } else {
            $('.back-top').removeClass('active');
        }
    });
    $('.back-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // menu reponsive
    if ($(window).width() < 992) {
        $('.search-mobile').append($('.search .form-search'));
        $('.language-mobile').append($('.language .language-inner'));

    } else {
        $('.search').append($('.search-mobile .form-search'));
        $('.language').append($('.language-mobile .language-inner'));
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.search-mobile').append($('.search .form-search'));
            $('.language-mobile').append($('.language .language-inner'));
        } else {
            $('.search').append($('.search-mobile .form-search'));
            $('.language').append($('.language-mobile .language-inner'));
        }
    });
    if ($(window).width() < 768) {
        $('.btn-link-mobile').append($('.btn-link .warpper-btn-link'));
    } else {
        $('.btn-link').append($('.btn-link-mobile .warpper-btn-link'));
    }
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.btn-link-mobile').append($('.btn-link .warpper-btn-link'));
        } else {
            $('.btn-link').append($('.btn-link-mobile .warpper-btn-link'));
        }
    });

    // item 14
    $('.item-14:nth-child(1)').addClass('active');
    $('.item-14 .title').click(function(event) {
        $(this).parent().toggleClass('active');
    });
    $('.btn-04').click(function(event) {
        $(this).parent().parent().removeClass('active');
    });

    // block select of registration
    $('.block-select .input').click(function (event) {
        $(this).parent().toggleClass('active');
    });
    $('.block-select .output .name').click(function (event) {
        $(this).parent().toggleClass('active').siblings().removeClass("active");
    });

    //slider
    $('.slider-home').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500
    });
    $('.block-event .group-item').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    fade: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.block-news-Latest .group-item').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.why .group-item').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider-log .warpper').slick({
        arrows: false,
        dots: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    });
    $('.other .slider-other-v1').slick({
        arrows:true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesPerRow: 1,
                arrows: false,
            }
        }]
    });
    $('.other .slider-other-v2').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });


    // ve top
    $(window).scroll(function () {
        var scrollY = window.pageYOffset;

        if (scrollY > 60) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    });

    // search
    $('.form-search').click(function (event) {
        $(this).toggleClass('active');
    });
    // breadcrumb
    $('.breadcrumb-item:last-of-type').addClass('active');
    //table
    $('table').addClass('table');
    $('table').parent().addClass('table-responsive');
    // icon menu
    $('.navbar-icon').click(function (event) {
        $(this).toggleClass('active');
    });
    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').prepend('<span class="fa btn-dropdown"></span>');
    $('.btn-dropdown').click(function (event) {
        $(this).siblings().parent().toggleClass('active-dd');
    });
    $('.navbar-toggler').click(function (event) {
        $(this).toggleClass('active');
        $('body').toggleClass('active');
    });

    // Video Youtube
    // Find all YouTube videos
    var $allVideos = $("iframe[src*='youtube']"),
        // The element that is fluid width
        $fluidEl = $("iframe[src*='youtube']").parent().addClass("youtube-iframe-wrap");
    // Figure out and save aspect ratio for each video
    $allVideos.each(function () {
        $(this)
            .data('aspectRatio', this.height / this.width)
            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });
    // When the window is resized
    $(window).resize(function () {
        var newWidth = $fluidEl.width();
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function () {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));
        });
        // Kick off one resize to fix all videos on page load
    }).resize();

});

// new detail
var size = parseInt($(".TextSize").css("font-size"));
var lineheight = parseInt($(".TextSize").css("line-height"));
if (!size)
    size = 15;
if (!lineheight)
    lineheight = 24;

function IncreaseTextSize() {
    size++;
    lineheight += 2;
    $(".TextSize").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
    $(".TextSize").find("*").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
}

function DecreaseTextSize() {
    size--;
    lineheight -= 2;
    $(".TextSize").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
    $(".TextSize").find("*").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
}

function ResetTextSize() {
    size = 15;
    lineheight = 24;
    $(".TextSize").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
    $(".TextSize").find("*").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
}

// date
$(document).ready(function () {
    if ($('body').find('.datepicker2').length > 0) {
        jQuery(".datepicker2").datepicker({
            firstDay: 1,
            dateFormat: "dd/mm/yy",
            changeYear: true,
            yearRange: "-100:+100",
            changeMonth: true,
            dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        });

        function FormatDateTimeInput(control) {
            if (Date.parse(control.value)) control.value = Date.parse(control.value).toString("dd/MM/yyyy");
            else control.value = "";
        }

        function FormatTimeInput(control) {
            if (control.value[control.value.length - 1] === 'h')
                control.value = control.value + "00";
            if (Date.parse(control.value.replace('h', ':')))
                control.value = Date.parse(control.value.replace('h', ':')).toString("HH") + "h" + Date.parse(control.value.replace('h', ':')).toString("mm");
            else
                control.value = "";
        }
        jQuery(".datepicker2").change(function () {
            FormatDateTimeInput(this);
        });
        jQuery(".timepicker").change(function () {
            FormatTimeInput(this);
        });
    }
});