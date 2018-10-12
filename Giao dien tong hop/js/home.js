$(document).ready(function () {
  $('.aside aside').simpleScrollFollow();
  SlideCrossFade = {
    container: '.target-list .target-item',
    displayTime: 5000,
    fadeTime: 500,

    start: function () {
      const self = this;
      $(this.container + ' .target-image').show();
      setInterval(function () {
        self.next();
      }, this.displayTime);
    },

    next: function () {
      const self = this;

      $(this.container).each(function () {
        const $active = $(this).find('.target-image.active');
        const $next = ($active.next().length > 0) ? $active.next() : $(this).find('.target-image').first();
        $active.fadeOut(self.fadeTime, function () {
          $active.removeClass('active');
          $next.addClass('active');
        });
      });
    }
  };
  SlideCrossFade.start();

  const formSelectTabs = $('.form-select-tab .nav-tabs');
  $('.form-select-tab .nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    const index = $(this).attr('data-index');
    const indexBefore = $(e.relatedTarget).attr('data-index');
    formSelectTabs.removeClass('tab-' + indexBefore);
    formSelectTabs.addClass('tab-' + index);
  });
});
