let from_date, to_date;
let url, urlFilter, urlExport, title, titles;
urlFilter = "api/filterTableOtomatis.php";
urlExport = "api/getFilterData.php";
title = "Data Otomatis";

$("#from_date").on("change", function () {
  from_date = $("#from_date").val();
  console.log(from_date);
});
$("#to_date").on("change", function () {
  to_date = $("#to_date").val();
  console.log(to_date);
});

$(document).ready(function () {
  var table = $("#table-otomatis").DataTable({
    scrollY: 600,
    // scroller: true,
    responsive: true,
  });

  $(".dropdown-item").on("click", function () {
    $.ajax({
      url: url,
      method: "POST",
      success: function (data) {
        $("#order_table").html(data);
        table.destroy();
        table = $("#table-otomatis").DataTable({
          scrollY: 600,
          responsive: true,
        });
      },
      error: function () {
        alert("Data not ready, try refresh the page");
      },
    });
  });
  // console.log(table)
  $("#filter").on("click", function () {
        titles = title;
    console.log(titles)
    if (
      from_date != "" &&
      from_date != undefined &&
      to_date != "" &&
      to_date != undefined &&
      from_date < to_date &&
      from_date != to_date
    ) {
      $.ajax({
        url: urlFilter,
        method: "POST",
        data: { from_date: from_date, to_date: to_date },
        success: function (data) {
          $("#order_table").html(data);
          table.destroy();
          table = $("#table-otomatis").DataTable({
            scrollY: 600,
            responsive: true,
          });
        },
        error: function () {
          alert("Data not ready, try refresh the page");
        },
      });
    } else {
      document.getElementById("popup").classList.add("active");
    }
  });
  document
    .getElementById("popup-button")
    .addEventListener("click", function () {
      document.getElementById("popup").classList.remove("active");
    });
});

// =============================================================== Download CSV =============================================================
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

let datas;
let dataFormatted = [];

$(document).ready(function () {
  $("#downloadCSV").click(function () {
    if (
      (from_date != "" &&
        from_date != undefined &&
        to_date != "" &&
        to_date != undefined &&
        from_date < to_date &&
        from_date != to_date) && titles != "" && titles != undefined
    ) {
      $.ajax({
        url: urlExport,
        method: "POST",
        data: { from_date: from_date, to_date: to_date },
        success: function (data) {
            console.log(data.length);
          if ((titles == "Data Otomatis" && data.length > 153) || ((titles == "Data Manual" || titles == "Data Otomatis Offline") && data.length > 161) || (titles == "Data Manual Offline" && data.length > 164)) {
            console.log(data);
            let headers = {};
            var datas = JSON.parse(data);
            headers = {
              waktu: "Waktu",
              tegangan: "Tegangan (V)",
              arus: "Arus (A)",
              suhuPanel: "Suhu Panel (°C)",
              suhuLingkungan: "Suhu Lingkungan (°C)",
              iradiasi: "Iradiasi (W/m2)",
              performa: "Performa (%)",
            };
            dataFormatted = [];
            datas.forEach((item) => {
              dataFormatted.push({
                waktu: item.waktu,
                tegangan: item.tegangan,
                arus: item.arus,
                suhuPanel: item.suhuPanel,
                suhuLingkungan: item.suhuLingkungan,
                iradiasi: item.iradiasi,
                performa: item.performa,
              });
            });
            exportCSV(headers, dataFormatted, titles);
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
          } else {
            document.getElementById("popup-nodata").classList.add("active");
          }
        },
      });
    } else {
      document.getElementById("popup-clickfilter").classList.add("active");
    }
});
});
document
.getElementById("popup-nodata-button")
.addEventListener("click", function () {
    document.getElementById("popup-nodata").classList.remove("active");
});
document.getElementById("popup-clickfilter-button").addEventListener("click", function () {
    document.getElementById("popup-clickfilter").classList.remove("active");
});
//================================================== End of Download CSV ==============================================================

const changeTable = (table) => {
    titles = "";
  switch (table) {
    case "otomatis":
      title = "Data Otomatis";
      url = "api/getTableOtomatis.php";
      urlFilter = "api/filterTableOtomatis.php";
      urlExport = "api/getFilterData.php";
      break;
    case "manual":
      title = "Data Manual";
      url = "api/getTableManual.php";
      urlFilter = "api/filterTableManual.php";
      urlExport = "api/getFilterDataManTable.php";
      break;
    case "offline-otomatis":
      title = "Data Otomatis Offline";
      url = "api/getTableOffOtomatis.php";
      urlFilter = "api/filterTableOffOtomatis.php";
      urlExport = "api/getFilterDataOffTable.php";
      break;
    case "offline-manual":
      title = "Data Manual Offline";
      url = "api/getTableOffManual.php";
      urlFilter = "api/filterTableOffManual.php";
      urlExport = "api/getFilterDataManOffTable.php";
      break;
  }
  document.getElementById("dropdown-title").innerHTML = title;
};
