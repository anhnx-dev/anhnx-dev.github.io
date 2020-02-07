$(function () {

    // framed image
    $(window).on('load', function () {
        $(".framed-image .cut img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
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

    // breadcrumb
    $('.breadcrumb-item:last-of-type').addClass('active');
    //table of content
    $('.noidung table').addClass('table');
    // icon menu
    $('.navbar-icon').click(function (event) {
        $(this).toggleClass('active');
    });
    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').prepend('<span class="btn-dropdown"></span>');
    $('.btn-dropdown').click(function (event) {
        $(this).siblings().parent().toggleClass('active-dd');
    });
    $('.navbar-toggler').click(function (event) {
        $(this).toggleClass('active');
    });
    // accordion tab
    $('.header>a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });
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

// so luong product
$(function () {
    $(".tang_sl").on("click", function () {
        var a = $(this).prev(),
            b = parseInt(a.val());
        isNaN(b) ? a.val(1) : a.val(b + 1);
    });
    $(".giam_sl").on("click", function () {
        var a = $(this).prev().prev(),
            b = parseInt(a.val());
        b > 1 ? a.val(b - 1) : a.val(1);
    });
});