const navTrigger = $('.nav-trigger');

if (navTrigger) {
  const body = $('body');
  const ACTIVE_CLASS = 'menu-fix_active';

  navTrigger.on('click', function () {
    body.toggleClass(ACTIVE_CLASS);
  });
}

$('.nhan-vat').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3500,
});

$('.dac-sac').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3500,
});

$('.back-top').click(function () {
  $('body, html').animate({
      scrollTop: 0
  }, 1000);
});

$('.link-fix .btn-exit').on('click', function () {
  $('.link-fix').removeClass('active');
  $('.btn-open-fix').addClass('active');
})

$('.btn-open-fix').on('click', function () {
  $('.link-fix').addClass('active');
  $(this).removeClass('active');
})



// modal
const modal = document.querySelectorAll('[data-modal]');
if (modal) {

  function openModal(e) {
    const body = $('body');
    const btnExit = $('.btn-exit');
    const CLASS_ACTIVE_MODAL = 'modal-active';
    const CLASS_ACTIVE_OVER = 'modal-over-body-active';


    body.prepend('<div class="modal-over-body"></div>');
    const over = $('.modal-over-body');

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
  }

  function exitModal(e) {
    const CLASS_ACTIVE_MODAL = 'modal-active';
    const CLASS_ACTIVE_OVER = 'modal-over-body-active';
    const over = $('.modal-over-body');

    function exit() {
      $(e).removeClass(CLASS_ACTIVE_MODAL);
      $(over).removeClass(CLASS_ACTIVE_OVER);
      over.remove();
    }

    exit()
  }

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