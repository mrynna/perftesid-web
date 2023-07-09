<?php
if (($_POST['token'])) {
  include 'connection.php';
  $key = $_POST['token'];
  $sql = "SELECT token FROM users WHERE token = '$key'";
  $result = $dbconnect->query($sql);

  if ($result->num_rows > 0) {
    $tegangan = $_POST['tegangan'];
    $arus = $_POST['arus'];
    $suhuPanel = $_POST['suhuPanel'];
    $suhuLingkungan = $_POST['suhuLingkungan'];
    $iradiasi = $_POST['iradiasi'];
    $performa = $_POST['performa'];
    $tanggal = $_POST['tanggal'];
    $jam = $_POST['jam'];

    $waktu = $tanggal . " " . $jam;

    $sql = "INSERT INTO tb_data(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa, waktu) VALUES ('$key', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi', '$performa', '$waktu')";
    $kirim = $dbconnect->query($sql);
    if (!$kirim) {
      echo "Error: " . $sql . "<br>" . $dbconnect->error();
    } else {
      echo "New Automatic record created successfully";
    }
  }else{
    echo "Invalid or Expired Token";
  }
} else {
  echo "Invalid Token (Null)";
}