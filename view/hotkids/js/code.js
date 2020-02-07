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

$(document).ready(function () {
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

});

$(function () {
    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });
});

$(document).ready(function () {
    if ($('body').find('.datepicker2').size() > 0) {
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
        //Tá»± Ä‘á»‹nh dáº¡ng láº¡i ngĂ y, giá» trong textbox
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

$(function () {
    // so luong product
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

$(function () {
    // cat dong

    $('.feel-client .text').append(' <a class="toggle" href="#"><span class="open-t">Chi tiết</span><span class="close-t">Rút gọn</span></a>');

    var i = 1;
    $('.feel-client .text').each(function () {
        $(this).addClass('dott' + i);
        i = i + 1;
    });

});

$(function () {

    var $dot1 = $('.dott1');

    function createDots() {
        $dot1.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot1.trigger('destroy');
    }
    createDots();

    $dot1.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot2 = $('.dott2');

    function createDots() {
        $dot2.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot2.trigger('destroy');
    }
    createDots();

    $dot2.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot3 = $('.dott3');

    function createDots() {
        $dot3.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot3.trigger('destroy');
    }
    createDots();

    $dot3.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot4 = $('.dott4');

    function createDots() {
        $dot4.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot4.trigger('destroy');
    }
    createDots();

    $dot4.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot5 = $('.dott5');

    function createDots() {
        $dot5.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot5.trigger('destroy');
    }
    createDots();

    $dot5.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot6 = $('.dott6');

    function createDots() {
        $dot6.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot6.trigger('destroy');
    }
    createDots();

    $dot6.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot7 = $('.dott7');

    function createDots() {
        $dot7.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot7.trigger('destroy');
    }
    createDots();

    $dot7.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot8 = $('.dott8');

    function createDots() {
        $dot8.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot8.trigger('destroy');
    }
    createDots();

    $dot8.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot9 = $('.dott9');

    function createDots() {
        $dot9.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot9.trigger('destroy');
    }
    createDots();

    $dot9.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});

$(function () {

    var $dot10 = $('.dott10');

    function createDots() {
        $dot10.dotdotdot({
            after: 'a.toggle'
        });
    }

    function destroyDots() {
        $dot10.trigger('destroy');
    }
    createDots();

    $dot10.on(
        'click',
        'a.toggle',
        function () {
            $(this).parent().toggleClass('opened');

            if ($(this).parent().hasClass('opened')) {
                destroyDots();
            } else {
                createDots();
            }
            return false;
        }
    );
});
