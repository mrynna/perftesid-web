<?php
include 'connection.php';
$key = $_POST['key'];
$tegangan = $_POST['tegangan'];
$arus = $_POST['arus'];
$suhuPanel = $_POST['suhuPanel'];
$suhuLingkungan = $_POST['suhuLingkungan'];
$iradiasi = $_POST['iradiasi'];
$performa = $_POST['performa'];
$waktu = $_POST['waktu'];

$sql = "INSERT INTO tb_dataman(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa, waktu) VALUES ('$key', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi', '$performa', '$waktu')";
$kirim = $dbconnect->query($sql);

if (!$kirim) {
  echo "Error: " . $sql . "<br>" . $dbconnect->error();
} else {
  echo "New Manual record created successfully";
}

