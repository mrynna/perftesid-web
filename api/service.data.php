<?php
    include "connection.php"; 
    // Retrieve datasets that match the token key
    $key = '03ar2dffd';
    $sql_asc = "SELECT * FROM tb_data WHERE token = '$key' ORDER BY id ASC";
    $sql_desc = "SELECT * FROM tb_data WHERE token = '$key' ORDER BY id DESC";

    // Execute the query and fetch the results 
    $result_asc = $dbconnect->query($sql_asc);
    $result_desc = $dbconnect->query($sql_desc);

    // Fetch the last record from the desc order, only to obtain its two values fields (arus & suhu)
    $row_desc = $result_desc->fetch_assoc();
    $tegangan = $row_desc['tegangan'];
    $arus = $row_desc['arus'];
    $suhuPanel = $row_desc['suhuPanel'];

    // Initialize two arrays to hold the result of our iteration over the asc ordered dataset
    $arrayID = [];
    $arrayArus = [];
    $arraySuhuPanel = [];

    while ($row_asc = $result_asc->fetch_assoc()) {
        $arrayID[] = $row_asc['id'];
        $arrayTegangan[] = floatval($row_asc['tegangan']);
        $arrayArus[] = floatval($row_asc['arus']);
        $arraySuhuPanel[] = floatval($row_asc['suhuPanel']);
    }  