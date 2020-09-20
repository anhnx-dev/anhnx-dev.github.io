// nav trigger
const navTrigger = $('.nav-trigger');

if (navTrigger) {
  const body = $('body');
  const btn = navTrigger;
  ACTIVE_CLASS = 'navbar-active'
  btn.on('click', function () {
    body.toggleClass(ACTIVE_CLASS);
  });
}

// Accordion
const accordion = $('.accordion');
if (accordion) {
  const btnAccordion = $('.btn-accordion');
  const ACTIVE_CLASS = 'active';

  $(btnAccordion).on('click', function () {
    $(this).parent().toggleClass('active').siblings().removeClass(ACTIVE_CLASS);
  });
}

if ($.fn.slick !== undefined) {

  const carouselHero = $('.carousel-hero');

  if (carouselHero) {
    const carousel = carouselHero;
    carousel.slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2700,
      responsive: [{
        breakpoint: 1200,
        settings: {
          dots: false
        }
      }]
    });
  }

  const carouselDiscountCode = $('.carousel-discount_code')

  if (carouselDiscountCode) {
    const carousel = carouselDiscountCode;
    carousel.slick({
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false,
        }
      }]
    });
  }

  const carouselProduct = $('.carousel-products');

  if (carouselProduct) {
    const carousels = carouselProduct;
    for (let i = 0; i < carousels.length; i++) {
      const carousel = carousels[i];
      $(carousel).slick({
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true
      });
    }
  }

  const carouselNews = $('.carousel-news');

  if (carouselNews) {
    const carousel = carouselNews;
    carousel.slick({
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2700,
      responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

}




// modal
const modal = document.querySelectorAll('[data-modal]');
if (modal) {

  for (let i = 0; i < modal.length; i++) {
    const button = modal[i];
    const body = $('body');
    const btnExit = $('.btn-exit');
    const CLASS_ACTIVE_MODAL = 'modal-active';
    const CLASS_ACTIVE_OVER = 'modal-over-body-active';

    $(button).on('click', function () {
      body.prepend('<div class="modal-over-body"></div>');
      const over = $('.modal-over-body');
      const e = button.getAttribute('data-modal');

      function open() {
        $(e).addClass(CLASS_ACTIVE_MODAL);
        $(over).addClass(CLASS_ACTIVE_OVER);
      }

      function exit() {
        $(e).removeClass(CLASS_ACTIVE_MODAL);
        $(over).removeClass(CLASS_ACTIVE_OVER);
        over.remove();
      }

      open()

      over.on('click', function () {

        exit()
      });

      btnExit.on('click', function () {
        exit()
      });

    });

  }
}