$(document).ready(function () {
  $('.conversation__action-list').click(function (e) {
    e.stopPropagation();
  });
  $('.contact-list-container--open .contact-list-container__header').click(function () {
    $('.contact-list-container--collapse').toggleClass('d-none');
    $('.contact-list-container--open').toggleClass('d-none');
  });
  $(document).on('click', '.conversation .add-user-button', function () {
    $(this).closest('.conversation').find('.add-user-box').toggleClass('d-flex');
  });
  $(document).on('click', '.conversation .add-user-box .done', function () {
    $(this).closest('.add-user-box').removeClass('d-flex');
  });

  // conversation event
  function initConversationEvent()
  {
    $(document).on('click', '.action-list .action-item', function (e) {
      e.stopPropagation();
    });

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
          <div class="arrow"></div>
          <div class="popover-content"></div>
        </div>
      `,
      trigger: 'manual',
      html: true,
      content: `
        <div class="emoji-list-dialog">
          <div class="emoji-list-dialog__body">
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
                <a><img src="./../../images/social-network/emojis/1f611.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f612.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f633.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f61e.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f61f.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f620.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f621.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f614.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f615.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f623.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f616.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f62b.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f629.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f624.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f62e.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f631.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f628.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f630.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f62f.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f626.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f627.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f625.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f622.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f62a.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f613.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f62d.png" class="sn-emoji" /></a>
              </li>
              <li class="emoji-item">
                <a><img src="./../../images/social-network/emojis/1f635.png" class="sn-emoji" /></a>
              </li>
            </ul>
          </div>
          <div class="emoji-list-dialog__footer">
            <ul class="emoji-type-list">
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/1f554.png" /></a>
              </li>
              <li class="active emoji-type-item">
                <a><img src="./../../images/social-network/emojis/1f603-sm.png" /></a>
              </li>
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/1f43b.png" /></a>
              </li>
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/1f354.png" /></a>
              </li>
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/1f554.png" /></a>
              </li>
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/26bd.png" /></a>
              </li>
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/1f696.png" /></a>
              </li>
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/1f4a1.png" /></a>
              </li>
              <li class="emoji-type-item">
                <a><img src="./../../images/social-network/emojis/2764.png" /></a>
              </li>
            </ul>
          </div>
        </div>
      `
    });

    $(document).click(function (e) {
      const target = $(e.target);

      $('.conversation').removeClass('conversation--focus');
      if ($('.conversation').find(target).length) {
        target.closest('.conversation').addClass('conversation--focus');
      }

      if ($('.conversation__header').find(target).length) {
        const conversationElement = target.closest('.conversation');
        conversationElement.toggleClass('conversation--collapsed');

        if (conversationElement.hasClass('conversation--collapsed')) {
          conversationElement.removeClass('conversation--focus');
        } else {
          conversationElement.addClass('conversation--focus');
          conversationElement.find('.chat-input > textarea').focus();
        }
      }

      $('.message-action').removeClass('d-flex');
      if ($('.delete-message').find(target).length) {
        const element = target.closest('.delete-message');

        $('.delete-message').not(element).tooltip('hide');
        element.closest('.message-action').addClass('d-flex');
        element.tooltip('show');
      } else {
        $('.delete-message').tooltip('hide');
      }
      if ($('.message-reaction').find(target).length) {
        const element = target.closest('.message-reaction');

        $('.message-reaction').not(element).popover('hide');
        element.closest('.message-action').addClass('d-flex');
        element.popover('show');
      } else {
        $('.message-reaction').popover('hide');
      }

      if ($('.choose-emoji-button').find(target).length) {
        const element = target.closest('.choose-emoji-button');

        $('.choose-emoji-button').not(element).popover('hide');
        element.popover('show');
      } else {
        $('.choose-emoji-button').popover('hide');
      }
    });

    $(document).on('click', '.close-tab', function () {
      $(this).closest('.conversation').remove();
    });

    $(document).on('click', '.popover-reaction-list .reaction-item a', function () {
      $(this).closest('.message-action').removeClass('d-flex');
      $('.message-reaction').popover('hide');
    });
  
    $('.conversation__body').scrollTop($('.conversation__body').height());
  }
  initConversationEvent();

  // hàm test chức năng chat, có thể bỏ đi
  function testChat()
  {
    let hasChoosenConversation = true;

    if (window.innerWidth >= 576 && window.innerWidth < 1200) {
      $('.contact-list-container--collapse').removeClass('d-none');
    }

    $(document).on('click', '.close-tab', function () {
      $(this).closest('.conversation').remove();
      hasChoosenConversation = false;
      if (window.innerWidth >= 576 && window.innerWidth < 1200) {
        $('.contact-list-container--collapse').removeClass('d-none');
      }
    });

    $(window).resize(function () {
      if (window.innerWidth >= 1200 || (hasChoosenConversation && window.innerWidth < 576)) {
        $('.contact-list-container--collapse').addClass('d-none');
      } else {
        $('.contact-list-container--collapse').removeClass('d-none');
      }
      $('.contact-list-container--open').addClass('d-none');
    });
  }
  testChat();
});
