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

// video student
const videoStudentClosed = $('.video-student .closed');
if (videoStudentClosed) {
  videoStudentClosed.click(function (event) {
    $(this).parent().removeClass('active');
  });
}

// tab
const tab = $('.js-tab');
if (tab) {
  const tabButton = $('.js-tab .tab-item .title');
  tabButton.click(function (event) {
    $(this).parent().addClass('active').siblings().removeClass("active");
  });
}
// toolset
const toolSet = $('.toolset');
if (toolSet) {
  const item = $('.toolset .tool-item');
  item.click(function (event) {
    $(this).addClass('active').siblings().removeClass("active");
  });
}

// open camera student
const openCamera = function(e) {
  const ACTIVE_CLASS = 'active';
  const videoStudent = $('.video-student');
  $(e).on('click', function () {
    videoStudent.addClass(ACTIVE_CLASS);
  });
};

// video teacher
const videoTeacher = $('.js-video-teacher');
if (videoTeacher) {
  const btnActive =  $('.btn-full-display');
  const btnExit = $('.exit-full-display');
  const display = $('.full-display');
  const ACTIVE_CLASS = 'active';
  btnActive.on('click', function () {
    display.addClass(ACTIVE_CLASS);
  });
  btnExit.on('click', function () {
    display.removeClass(ACTIVE_CLASS);
  });
}

// handraising
const handraising = $('.js-handraising');
if (handraising) {
  handraising.on('click', function () {
    $(this).toggleClass('active');
  });
}

// handraising
const fileNotification = $('.js-file-notification');
if (fileNotification) {
  const btnToggle = $('.js-file-notification .btn-toggle');
  btnToggle.on('click', function () {
    fileNotification.toggleClass('active');
  });
}