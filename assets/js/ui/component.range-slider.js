!(function (n) {
  "use strict";
  function i() {
    this.$body = n("body");
  }
  (i.prototype.init = function () {
    n('[data-plugin="range-slider"]').each(function () {
      var i = n(this).data();
      n(this).ionRangeSlider(i);
    });
  }),
    (n.RangeSlider = new i()),
    (n.RangeSlider.Constructor = i);
})(window.jQuery),
  (function () {
    "use strict";
    window.jQuery.RangeSlider.init();
  })();
