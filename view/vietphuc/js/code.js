// bai viet chi tiet
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

// khung Anh
$(function () {
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });
});

// facebook google +
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "facebook-jssdk"));
(function () {
    var po = document.createElement("script");
    po.type = "text/javascript";
    po.async = true;
    po.src = "https://apis.google.com/js/platform.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
})();


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

// cat dong
$(function () {

    var $dot1 = $('.item-04 .summary');

    function createDots() {
        $dot1.dotdotdot({
            after: 'a.btn-03'
        });
    }

    function destroyDots() {
        $dot1.trigger('destroy');
    }
    createDots();

});