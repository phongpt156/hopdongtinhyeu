$(document).ready(function () {
  // library config
  new PerfectScrollbar('.left-body', {
    suppressScrollX: true
  });
  new PerfectScrollbar('.ad-description-input', {
    suppressScrollX: true
  });
  new PerfectScrollbar('.ad-review', {
    suppressScrollX: true
  });
  autosize($('.Data_des_ads'));
  $('.from-time').datetimepicker({
    format: 'LT',
    format: 'HH:mm',
  });
  $('.to-time').datetimepicker({
    format: 'LT',
    format: 'HH:mm',
  });
  $('.to-time').data("DateTimePicker").options({
    widgetPositioning: {
      horizontal: 'right',
    }
  });

  // advertisement title and description event
  const maxAdTitleChar = 60;
  const maxAdDescriptionChar = 240;
  let currentAdTitleChar = 0;
  let currentAdDescriptionChar = 0;
  const currentAdTitleCharEl = $('.ad-title-input .limit .current');
  const maxAdTitleCharEl = $('.ad-title-input .limit .max');
  const currentAdDescriptionCharEl = $('.ad-description-input-container .limit .current');
  const maxAdDescriptionCharEl = $('.ad-description-input-container .limit .max');

  currentAdTitleCharEl.text(currentAdTitleChar);
  maxAdTitleCharEl.text(maxAdTitleChar);
  currentAdDescriptionCharEl.text(currentAdDescriptionChar);
  maxAdDescriptionCharEl.text(maxAdDescriptionChar);

  $('.Data_title_ads').on('input', function () {
    const editText = $(this).val();
    const length = editText.length;
    currentAdTitleCharEl.text(length);

    if (length === 0) {
      $('.Panel_mainContent .title').text("Dũng tìm bạn đời tại Hồ Chí Minh");
    } else {
      $('.Panel_mainContent .title').text(editText);
    }
  });
  $('.Data_des_ads').on('input', function () {
    let editText = $(this).val();
    const length = editText.length;
    currentAdDescriptionCharEl.html(length);
    if (length > maxAdDescriptionChar) {
      editText = editText.slice(0, maxAdDescriptionChar);
      $(this).val(editText);
    }
    editText = editText.replace(/\r?\n/g, '<br />');

    if (length === 0) {
      $('.Panel_mainContent .des').text("33 tuổi, cư trú TP. Hồ Chí Minh, Chiều Cao: 160cm, Ngành nghề: Kỹ thuật ứng dụng/ Cơ khí. Cân nặng 58kg, Cấp bậc: Trưởng nhóm, Hôn nhân: Chưa kết hôn, Thu nhập: 10.000.000 - 14.000.000, Con cái: Chưa có con, Học vấn: Cử nhân Dịch vụ mai mối kết hôn trực tiếp, TÌM VỢ, TÌM CHỒNG, TÌM BẠN ĐỜI, dành cho nhân viên văn phòng, từ 6 - 9 tháng đi đến kết hôn: http://hopdongtinhyeu.vn/article/dich-vu-xem-mat.html hoặc liên hệ. TV3: 0544444... xem thêm");
    } else {
      $('.Panel_mainContent .des').html(editText);
    }
  });

  // budget list event
  let adDuration = 7;
  let currentBudget = 600;
  let adEndDate = new Date();

  const budgets = [
  { value: 600 },
  { value: 1500, likePerDay: { min: 41, max: 211 } },
  { value: 3000, likePerDay: { min: 41, max: 211 } },
  { value: 10000, likePerDay: { min: 41, max: 211 } },
  { value: 14000, likePerDay: { min: 41, max: 211 } },
  { value: 200000, likePerDay: { min: 41, max: 211 } }
  ];
  updateBudgetSuggestList(budgets);
  updateBudget(currentBudget);
  updateAdEndDateInputValue(adEndDate);
  updateAdEndDate(adEndDate);
  updateAdDuration(adDuration);

  $('.budget-list__input').change(function () {
    let value = Number.parseInt($(this).val());

    if (Number.isInteger(value) === true) {
      const exist = budgets.find(function (budget) {
        return budget.value === value;
      });

      if (exist === undefined) {
        budgets.push({
          value: value
        });
      }

      budgets.sort(function (budget1, budget2) {
        return budget1.value - budget2.value;
      });
  
      updateBudgetSuggestList(budgets);
    } else {
      value = 0;
    }

    validateBudget(value);
    updateBudget(value);
  });
  $(document).on('click', '.budget-list__suggest-list .suggest-item', function (e) {
    e.stopPropagation();
    $('.budget-list__suggest-list').addClass('d-none');
    const value = $(this).attr('value');
    updateBudget(value);
    $('.budget-list__suggest-list .suggest-item').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    validateBudget(value);
  });
  $('.budget-list__button').click(function (e) {
    e.stopPropagation();
    $('.budget-list__suggest-list').toggleClass('d-none');
  });

  // hide suggest list when click outside suggest list
  $(document).click(function () {
    if ($('.budget-list__suggest-list').hasClass('d-none') === false) {
      $('.budget-list__suggest-list').addClass('d-none');
    }
  });
  $('.select-days > .item').click(function () {
    adDuration = $(this).attr('value');
    let value = $('.budget-list__input').val();

    if (value.trim().length !== 0) {
      value = Number.parseInt(value);
      validateBudget(value);
    }

    $('.select-days > .item').each(function () {
      $(this).removeClass('active');
    });

    $(this).addClass('active');
    updateReachProgressBar(adDuration);
    updateBudget(currentBudget);
    updateAdDuration(adDuration);
  });
  updateReachProgressBar(adDuration);

  $('.wpBoxdate > input').change(function () {
    adEndDate = new Date($(this).val());
    updateAdEndDate(adEndDate);
  });

  function updateBudgetSuggestList(budgets) {
    $('.budget-list__suggest-list').html('');

    if (budgets.length) {
      budgets.forEach(function (budget) {
        const item = document.createElement('li');
        $(item).addClass('suggest-item');
        $(item).attr('value', budget.value);
    

        if (budget.value === currentBudget) {
          $(item).addClass('active');
        }

        let html = `
          <i class="fa fa-check"></i>
          <a>
            <span class="budget">${budget.value}</span>
            <span class="vnd"> VND</span>
        `;
    
        if (budget.likePerDay) {
          html += `
            <span class="rs">
              Ước tính ${budget.likePerDay.min} - ${budget.likePerDay.max} mỗi ngày
            </span>
          `;
        }
        html += '</a>';
    
        $(item).html(html);
    
        $('.budget-list__suggest-list').append(item);
      });
    }
  }

  function validateBudget(budget) {
    if (budget < adDuration) {
      $('.budget-container .error .total-min-budget').text(adDuration);
      $('.budget-container .error').addClass('d-block');
    } else {
      $('.budget-container .error').removeClass('d-block');
    }
  }

  function updateBudget(budget) {
    $('.budget-list__input').val(budget + ' VND');
    let price = Math.round(budget / adDuration);
    price = formatPrice(price);

    $('.ad-average-price').text(price + 'đ');
  }

  function updateReachProgressBar(adDuration) {
    $('.reach-progress > .progress-bar').css('width', 1 * 100 / adDuration + '%');
  }

  function formatPrice(price) {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function updateAdEndDate(date) {
    if (date.toString() !== 'Invalid Date') {
      $('.ad-end-date').text(`${date.getDate()} Tháng ${date.getMonth() + 1} ${date.getFullYear()}`);
    }
  }

  function updateAdEndDateInputValue(date) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    $('.wpBoxdate > input').val(`${year}-${month}-${day}`);
  }

  function updateAdDuration(duration) {
    $('.ad-duration').text(duration);
  }
});
