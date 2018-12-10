$(document).ready(function () {
  $(document).on('click', '.profile-table tr td > .d-flex .hide-when-edit .edit-button', function () {
    const containerElement = $(this).closest('.d-flex');
    const inputField = containerElement.find('.input-field');

    containerElement.toggleClass('is-edit');
    inputField.focus();
    moveCursorToEnd(inputField[0]);
  });
  $(document).on('click', '.profile-table tr td > .d-flex .display-when-edit .save-button', function () {
    $(this).closest('.d-flex').toggleClass('is-edit');
  });
  $(document).on('click', '.profile-table tr td > .d-flex .display-when-edit .cancel-button', function () {
    $(this).closest('.d-flex').toggleClass('is-edit');
  });

  function moveCursorToEnd(el) {
    if (el !== undefined && el !== null) {
      if (typeof el.selectionStart == 'number') {
        el.selectionStart = el.selectionEnd = el.value.length;
      } else if (typeof el.createTextRange != 'undefined') {
        el.focus();
        const range = el.createTextRange();
        range.collapse(false);
        range.select();
      }
    }
  }
});
