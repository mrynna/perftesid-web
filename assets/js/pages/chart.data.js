var vocIsc = document.getElementById("vocChart").getContext("2d");
var suhu = document.getElementById("suhuChart").getContext("2d");
var perf = document.getElementById("perfChart").getContext("2d");
var irad = document.getElementById("iradChart").getContext("2d");
var vocSuhu = document.getElementById("vocSuhuChart").getContext("2d");
var iscIrad = document.getElementById("iscIradiasiChart").getContext("2d");
var chartVoc;
var chartSuhu;
var chartPerf;
var chartIrad;
var chartVocSuhu;
var chartIscIrad;

// Mendapatkan data dari database menggunakan AJAX
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var ids = data.map(function (obj) {
        return obj.id;
      });
      var tegangan = data.map(function (obj) {
        return obj.tegangan;
      });
      var arus = data.map(function (obj) {
        return obj.arus;
      });
      var suhuPanel = data.map(function (obj) {
        return obj.suhuPanel;
      });
      var suhuLingkungan = data.map(function (obj) {
        return obj.suhuLingkungan;
      });
      var iradiasi = data.map(function (obj) {
        return obj.iradiasi;
      });
      var performa = data.map(function (obj) {
        return obj.performa;
      });

      // Hancurkan instansiasi chart sebelumnya
      if (chartVoc || chartSuhu || chartPerf || chartIrad || chartVocSuhu || chartIscIrad) {
        chartVoc.destroy();
        chartSuhu.destroy();
        chartPerf.destroy();
        chartIrad.destroy();
        chartVocSuhu.destroy();
        chartIscIrad.destroy();
      }

      // Membuat chart VocIsc
      chartVoc = new Chart(vocIsc, {
        type: "line",
        data: {
          labels: ids,
          datasets: [
            {
              label: "Tegangan",
              data: tegangan,
              backgroundColor: "#767fe3", // Warna latar belakang
              borderColor: "#767fe3", // Warna garis
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
            {
              label: "Arus",
              data: arus,
              backgroundColor: "#30d5a5",
              borderColor: "#30d5a5",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
          ],
        },
        options: {
          animation: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      });

      // Membuat chart Isc Iradiasi
      chartIscIrad = new Chart(iscIrad, {
        type: "line",
        data: {
          labels: ids,
          datasets: [
            {
              label: "Arus Hubung Singkat (Isc)",
              data: arus,
              backgroundColor: "#767fe3",
              borderColor: "#767fe3",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
            {
              label: "Iradiasi",
              data: iradiasi,
              backgroundColor: "#30d5a5",
              borderColor: "#30d5a5",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
          ],
        },
        options: {
          animation: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      });

      // Membuat chart Suhu
      chartSuhu = new Chart(suhu, {
        type: "line",
        data: {
          labels: ids,
          datasets: [
            {
              label: "Suhu Panel",
              data: suhuPanel,
              backgroundColor: "#767fe3",
              borderColor: "#767fe3",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
            {
              label: "Suhu Lingkungan",
              data: suhuLingkungan,
              backgroundColor: "#30d5a5",
              borderColor: "#30d5a5",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
          ],
        },
        options: {
          animation: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      });

      // Membuat chart Voc Suhu
      chartVocSuhu = new Chart(vocSuhu, {
        type: "line",
        data: {
          labels: ids,
          datasets: [
            {
              label: "Tegangan (Voc)",
              data: tegangan,
              backgroundColor: "#767fe3",
              borderColor: "#767fe3",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
            {
              label: "Suhu Panel",
              data: suhuPanel,
              backgroundColor: "#30d5a5",
              borderColor: "#30d5a5",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
            {
              label: "Suhu Lingkungan",
              data: suhuLingkungan,
              backgroundColor: "#4b596c",
              borderColor: "#4b596c",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
          ],
        },
        options: {
          animation: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      });

      //   Membuat chart performa
      chartPerf = new Chart(perf, {
        type: "line",
        data: {
          labels: ids,
          datasets: [
            {
              label: "Performa",
              data: performa,
              backgroundColor: "#767fe3",
              borderColor: "#767fe3",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
          ],
        },
        options: {
          animation: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      });

      //   Membuat chart Iradiasi
      chartIrad = new Chart(irad, {
        type: "line",
        data: {
          labels: ids,
          datasets: [
            {
              label: "Iradiasi",
              data: iradiasi,
              backgroundColor: "#30d5a5",
              borderColor: "#30d5a5",
              borderWidth: 3,
              pointStyle: false,
              tension: 0.2,
            },
          ],
        },
        options: {
          animation: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      });
    }
  };
  xhttp.open("GET", "api/service.chart.php", true);
  xhttp.send();
}

getData();
setInterval(getData, 15000); // Mengambil data setiap 5 detik
