/* version 11 - date 8/5/2019 */

// ml fix
const fix = $('.js-ml-fix');
if (fix) {
    const btnEdit = $('.js-ml-fix .detail-wrapper > .btn-edit');
    const body = $('body');
    const ACTIVE_CLASS = 'ml-fix-active';
    btnEdit.on('click', function () {
        body.toggleClass(ACTIVE_CLASS);
        return false;
    });
}

// session
const session = $('.js-ml-session');
if (session) {
    const body = $('body');
    const overBody = $('.over-body');
    const btnActive = $('.js-ml-session .list .btn-list');
    const btnExit = $('.js-ml-session .list-student .exit');
    const ACTIVE_CLASS = 'ml-session-active';
    btnActive.on('click', function () {
        body.addClass(ACTIVE_CLASS);
    });
    overBody.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });
    btnExit.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });
}

// manager question
const managerQuestion = $('.js-ml-manager-question');
if (managerQuestion) {
    const body = $('body');
    const overBody = $('.over-body');
    const btnActive = $('.js-ml-manager-question .btn-open-popup');
    const btnDownload = $('.js-ml-manager-question .btn-download');
    const btnExit = $('.js-ml-manager-question .popup-question .exit');
    const btnExitExport = $('.js-ml-manager-question .popup-export .btn-close');
    const ACTIVE_CLASS = 'ml-manager-question-active';
    const EXPORT_ACTIVE_CLASS = 'ml-manager-question-export-active';
    btnActive.on('click', function () {
        body.addClass(ACTIVE_CLASS);
        return false;
    });
    btnDownload.on('click', function () {
        body.addClass(EXPORT_ACTIVE_CLASS);
        return false;
    });
    overBody.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
        body.removeClass(EXPORT_ACTIVE_CLASS);
    });
    btnExit.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });
    btnExitExport.on('click', function () {
        body.removeClass(EXPORT_ACTIVE_CLASS);
    });
}

// Btton delete
const btnDelete = $('.js-btn-delete');
if (btnDelete) {

    const btnDelete = $('.js-btn-delete');
    const btnNo = $('.notification-delete .btn-no');
    const body = $('body');
    const ACTIVE_CLASS = 'notification-delete-active';
    btnDelete.on('click', function () {
        body.addClass(ACTIVE_CLASS);
        return false;
    });
    btnNo.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
        return false;
    });
}

// question
const question = $('.js-question');
if (question) {
    const body = $('body');
    const overBody = $('.over-body');
    const btnActive = $('.js-question .btn-search');
    const btnExit = $('.js-question .question-search .closed');
    const ACTIVE_CLASS = 'question-search-active';
    btnActive.on('click', function () {
        body.addClass(ACTIVE_CLASS);
    });
    overBody.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });
    btnExit.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });
}

// drag and Drop
const bodyTable = $(".js-question .table tbody");
if (bodyTable) {
    const item = ".js-question .table tbody";
    bodyTable.sortable({
        connectWith: item
    }).disableSelection();
}

const questionNew = $('.js-question-new');
if (questionNew) {

    const container = $('.js-question-new .questions');
    const button = $('.js-question-new .btn-blue');
    let dateID = 1;
    button.on('click', function () {
        let ID = dateID++;
        container.append(`
      <div class="grid form-group">
        <div class="grid-66">
          <textarea class="form-control" rows="4" id="exampleInputQuestionNewAnswerContent-${ID}" name="exampleInputQuestionNewAnswerContent-${ID}"></textarea>
        </div>
        <div class="grid-33">
          <div class="function">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleInputQuestionNewAnswerCheck-${ID}">
              <label class="form-check-label" for="exampleInputQuestionNewAnswerCheck-${ID}">Đáp án đúng</label>
            </div>
            <span class="btn-trash" id="btn-trash-${ID}"><i class="fa fa-trash"></i> Xóa</span>
          </div>
        </div>
      </div>
      `);
        const trash = $('.btn-trash');
        $(trash).on('click', function () {
            $(this).parent().parent().parent().remove();
        });
    });
}

// file navbar
const fileNavbar = $('.js-file-navbar');
if (fileNavbar) {

    const SUB_MENU_CLASS = 'sub-menu';
    const DROPDOWN_CLASS = 'dropdown';
    const ACTIVE_CLASS = 'active';

    const subMenu = $('.js-file-navbar>.nav>li ul');
    subMenu.addClass(SUB_MENU_CLASS);
    subMenu.parent().addClass(DROPDOWN_CLASS);

    const dropdownButton = $('.js-file-navbar .dropdown>a');

    dropdownButton.on('click', function () {
        $(this).parent().toggleClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
        return false;
    });
}

