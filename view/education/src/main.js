const btnUpdateForm = $('#btn-update');
const btnSaveForm = $('#btn-save');


btnUpdateForm.on('click', function () {
  $(this).parent().parent().addClass('active');
})
  
btnSaveForm.on('click', function () {
  $(this).parent().parent().removeClass('active');
})
  