var colors = ["#727cf5", "#0acf97", "#fa5c7c"],
  dataColors = $("#basic-scatter").data("colors");
dataColors && (colors = dataColors.split(","));
var options = {
    chart: { height: 380, type: "scatter", zoom: { enabled: !1 } },
    series: [
      {
        name: "Sample A",
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [13.6, 3.2],
          [10.9, 7.4],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
          [16.4, 1.8],
          [13.6, 0.3],
          [13.6, 0],
          [29.9, 0],
          [27.1, 2.3],
          [16.4, 0],
          [13.6, 3.7],
          [10.9, 5.2],
          [16.4, 6.5],
          [10.9, 0],
          [24.5, 7.1],
          [10.9, 0],
          [8.1, 4.7],
          [19, 0],
          [21.7, 1.8],
          [27.1, 0],
          [24.5, 0],
          [27.1, 0],
          [29.9, 1.5],
          [27.1, 0.8],
          [22.1, 2],
        ],
      },
      {
        name: "Sample B",
        data: [
          [6.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
          [3.6, 12.2],
          [1.9, 14.4],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
          [6.4, 8.8],
          [3.6, 4.3],
          [1.6, 10],
          [9.9, 2],
          [7.1, 15],
          [1.4, 0],
          [3.6, 13.7],
          [1.9, 15.2],
          [6.4, 16.5],
          [0.9, 10],
          [4.5, 17.1],
          [10.9, 10],
          [0.1, 14.7],
          [9, 10],
          [12.7, 11.8],
          [2.1, 10],
          [2.5, 10],
          [27.1, 10],
          [2.9, 11.5],
          [7.1, 10.8],
          [2.1, 12],
        ],
      },
      {
        name: "Sample C",
        data: [
          [21.7, 3],
          [23.6, 3.5],
          [24.6, 3],
          [29.9, 3],
          [21.7, 20],
          [23, 2],
          [10.9, 3],
          [28, 4],
          [27.1, 0.3],
          [16.4, 4],
          [13.6, 0],
          [19, 5],
          [22.4, 3],
          [24.5, 3],
          [32.6, 3],
          [27.1, 4],
          [29.6, 6],
          [31.6, 8],
          [21.6, 5],
          [20.9, 4],
          [22.4, 0],
          [32.6, 10.3],
          [29.7, 20.8],
          [24.5, 0.8],
          [21.4, 0],
          [21.7, 6.9],
          [28.6, 7.7],
          [15.4, 0],
          [18.1, 0],
          [33.4, 0],
          [16.4, 0],
        ],
      },
    ],
    xaxis: { tickAmount: 10 },
    yaxis: { tickAmount: 7 },
    colors: colors,
    grid: { borderColor: "#f1f3fa", padding: { bottom: 5 } },
    legend: { offsetY: 7 },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
      },
    ],
  },
  chart = new ApexCharts(document.querySelector("#basic-scatter"), options);
chart.render();
colors = ["#39afd1", "#0acf97", "#e3eaef", "#6c757d", "#ffbc00"];
(dataColors = $("#datetime-scatter").data("colors")) &&
  (colors = dataColors.split(","));
options = {
  chart: { height: 380, type: "scatter", zoom: { type: "xy" } },
  series: [
    {
      name: "Team 1",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        { min: 10, max: 60 }
      ),
    },
    {
      name: "Team 2",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        { min: 10, max: 60 }
      ),
    },
    {
      name: "Team 3",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        { min: 10, max: 60 }
      ),
    },
    {
      name: "Team 4",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        10,
        { min: 10, max: 60 }
      ),
    },
    {
      name: "Team 5",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        { min: 10, max: 60 }
      ),
    },
  ],
  dataLabels: { enabled: !1 },
  colors: colors,
  grid: {
    borderColor: "#f1f3fa",
    padding: { bottom: 5 },
    xaxis: { showLines: !0 },
    yaxis: { showLines: !0 },
  },
  legend: { offsetY: 7 },
  xaxis: { type: "datetime" },
  yaxis: { max: 70 },
  responsive: [
    {
      breakpoint: 600,
      options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
    },
  ],
};
function generateDayWiseTimeSeries(e, a, t) {
  for (var s = 0, o = []; s < a; ) {
    var r = Math.floor(Math.random() * (t.max - t.min + 1)) + t.min;
    o.push([e, r]), (e += 864e5), s++;
  }
  return o;
}
(chart = new ApexCharts(
  document.querySelector("#datetime-scatter"),
  options
)).render();
colors = ["#056BF6", "#D2376A"];
(dataColors = $("#scatter-images").data("colors")) &&
  (colors = dataColors.split(","));
options = {
  chart: {
    height: 380,
    type: "scatter",
    animations: { enabled: !1 },
    zoom: { enabled: !1 },
    toolbar: { show: !1 },
  },
  colors: colors,
  series: [
    {
      name: "Messenger",
      data: [
        [16.4, 5.4],
        [21.7, 4],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7],
        [10.9, 8.2],
        [16.4, 4],
        [13.6, 4.3],
        [13.6, 12],
        [29.9, 3],
        [10.9, 5.2],
        [16.4, 6.5],
        [10.9, 8],
        [24.5, 7.1],
        [10.9, 7],
        [8.1, 4.7],
        [19, 10],
        [27.1, 10],
        [24.5, 8],
        [27.1, 3],
        [29.9, 11.5],
        [27.1, 0.8],
        [22.1, 2],
      ],
    },
    {
      name: "Instagram",
      data: [
        [6.4, 5.4],
        [11.7, 4],
        [15.4, 3],
        [9, 2],
        [10.9, 11],
        [20.9, 7],
        [12.9, 8.2],
        [6.4, 14],
        [11.6, 12],
      ],
    },
  ],
  xaxis: { tickAmount: 10, min: 0, max: 40 },
  yaxis: { tickAmount: 7 },
  markers: { size: 20 },
  fill: {
    type: "image",
    opacity: 1,
    image: {
      src: [
        "assets/images/ico-messenger.png",
        "assets/images/ico-instagram.png",
      ],
      width: 40,
      height: 40,
    },
  },
  legend: {
    labels: { useSeriesColors: !0 },
    offsetY: 7,
    markers: {
      customHTML: [
        function () {
          return '<span><i class="mdi mdi-facebook"></i></span>';
        },
        function () {
          return '<span><i class="mdi mdi-instagram"></i></span>';
        },
      ],
    },
  },
};
(chart = new ApexCharts(
  document.querySelector("#scatter-images"),
  options
)).render();
