<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Photovolaic Performanc Tester</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/styles.css" />   
    <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="jquery-latest.js"></script>
    <script type="text/javascript">
      var refreshid = setInterval(function(){
        $('#responsecontainer').load('asset/grafik.php', true);
      }, 0);
    </script>
  </head>
  <body>
    <div class="header">
      <a class="btn btn-primary" href="login.php">Login</a>
      <a class="btn btn-primary" href="asset/grafik.php">Grafik</a>
    </div>
    <div class="container">
      <h1 class="text-center">Photovoltaic Panel Performance Tester</h1>
    </div>
    <div class="container" id="card-data"></div>
    <div class="grafik-container">
      <h5 class="card-title">Grafik Suhu dan Arus</h5>
      <div class="container" id = "responsecontainer"></div>
    </div>
    <div class="container" id="card-data2"></div>
    <script>
      function loadXMLDoc(){
      var card = new XMLHttpRequest();
      card.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("card-data").innerHTML = card.responseText;
        }
      };
      card.open("GET", "asset/card-data.php", true);
      card.send();
      }
      setInterval(function(){
        loadXMLDoc();
      }, 1000);
      window.onload = loadXMLDoc();
    </script>
    
  </body>
</html>
