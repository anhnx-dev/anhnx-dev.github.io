// eye
function changeInput(e) {
  var x = document.getElementById(e);
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}

function changeIcon(e) {
  $(e).toggleClass('active');
}

$('#eye-password').on('click', function () {
  changeInput('password');
  changeIcon(this);
});

$('#eye-config-password').on('click', function () {
  changeInput('config-password');
  changeIcon(this);
});

// accordion
const accordion = $('.accordion');
if (accordion) {
  let accordionButtons = $('.accordion-btn');
  let accordionBodys = $('.accordion-item');
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

const pay = $('.pay');

if (pay) {
  const vendor = $('.pay .class-pay .group .item');
  const classPay = $('.pay .box .group .item');
  const ACTIVE_CLASS = 'active';
  vendor.on('click', function () {
    $(this).toggleClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
  });
  classPay.on('click', function () {
    $(this).toggleClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
  });
}