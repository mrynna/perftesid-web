<?php
include "connection.php";
$sql = "SELECT * FROM tb_data WHERE waktu BETWEEN '" . $_POST["from_date"] . "' AND '" . $_POST["to_date"] . "'";
// echo "fromdate:";
// echo ($_POST["from_date"]);
// echo "todate:";
// echo ($_POST["to_date"]);
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
?>