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
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 1200,
        settings: {
          dots: false
        }
      }]
    });
  }

  const carouselVideo = $('.carousel-video');

  if (carouselVideo) {
    const carousel = carouselVideo;
    carousel.slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1200,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
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


const videoInDetail = $('.c-product_detail .video>video');
if (videoInDetail) {
  videoInDetail.on('click', function () {
    const video = videoInDetail[0];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}

const videoFan = $('.item-wrapper .video');
if (videoFan) {
  const wrapper = $('.item-wrapper');
  const CLASS_PLAY = 'play';
  const CLASS_PAUSE = 'pause';
  wrapper.on('click', function () {
    const video = $(this).find('.video')[0];
    const statu = $(this).find('.status');
    if (video.paused) {
      video.play();
      statu.removeClass(CLASS_PLAY);
      statu.addClass(CLASS_PAUSE);
    } else {
      video.pause();
      statu.removeClass(CLASS_PAUSE);
      statu.addClass(CLASS_PLAY);
    }
  });
  videoFan.bind('pause', function () {
    const statu = $(this).parent('div').find('.status');
    statu.removeClass(CLASS_PAUSE);
    statu.addClass(CLASS_PLAY);
    this.load();
  });
}