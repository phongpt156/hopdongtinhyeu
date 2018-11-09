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
    $('.start-date').text(getFormattedDate(adStatisticInfo.startDate));
    $('.end-date').text(getFormattedDate(adStatisticInfo.endDate));

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

  // chat area
  new PerfectScrollbar('.right-aside__main', {
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

  // conversation list
  new PerfectScrollbar($('.contact-list-container__body')[0], {
    suppressScrollX: true,
    wheelPropagation: false
  });
  $('.contact-list-container--collapse').click(function () {
    $('.contact-list-container--open').toggleClass('d-none');
    $(this).toggleClass('d-none');
  });
  $('.conversation__action-list').click(function (e) {
    e.stopPropagation();
  });
  $('.contact-list-container--open .contact-list-container__header').click(function () {
    $('.contact-list-container--collapse').toggleClass('d-none');
    $('.contact-list-container--open').toggleClass('d-none');
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(window).resize(function () {
    if (window.innerWidth < 1200) {
      $('.contact-list-container--open').addClass('d-none');
      $('.contact-list-container--collapse').removeClass('d-none');
    }
  });
  autosize($('.autosize'));

  function initConversationEvent()
  {
    function documentClickEvent() {
      $('.add-keyword-button-dialog').addClass('d-none');
      $('.delete-message').tooltip('hide');
      $('.message-reaction').popover('hide');
      $('.message-action').removeClass('d-flex');
    }

    $('.delete-message').tooltip({
      placement: 'top',
      title: 'Xóa',
      trigger: 'manual',
      template: `
        <div class="tooltip" role="tooltip">
          <div class="tooltip-arrow"></div>
          <div class="tooltip-inner py-1 px-2 cursor-pointer"></div>
        </div>'
      `,
    });
    $('.message-reaction').popover({
      placement: 'top',
      template: `
        <div class="popover popover-reaction-list" role="tooltip">
          <div class="popover-content"></div>
        </div>
      `,
      trigger: 'manual',
      html: true,
      content: `
        <ul class="reaction-list">
          <li class="reaction-item">
            <a><img src="./../../images/social-network/emojis/heart-eyes.png" class="sn-emoji" /></a>
          </li>
          <li class="reaction-item">
            <a><img src="./../../images/social-network/emojis/laughing.png" class="sn-emoji" /></a>
          </li>
          <li class="reaction-item">
            <a><img src="./../../images/social-network/emojis/hushed.png" class="sn-emoji" /></a>
          </li>
          <li class="reaction-item">
            <a><img src="./../../images/social-network/emojis/cry.png" class="sn-emoji" /></a>
          </li>
          <li class="reaction-item">
            <a><img src="./../../images/social-network/emojis/angry.png" class="sn-emoji" /></a>
          </li>
          <li class="reaction-item">
            <a><img src="./../../images/social-network/emojis/thumbsup.png" class="sn-emoji" /></a>
          </li>
          <li class="reaction-item">
            <a><img src="./../../images/social-network/emojis/thumbsdown.png" class="sn-emoji" /></a>
          </li>
        </ul>
      `
    });
    $('.choose-emoji-button').popover({
      placement: 'top',
      template: `
        <div class="popover popover-reaction-list" role="tooltip">
          <div class="popover-arrow"></div>
          <div class="popover-content"></div>
        </div>
      `,
      trigger: 'manual',
      html: true,
      content: `
        <ul class="emoji-list">
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f600.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f62c.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f601.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f602.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f603.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f604.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f605.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f606.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f607.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f609.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f60a.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f642.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/263a.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f60b.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f60c.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f60d.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f618.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f617.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f619.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f61a.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f61c.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f61d.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f61b.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f60e.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f60f.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f610.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
          <li class="emoji-item">
            <a><img src="./../../images/social-network/emojis/1f636.png" class="sn-emoji" /></a>
          </li>
        </ul>
      `
    });

    $(document).on('click', '.conversation', function (e) {
      e.stopPropagation();
      $(this).addClass('conversation--focus');
      documentClickEvent();
    });
    $(document).on('click', '.conversation__header', function (e) {
      e.stopPropagation();
      const conversationElement = $(this).closest('.conversation');
      conversationElement.toggleClass('conversation--collapsed');
      documentClickEvent();

      if (conversationElement.hasClass('conversation--collapsed')) {
        conversationElement.removeClass('conversation--focus');
      } else {
        conversationElement.addClass('conversation--focus');
        conversationElement.find('.chat-input > textarea').focus();
      }
      
    });
    $(document).on('click', '.close-tab', function () {
      $(this).closest('.conversation').remove();
    });

    $(document).on('click', '.delete-message', function (e) {
      const element = $(this);

      e.stopPropagation();
      element.closest('.conversation').addClass('conversation--focus');
      $('.message-reaction').popover('hide');
      $('.message-action').removeClass('d-flex');
      element.closest('.message-action').addClass('d-flex');
      $('.message-reaction').tooltip('hide');
      element.tooltip('show');
    });  
    $(document).on('click', '.message-reaction', function (e) {
      const element = $(this);

      e.stopPropagation();
      element.closest('.conversation').addClass('conversation--focus');
      $('.delete-message').tooltip('hide');
      $('.message-action').removeClass('d-flex');
      element.closest('.message-action').addClass('d-flex');
      $('.message-reaction').not(element).popover('hide');
      element.popover('show');
    });
    $(document).on('click', '.message-action .popover-reaction-list', function (e) {
      e.stopPropagation();
    });
    $(document).on('click', '.popover-reaction-list .reaction-item a', function () {
      $(this).closest('.message-action').removeClass('d-flex');
      $('.message-reaction').popover('hide');
    });
  
    $('.conversation__body').scrollTop($('.conversation__body').height());
    $(document).click(function () {
      $('.conversation').removeClass('conversation--focus');
      documentClickEvent();
    });

    $(document).on('click', '.choose-emoji-button', function () {
      $(this).popover('show');
    })
  }
  initConversationEvent();
});
