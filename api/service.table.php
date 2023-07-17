<?php
## Database dbconnectfiguration
include 'connection.php';

## Read value
$draw = $_POST['draw'];
$row = $_POST['start'];
$rowperpage = $_POST['length']; // Rows display per page
$columnIndex = $_POST['order'][0]['column']; // Column index
$columnName = $_POST['columns'][$columnIndex]['data']; // Column name
$columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
$searchValue = mysqli_real_escape_string($dbconnect,$_POST['search']['value']); // Search value

## Search 
$searchQuery = " ";
if($searchValue != ''){
   $searchQuery = " and (emp_waktu like '%".$searchValue."%' or 
        tegangan like '%".$searchValue."%' or 
        waktu like'%".$searchValue."%' ) ";
}

## Total number of records without filtering
$sel = mysqli_query($dbconnect,"select count(*) as allcount from tb_data");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];

## Total number of record with filtering
$sel = mysqli_query($dbconnect,"select count(*) as allcount from tb_data WHERE 1 ".$searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];

## Fetch records
$empQuery = "select * from tb_data WHERE 1 ".$searchQuery." order by ".$columnName." ".$columnSortOrder." limit ".$row.",".$rowperpage;
$empRecords = mysqli_query($dbconnect, $empQuery);
$data = array();

while ($row = mysqli_fetch_assoc($empRecords)) {
   $data[] = array( 
      "id"=>$row['id'],
      "tegangan"=>$row['tegangan'],
      "arus"=>$row['arus'],
      "suhuLingkungan"=>$row['suhuLingkungan'],
      "suhuPanel"=>$row['suhuPanel'],
      "iradiasi"=>$row['iradiasi'],
      "performa"=>$row['performa']
   );
}

## Response
$response = array(
  "draw" => intval($draw),
  "iTotalRecords" => $totalRecords,
  "iTotalDisplayRecords" => $totalRecordwithFilter,
  "aaData" => $data
);

echo json_encode($response);