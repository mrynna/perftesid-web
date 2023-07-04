<?php
include 'connection.php';
$key = $_POST['key'];
$tegangan = $_POST['tegangan'];
$arus = $_POST['arus'];
$suhuPanel = $_POST['suhuPanel'];
$suhuLingkungan = $_POST['suhuLingkungan'];
$iradiasi = $_POST['iradiasi'];
$performa = $_POST['performa'];

$sql = "INSERT INTO tb_dataManOffline(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa) VALUES ('$key', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi', '$performa')";
$kirim = $dbconnect->query($sql);

if (!$kirim) {
  echo "Error: " . $sql . "<br>" . $dbconnect->error();
} else {
  echo "New Offline Manual record created successfully";
}

