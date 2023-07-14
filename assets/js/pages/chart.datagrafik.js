var ctx = document.getElementById("chart-tegangan").getContext("2d");
var chartTegangan;

// Mendapatkan data dari database menggunakan AJAX
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      var data= JSON.parse(this.responseText);
      // console.log(data);
      var tepatwaktu = data.map(function (obj) { return obj.waktu; });
      var tegangan = data.map(function (obj) { return obj.tegangan; });
      var arus = data.map(function (obj) { return obj.arus; });

      const dateChartJs = tepatwaktu.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });
      
      waktu = dateChartJs;

      // Membuat chart menggunakan Chart.js
      chartTegangan = new Chart(ctx, {
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

let headers = {
  waktu: "waktu",
  tegangan: "tegangan",
};

var from_date;
var to_date;
var datas;
let dataFormatted = []

//============ Download CSV
$(document).ready(function () {
  $("#downloadCSV").click(function () {
    if (from_date != "" && from_date != undefined && to_date != "" && to_date != undefined && startDate.getTime() < endDate.getTime()) {
      $.ajax({
        url: "api/getFilterData.php",
        method: "POST",
        data: { from_date: from_date, to_date: to_date },
        success: function (data) {
          // console.log(data);
          var datas = JSON.parse(data);
          dataFormatted = [];
          datas.forEach((item) => {
            dataFormatted.push({
              waktu: item.waktu,
              tegangan: item.tegangan,
            });
          });
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
    case 'chart-tegangan':
      chartTegangan.config.options.scales.x.min = startDate;
      chartTegangan.update();
      break;

    case 'chart-arus':
      chartArus.config.options.scales.x.min = startDate;
      chartArus.update();
      break;

    case 'chart-suhupanel':
      chartSuhuPanel.config.options.scales.x.min = startDate;
      chartSuhuPanel.update();
      break;

    case 'chart-suhulingkungan':
      chartSuhuLingkungan.config.options.scales.x.min = startDate;
      chartSuhuLingkungan.update();
      break;

    case 'chart-iradiasi':
      chartIradiasi.config.options.scales.x.min = startDate;
      chartIradiasi.update();
      break;
    
    case 'chart-performa':
      chartPerforma.config.options.scales.x.min = startDate;
      chartPerforma.update();
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
    case 'chart-tegangan':
      chartTegangan.config.options.scales.x.max = endDate;
      chartTegangan.update();
      break;

    case 'chart-arus':
      chartArus.config.options.scales.x.max = endDate;
      chartArus.update();
      break;

    case 'chart-suhupanel':
      chartSuhuPanel.config.options.scales.x.max = endDate;
      chartSuhuPanel.update();
      break;

    case 'chart-suhulingkungan':
      chartSuhuLingkungan.config.options.scales.x.max = endDate;
      chartSuhuLingkungan.update();
      break;

    case 'chart-iradiasi':
      chartIradiasi.config.options.scales.x.max = endDate;
      chartIradiasi.update();
      break;
    
    case 'chart-performa':
      chartPerforma.config.options.scales.x.max = endDate;
      chartPerforma.update();
      break;

    default:
      return
  }
}

//============ End of Date Filter

//============ Zoom Plugin Chart
const zoomReset = charts => {
  switch (charts) {
    case 'chart-tegangan':
      chartTegangan.resetZoom();
      break;

    case 'chart-arus':
      chartArus.resetZoom();
      break;

    case 'chart-suhupanel':
      chartSuhuPanel.resetZoom();
      break;

    case 'chart-suhulingkungan':
      chartSuhuLingkungan.resetZoom();
      break;

    case 'chart-iradiasi':
      chartIradiasi.resetZoom();
      break;
    
    case 'chart-performa':
      chartPerforma.resetZoom();
      break;

    default:
      return
  }
}

const zoomIn = charts => {
  switch (charts) {
    case 'chart-tegangan':
      chartTegangan.zoom(1.2)
      break;

    case 'chart-arus':
      chartArus.zoom(1.2)
      break;

    case 'chart-suhupanel':
      chartSuhuPanel.zoom(1.2)
      break;

    case 'chart-suhulingkungan':
      chartSuhuLingkungan.zoom(1.2)
      break;

    case 'chart-iradiasi':
      chartIradiasi.zoom(1.2)
      break;
    
    case 'chart-performa':
      chartPerforma.zoom(1.2)
      break;

    default:
      return
  }
}

const zoomOut = charts => {
  switch (charts) {
    case 'chart-tegangan':
      chartTegangan.zoom(0.8)
      break;

    case 'chart-arus':
      chartArus.zoom(0.8)
      break;

    case 'chart-suhupanel':
      chartSuhuPanel.zoom(0.8)
      break;

    case 'chart-suhulingkungan':
      chartSuhuLingkungan.zoom(0.8)
      break;

    case 'chart-iradiasi':
      chartIradiasi.zoom(0.8)
      break;
    
    case 'chart-performa':
      chartPerforma.zoom(0.8)
      break;

    default:
      return
  }
}

//============ End of Zoom Plugin Chart

//============ Alert Button
document.getElementById("popup-button").addEventListener("click", function(){
  document.getElementById("popup").classList.remove('active')
})

getData();
