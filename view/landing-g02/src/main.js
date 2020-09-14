const navTrigger = $('.nav-trigger');

if (navTrigger) {
  const body = $('body');
  const ACTIVE_CLASS = 'menu-fix_active';

  navTrigger.on('click', function () {
    body.toggleClass(ACTIVE_CLASS);
  });
}


// accordion
const accordion = $('.accordion');
if (accordion) {
  let accordionButtons = $('.accordion .btn');
  let accordionBodys = $('.accordion .item');
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

// scroll
const navScroll = $('.hero .nav');
if (navScroll) {
  const sectionArray = [1, 2, 3, 4, 5];
  const heightNavScroll = navScroll.height();
  const navItem = $('.hero .nav li');
  const navLink = $('.hero .nav li a');
  const navUrl = $('.hero .nav li a:link');
  const doc = $(document);
  const ACTIVE_CLASS = 'active';
  const INACTION_CLASS = 'inactive';
  const FIX_TOP_CLASS = 'fix-top';
  
  $.each(sectionArray, function (index, value) {

    doc.scroll(function () {
      let heightSection1 = $('#section_1').height();
      let offsetSection = $('#' + 'section_' + value).offset().top;
      let docScroll = doc.scrollTop();

      if (docScroll > (heightSection1 - heightNavScroll)) {
        navScroll.addClass(FIX_TOP_CLASS);
      } else {
        navScroll.removeClass(FIX_TOP_CLASS);
      }

      if ((docScroll + 1) >= offsetSection) {
        navLink.removeClass(ACTIVE_CLASS);
        navUrl.addClass(INACTION_CLASS);
        navLink.eq(index).addClass(ACTIVE_CLASS);
        navUrl.eq(index).removeClass(INACTION_CLASS);
      }

    });

    navItem.eq(index).click(function (e) {
      let offsetClick = $('#' + 'section_' + value).offset().top;
      e.preventDefault();
      $('html, body').animate({
        'scrollTop': offsetClick
      }, 300)


    });

  });

  doc.ready(function () {
    navUrl.addClass(INACTION_CLASS);
    navLink.eq(0).addClass(ACTIVE_CLASS);
    navUrl.eq(0).removeClass(INACTION_CLASS);

  });
}