<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) {
    require 'connection.php';
    date_default_timezone_set("Asia/Hong_Kong");
    $date = date('Y-m-d 00:00:00');
    $date2 = date('Y-m-d 23:59:59');
    $token = $_SESSION['user_token'];
    $sql_id = "SELECT MAX(id) from tb_data";
    $result_id = $dbconnect->query($sql_id);
    $data_id = $result_id->fetch_assoc();
    $id_akhir = $data_id['MAX(id)'];
    $id_awal = $id_akhir - 9;
    $sql_asc = "SELECT * FROM tb_data WHERE token = '$token' AND waktu BETWEEN '" . $date . "' AND '" . $date2 . "' ORDER BY waktu ASC";

    // Execute the query and fetch the results 
    $result_asc = $dbconnect->query($sql_asc);
    // Fetch the last record from the desc order, only to obtain its two values fields (arus & suhu)

    $arrayData = [];
    if ($result_asc->num_rows > 0) {
        while ($row_asc = $result_asc->fetch_assoc()) {
            $arrayData[] = $row_asc;
        }
    }
    echo json_encode($arrayData);

    $dbconnect->close();
} else {
    echo "Login untuk dapat menampilkan Data";
}
?>