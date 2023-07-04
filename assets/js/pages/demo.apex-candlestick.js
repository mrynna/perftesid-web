var colors = ["#0acf97", "#fa5c7c"],
  dataColors = $("#simple-candlestick").data("colors");
dataColors && (colors = dataColors.split(","));
var options = {
    chart: { height: 400, type: "candlestick" },
    plotOptions: {
      candlestick: { colors: { upward: colors[0], downward: colors[1] } },
    },
    series: [{ data: seriesData }],
    stroke: { show: !0, colors: "#f1f3fa", width: [1, 4] },
    xaxis: { type: "datetime" },
    grid: { borderColor: "#f1f3fa" },
  },
  chart = new ApexCharts(
    document.querySelector("#simple-candlestick"),
    options
  );
chart.render();
colors = ["#0acf97", "#fa5c7c"];
(dataColors = $("#combo-candlestick").data("colors")) &&
  (colors = dataColors.split(","));
var optionsCandlestick = {
    chart: {
      height: 240,
      type: "candlestick",
      toolbar: { show: !1 },
      zoom: { enabled: !1 },
    },
    series: [{ data: seriesData }],
    plotOptions: {
      candlestick: { colors: { upward: colors[0], downward: colors[1] } },
    },
    xaxis: { type: "datetime" },
    grid: { borderColor: "#f1f3fa" },
  },
  chartCandlestick = new ApexCharts(
    document.querySelector("#combo-candlestick"),
    optionsCandlestick
  );
chartCandlestick.render();
colors = ["#727cf5", "#ffbc00"];
(dataColors = $("#combo-bar-candlestick").data("colors")) &&
  (colors = dataColors.split(","));
options = {
  chart: {
    height: 160,
    type: "bar",
    toolbar: { show: !1, autoSelected: "selection" },
    selection: {
      xaxis: {
        min: new Date("20 Jan 2017").getTime(),
        max: new Date("10 Dec 2017").getTime(),
      },
      fill: { color: "#6c757d", opacity: 0.4 },
      stroke: { color: "#6c757d" },
    },
    events: {
      selection: function (o, a) {
        chartCandlestick.updateOptions(
          { xaxis: { min: a.xaxis.min, max: a.xaxis.max } },
          !1,
          !1
        );
      },
    },
  },
  dataLabels: { enabled: !1 },
  plotOptions: {
    bar: {
      columnWidth: "80%",
      colors: {
        ranges: [
          { from: -1e3, to: 0, color: colors[0] },
          { from: 1, to: 1e4, color: colors[1] },
        ],
      },
    },
  },
  series: [{ name: "volume", data: seriesDataLinear }],
  xaxis: { type: "datetime", axisBorder: { offsetX: 13 } },
  yaxis: { labels: { show: !1 } },
  grid: { borderColor: "#f1f3fa" },
};
(chart = new ApexCharts(
  document.querySelector("#combo-bar-candlestick"),
  options
)).render();
