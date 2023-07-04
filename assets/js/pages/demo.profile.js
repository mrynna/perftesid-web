!(function (l) {
  "use strict";
  function t() {
    (this.$body = l("body")), (this.charts = []);
  }
  (t.prototype.respChart = function (e, r, a, o) {
    var n = Chart.controllers.bar.prototype.draw;
    (Chart.controllers.bar = Chart.controllers.bar.extend({
      draw: function () {
        n.apply(this, arguments);
        var t = this.chart.chart.ctx,
          e = t.fill;
        t.fill = function () {
          t.save(),
            (t.shadowColor = "rgba(0,0,0,0.01)"),
            (t.shadowBlur = 20),
            (t.shadowOffsetX = 4),
            (t.shadowOffsetY = 5),
            e.apply(this, arguments),
            t.restore();
        };
      },
    })),
      (Chart.defaults.global.defaultFontColor = "#8391a2"),
      (Chart.defaults.scale.gridLines.color = "#8391a2");
    var i = e.get(0).getContext("2d"),
      s = l(e).parent();
    return (function () {
      var t;
      switch ((e.attr("width", l(s).width()), r)) {
        case "Line":
          t = new Chart(i, { type: "line", data: a, options: o });
          break;
        case "Doughnut":
          t = new Chart(i, { type: "doughnut", data: a, options: o });
          break;
        case "Pie":
          t = new Chart(i, { type: "pie", data: a, options: o });
          break;
        case "Bar":
          t = new Chart(i, { type: "bar", data: a, options: o });
          break;
        case "Radar":
          t = new Chart(i, { type: "radar", data: a, options: o });
          break;
        case "PolarArea":
          t = new Chart(i, { data: a, type: "polarArea", options: o });
      }
      return t;
    })();
  }),
    (t.prototype.initCharts = function () {
      var t, e;
      0 < l("#high-performing-product").length &&
        ((t = document
          .getElementById("high-performing-product")
          .getContext("2d")
          .createLinearGradient(0, 500, 0, 150)).addColorStop(0, "#fa5c7c"),
        t.addColorStop(1, "#727cf5"),
        (e = {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Orders",
              backgroundColor: t,
              borderColor: t,
              hoverBackgroundColor: t,
              hoverBorderColor: t,
              data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
            },
            {
              label: "Revenue",
              backgroundColor: "#e3eaef",
              borderColor: "#e3eaef",
              hoverBackgroundColor: "#e3eaef",
              hoverBorderColor: "#e3eaef",
              data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
            },
          ],
        }),
        [].push(
          this.respChart(l("#high-performing-product"), "Bar", e, {
            maintainAspectRatio: !1,
            legend: { display: !1 },
            scales: {
              yAxes: [
                {
                  gridLines: { display: !1, color: "rgba(0,0,0,0.05)" },
                  stacked: !1,
                  ticks: { stepSize: 20 },
                },
              ],
              xAxes: [
                {
                  barPercentage: 0.7,
                  categoryPercentage: 0.5,
                  stacked: !1,
                  gridLines: { color: "rgba(0,0,0,0.01)" },
                },
              ],
            },
          })
        ));
    }),
    (t.prototype.init = function () {
      var e = this;
      (Chart.defaults.global.defaultFontFamily =
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'),
        (e.charts = this.initCharts()),
        l(window).on("resize", function (t) {
          l.each(e.charts, function (t, e) {
            try {
              e.destroy();
            } catch (t) {}
          }),
            (e.charts = e.initCharts());
        });
    }),
    (l.Profile = new t()),
    (l.Profile.Constructor = t);
})(window.jQuery),
  (function () {
    "use strict";
    window.jQuery.Profile.init();
  })();
