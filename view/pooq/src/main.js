const heroCarousel = $('.js-hero-carousel');
if (heroCarousel) {

  const carousel = heroCarousel;

  carousel.slick({
    dots: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    fade: true,
    infinite: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 1199.9,
      settings: {
        dots: false,
        fade: false,
        slidesToScroll: 1,
        variableWidth: true
      }
    }]
  });
}

const newCarousel = $('.js-new-carousel');
if (newCarousel) {

  const carousel = newCarousel;

  carousel.slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1199.9,
      settings: {
        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        variableWidth: true
      }
    }]
  });
}

const popularCarousel = $('.js-popular-carousel');
if (popularCarousel) {

  const carousel = popularCarousel;

  carousel.slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1199.9,
      settings: {
        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        variableWidth: true
      }
    }]
  });
}

const registrationListCarousel = $('.js-registration_list-carousel');
if (registrationListCarousel) {

  const carousel = registrationListCarousel;

  carousel.slick({
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1799.9,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1199.9,
        settings: {
          arrows: false,
          utoplay: false,
          autoplay: false,
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  });
}

const eventCarousel = $('.js-event-carousel');
if (eventCarousel) {

  const carousel = eventCarousel;

  carousel.slick({
    infinite: false,
    vertical: true
  });
}

const famousCarousel = $('.js-famous-carousel');
if (famousCarousel) {

  const carousel = famousCarousel;

  carousel.slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1199.9,
      settings: {
        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        variableWidth: true
      }
    }]
  });
}

const category = $('.js-category');
if (category) {

  const carousel = $('.js-category .carousel .nav');
  const maxWidth = 1199.9;
  const container = $('.isotope_container');
  const classItem = $('.isotope_item');
  const CURRENT_CLASS = 'current';
  let width = $(window).width();

  const slickSettings = {
    responsive: [{
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: maxWidth,
        settings: {
          arrows: false,
          infinite: false,
          slidesToShow: 1,
          variableWidth: true,
        }
      }
    ]
  }

  runSlick = function () {
    carousel.not('.slick-initialized').slick(slickSettings);
  }


  runSlick()


  $(window).on('resize', function () {
    let widthResize = $(window).width();
    width = widthResize;
    if (width < maxWidth) {
      runSlick()
    }
  });

  runIsotope = function (number) {
    container.isotope({
      filter: (':nth-child( -n + ' + number + ')'),
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
  }

  runSort = function (limit) {
    classItem.click(function () {
      const elementCurrent = $('.isotope_item.current');
      const selector = $(this).attr('data-filter');

      elementCurrent.removeClass(CURRENT_CLASS);
      $(this).addClass(CURRENT_CLASS);
      container.isotope({
        filter: function () {
          let index = $(this).parent().children(selector).index(this);
          return (index > -1) && (index < limit)
        }
      });
      return false
    });
  }

  if (width >= maxWidth) {
    runIsotope(5);
    runSort(5)
  } else {
    runIsotope(4);
    runSort(4);
  }

  $(window).on('resize', function () {
    let widthResize = $(window).width();
    width = widthResize;
    if (width >= maxWidth) {
      runIsotope(5);
      runSort(5)
    } else {
      runIsotope(4);
      runSort(4);
    }
  });
}