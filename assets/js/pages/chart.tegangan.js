var ctx = document.getElementById("chart-tegangan").getContext("2d");
var chart;

function convertToCSV(dataObject){
  let array = typeof dataObject != 'object' ? JSON.parse(dataObject) : dataObject;
  let str = '';
  for(let i = 0; i < array.length; i++){
    let line = '';
    for(let prop in array[i]){
      if(line != '') line += ';';
      line += array[i][prop];
    }
    str += line + '\r\n';
  }
  return str;
}

// Mendapatkan data dari database menggunakan AJAX
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data= JSON.parse(this.responseText);
      console.log(data);
      var tepatwaktu = data.map(function (obj) { return obj.waktu; });
      var tegangan = data.map(function (obj) { return obj.tegangan; });
      var arus = data.map(function (obj) { return obj.arus; });

      const dateChartJs = tepatwaktu.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });
      
      waktu = dateChartJs;
      
      let dataFormatted = []
      data.forEach(item => {
        dataFormatted.push({
          waktu:item.waktu,
          tegangan:item.tegangan,
        })
      })

      // console.log(dataFormatted)

      let headers = {
        waktu:"waktu",
        tegangan:"tegangan"
      }

      document.getElementById("downloadCSV").addEventListener("click", function() {
        exportCSV(headers, dataFormatted, "chart-data");
      });

      function exportCSV(header, dataFormatted, filename){
        if(header){
          dataFormatted.unshift(header)
        }
        
        let jsonObject = JSON.stringify(dataFormatted)
        dataFormatted.shift();
        // console.log(jsonObject)
        let csv = convertToCSV(jsonObject)
        // console.log(csv)
        
        let exportFileName = filename + ".csv";
        let blob = new Blob ([csv],{
          type:'text/csv;charset=utf-8'
        })

        if (navigator.msSaveBlob){
          navigator.msSaveBlob(blob, exportFileName)
        }else{
          let link = document.createElement("a")

          if (link.download !== undefined){
            let url = URL.createObjectURL(blob)
            link.setAttribute("href", url)
            link.setAttribute("download", exportFileName)
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }
        }

      }

      // Membuat chart menggunakan Chart.js
      chart = new Chart(ctx, {
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
                text: 'Tegangan (Voc)'
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
          }
        },
      });
      console.log(chart.data.datasets[0].data)
    }
  };
  xhttp.open("GET", "api/service.chart.php", true);
  xhttp.send();
}


const startTimeFilter = date => {
  const startDate = new Date(date.value);
  chart.config.options.scales.x.min = startDate;
  chart.update();
}

const endTimeFilter = date => {
  const endDate = new Date(date.value)
  chart.config.options.scales.x.max = endDate
  chart.update()
}

const zoomResetTegangan = () => {
  chart.resetZoom()
}

const zoomInTegangan = () => {
  chart.zoom(1.2)
}

const zoomOutTegangan = () => {
  chart.zoom(0.8)
}

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



getData();
