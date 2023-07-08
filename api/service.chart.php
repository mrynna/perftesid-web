<?php
    include "connection.php"; 
    // Retrieve datasets that match the token key
    $key = '03ar2dffd';
    $sql_asc = "SELECT * FROM tb_data WHERE token = '$key' ORDER BY id ASC";

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
?>