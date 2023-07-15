var ctx = document.getElementById("chart-otomatis").getContext("2d");
var ctxMan = document.getElementById("chart-manual").getContext("2d");
var ctxManOff = document.getElementById("chart-manualOff").getContext("2d");
var ctxOff = document.getElementById("chart-otomatisOff").getContext("2d");
let chartOtomatis, chartManual, chartManualOff, chartOtomatisOff;
let waktu, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa;
let waktuMan, teganganMan, arusMan, suhuPanelMan, suhuLingkunganMan, iradiasiMan, performaMan;
let waktuOff, teganganOff, arusOff, suhuPanelOff, suhuLingkunganOff, iradiasiOff, performaOff;
let waktuManOff, teganganManOff, arusManOff, suhuPanelManOff, suhuLingkunganManOff, iradiasiManOff, performaManOff;

// ============================================ Chart Otomatis Get Data ===================================================
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      var data= JSON.parse(this.responseText);
      // console.log(data);
      waktu = data.map(function (obj) { return obj.waktu; });
      tegangan = data.map(function (obj) { return obj.tegangan; });
      arus = data.map(function (obj) { return obj.arus; });
      suhuPanel = data.map(function (obj) { return obj.suhuPanel; });
      suhuLingkungan = data.map(function (obj) { return obj.suhuLingkungan; });
      iradiasi = data.map(function (obj) { return obj.iradiasi; });
      performa = data.map(function (obj) { return obj.performa; });

      const dateChartJs = waktu.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });

      // ------------------- Chart Otomatis ------------------------
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
      // -------------- End Of Chart Otomatis ----------------

      // console.log(chart.data.datasets[0].data)
    }
  };
  xhttp.open("GET", "api/service.chart.php", true);
  xhttp.send();
}

// ===================================== End of Chart Otomatis get Data ========================================


