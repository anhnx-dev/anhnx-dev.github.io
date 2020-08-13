$('.carousel-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000
});

$('.back-top').click(function () {
  $('body, html').animate({
      scrollTop: 0
  }, 1000);
});

const fullpage = $('#fullpage');

if (fullpage) {
  if ($(window).width() >= 1200) {
    fullpage.fullpage({
      scrollBar: true,
    });
  }
}

// modal
const modal = document.querySelectorAll('[data-modal]');
if (modal) {
  for (let i = 0; i < modal.length; i++) {
    const button = modal[i];
    const body = $('body');
    const exit = $('.btn-exit');
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