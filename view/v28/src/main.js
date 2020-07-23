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
  let accordionButtons = $('.group-btn .btn');
  let accordionBodys = $('.box-class .class-nv');
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