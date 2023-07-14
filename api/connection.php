<?php
$dbhost = "localhost";
$dbuser = "n1567423_perftesid";
$password = "KIDsperfTest123@";
$dbname = "n1567423_dbperftest";

$dbconnect = new mysqli($dbhost, $dbuser, $password, $dbname);

if($dbconnect->connect_error){          
    die("Server bermasalah");
}
?>