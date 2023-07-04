<!DOCTYPE html>
<html>
  <head>
    <title>Contoh Apex Chart</title>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  </head>
  <body>
    <div id="chart"></div>
    <script>
        var options = {
            series: [{
            data: data.slice()
          }],
            chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Dynamic Updating Chart',
            align: 'left'
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime',
            range: XAXISRANGE,
          },
          yaxis: {
            max: 100
          },
          legend: {
            show: false
          },
          };
  
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        
        
          window.setInterval(function () {
          getNewSeries(lastDate, {
            min: 10,
            max: 90
          })
        
          chart.updateSeries([{
            data: data
          }])
        }, 1000)
    </script>
  </body>
</html>