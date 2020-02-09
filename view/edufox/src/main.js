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

// slider
const slider = $('.js-slider');
if (slider) {
	const carousel = slider;
	carousel.slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
}

// navbar
const navbar = $('.js-navbar');

if (navbar) {
	const trigger = $('.nav-trigger');

	trigger.on('click', function () {
		navbar.toggleClass('active');
		$(this).toggleClass('active');
	});
}



// Popup user
const popupUser = $('.js-popup-user');

if (popupUser) {
	const body = $('body');
	const overlayBody = $('.overlay-body');
	const btnOpen = $('.btn-popup');
	const btnRegistration = $('.btn-registration');
	const btnLogin = $('.btn-login');
	const registration = $('.js-popup-user .registration');
	const login = $('.js-popup-user .login');
	const showRegistration = $('.js-popup-user .show-registration');
	const showLogin = $('.js-popup-user .show-login');

	const ACTIVE_CLASS = 'popup-user-active';

	btnOpen.on('click', function () {
		body.addClass(ACTIVE_CLASS);
		registration.addClass('hide');
		registration.removeClass('show');
		login.removeClass('hide');
		login.addClass('show');
		return false;
	});
	btnRegistration.on('click', function () {
		body.addClass(ACTIVE_CLASS);
		registration.removeClass('hide');
		registration.addClass('show');
		login.addClass('hide');
		login.removeClass('show');
		return false;
	});
	btnLogin.on('click', function () {
		body.addClass(ACTIVE_CLASS);
		registration.addClass('hide');
		registration.removeClass('show');
		login.removeClass('hide');
		login.addClass('show');
		return false;
	});
	showRegistration.on('click', function () {
		registration.removeClass('hide');
		registration.addClass('show');
		login.addClass('hide');
		login.removeClass('show');
		return false;
	});
	showLogin.on('click', function () {
		registration.addClass('hide');
		registration.removeClass('show');
		login.removeClass('hide');
		login.addClass('show');
		return false;
	});
	overlayBody.on('click', function () {
		body.removeClass(ACTIVE_CLASS);
	});
}



// Countdown clock
const element = document.querySelector('[data-minutes]');

if (element) {
	const clock = $(element);
	const targetValues = element.getAttribute('data-minutes');

	clock.FlipClock(targetValues, {
		countdown: true
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

// scroll
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


// c-exam-detail
const infoExam = $('.c-exam-detail .info');

if (infoExam) {
	$(window).scroll(function () {
		let scrollY = window.pageYOffset;
		if (scrollY > 91) {
			infoExam.addClass('fixed-top');
		} else {
			infoExam.removeClass('fixed-top');
		}
	});
}

// c-fix
const fix = $('.c-fix');

if (fix) {
	$(window).scroll(function () {
		let scrollY = window.pageYOffset;
		if (scrollY > 60) {
			fix.addClass('fixed-top');
		} else {
			fix.removeClass('fixed-top');
		}
	});
}

// popup answer
const result = $('.js-result');

if (result) {
	const btnActivePopup = $('.js-result .answer .btn');
	const popup = $('.js-result .popup');
	btnActivePopup.on('click', function () {
		popup.toggleClass('active');
	});
	const active_1 = $('.js-result .active-1');
	const commit = $('.js-result .commit');

	active_1.on('click', function () {
		commit.toggleClass('active');
	});

	const active_2 = $('.js-result .active-2');

	active_2.on('click', function () {
		$(this).addClass('active');
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

// tab my user
const tabUser = $('.js-tab-user');

if (tabUser) {
	const tabs = document.querySelectorAll('[data-tab]');
	for (let i = 0; i < tabs.length; i++) {
		const button = tabs[i];
		const CLASS_TAB_ACTIVE = 'active';
		const CLASS_ACTIVE = 'show';

		$(button).on('click', function () {
			$(this).addClass(CLASS_TAB_ACTIVE).siblings().removeClass(CLASS_TAB_ACTIVE);
			const item = button.getAttribute('data-tab');
			$(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
		});
	}
}