// setting
const templateSetting = $('.js-setting');
if (templateSetting) {

    const availableItem = $('.js-setting .template-available .item');
    if (availableItem) {
        const ACTIVE_CLASS = 'active';
        const DISABLE_CLASS = 'disable';
        const btnNext = $('.js-setting .template-available .btn-next');
        availableItem.on('click', function () {
            $(this).addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
            btnNext.removeClass(DISABLE_CLASS);
        });
    }

    const tabs = document.querySelectorAll('[data-choose]');
    if (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            const button = tabs[i];
            const CLASS_TAB_ACTIVE = 'menu-active';
            const CLASS_ACTIVE = 'template-active';

            $(button).on('click', function () {
                $(this).addClass(CLASS_TAB_ACTIVE).siblings().removeClass(CLASS_TAB_ACTIVE);
                const item = button.getAttribute('data-choose');
                $(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
            });
        }
    }

    const posts = $('.js-setting .template-new .posts');
    if (posts) {
        const container = $('.js-setting .template-new .posts .posts-list');

        const input = $('#exampleInputTemplateSession');
        input.on('change', function () {
            const item = $('.js-setting .template-new .posts .posts-item');
            item.remove();
            const value = $(this).val();
            if (value < 101) {
                for (let i = 0; i < value; i++) {
                    let ID = i + 1;
                    container.append(`
            <div class="posts-item">
              <div class="grid inner">
                <div class="grid-left">
                  <div class="title">Bài ${ID} *</div>
                </div>
                <div class="grid-right">
                  <textarea class="form-control" rows="6" id="posts-${ID}" name="posts-${ID}"></textarea>
                </div>
              </div>
            </div>
          `);
                }
            } else {
                alert('Số buổi tối đa là 100');
            }
        });
    }

    const dateSetting = $('.js-setting .js-date');
    if (dateSetting) {

        const container = $('.js-setting .js-date .group');
        if (typeof numberLesson != "undefined") {
            for (let i = 0; i < numberLesson; i++) {
                let ID = i + 1;
                container.append(`
          <div class="grid form-group">
            <div class="grid-left">
              <label for="exampleInputTemplateDateStart${ID}">Buổi ${ID} *</label>
            </div>
            <div class="grid-right">
              <div class="grid grid-mg15">
                <div class="grid-50 grid-p15">
                  <div class="grid grid-mg7">
                    <div class="grid-60 grid-p7">
                      <input class="form-control datepicker" id="exampleInputTemplateDateStart-${ID}" name="exampleInputTemplateDateStart-${ID}">
                    </div>
                    <div class="grid-40 grid-p7">
                      <input class="form-control timepicker" id="exampleInputTemplateTimeStart-${ID}" name="exampleInputTemplateTimeStart-${ID}" value="00:00">
                    </div>
                  </div>
                </div>
                <div class="grid-50 grid-p15">
                  <div class="grid grid-mg7">
                    <div class="grid-60 grid-p7">
                      <input class="form-control datepicker" id="exampleInputTemplateDateEnd-${ID}" name="exampleInputTemplateDateEnd-${ID}">
                    </div>
                    <div class="grid-40 grid-p7">
                      <input class="form-control timepicker" id="exampleInputTemplateTimeEnd-${ID}" name="exampleInputTemplateTimeEnd-${ID}" value="00:00">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
            }
        }
    }
}

// show content
const listCourse = $('.js-list-course');
if (listCourse) {
    const btnToogle = $('.js-list-course .btn-detail');
    const TOGGLE_CLASS = 'item-active';
    btnToogle.on('click', function () {
        $(this).parent().parent().parent().toggleClass(TOGGLE_CLASS).siblings().removeClass(TOGGLE_CLASS);
    });
}

// show hide content
const contentShowHide = $('.js-content-show-hide');
if (contentShowHide) {
    const btnToogle = $('.js-content-show-hide .js-btn-toggle');
    const content = $('.js-content-show-hide .js-content');
    const HIDE_CLASS = 'hide';
    btnToogle.on('click', function () {
        $(this).parent().toggleClass(HIDE_CLASS);
    });
}

// carousel
const carouselAboutLecturers = $('.js-about-lecturers');
if (carouselAboutLecturers) {
    const carousel = carouselAboutLecturers;
    carousel.slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500
    });
}

// user
const user = $('.js-user');
if (user) {
    const btnLogIn = $('.js-btn-log-in');
    const btnExit = $('.c-user .exit');
    const btnForgotPassword = $('.c-user .btn-forgot-password');
    const btnNotificationClosed = $('.c-user .notification .closed');
    const content = $('.c-user .user-inner .left .inner>.content');
    const formLogIn = $('.c-user .form-log-in');
    const formRestorePassword = $('.c-user .form-restore-password');
    const body = $('body');
    const overBody = $('.over-body');
    const CLASS_ACTIVE = 'user-popup-active';
    const CLASS_SHOW = 'show';
    btnLogIn.on('click', function () {
        body.addClass(CLASS_ACTIVE);
    });
    btnExit.on('click', function () {
        body.removeClass(CLASS_ACTIVE);
    });
    overBody.on('click', function () {
        body.removeClass(CLASS_ACTIVE);
    });
    btnForgotPassword.on('click', function () {
        content.removeClass(CLASS_SHOW);
        formLogIn.removeClass(CLASS_SHOW);
        formRestorePassword.addClass(CLASS_SHOW);
    });
    btnNotificationClosed.on('click', function () {
        $(this).parent().remove();
    });
}

// Video Youtube
const $allVideos = $("iframe[src*='youtube']"),
    $fluidEl = $("iframe[src*='youtube']").parent().addClass("youtube-iframe-wrap");
$allVideos.each(function () {
    $(this)
        .data('aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
});
$(window).resize(function () {
    var newWidth = $fluidEl.width();
    $allVideos.each(function () {
        var $el = $(this);
        $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));
    });
}).resize();

//-------------------------- Tweezer
class Tweezer {
    constructor(opts = {}) {
        this.duration = opts.duration || 1000;
        this.ease = opts.easing || this._defaultEase;
        this.start = opts.start;
        this.end = opts.end;

        this.frame = null;
        this.next = null;
        this.isRunning = false;
        this.events = {};
        this.direction = this.start < this.end ? 'up' : 'down';
    }

    begin() {
        if (!this.isRunning && this.next !== this.end) {
            this.frame = window.requestAnimationFrame(this._tick.bind(this));
        }
        return this;
    }

    stop() {
        window.cancelAnimationFrame(this.frame);
        this.isRunning = false;
        this.frame = null;
        this.timeStart = null;
        this.next = null;
        return this;
    }

    on(name, handler) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(handler);
        return this;
    }

    emit(name, val) {
        let e = this.events[name];
        e && e.forEach(handler => handler.call(this, val));
    }

    _tick(currentTime) {
        this.isRunning = true;

        let lastTick = this.next || this.start;

        if (!this.timeStart) this.timeStart = currentTime;
        this.timeElapsed = currentTime - this.timeStart;
        this.next = Math.round(this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration));

        if (this._shouldTick(lastTick)) {
            this.emit('tick', this.next);
            this.frame = window.requestAnimationFrame(this._tick.bind(this));
        } else {
            this.emit('tick', this.end);
            this.emit('done', null);
        }
    }

    _shouldTick(lastTick) {
        return {
            up: this.next < this.end && lastTick <= this.next,
            down: this.next > this.end && lastTick >= this.next
        } [this.direction];
    }

    _defaultEase(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}

//----------------------- Tweezer end;

const elements = document.querySelectorAll('[data-scroll]');
if (elements) {
    for (let i = 0; i < elements.length; i++) {

        const button = elements[i];
        const targetValues = elements[i].getAttribute('data-scroll');
        const targets = document.querySelectorAll(targetValues);
        if (targets) {
            for (let i = 0; i < targets.length; i++) {
                button.addEventListener('click', () => {
                    const scrollTop = (window.scrollY || window.pageYOffset || document.documentElement.scrollTop);
                    new Tweezer({
                            start: scrollTop,
                            end: targets[i].getBoundingClientRect().top + scrollTop,
                        })
                        .on('tick', v => window.scrollTo(0, v))
                        .begin();
                });
            }
        } else {
            console.log('wrong id');
        }
    }
}

// upload avatar
const avatar = $('.js-avatar');
if (avatar) {
    const img = $('.profile-pic');
    const btnUpload = $(".file-upload");
    const readURL = function (input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                img.attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    btnUpload.on('change', function () {
        readURL(this);
    });
}

// multiselect
const multiselect = $('.multiselect');
if (multiselect) {
    multiselect.multiselect({
        columns: 4,
        placeholder: 'Bộ môn giảng dạy, Giảng dạy các lớp',
        search: true,
        searchOptions: {
            'default': 'Tìm kiếm'
        }
    });
}

// chart
const charts = $('#js-chart');
if (charts) {

    const tabs = document.querySelectorAll('[data-chart]');
    if (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            const button = tabs[i];
            const CLASS_TAB_ACTIVE = 'chart-tab-active';
            const CLASS_ACTIVE = 'chart-body-active';

            $(button).on('click', function () {
                $(this).addClass(CLASS_TAB_ACTIVE).siblings().removeClass(CLASS_TAB_ACTIVE);
                const item = button.getAttribute('data-chart');
                $(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
            });
        }
    }

    window.chartColors = {
        red: 'rgb(234, 62, 78)',
        redOpacity: 'rgb(234, 62, 78, .3)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(251, 200, 25)',
        yellowOpacity: 'rgb(251, 200, 25, .3)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(42, 159, 255)',
        blueOpacity: 'rgb(42, 159, 255, .3)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)',
    };
    const chart = function (element, measure, line1, line2, line3) {
        const config = {
            type: 'line',
            data: {
                labels: measure,
                datasets: [{
                    data: line1,
                    label: 'Khóa học đang diễn ra',
                    backgroundColor: window.chartColors.redOpacity,
                    borderColor: window.chartColors.red,
                    fill: true,
                }, {
                    data: line2,
                    label: 'Khóa học đã kết thúc',
                    backgroundColor: window.chartColors.yellowOpacity,
                    borderColor: window.chartColors.yellow,
                    fill: true,
                }, {
                    data: line3,
                    label: 'Triết khấu giới thiệu khóa học',
                    backgroundColor: window.chartColors.blueOpacity,
                    borderColor: window.chartColors.blue,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxHeight: 30,
                        fontSize: 16,
                        fontColor: '#303030',
                        padding: 20,
                        usePointStyle: true
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                        },
                    }]
                }
            }
        };
        const ctx = element.getContext("2d");
        let myLine = new Chart(ctx, config);
    };

    const chartDay = document.querySelector('#day canvas');
    const dayValue = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
    let dayData1 = [4, 10, 12, 5, 6, 5, 7];
    let dayData2 = [0, 14, 2, 6, 10, 5, 6];
    let dayData3 = [0, 5, 12, 5, 17, 7, 4];
    if (chartDay) {
        chart(
            chartDay,
            dayValue,
            dayData1,
            dayData2,
            dayData3
        );
    }

    const chartMonth = document.querySelector('#month canvas');
    const monthValue = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    let monthData1 = [4, 10, 12, 5, 6, 5, 7, 9, 20, 10, 11, 2];
    let monthData2 = [0, 14, 2, 6, 10, 5, 6, 6, 10, 15, 11, 8];
    let monthData3 = [0, 5, 12, 5, 17, 7, 4, 9, 6, 17, 12, 15];
    if (chartMonth) {
        chart(
            chartMonth,
            monthValue,
            monthData1,
            monthData2,
            monthData3
        );
    }

    const chartYear = document.querySelector('#year canvas');
    const yearValue = ['2017', '2018', '2019'];
    let yearData1 = [100, 121, 40];
    let yearData2 = [90, 130, 10];
    let yearData3 = [150, 40, 20];
    if (chartYear) {
        chart(
            chartYear,
            yearValue,
            yearData1,
            yearData2,
            yearData3
        );
    }
}

// datetimepicker
const datetimepicker = $('.datetimepicker');
const datepicker = $('.datepicker');
const timepicker = $('.timepicker');
if (datetimepicker) {
    datetimepicker.datetimepicker();
}
if (datepicker) {
    datepicker.datetimepicker({
        format: 'DD/MM/YYYY'
    });
}
if (timepicker) {
    timepicker.datetimepicker({
        format: 'LT'
    });
}

// modal
const modal = document.querySelectorAll('[data-modal]');
if (modal) {
    for (let i = 0; i < modal.length; i++) {
        const button = modal[i];
        const body = $('body');
        const exit = $('.modal-exit');
        const CLASS_ACTIVE_MODAL = 'modal-active';
        const CLASS_ACTIVE_OVER = 'modal-over-body-active';
        $(button).on('click', function () {
            body.prepend('<div class="modal-over-body"></div>');
            const over = $('.modal-over-body');
            const e = button.getAttribute('data-modal');
            $(e).addClass(CLASS_ACTIVE_MODAL);
            $(over).addClass(CLASS_ACTIVE_OVER);
            over.on('click', function () {
                $(e).removeClass(CLASS_ACTIVE_MODAL);
                $(over).removeClass(CLASS_ACTIVE_OVER);
                over.remove();
            });
            exit.on('click', function () {
                $(e).removeClass(CLASS_ACTIVE_MODAL);
                $(over).removeClass(CLASS_ACTIVE_OVER);
                over.remove();
            });
            return false;
        });
    }
}