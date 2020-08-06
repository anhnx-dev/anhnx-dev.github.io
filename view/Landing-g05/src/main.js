const navTrigger = $('.nav-trigger');

if (navTrigger) {
  const body = $('body');
  const ACTIVE_CLASS = 'menu-fix_active';

  navTrigger.on('click', function () {
    body.toggleClass(ACTIVE_CLASS);
  });
}

const accordion = $('.js-accordion');
if (accordion) {
  let accordionButtons = $('.nv-item');
  let accordionBodys = $('.nhan-vat');
  const ACTIVE_CLASS = 'active';

  for (let i = 0; i < accordionButtons.length; i++) {
    const accordionButton = accordionButtons[i];
    const accordionBody = accordionBodys[i];
    $(accordionButton).on('click', function () {
      $(this).addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
      $(accordionBody).addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
    });
  }
}

const btnDisabled = $('.btn-disabled');
if (btnDisabled) {
  const CLASS_DISABLED = 'disabled'
  btnDisabled.on('click', function () {
    $(this).addClass(CLASS_DISABLED)
  })
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
      body.prepend(' <div class="modal-over-body"></div>');
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


const fullpage = $('#fullpage');

if (fullpage) {
  if ($(window).width() >= 1200) {
    fullpage.fullpage({
      scrollBar: true,
    });
  }
}

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    }
  ]
});



