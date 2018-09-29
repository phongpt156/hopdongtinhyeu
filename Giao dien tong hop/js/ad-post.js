$(document).ready(function () {
  $('.see-more').click(function () {
    $(this).closest('.description').addClass('text-exposed');
  });
});
