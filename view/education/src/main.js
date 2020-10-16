const btnUpdateForm = $('#btn-update');
const btnSaveForm = $('#btn-save');


btnUpdateForm.on('click', function () {
  $(this).parent().parent().addClass('active');
})
  
btnSaveForm.on('click', function () {
  $(this).parent().parent().removeClass('active');
})

// switch
const BTNswitch = $('.switch');
BTNswitch.on('click', function () {
  $(this).toggleClass('active');
})

// more school calendar
const moreSchoolCalendar = $('.c-more_school_calendar');
if (moreSchoolCalendar) {

  const btnOpen = $('.new-alarm');
  const btnExit = $('.calendar .btn-exit');
  const calendar = $('.calendar');

  BTNswitch.on('click', function () {
    $(this).parent().toggleClass('active');
  });

  btnOpen.on('click', function () {
    calendar.addClass('active');
  });
  btnExit.on('click', function () {
    calendar.removeClass('active');
  });
}


// Game
const btnAnswer_01 = $('.js-answer-v1 .answer');
btnAnswer_01.on('click', function () {
  $(this).toggleClass('active').siblings().removeClass('active');
})

  