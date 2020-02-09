// Funtion slide
const funtionSlide = $('.js-function-slide');

if (funtionSlide) {
	const slide = funtionSlide;
	slide.slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 3000
	});
}

// Figure slide
const figureSlide = $('.js-figure');

if (figureSlide) {

	const elements = document.querySelectorAll('[data-class]');

	for (let i = 0; i < elements.length; i++) {
		const button = elements[i];
		const CLASS_ACTIVE = 'active';

		$(button).on('mouseover', function () {
			$(this).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
			const item = button.getAttribute('data-class');
			$(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
		});
	}

}

// News slide
const newsSlide = $('.js-news-slide .wrapper');

if (newsSlide) {
	const slide = newsSlide;
	slide.slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 3000
	});
}

// Tabs
const tabs = $('.js-tabs');

if (tabs) {

	const elements = document.querySelectorAll('[data-tab]');

	for (let i = 0; i < elements.length; i++) {
		const button = elements[i];
		const CLASS_ACTIVE = 'active';

		$(button).on('click', function () {
			$(this).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
			const item = button.getAttribute('data-tab');
			$(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
		});
	}

}