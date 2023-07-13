<?php
if (($_POST['token'])) {
  include 'connection.php';
  $key = $_POST['token'];
  $sql = "SELECT token FROM users WHERE token = '$key'";
  $result = $dbconnect->query($sql);
  
  if ($result->num_rows > 0) {
    $waktu = $_POST['waktu'];
    // $waktu = date("Y-m-d h:i:s", strtotime($waktu));
    $sql1 = "SELECT waktu FROM tb_dataoffline WHERE waktu = '$waktu'";
    $result1 = $dbconnect->query($sql1);
    // echo $result1;
    if ($result1->num_rows > 0){
      echo "Data with this date is already in the table";
      return;
    }else{
      $tegangan = $_POST['tegangan'];
      $arus = $_POST['arus'];
      $suhuPanel = $_POST['suhuPanel'];
      $suhuLingkungan = $_POST['suhuLingkungan'];
      $iradiasi = $_POST['iradiasi'];
      $performa = $_POST['performa'];
      
      $sql = "INSERT INTO tb_dataoffline(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa, waktu) VALUES ('$key', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi', '$performa', '$waktu')";
      $kirim = $dbconnect->query($sql);
      if (!$kirim) {
        echo "Error: " . $sql . "<br>" . $dbconnect->error();
      } else {
        echo "New Automatic Offline record created successfully";
      }
    }
  }else{
    echo "Invalid or Expired Token";
  }
} else {
  echo "Invalid Token (Null)";
}