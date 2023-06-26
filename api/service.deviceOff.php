<?php
include 'connection.php';
$key = $_GET['key'];
$tegangan = $_GET['tegangan'];
$arus = $_GET['arus'];
$suhuPanel = $_GET['suhuPanel'];
$suhuLingkungan = $_GET['suhuLingkungan'];
$iradiasi = $_GET['iradiasi'];

$sql = "INSERT INTO tb_dataOffline(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi) VALUES ('$key', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi')";
$kirim = $dbconnect->query($sql);

if (!$kirim) {
  echo "Error: " . $sql . "<br>" . $dbconnect->error();
} else {
  echo "New Offline Automatic record created successfully";
}