// ====================================== Chart Manual get Data ===============================================
function getDataMan() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      var data= JSON.parse(this.responseText);
      // console.log(data);
      waktuMan = data.map(function (obj) { return obj.waktu; });
      teganganMan = data.map(function (obj) { return obj.tegangan; });
      arusMan = data.map(function (obj) { return obj.arus; });
      suhuPanelMan = data.map(function (obj) { return obj.suhuPanel; });
      suhuLingkunganMan = data.map(function (obj) { return obj.suhuLingkungan; });
      iradiasiMan = data.map(function (obj) { return obj.iradiasi; });
      performaMan = data.map(function (obj) { return obj.performa; });

      const dateChartJsMan = waktuMan.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });

      // --------------  Chart Manual ----------------
      chartManual = new Chart(ctxMan, {
        type: "line",
        data: {
          labels: dateChartJsMan,
          datasets: [
            {
              label: "Tegangan",
              data: teganganMan,
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
  xhttp.open("GET", "api/service.chartMan.php", true);
  xhttp.send();
}

// =================================End of Chart Manual get Data Man =================================================

//======================================== Chart Otomatis Offline get Data ===============================================
function getDataOff() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      var data= JSON.parse(this.responseText);
      // console.log(data);
      waktuOff = data.map(function (obj) { return obj.waktu; });
      teganganOff = data.map(function (obj) { return obj.tegangan; });
      arusOff = data.map(function (obj) { return obj.arus; });
      suhuPanelOff = data.map(function (obj) { return obj.suhuPanel; });
      suhuLingkunganOff = data.map(function (obj) { return obj.suhuLingkungan; });
      iradiasiOff = data.map(function (obj) { return obj.iradiasi; });
      performaOff = data.map(function (obj) { return obj.performa; });

      const dateChartJsOff = waktuOff.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });

      // --------------  Chart Manual ----------------
      chartOtomatisOff = new Chart(ctxOff, {
        type: "line",
        data: {
          labels: dateChartJsOff,
          datasets: [
            {
              label: "Tegangan",
              data: teganganOff,
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
  xhttp.open("GET", "api/service.chartOff.php", true);
  xhttp.send();
}

// =================================End of Chart Otomatis Offline get Data =================================================

//======================================== Chart Manual Offline get Data ===============================================
function getDataManOff() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      var data= JSON.parse(this.responseText);
      // console.log(data);
      waktuManOff = data.map(function (obj) { return obj.waktu; });
      teganganManOff = data.map(function (obj) { return obj.tegangan; });
      arusManOff = data.map(function (obj) { return obj.arus; });
      suhuPanelManOff = data.map(function (obj) { return obj.suhuPanel; });
      suhuLingkunganManOff = data.map(function (obj) { return obj.suhuLingkungan; });
      iradiasiManOff = data.map(function (obj) { return obj.iradiasi; });
      performaManOff = data.map(function (obj) { return obj.performa; });

      const dateChartJsManOff = waktuManOff.map((day, index) => {
        let dayjs = new Date(day);
        return dayjs;
      });

      // --------------  Chart Manual ----------------
      chartManualOff = new Chart(ctxManOff, {
        type: "line",
        data: {
          labels: dateChartJsManOff,
          datasets: [
            {
              label: "Tegangan",
              data: teganganManOff,
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
  xhttp.open("GET", "api/service.chartManOff.php", true);
  xhttp.send();
}

// =================================End of Chart Manual Offline get Data =================================================

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

let from_date, from_dateMan, from_dateManOff, from_dateOff;
let to_date, to_dateMan, to_dateManOff, to_dateOff;
let datas;
let dataFormatted = []

//============================================================== Download CSV Otomatis ===================================================================
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
          // console.log(dataTitle)
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
                suhuLingkungan: "Suhu Lingkungan (°C)",
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
                suhuPanel: "Suhu Panel (°C)",
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
                iradiasi: "Iradiasi (W/m²)",
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
          exportCSV(headers, dataFormatted, "Data Otomatis");
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
//================================================== End of Download CSV Otomatis ==============================================================

//============================================================== Download CSV Manual ===================================================================
$(document).ready(function () {
  $("#downloadCSVMan").click(function () {
    if (from_dateMan != "" && from_dateMan != undefined && to_dateMan != "" && to_dateMan != undefined && startDate.getTime() < endDate.getTime() && from_dateMan != to_dateMan) {
      $.ajax({
        url: "api/getFilterDataMan.php",
        method: "POST",
        data: { from_dateMan: from_dateMan, to_dateMan: to_dateMan },
        success: function (data) {
          // console.log(data);
          const dataTitle = document.getElementById("dropdown-title manual").innerHTML;
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
                suhuLingkungan: "Suhu Lingkungan (°C)",
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
                suhuPanel: "Suhu Panel (°C)",
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
                iradiasi: "Iradiasi (W/m²)",
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
          exportCSV(headers, dataFormatted, "Data Manual");
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
//================================================== End of Download CSV ==============================================================

//=================================================== Download CSV Otomatis Offline ===================================================================
$(document).ready(function () {
  $("#downloadCSVOff").click(function () {
    if (from_dateOff != "" && from_dateOff != undefined && to_dateOff != "" && to_dateOff != undefined && startDate.getTime() < endDate.getTime() && from_dateOff != to_dateOff) {
      $.ajax({
        url: "api/getFilterDataOff.php",
        method: "POST",
        data: { from_dateOff: from_dateOff, to_dateOff: to_dateOff },
        success: function (data) {
          // console.log(data);
          const dataTitle = document.getElementById("dropdown-title manual").innerHTML;
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
                suhuLingkungan: "Suhu Lingkungan (°C)",
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
                suhuPanel: "Suhu Panel (°C)",
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
                iradiasi: "Iradiasi (W/m²)",
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
          exportCSV(headers, dataFormatted, "Data Manual Offline");
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
//================================================== End of Download CSV Otomatis Offline ==============================================================

//=================================================== Download CSV Manual Offline ===================================================================
$(document).ready(function () {
  $("#downloadCSVManOff").click(function () {
    if (from_dateManOff != "" && from_dateManOff != undefined && to_dateManOff != "" && to_dateManOff != undefined && startDate.getTime() < endDate.getTime() && from_dateManOff != to_dateManOff) {
      $.ajax({
        url: "api/getFilterDataManOff.php",
        method: "POST",
        data: { from_dateManOff: from_dateManOff, to_dateManOff: to_dateManOff },
        success: function (data) {
          // console.log(data);
          const dataTitle = document.getElementById("dropdown-title manual").innerHTML;
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
                suhuLingkungan: "Suhu Lingkungan (°C)",
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
                suhuPanel: "Suhu Panel (°C)",
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
                iradiasi: "Iradiasi (W/m²)",
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
          exportCSV(headers, dataFormatted, "Data Manual Offline");
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
//================================================== End of Download CSV Manual Offline==============================================================



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
let startDate, startDateMan, startDateManOff, startDateOff;
let endDate, endDateMan, endDateManOff, endDateOff;
const startTimeFilter = (charts, date) => {
  startDate = new Date(date.value);
  // console.log(to_date)
  switch (charts) {
    case 'chart-otomatis':
      from_date = date.value.replace('T', ' ');
      chartOtomatis.config.options.scales.x.min = startDate;
      chartOtomatis.update();
      break;
      
    case 'chart-manual':
      from_dateMan = date.value.replace('T', ' ');
      chartManual.config.options.scales.x.min = startDate;
      chartManual.update();
      break;
      
    case 'chart-manualOff':
      from_dateManOff = date.value.replace('T', ' ');
      chartManualOff.config.options.scales.x.min = startDate;
      chartManualOff.update();
      break;
      
    case 'chart-otomatisOff':
      from_dateOff = date.value.replace('T', ' ');
      chartOtomatisOff.config.options.scales.x.min = startDate;
      chartOtomatisOff.update();
      break;

    default:
      return
  }
}

const endTimeFilter = (charts, date) => {
  endDate = new Date(date.value)
  // console.log(from_date)
  switch (charts) {
    case 'chart-otomatis':
      to_date = date.value.replace('T', ' ');
      chartOtomatis.config.options.scales.x.max = endDate;
      chartOtomatis.update();
      break;
      
    case 'chart-manual':
      to_dateMan = date.value.replace('T', ' ');
      chartManual.config.options.scales.x.max = endDate;
      chartManual.update();
      break;

    case 'chart-manualOff':
      to_dateManOff = date.value.replace('T', ' ');
      chartManualOff.config.options.scales.x.max = endDate;
      chartManualOff.update();
      break;
    
    case 'chart-otomatisOff':
      to_dateOff = date.value.replace('T', ' ');
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
  let chartLabelMan, chartDataMan, chartTitleMan, unitMan;
  let chartLabelOff, chartDataOff, chartTitleOff, unitOff;
  let chartLabelManOff, chartDataManOff, chartTitleManOff, unitManOff;

  switch(chartType){
    case 'chart-otomatis':
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
          chartTitle = "Suhu Panel (°C)"
          unit = "°C"
          break
        case 'chart-suhulingkungan':
          chartLabel = "Suhu Lingkungan"
          chartData = suhuLingkungan
          chartTitle = "Suhu Lingkungan (°C)"
          unit = "°C"
          break
        case 'chart-iradiasi':
          chartLabel = "Iradiasi"
          chartData = iradiasi
          chartTitle = "Iradiasi (W/m²)"
          unit = "W/m²"
          break

        case 'chart-performa':
          chartLabel = "Performa"
          chartData = performa
          chartTitle = "Performa (%)"
          unit = "%"
          break
      }
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
      switch(charts){
        case 'chart-tegangan':
          chartLabelMan = "Tegangan"
          chartDataMan = teganganMan
          chartTitleMan = "Tegangan (V)"
          unitMan = "V"
          break;
        case 'chart-arus':
          chartLabelMan = "Arus"
          chartDataMan = arusMan
          chartTitleMan = "Arus (A)"
          unitMan = "A"
          break
        case 'chart-suhupanel':
          chartLabelMan = "Suhu Panel"
          chartDataMan = suhuPanelMan
          chartTitleMan = "Suhu Panel (°C)"
          unitMan = "°C"
          break
        case 'chart-suhulingkungan':
          chartLabelMan = "Suhu Lingkungan"
          chartDataMan = suhuLingkunganMan
          chartTitleMan = "Suhu Lingkungan (°C)"
          unitMan = "°C"
          break
        case 'chart-iradiasi':
          chartLabelMan = "Iradiasi"
          chartDataMan = iradiasiMan
          chartTitleMan = "Iradiasi (W/m²)"
          unitMan = "W/m²"
          break
        case 'chart-performa':
          chartLabelMan = "Performa"
          chartDataMan = performaMan
          chartTitleMan = "Performa (%)"
          unitMan = "%"
          break
      }
      chartManual.data.datasets[0] = {
        label: chartLabelMan,
        data: chartDataMan,
        backgroundColor: "#767fe3",
        borderColor: "#767fe3",
        borderWidth: 3,
        pointStyle: true,
        tension: 0.2,
      };

      chartManual.options.plugins.tooltip.callbacks.label = (item) =>
      `${item.dataset.label}: ${item.formattedValue} ${unitMan}`

      chartManual.config.options.scales.y.title.text = chartTitleMan;
      const title2 = document.getElementById("dropdown-title manual");
      title2.innerHTML = "Grafik " + chartLabelMan;

      chartManual.update();
      break

    case 'chart-manualOff':
      switch(charts){
        case 'chart-tegangan':
          chartLabelManOff = "Tegangan"
          chartDataManOff = teganganManOff
          chartTitleManOff = "Tegangan (V)"
          unitManOff = "V"
          break;
        case 'chart-arus':
          chartLabelManOff = "Arus"
          chartDataManOff = arusManOff
          chartTitleManOff = "Arus (A)"
          unitManOff = "A"
          break
        case 'chart-suhupanel':
          chartLabelManOff = "Suhu Panel"
          chartDataManOff = suhuPanelManOff
          chartTitleManOff = "Suhu Panel (°C)"
          unitManOff = "°C"
          break
        case 'chart-suhulingkungan':
          chartLabelManOff = "Suhu Lingkungan"
          chartDataManOff = suhuLingkunganManOff
          chartTitleManOff = "Suhu Lingkungan (°C)"
          unitManOff = "°C"
          break
        case 'chart-iradiasi':
          chartLabelManOff = "Iradiasi"
          chartDataManOff = iradiasiManOff
          chartTitleManOff = "Iradiasi (W/m²)"
          unitManOff = "W/m²"
          break
        case 'chart-performa':
          chartLabelManOff = "Performa"
          chartDataManOff = performaManOff
          chartTitleManOff = "Performa (%)"
          unitManOff = "%"
          break
      }
      chartManualOff.data.datasets[0] = {
        label: chartLabelManOff,
        data: chartDataManOff,
        backgroundColor: "#767fe3",
        borderColor: "#767fe3",
        borderWidth: 3,
        pointStyle: true,
        tension: 0.2,
      };

      chartManualOff.options.plugins.tooltip.callbacks.label = (item) =>
      `${item.dataset.label}: ${item.formattedValue} ${unitManOff}`

      chartManualOff.config.options.scales.y.title.text = chartTitleManOff;
      const title3 = document.getElementById("dropdown-title manualOff");
      title3.innerHTML = "Grafik " + chartLabelManOff;
      chartManualOff.update();
      break

    case 'chart-otomatisOff':
      switch(charts){
        case 'chart-tegangan':
          chartLabelOff = "Tegangan"
          chartDataOff = teganganOff
          chartTitleOff = "Tegangan (V)"
          unitOff = "V"
          break;
        case 'chart-arus':
          chartLabelOff = "Arus"
          chartDataOff = arusOff
          chartTitleOff = "Arus (A)"
          unitOff = "A"
          break
        case 'chart-suhupanel':
          chartLabelOff = "Suhu Panel"
          chartDataOff = suhuPanelOff
          chartTitleOff = "Suhu Panel (°C)"
          unitOff = "°C"
          break
        case 'chart-suhulingkungan':
          chartLabelOff = "Suhu Lingkungan"
          chartDataOff = suhuLingkunganOff
          chartTitleOff = "Suhu Lingkungan (°C)"
          unitOff = "°C"
          break
        case 'chart-iradiasi':
          chartLabelOff = "Iradiasi"
          chartDataOff = iradiasiOff
          chartTitleOff = "Iradiasi (W/m²)"
          unitOff = "W/m²"
          break
        case 'chart-performa':
          chartLabelOff = "Performa"
          chartDataOff = performaOff
          chartTitleOff = "Performa (%)"
          unitOff = "%"
          break
      }
      chartOtomatisOff.data.datasets[0] = {
        label: chartLabelOff,
        data: chartDataOff,
        backgroundColor: "#767fe3",
        borderColor: "#767fe3",
        borderWidth: 3,
        pointStyle: true,
        tension: 0.2,
      }

      chartOtomatisOff.options.plugins.tooltip.callbacks.label = (item) =>
      `${item.dataset.label}: ${item.formattedValue} ${unitOff}`

      chartOtomatisOff.config.options.scales.y.title.text = chartTitleOff;
      const title4 = document.getElementById("dropdown-title otomatisOff");
      title4.innerHTML = "Grafik " + chartLabelOff;
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
      document.getElementById("show-grid").classList.add('hide')
      document.getElementById("hide-grid").classList.remove('hide')
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
      document.getElementById("show-grid manual").classList.add('hide')
      document.getElementById("hide-grid manual").classList.remove('hide')
      break;
      case "chart-manualOff":
        chartManualOff.config.options.scales.y.grid = {
          display: true,
          drawOnChartArea: true,
        }
        chartManualOff.config.options.scales.x.grid = {
          display: true,
        drawOnChartArea: true,
      }
      chartManualOff.update()
      document.getElementById("show-grid manualOff").classList.add('hide')
      document.getElementById("hide-grid manualOff").classList.remove('hide')
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
        document.getElementById("show-grid otomatisOff").classList.add('hide')
        document.getElementById("hide-grid otomatisOff").classList.remove('hide')
        break
      }
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
      document.getElementById("hide-grid").classList.add('hide')
      document.getElementById("show-grid").classList.remove('hide')
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
        document.getElementById("hide-grid manual").classList.add('hide')
        document.getElementById("show-grid manual").classList.remove('hide')
        break;
        case "chart-manualOff":
          chartManualOff.config.options.scales.y.grid = {
            display: false,
            drawOnChartArea: false,
          }
          chartManualOff.config.options.scales.x.grid = {
            display: false,
            drawOnChartArea: false,
          }
          chartManualOff.update()
          document.getElementById("hide-grid manualOff").classList.add('hide')
          document.getElementById("show-grid manualOff").classList.remove('hide')
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
      document.getElementById("hide-grid otomatisOff").classList.add('hide')
      document.getElementById("show-grid otomatisOff").classList.remove('hide')
      chartOtomatisOff.update()
      break
    }
}


// ============================ End of Chart Picker ============================


getData();
getDataMan();
getDataOff();
getDataManOff();
