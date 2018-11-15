$(document).ready(function () {
  new PerfectScrollbar('.contact-list-sidebar__main', {
    suppressScrollX: true,
    wheelPropagation: false
  });

  $('.search-input').on('input', function () {
    const clearElement = $('.clear-search-input');

    if ($(this).val().length) {
      clearElement.removeClass('d-none');
    } else {
      clearElement.addClass('d-none');
    }
  });
  $('.clear-search-input').click(function () {
    $(this).addClass('d-none');
    $('.search-input').val('');
    $('.search-input').focus();
  });

  new PerfectScrollbar($('.contact-list-container__body')[0], {
    suppressScrollX: true,
    wheelPropagation: false
  });
  $('.contact-list-container--collapse').click(function () {
    $('.contact-list-container--open').toggleClass('d-none');
    $(this).toggleClass('d-none');
  });
});
