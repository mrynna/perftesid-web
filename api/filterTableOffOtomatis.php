<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) {
     require 'connection.php';
     $token = $_SESSION['user_token'];
     $sql = "SELECT * FROM tb_dataoffline WHERE token = '$token' AND waktu BETWEEN '" . $_POST["from_date"] . "' AND '" . $_POST["to_date"] . "'";
     $result = $dbconnect->query($sql);

     // Menyimpan data dalam array
     $output = '  
           <table class="table table-bordered" id="table-otomatis">
               <thead>  
                    <tr>  
                         <th scope="col" width="5%">No</th>  
                         <th scope="col" width="10%">Tegangan (V)</th>  
                         <th scope="col" width="10%">Arus (A)</th>  
                         <th scope="col" width="10%">Suhu Lingkungan (°C)</th>  
                         <th scope="col" width="10%">Suhu Panel (°C)</th>  
                         <th scope="col" width="10%">Iradiasi (W/m²)</th>  
                         <th scope="col" width="10%">Performa (%)</th>  
                         <th scope="col" width="15%">Waktu</th>  
                    </tr> 
                </thead> 
      ';
     if ($result->num_rows > 0) {
          $id = 1;
          while ($row = $result->fetch_assoc()) {
               $output .= '  
                              <tr>  
                                   <td>' . $id++ . '</td>  
                                   <td>' . $row["tegangan"] . '</td>  
                                   <td>' . $row["arus"] . '</td>  
                                   <td>' . $row["suhuLingkungan"] . '</td>  
                                   <td>' . $row["suhuPanel"] . '</td>  
                                   <td>' . $row["iradiasi"] . '</td>  
                                   <td>' . $row["performa"] . '</td>  
                                   <td>' . $row["waktu"] . ' </td>  
                              </tr>  
                         ';
          }
     } else {
          $output .= '  
                         <tr>  
                              <td>-</td>  
                              <td>-</td>  
                              <td>-</td>  
                              <td>-</td>  
                              <td>-</td>  
                              <td>-</td>  
                              <td>-</td>  
                              <td>-</td>  
                         </tr>  
                    ';
     }
     $output .= '</table>';
     echo $output;
} else {
     header("location:landing-page.php");
}
?>