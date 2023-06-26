<?php
include 'connection.php';
$key = $_POST['key'];
$tegangan = $_POST['tegangan'];
$arus = $_POST['arus'];
$suhuPanel = $_POST['suhuPanel'];
$suhuLingkungan = $_POST['suhuLingkungan'];
$iradiasi = $_POST['iradiasi'];

$sql = "INSERT INTO tb_dataManOffline(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi) VALUES ('$key', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi')";
$kirim = $dbconnect->query($sql);

if (!$kirim) {
  echo "Error: " . $sql . "<br>" . $dbconnect->error();
} else {
  echo "New Offline Manual record created successfully";
}

