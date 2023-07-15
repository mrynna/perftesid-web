<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) {
    require 'connection.php';
    $token = $_SESSION['user_token'];
    $sql_asc = "SELECT * FROM tb_datamanoffline WHERE token = '$token' ORDER BY id ASC";

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