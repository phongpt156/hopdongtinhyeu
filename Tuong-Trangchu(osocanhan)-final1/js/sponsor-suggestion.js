$(document).ready(function () {
  $(document).on('click', '.sponsor-list .sponsor-item .close', function () {
    const containerElement = $(this).closest('.sponsor-item');
    const containerHtml = containerElement.html();
    containerElement.remove();
    setTimeout(function () {
      $('.sponsor-list').append('<li class="sponsor-item">' + containerHtml + '</li>');
    }, 500);
  });
});
