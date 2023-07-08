<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) {
    require 'connection.php';
    $token = $_SESSION['user_token'];
    // Retrieve datasets that match the token key
    $sqlID = $dbconnect->query("SELECT MAX(id) FROM tb_data WHERE token = '$token'");
    $dataID = $sqlID->fetch_assoc();
    $idAkhir = $dataID['MAX(id)'];
    $idAwal = $idAkhir-9;

    $sql_asc = "SELECT * FROM tb_data WHERE token = '$token' and id >= $idAwal and id <= $idAkhir ORDER BY id ASC";
    $sql_desc = "SELECT * FROM tb_data WHERE token = '$token' and id >= $idAwal and id <= $idAkhir ORDER BY id DESC";

    // Execute the query and fetch the results 
    $result_asc = $dbconnect->query($sql_asc);
    $result_desc = $dbconnect->query($sql_desc);

    // Fetch the last record from the desc order, only to obtain its two values fields (arus & suhu)
    $row_desc = $result_desc->fetch_assoc();
    $tegangan = $row_desc['tegangan'];
    $arus = $row_desc['arus'];
    $suhuPanel = $row_desc['suhuPanel'];
    $suhuLingkungan = $row_desc['suhuLingkungan'];
    $iradiasi = $row_desc['iradiasi'];
    $performa = $row_desc['performa'];

    // Initialize two arrays to hold the result of our iteration over the asc ordered dataset
    // $arrayData = [];
    // if ($result_asc->num_rows > 0) {
    //     while ($row_asc = $result_asc->fetch_assoc()) {
    //         $arrayData[] = $row_asc;
    //     }  
    // }
    // if($echoData === true){
    //     // echo json_encode($arrayData);
    // }

    $dbconnect->close();
} else {
    echo "Login untuk dapat menampilkan Data";
}
?>