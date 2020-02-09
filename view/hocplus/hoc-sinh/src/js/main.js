/* version 07 - date 25/4/2019 */

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

// navbar tab
const navbarTab = $('.js-navbar-tab');
if (navbarTab) {
    const tabButtonItems = $('.js-navbar-tab .tab-button .item');
    const tabBodyItems = $('.js-navbar-tab .tab-body .item');
    for (let i = 0; i < tabButtonItems.length; i++) {
        const tabButtonItem = tabButtonItems[i];
        const tabBodyItem = tabBodyItems[i];
        $(tabButtonItem).on('mouseover', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $(tabBodyItem).addClass('active').siblings().removeClass('active');
        });
    }
}

// fix top
const fixed = document.querySelector('.js-fixed');
const ACTIVE_CLASS = 'fixed-top';

const addClass = () => fixed.classList.add(ACTIVE_CLASS);
const removeClass = () => fixed.classList.remove(ACTIVE_CLASS);

if (fixed) {
    window.addEventListener('scroll', () => {
        const windowHeight = this.window.pageYOffset ||
            this.document.documentElement.scrollTop ||
            this.document.body.scrollTop || 0;

        (windowHeight > fixed.offsetTop) ? addClass(): removeClass();
    });
}

// manage
const userManage = $('.js-user');
if (userManage) {
    const ACTIVE_CLASS = 'user-anage-active';
    const SHOW_CLASS = 'show';
    const btnLogin = $('.btn-log-in');
    const btnRegistration = $('.btn-registration');
    const body = $('body');
    const overBody = $('.over-body');
    const exit = $('.js-user .exit');
    const btnRegisterActive = $('.js-user .content-log-in .btn');
    const btnLogInActive = $('.js-user .content-register .btn');
    const contentRegister = $('.js-user .content-register');
    const contentLogIn = $('.js-user .content-log-in');
    const form = $('.js-user .form');
    const formLogIn = $('.js-user .form-log-in');
    const formRegister = $('.js-user .form-register');
    const formRegisterPassword = $('.js-user .form-restore-password');
    const btnForgotPassword = $('.js-user .btn-forgot-password');
    const other = $('.js-user .other');
    const btnRemove = $('.js-user .closed');

    const tabParentsStudent = $('.js-user .tabs .tabs-parents-student');
    const tabTeacher = $('.js-user .tabs .tabs-teacher');
    const parentsStudent = $('.js-user .parents-student');
    const teacher = $('.js-user .teacher');
    const ACTIVE_TAB_CLASS = 'tabs-active';

    tabParentsStudent.on('click', function () {
        tabTeacher.removeClass(ACTIVE_TAB_CLASS);
        $(this).addClass(ACTIVE_TAB_CLASS);
        parentsStudent.addClass(SHOW_CLASS);
        teacher.removeClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
    });
    tabTeacher.on('click', function () {
        tabParentsStudent.removeClass(ACTIVE_TAB_CLASS);
        $(this).addClass(ACTIVE_TAB_CLASS);
        teacher.addClass(SHOW_CLASS);
        parentsStudent.removeClass(SHOW_CLASS);
        other.removeClass(SHOW_CLASS);
    });

    btnRemove.on('click', function () {
        $(this).parent().remove();
    });
    btnLogin.on('click', function () {
        body.addClass(ACTIVE_CLASS);
    });
    btnRegisterActive.on('click', function () {
        contentRegister.addClass(SHOW_CLASS);
        contentLogIn.removeClass(SHOW_CLASS);
        form.removeClass(SHOW_CLASS);
        formLogIn.addClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
        tabTeacher.removeClass(ACTIVE_TAB_CLASS);
        tabParentsStudent.addClass(ACTIVE_TAB_CLASS);
        parentsStudent.addClass(SHOW_CLASS);
        teacher.removeClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
    });
    btnLogInActive.on('click', function () {
        contentRegister.removeClass(SHOW_CLASS);
        contentLogIn.addClass(SHOW_CLASS);
        form.removeClass(SHOW_CLASS);
        formRegister.addClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
    });
    btnForgotPassword.on('click', function () {
        form.removeClass(SHOW_CLASS);
        formRegisterPassword.addClass(SHOW_CLASS);
        other.removeClass(SHOW_CLASS);
    });
    overBody.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
        contentRegister.addClass(SHOW_CLASS);
        contentLogIn.removeClass(SHOW_CLASS);
        form.removeClass(SHOW_CLASS);
        formLogIn.addClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
        tabTeacher.removeClass(ACTIVE_TAB_CLASS);
        tabParentsStudent.addClass(ACTIVE_TAB_CLASS);
        parentsStudent.addClass(SHOW_CLASS);
        teacher.removeClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);

    });
    exit.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
        contentRegister.addClass(SHOW_CLASS);
        contentLogIn.removeClass(SHOW_CLASS);
        form.removeClass(SHOW_CLASS);
        formLogIn.addClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
        tabTeacher.removeClass(ACTIVE_TAB_CLASS);
        tabParentsStudent.addClass(ACTIVE_TAB_CLASS);
        parentsStudent.addClass(SHOW_CLASS);
        teacher.removeClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
    });
    btnRegistration.on('click', function () {
        body.addClass(ACTIVE_CLASS);
        contentRegister.removeClass(SHOW_CLASS);
        contentLogIn.addClass(SHOW_CLASS);
        form.removeClass(SHOW_CLASS);
        formRegister.addClass(SHOW_CLASS);
        other.addClass(SHOW_CLASS);
    });
}

