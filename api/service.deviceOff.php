<?php
include 'connection.php';
$key = $_GET['key'];
$tegangan = $_GET['tegangan'];
$arus = $_GET['arus'];
$suhuPanel = $_GET['suhuPanel'];
$suhuLingkungan = $_GET['suhuLingkungan'];
$iradiasi = $_GET['iradiasi'];
$performa = $_POST['performa'];
$waktu = $_POST['waktu'];

$sql = "INSERT INTO tb_dataOffline(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa, waktu) VALUES ('$key', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi', '$performa', '$waktu')";
$kirim = $dbconnect->query($sql);

if (!$kirim) {
  echo "Error: " . $sql . "<br>" . $dbconnect->error();
} else {
  echo "New Offline Automatic record created successfully";
}

