$(document).ready(function () {
  // library config
  new PerfectScrollbar('.left-body', {
    suppressScrollX: true
  });
  new PerfectScrollbar('.ad-review', {
    suppressScrollX: true
  });
  $('.time-use-select').datetimepicker({
    format: 'LT',
    format: 'HH:mm',
  });
  $('.date-use-select').datetimepicker({
    format: 'D/MM/YY'
  });
  $('.date-use-select').data("DateTimePicker").options({
    widgetPositioning: {
      horizontal: 'right',
    }
  });

  // advertisement title and description event
  const maxYourNameChar = 60;
  const maxYourPhoneChar = 30;
  let currentYourNameChar = 0;
  let currentYourPhoneChar = 0;
  const currentYourNameCharEl = $('.your-name-input .limit .current');
  const maxYourNameCharEl = $('.your-name-input .limit .max');
  const currentYourPhoneCharEl = $('.your-phone-input .limit .current');
  const maxYourPhoneCharEl = $('.your-phone-input .limit .max');

  currentYourNameCharEl.text(currentYourNameChar);
  maxYourNameCharEl.text(maxYourNameChar);
  currentYourPhoneCharEl.text(currentYourPhoneChar);
  maxYourPhoneCharEl.text(maxYourPhoneChar);

  $('.your-name-input input').on('input', function () {
    const editText = $(this).val();
    const length = editText.length;
    currentYourNameCharEl.text(length);
  });
  $('.your-phone-input input').on('input', function () {
    let editText = $(this).val();
    const length = editText.length;
    currentYourPhoneCharEl.html(length);
  });

  $('.time-and-fee-select').click(function () {
    const previousValue = $(this).data('storedValue');
    console.log(previousValue);

    if (previousValue === true) {
      $(this).prop('checked', !previousValue);
      $(this).data('storedValue', !previousValue);
    }
    else{
      $(this).data('storedValue', true);
    }
  });

  $('.payment-method-item input[type="radio"]').change(function () {
    $(this).closest('.payment-method-list').find('.payment-method-item').each(function () {
      $(this).find('.bank-list').removeClass('d-block');
    });
    $(this).closest('.payment-method-item').find('.bank-list').addClass('d-block');
  });
});
