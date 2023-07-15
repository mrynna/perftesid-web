var ctx = document.getElementById("chart-otomatis").getContext("2d");
var chartOtomatis;
let tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa;

// Mendapatkan data dari database menggunakan AJAX
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      var data= JSON.parse(this.responseText);
      // console.log(data);
      var tepatwaktu = data.map(function (obj) { return obj.waktu; });
      tegangan = data.map(function (obj) { return obj.tegangan; });
      arus = data.map(function (obj) { return obj.arus; });
      suhuPanel = data.map(function (obj) { return obj.suhuPanel; });
      suhuLingkungan = data.map(function (obj) { return obj.suhuLingkungan; });
      iradiasi = data.map(function (obj) { return obj.iradiasi; });
      performa = data.map(function (obj) { return obj.performa; });

      const dateChartJs = tepatwaktu.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });
      
      waktu = dateChartJs;

      // Membuat chart menggunakan Chart.js
      chartOtomatis = new Chart(ctx, {
        type: "line",
        data: {
          labels: dateChartJs,
          datasets: [
            {
              label: "Tegangan",
              data: tegangan,
              backgroundColor: "#767fe3",
              borderColor: "#767fe3",
              borderWidth: 3,
              pointStyle: true,
              tension: 0.2,
              // spanGaps: false
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Waktu'
              },
              min: '',
              max: '',
              type: 'time',
                grid: {
                display: false,
              },
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                major: {
                  enabled: true
                },
              },
            },
            y: {
              title: {
                display: true,
                text: 'Tegangan (V)'
              },
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                  label: (item) =>
                      `${item.dataset.label}: ${item.formattedValue} Volt`,
              },
            },
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
              },
              zoom: {
                mode: 'x',
                drag: {
                  enabled: true,
                  modifierKey: 'alt'
                },
                wheel: {
                  enabled: true,
                }
              }
            }
          },
          maintainAspectRatio: true,
          responsive: true
        },
      });
      // console.log(chart.data.datasets[0].data)
    }
  };
  xhttp.open("GET", "api/service.chart.php", true);
  xhttp.send();
}

// console.log(dataFormatted)

// Download CSV
function convertToCSV(dataObject) {
  let array =
    typeof dataObject != "object" ? JSON.parse(dataObject) : dataObject;
  let str = "";
  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (let prop in array[i]) {
      if (line != "") line += ";";
      line += array[i][prop];
    }
    str += line + "\r\n";
  }
  return str;
}

var from_date;
var to_date;
var datas;
let dataFormatted = []

