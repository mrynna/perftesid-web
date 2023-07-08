<?php
if (isset($_POST['key'])){
  include 'connection.php';
  $sql = "SELECT token FROM users";
  $result = $dbconnect->query($sql);
  $token = $_POST['key'];

  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      $arrayData[] = $row['token'];
    }
  }
  
  if($token === array_search($token, $arrayData)){
    $tegangan = $_POST['tegangan'];
    $arus = $_POST['arus'];
    $suhuPanel = $_POST['suhuPanel'];
    $suhuLingkungan = $_POST['suhuLingkungan'];
    $iradiasi = $_POST['iradiasi'];
    $performa = $_POST['performa'];
    $waktu = $_POST['waktu'];
    $sql = "INSERT INTO tb_data(token, tegangan, arus, suhuPanel, suhuLingkungan, iradiasi, performa, waktu) VALUES ('$token', '$tegangan', '$arus', '$suhuPanel', '$suhuLingkungan', '$iradiasi', '$performa', '$waktu')";
    $kirim = $dbconnect->query($sql);
    if (!$kirim) {
      echo "Error: " . $sql . "<br>" . $dbconnect->error();
    } else {
      echo "New Automatic record created successfully";
    }
  }else{
    echo "Invalid Token or Expired Token";
  }
}else{
  echo "Invalid Token (Null)";
}



  



