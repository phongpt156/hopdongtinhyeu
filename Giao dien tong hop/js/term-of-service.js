$(document).ready(function () {
  $('.term-of-service__top-nav .circle-icon-wrapper').click(function () {
    if ($(this).parent().find('.sub-menu').length) {
      const liElement = $(this).closest('li');

      liElement.find('.collapse').collapse('toggle');
      liElement.toggleClass('open');
    }
  });
});