const carouseBackgrounb = $('.js-backgrounb');
if (carouseBackgrounb) {
    carouseBackgrounb.slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });
}
const carouselCertificateItems = $('.c-lecturers-group .group');
if (carouselCertificateItems) {
    for (let i = 0; i < carouselCertificateItems.length; i++) {
        const carouselCertificateItem = carouselCertificateItems[i];
        $(carouselCertificateItem).slick({
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4500,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
}
const carouselItems = $('.c-carousel .inner');
if (carouselItems) {
    for (let i = 0; i < carouselItems.length; i++) {
        const carouselItem = carouselItems[i];
        $(carouselItem).slick({
            arrows: false,
            dots: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
}
const carouselLibrary = $('.c-library .carousel .inner');
if (carouselLibrary) {
    carouselLibrary.slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: false
                }
            }
        ]
    });
}

// slideout
const slideout = $('.js-slideout');
if (slideout) {
    const rightTopbar = $('.c-topbar .right');
    const body = $('body');

    rightTopbar.append(`
    <div class="nav-trigger">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
  `);

    const toogleSlidout = $('.nav-trigger');
    const overBody = $('.over-body');
    const ACTIVE_CLASS = 'slideout-active';
    toogleSlidout.on('click', function () {
        body.toggleClass(ACTIVE_CLASS);
    });

    overBody.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });

    const slideoutSubMenu = $('.js-slideout .nav>li ul');
    const SUB_MENU_CLASS = 'sub-menu';
    const DROPDOWN_CLASS = 'dropdown';
    ACTIVE_DROPDOWN_CLASS = 'active';
    slideoutSubMenu.addClass(SUB_MENU_CLASS);
    slideoutSubMenu.parent().addClass(DROPDOWN_CLASS);

    const dropdownButton = $('.js-slideout .dropdown>.nav-link');

    dropdownButton.on('click', function () {
        $(this).parent().toggleClass(ACTIVE_DROPDOWN_CLASS).siblings().removeClass(ACTIVE_DROPDOWN_CLASS);
        return false;
    });

}

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

const mlTable = $('.js-ml-list');
if (mlTable) {
    const action = $('.js-ml-list .action');
    if (action) {
        action.parent().css('vertical-align', 'middle');
    }
}

// pay
const pay = $('js-pay');
if (pay) {
    const item = $('.js-pay .online-pay .item');
    if (item) {
        const ACTIVE_CLASS = 'active';
        item.on('click', function () {
            $(this).siblings().removeClass(ACTIVE_CLASS);
        });
    }

    const elements = document.querySelectorAll('[data-pay]');

    for (let i = 0; i < elements.length; i++) {
        const button = elements[i];
        const CLASS_TAB_ACTIVE = 'species-active';
        const CLASS_ACTIVE = 'pay-active';

        $(button).on('click', function () {
            $(this).addClass(CLASS_TAB_ACTIVE).siblings().removeClass(CLASS_TAB_ACTIVE);
            const item = button.getAttribute('data-pay');
            $(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
        });
    }

    const tabs = document.querySelectorAll('[data-tab]');
    if (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            const button = tabs[i];
            const CLASS_TAB_ACTIVE = 'tabs-active';
            const CLASS_ACTIVE = 'bank-card-active';

            $(button).on('click', function () {
                $(this).addClass(CLASS_TAB_ACTIVE).siblings().removeClass(CLASS_TAB_ACTIVE);
                const item = button.getAttribute('data-tab');
                $(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
            });
        }
    }
}

// question
const question = $('.question');
if (question) {
    const btnSearch = $('.js-question .question-inner .btn-search');
    const btnClosed = $('.js-question .question-search .closed');
    const body = $('body');
    const overBody = $('.over-body');

    const QUESTION_ACTIVE_CLASS = 'question-search-active';
    btnSearch.on('click', function () {
        body.addClass(QUESTION_ACTIVE_CLASS);
    });
    overBody.on('click', function () {
        body.removeClass(QUESTION_ACTIVE_CLASS);
    });
    btnClosed.on('click', function () {
        body.removeClass(QUESTION_ACTIVE_CLASS);
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

// advisory
const advisory = $('.js-advisory');
if (advisory) {
    const btnActive = $('.btn-active-advisory');
    const btnExit = $('.js-advisory .exit');
    const body = $('body');
    const overBody = $('.over-body');
    const ACTIVE_CLASS = 'advisory-active';
    btnActive.on('click', function () {
        body.addClass(ACTIVE_CLASS);
        return false;
    });
    btnExit.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });
    overBody.on('click', function () {
        body.removeClass(ACTIVE_CLASS);
    });
}

// evaluate stars
const stars = $('.js-stars');
if (stars) {
    const star = $('.stars .star');
    star.on('mouseover', function () {
        let onStar = parseInt($(this).data('value'), 10);
        $(this).parent().children('.js-stars .star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }).on('mouseout', function () {
        $(this).parent().children('.js-stars .star').each(function (e) {
            $(this).removeClass('active');
        });
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
        });
    }
}