$(document).ready(function () {
  $('.material-input input').focus(function () {
    $(this).closest('.material-input').addClass('active');
  });
  $('.material-input input').blur(function () {
    $(this).closest('.material-input').removeClass('active');
  });
});