//============ Download CSV
$(document).ready(function () {
  $("#downloadCSV").click(function () {
    if (from_date != "" && from_date != undefined && to_date != "" && to_date != undefined && startDate.getTime() < endDate.getTime() && from_date != to_date) {
      $.ajax({
        url: "api/getFilterData.php",
        method: "POST",
        data: { from_date: from_date, to_date: to_date },
        success: function (data) {
          // console.log(data);
          const dataTitle = document.getElementById("dropdown-title otomatis").innerHTML;
          console.log(dataTitle)
          let headers = {
          };
          var datas = JSON.parse(data);
          switch (dataTitle){
            case "Grafik Tegangan":
              headers = {
                waktu: "Waktu",
                tegangan: "Tegangan (V)",
              };
              dataFormatted = [];
              datas.forEach((item) => {
                dataFormatted.push({
                  waktu: item.waktu,
                  tegangan: item.tegangan,
                });
              });

              break;

            case "Grafik Arus":
              headers = {
                waktu: "Waktu",
                arus: "Arus (A)",
              }
              dataFormatted = [];
              datas.forEach((item) => {
                dataFormatted.push({
                  waktu: item.waktu,
                  arus: item.arus,
                });
              })
              break;
            
            case "Grafik Suhu Lingkungan":
              headers = {
                waktu: "Waktu",
                suhuLingkungan: "Suhu Lingkungan (C)",
              }
              dataFormatted = [];
              datas.forEach((item) => {
                dataFormatted.push({
                  waktu: item.waktu,
                  suhuLingkungan: item.suhuLingkungan,
                });
              })
              break

            case "Grafik Suhu Panel":
              headers = {
                waktu: "Waktu",
                suhuPanel: "Suhu Panel (C)",
              }
              dataFormatted = [];
              datas.forEach((item) => {
                dataFormatted.push({
                  waktu: item.waktu,
                  suhuPanel: item.suhuPanel,
                });
              })
              break
            
            case "Grafik Iradiasi":
              headers = {
                waktu: "Waktu",
                iradiasi: "Iradiasi (W/m2)",
              }
              dataFormatted = [];
              datas.forEach((item) => {
                dataFormatted.push({
                  waktu: item.waktu,
                  iradiasi: item.iradiasi,
                });
              })
              break
            
            case "Grafik Performa":
              headers = {
                waktu: "Waktu",
                performa: "Performa (%)",
              }
              dataFormatted = [];
              datas.forEach((item) => {
                dataFormatted.push({
                  waktu: item.waktu,
                  performa: item.performa,
                });
              })
              break
          }
          exportCSV(headers, dataFormatted, "chart-data");
          function exportCSV(header, dataFormatted, filename) {
            if (header) {
              dataFormatted.unshift(header);
            }
          
            let jsonObject = JSON.stringify(dataFormatted);
            dataFormatted.shift();
            // console.log(jsonObject)
            let csv = convertToCSV(jsonObject);
            // console.log(csv)
          
            let exportFileName = filename + ".csv";
            let blob = new Blob([csv], {
              type: "text/csv;charset=utf-8",
            });
          
            if (navigator.msSaveBlob) {
              navigator.msSaveBlob(blob, exportFileName);
            } else {
              let link = document.createElement("a");
          
              if (link.download !== undefined) {
                let url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportFileName);
                link.style.visibility = "hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            }
          }
        },
      });
    } else {
      document.getElementById("popup").classList.add('active')
    }
  });
});  
//============ End of Download CSV

document.getElementById("popup-button").addEventListener("click", function(){
  document.getElementById("popup").classList.remove('active')
})

//============ Save as Image
const saveAsPNG = target => {
  const imageLink = document.createElement('a')
  const canvas = document.getElementById(target)
  imageLink.download = 'grafik ' + target + '.png'
  imageLink.href = canvas.toDataURL('image/png', 1)
  imageLink.click()
}

const saveAsJPG = target => {
  const imageLink = document.createElement('a')
  const canvas = document.getElementById(target)
  imageLink.download = 'grafik ' + target + '.jpg'
  imageLink.href = canvas.toDataURL('image/jpg', 1)
  imageLink.click()
}
//============ End of Save as Image

//============ Date Filter
let startDate;
let endDate;
const startTimeFilter = (charts, date) => {
  startDate = new Date(date.value);
  from_date = date.value.replace('T', ' ');
  // console.log(to_date)
  switch (charts) {
    case 'chart-otomatis':
      chartOtomatis.config.options.scales.x.min = startDate;
      chartOtomatis.update();
      break;

    case 'chart-manual':
      chartManual.config.options.scales.x.min = startDate;
      chartManual.update();
      break;

    case 'chart-manualOff':
      chartManualOff.config.options.scales.x.min = startDate;
      chartManualOff.update();
      break;

    case 'chart-otomatisOff':
      chartOtomatisOff.config.options.scales.x.min = startDate;
      chartOtomatisOff.update();
      break;

    default:
      return
  }
}

const endTimeFilter = (charts, date) => {
  endDate = new Date(date.value)
  to_date = date.value.replace('T', ' ');
  // console.log(from_date)
  switch (charts) {
    case 'chart-otomatis':
      chartOtomatis.config.options.scales.x.max = endDate;
      chartOtomatis.update();
      break;

    case 'chart-manual':
      chartManual.config.options.scales.x.max = endDate;
      chartManual.update();
      break;

    case 'chart-manualOff':
      chartManualOff.config.options.scales.x.max = endDate;
      chartManualOff.update();
      break;

    case 'chart-otomatisOff':
      chartOtomatisOff.config.options.scales.x.max = endDate;
      chartOtomatisOff.update();
      break;

    default:
      return
  }
}

//============ End of Date Filter

//============ Zoom Plugin Chart
const zoomReset = charts => {
  switch (charts) {
    case 'chart-otomatis':
      chartOtomatis.resetZoom();
      break;

    case 'chart-manual':
      chartManual.resetZoom();
      break;

    case 'chart-manualOff':
      chartManualOff.resetZoom();
      break;

    case 'chart-otomatisOff':
      chartOtomatisOff.resetZoom();
      break;

    default:
      return
  }
}

const zoomIn = charts => {
  switch (charts) {
    case 'chart-otomatis':
      chartOtomatis.zoom(1.2)
      break;

    case 'chart-manual':
      chartManual.zoom(1.2)
      break;

    case 'chart-manualOff':
      chartManualOff.zoom(1.2)
      break;

    case 'chart-otomatisOff':
      chartOtomatisOff.zoom(1.2)
      break;

    default:
      return
  }
}

const zoomOut = charts => {
  switch (charts) {
    case 'chart-otomatis':
      chartOtomatis.zoom(0.8)
      break;

    case 'chart-manual':
      chartManual.zoom(0.8)
      break;

    case 'chart-manualOff':
      chartManualOff.zoom(0.8)
      break;

    case 'chart-otomatisOff':
      chartOtomatisOff.zoom(0.8)
      break;

    default:
      return
  }
}

//============ End of Zoom Plugin Chart

// =========================== Chart Picker ===============================
const changeChart = (chartType, charts) => {
  let chartLabel, chartData, chartTitle, unit;
  switch(charts){
    case 'chart-tegangan':
      chartLabel = "Tegangan"
      chartData = tegangan
      chartTitle = "Tegangan (V)"
      unit = "V"
      break;
    case 'chart-arus':
      chartLabel = "Arus"
      chartData = arus
      chartTitle = "Arus (A)"
      unit = "A"
      break
    case 'chart-suhupanel':
      chartLabel = "Suhu Panel"
      chartData = suhuPanel
      chartTitle = "Suhu Panel (C)"
      unit = "C"
      break
    case 'chart-suhulingkungan':
      chartLabel = "Suhu Lingkungan"
      chartData = suhuLingkungan
      chartTitle = "Suhu Lingkungan (C)"
      unit = "C"
      break
    case 'chart-iradiasi':
      chartLabel = "Iradiasi"
      chartData = iradiasi
      chartTitle = "Iradiasi (W/m2)"
      unit = "W/m2"
      break
    case 'chart-performa':
      chartLabel = "Performa"
      chartData = performa
      chartTitle = "Performa (%)"
      unit = "%"
      break
  }

  switch(chartType){
    case 'chart-otomatis':
      chartOtomatis.data.datasets[0] = {
        label: chartLabel,
        data: chartData,
        backgroundColor: "#767fe3",
        borderColor: "#767fe3",
        borderWidth: 3,
        pointStyle: true,
        tension: 0.2,
      };

      chartOtomatis.options.plugins.tooltip.callbacks.label = (item) =>
      `${item.dataset.label}: ${item.formattedValue} ${unit}`
    
      chartOtomatis.config.options.scales.y.title.text = chartTitle;
      const title = document.getElementById("dropdown-title otomatis");
      title.innerHTML = "Grafik " + chartLabel;
    
      chartOtomatis.update();
      
      break
    
    case 'chart-manual':
      chartManual.data.datasets[0] = {
        label: chartLabel,
        data: chartData,
        backgroundColor: "#767fe3",
        borderColor: "#767fe3",
        borderWidth: 3,
        pointStyle: true,
        tension: 0.2,
      };

      chartManual.config.options.scales.y.title.text = chartTitle;
      const title2 = document.getElementById("dropdown-title manual");
      title2.innerHTML = "Grafik " + chartLabel;

      chartManual.update();
      break

    case 'chart-manualOff':
      chartManualOff.data.datasets[0] = {
        label: chartLabel,
        data: chartData,
        backgroundColor: "#767fe3",
        borderColor: "#767fe3",
        borderWidth: 3,
        pointStyle: true,
        tension: 0.2,
      };

      chartManualOff.config.options.scales.y.title.text = chartTitle;
      const title3 = document.getElementById("dropdown-title manOff");
      title3.innerHTML = "Grafik " + chartLabel;
      chartManualOff.update();
      break

    case 'chart-otomatisOff':
      chartOtomatisOff.data.datasets[0] = {
        label: chartLabel,
        data: chartData,
        backgroundColor: "#767fe3",
        borderColor: "#767fe3",
        borderWidth: 3,
        pointStyle: true,
        tension: 0.2,
      }

      chartOtomatisOff.config.options.scales.y.title.text = chartTitle;
      const title4 = document.getElementById("dropdown-title otomOff");
      title4.innerHTML = "Grafik " + chartLabel;
      chartOtomatisOff.update();
      break
  }
}

const showGrid = chart => {
  switch(chart){
    case "chart-otomatis":
      chartOtomatis.config.options.scales.y.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartOtomatis.config.options.scales.x.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartOtomatis.update()
      break;
    case "chart-manual":
      chartManual.config.options.scales.y.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartManual.config.options.scales.x.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartManual.update()
      break;
    case "chart-manualOff":
      chartManualOff.config.options.scales.y.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartManOff.config.options.scales.x.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartManualOff.update()
      break;
    case "chart-otomatisOff":
      chartOtomatisOff.config.options.scales.y.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartOtomatisOff.config.options.scales.x.grid = {
        display: true,
        drawOnChartArea: true,
      }
      chartOtomatisOff.update()
      break
  }
  document.getElementById("show-grid").classList.add('hide')
  document.getElementById("hide-grid").classList.remove('hide')
}

const hideGrid = chart => {
  switch(chart){
    case "chart-otomatis":
      chartOtomatis.config.options.scales.y.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartOtomatis.config.options.scales.x.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartOtomatis.update()
      break;
    case "chart-manual":
      chartManual.config.options.scales.y.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartManual.config.options.scales.x.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartManual.update()
      break;
    case "chart-manualOff":
      chartManualOff.config.options.scales.y.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartManOff.config.options.scales.x.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartManualOff.update()
      break;
    case "chart-otomatisOff":
      chartOtomatisOff.config.options.scales.y.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartOtomatisOff.config.options.scales.x.grid = {
        display: false,
        drawOnChartArea: false,
      }
      chartOtomatisOff.update()
      break
  }
  document.getElementById("hide-grid").classList.add('hide')
  document.getElementById("show-grid").classList.remove('hide')
}


// ============================ End of Chart Picker ============================


getData();
