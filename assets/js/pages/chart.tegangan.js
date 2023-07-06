function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      // console.log(data);
      var tepatwaktu = data.map(function (obj) {
        return obj.waktu;
      });
      var tegangan = data.map(function (obj) {
        return obj.tegangan;
      });
      var arus = data.map(function (obj) {
        return obj.arus;
      });

      const dateChartJs = tepatwaktu.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });

      waktu = dateChartJs;
      console.log(tepatwaktu);
      console.log(waktu);

      a = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
      var options = {
        chart: {
          selection: {
            enabled: true,
            type: 'x',
            fill: {
              color: '#24292e',
              opacity: 0.1
            },
            stroke: {
              width: 1,
              dashArray: 3,
              color: '#24292e',
              opacity: 0.4
            },
            xaxis: {
              min: undefined,
              max: undefined
            },
            yaxis: {
              min: undefined,
              max: undefined
            }
          },
          type: "area",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          }
        },
        dataLabels: { enabled: !1 },
        stroke: { curve: "smooth", width: 4 },
        series: [
          {
            name: "Tegangan",
            data: tegangan,
          },
        ],
        colors: a,
        xaxis: {
          type: "category",
          categories: tepatwaktu,
          // tickAmount: 6,
          labels: {
            show: true,
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [45, 100],
          },
        },
      };

      var chart = new ApexCharts(
        document.querySelector("#chartTegangan"),
        options
      );
      chart.render();
    }
  };
  xhttp.open("GET", "api/service.chart.php", true);
  xhttp.send();
}

getData();
