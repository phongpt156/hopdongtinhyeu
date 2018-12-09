$(document).ready(function () {
  function initJssorSlider() {
    const jssor_1_SlideoTransitions = [
      [{b:-1,d:1,o:-0.7}],
      [{b:900,d:2000,x:-379,e:{x:7}}],
      [{b:900,d:2000,x:-379,e:{x:7}}],
      [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
    ];

    const jssor_1_options = {
      $AutoPlay: 0,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $CaptionSliderOptions: {
        $Class: $JssorCaptionSlideo$,
        $Transitions: jssor_1_SlideoTransitions
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    const jssor_1_slider = new $JssorSlider$("jssor-banner", jssor_1_options);

    /*#region responsive code begin*/

    const MAX_WIDTH = 3000;

    function ScaleSlider() {
      const containerElement = jssor_1_slider.$Elmt.parentNode;
      const containerWidth = containerElement.clientWidth;

      if (containerWidth) {
        const expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
  }

  initJssorSlider();
});
