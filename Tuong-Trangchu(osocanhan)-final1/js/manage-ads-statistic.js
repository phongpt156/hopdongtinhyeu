$(document).ready(function () {
  const getDayString = (function () {
    const days = [
      'Chủ Nhật',
      'Thứ Hai',
      'Thứ Ba',
      'Thứ Tư',
      'Thứ Năm',
      'Thứ Sáu',
      'Thứ Bảy'
    ];

    return function (day) {
      return days[day];
    }
  })();

  function getFormattedDate(date) {
    if (typeof date === 'string') {
      date = new Date(date);
    }

    if (date.toString() === 'Invalid Date') {
      return '';
    }

    return `${getDayString(date.getDay())}, ngày ${date.getDate()} tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`;
  }

  function getFormattedNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const adStatisticInfo = getAdStatisticInfo();

  function getAdStatisticInfo() {
    return {
      startDate: '2018-05-23',
      endDate: '2018-05-29',
      datasets: [
        {
          backgroundColor: '#e7f4fa',
          borderColor: '#068ec8',
          pointBackgroundColor: '#058dc7',
          data: [100, 400, 410, 170, 400, 390, 370],
          label: 'Số người đã tiếp cận',
          format: 'number',
        },
        {
          backgroundColor: '#e7f4fa',
          borderColor: '#068ec8',
          pointBackgroundColor: '#d64937',
          data: [100, 400, 410, 170, 400, 390, 370],
          label: 'Tương tác với bài đăng',
          format: 'number',
        },
        {
          backgroundColor: '#e7f4fa',
          borderColor: '#068ec8',
          pointBackgroundColor: '#109d59',
          data: [100, 400, 410, 170, 400, 390, 370],
          label: 'Số lần nhấp chuột',
          format: 'number',
        },
        {
          backgroundColor: '#e7f4fa',
          borderColor: '#068ec8',
          pointBackgroundColor: '#ea6b04',
          data: [100, 400, 410, 170, 400, 390, 370],
          label: 'Đã chi tiêu/140.000',
          format: 'number',
        }
      ]
    }
  }

  adStatisticChartConfig = (function () {
    let html = '';
    let labels = [];

    adStatisticInfo.datasets.forEach(function (dataset, index) {
      let total = dataset.data.reduce(function (total, currentValue) {
        return total + currentValue;
      }, 0);

      if (dataset.format === 'number') {
        total = getFormattedNumber(total);
      }

      html += `
        <div class="ad-statistic-column-item">
          <div class="d-flex btn-group on-off-toggle-button">
            <span class="total">${total}</span>
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="caret"></span>
              <div class="tile" style="background-color: ${dataset.pointBackgroundColor}"></div>
            </button>
            <ul class="dropdown-menu" data-index="${index}">
              <li class="on active">
                <a class="d-flex align-items-center">
                  <svg viewBox="0 0 512 512" class="svg-inline--fa fa-circle fa-w-16 fa-2x mr-1" style="font-size: .875rem"><path fill="#10a456" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" class=""></path></svg>
                  Bật
                </a>
              </li>
              <li class="off">
                <a class="d-flex align-items-center">
                  <svg viewBox="0 0 512 512" class="svg-inline--fa fa-pause-circle fa-w-16 fa-2x mr-1" style="font-size: .875rem"><path fill="#717171" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg>
                  Tạm dừng
                </a>
              </li>
            </ul>
          </div>
          <small class="description">${dataset.label}</small>
        </div>
      `;
    });
    $('.ad-statistic-column').html(html);
    $('.ad-statistic-chart-container .start-date').text(getFormattedDate(adStatisticInfo.startDate));
    $('.ad-statistic-chart-container .end-date').text(getFormattedDate(adStatisticInfo.endDate));

    if (adStatisticInfo.datasets[0].data.length) {
      labels = (new Array(adStatisticInfo.datasets[0].data.length)).fill('');
    }

    const datasets = adStatisticInfo.datasets.map(function (dataset) {
      return {
        ...dataset,
        borderWidth: 1.7,
				pointRadius: 2.2,
      };
    });

    return {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.000001
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 250,
              fontColor: '#ccc',
              fontSize: '11',
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }]
        },
      }
    }
  })();

  $(document).on('click', '.ad-statistic-column-item .on', function () {
    const index = Number($(this).closest('.dropdown-menu').attr('data-index'));

    if ($(this).hasClass('active') === false) {
      const meta = adStatisticChart.getDatasetMeta(index);

      $(this).addClass('active');
      $('.ad-statistic-column-item .off').eq(index).removeClass('active');
      meta.hidden = !meta.hidden;
      adStatisticChart.update();
    }
  });

  $(document).on('click', '.ad-statistic-column-item .off', function () {
    const index = Number($(this).closest('.dropdown-menu').attr('data-index'));

    if ($(this).hasClass('active') === false) {
      const meta = adStatisticChart.getDatasetMeta(index);

      $(this).addClass('active');
      $('.ad-statistic-column-item .on').eq(index).removeClass('active');
      meta.hidden = !meta.hidden;
      adStatisticChart.update();
    }
  });

  const ctx = $('.ad-statistic-chart')[0].getContext('2d');
  const adStatisticChart = new Chart(ctx, adStatisticChartConfig);

  // add keyword
  $('.add-keyword-button').click(function (e) {
    e.stopPropagation();
    $('.add-keyword-button-dialog').toggleClass('d-none');

    if (!$('.add-keyword-button-dialog').hasClass('d-none')) {
      $('.add-keyword-button-dialog .form-group:first-child textarea').focus();
    }
  });
  $('.add-keyword-button-dialog').click(function (e) {
    e.stopPropagation();
  });

  $('[data-toggle="tooltip"]').tooltip();

  autosize($('.autosize'));

  // date range editor even
  $('.date-range-editor').click(function (e) {
    e.stopPropagation();
  });
  $('.date-range-editor-button').click(function () {
    const offset = $(this).offset();
    const offsetRight = $(document).width() - (offset.left + $(this).innerWidth());

    if (offsetRight < offset.left) {
      $('.date-range-editor').css({
        right: 0,
        left: 'auto'
      });
    }
  });
  $('.date-range-editor .month-selector').click(function () {
    $(this).find('.month-selector-dropdown-icon').toggleClass('flipped');

    const monthPickerElement = $('.date-range-editor .month-picker');
    monthPickerElement.toggleClass('showhide-hide');
    if (!monthPickerElement.hasClass('showhide-hidden')) {
      setTimeout(function () {
        $('.date-range-editor .month-picker').toggleClass('showhide-hidden');
      }, 300);
    } else {
      $('.date-range-editor .month-picker').toggleClass('showhide-hidden');
    }

    const calendarPickerElement = $('.date-range-editor .calendar-picker');
    calendarPickerElement.toggleClass('showhide-hide');
    if (!calendarPickerElement.hasClass('showhide-hidden')) {
      setTimeout(function () {
        $('.date-range-editor .calendar-picker').toggleClass('showhide-hidden');
      }, 300);
    } else {
      $('.date-range-editor .calendar-picker').toggleClass('showhide-hidden');
    }
  });
  $('.date-range-editor .right-column .picker-container .scroll-container').each(function () {
    new PerfectScrollbar(this, {
      suppressScrollX: true,
      wheelPropagation: false
    });
  });
  $(window).resize(function () {
    const offset = $('.date-range-editor-button').offset();
      const offsetRight = $(document).width() - (offset.left + $('.date-range-editor-button').innerWidth());
      if (offsetRight < offset.left) {
        $('.date-range-editor').css({
          right: 0,
          left: 'auto'
        });
      } else {
        $('.date-range-editor').css({
          left: 0,
          right: 'auto'
        });
      }
  });
});
