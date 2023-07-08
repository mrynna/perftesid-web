<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) {
    require 'connection.php';
    $token = $_SESSION['user_token'];
    $sql = "SELECT * FROM tb_data WHERE token = '$token' AND waktu BETWEEN '" . $_POST["from_date"] . "' AND '" . $_POST["to_date"] . "'";
    $result = $dbconnect->query($sql);

    // Menyimpan data dalam array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $arrayData[] = $row;
        }
    } else {
        echo "no result";
    }

    echo json_encode($arrayData);
} else {
    echo "Login untuk dapat menampilkan Data";
}
?>