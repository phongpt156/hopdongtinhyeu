$(document).ready(function () {
  $('.navbar-right__menu-item .dropdown-menu').click(function (e) {
    e.stopPropagation();
  });
  $('.navbar-right__menu-item .dropdown-menu__body .option-list .option-item a').click(function () {
    $(this).closest('.navbar-right__menu-item').find('.dropdown-toggle').dropdown('toggle');
  });
  $('.authentication-dialog .authentication-form__footer a.register').click(function () {
    $('.authentication-dialog').closest('.navbar-right__menu-item').find('.dropdown-toggle').dropdown('toggle');
  });
  $('.authentication-dialog .authentication-form__footer a.login').click(function () {
    $(this).closest('.navbar-right__menu-item').find('.dropdown-toggle').dropdown('toggle');
    $('.authentication-dialog .authentication-form__footer a.register').closest('.navbar-right__menu-item').find('.dropdown-toggle').dropdown('toggle');
  });
});
