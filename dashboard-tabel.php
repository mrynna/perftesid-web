﻿<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) {
    $user_username = $_SESSION['user_username'];
    $user_type = $_SESSION['user_type'];
    include 'api/connection.php';
    $token = $_SESSION['user_token'];
    // Mengambil data dari tabel tb_data
    $sql = "SELECT * FROM tb_data WHERE token = '$token'";
    $result = $dbconnect->query($sql);

    ?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Performance Tester</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description">
        <meta content="Coderthemes" name="author">
        <!-- App favicon -->
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
        <link rel="shortcut icon" href="assets/images/pnup.png">

        
        <!-- App css -->
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="light-style">
        <link href="assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style">

        <!-- third party css -->
        <link href="assets/vendor/DataTables/datatables.min.css" rel="stylesheet"/>
        <!-- third party css end -->
        
    </head>


    <body class="loading"
        data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <!-- Begin page -->
        <div class="wrapper">
            <!-- ========== Left Sidebar Start ========== -->
            <div class="leftside-menu">

                <!-- LOGO -->
                <a href="index" class="logo text-center logo-light">
                    <span class="logo-lg">
                        <img src="assets/images/pnup.png" alt="" height="55">
                    </span>
                    <span class="logo-sm">
                        <img src="assets/images/pnup.png" alt="" height="20">
                    </span>
                </a>

                <!-- LOGO -->
                <a href="index" class="logo text-center logo-dark">
                    <span class="logo-lg">
                        <img src="assets/images/pnup.png" alt="" height="16">
                    </span>
                    <span class="logo-sm">
                        <img src="assets/images/pnup.png" alt="" height="16">
                    </span>
                </a>

                <div class="h-100" id="leftside-menu-container" data-simplebar="">

                    <!--- Sidemenu -->
                    <ul class="side-nav">

                        <li class="side-nav-title side-nav-item">Navigation</li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false"
                                aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="bi bi-graph-up"></i>
                                <!-- <span class="badge bg-success float-end">2</span> -->
                                <span> Dashboards </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarDashboards">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="index">Home</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-grafik">Data Grafik</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-tabel">Data Tabel</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-title side-nav-item mt-1">Components</li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarMaps" aria-expanded="false"
                                aria-controls="sidebarMaps" class="side-nav-link">
                                <i class="bi bi-gear"></i>
                                <span> Lainnya </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarMaps">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="landing-page">Tentang</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>

                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>
            <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">
                    <!-- Topbar Start -->
                    <div class="navbar-custom">
                        <ul class="list-unstyled topbar-menu float-end mb-0">
                            
                            <li class="notification-list">
                                <a class="nav-link end-bar-toggle" href="javascript: void(0);">
                                    <i class="dripicons-gear noti-icon"></i>
                                </a>
                            </li>

                            <li class="dropdown notification-list">
                                <a class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <span class="account-user-avatar"> 
                                        <img src="assets/images/users/user1.png" alt="user-image" class="rounded-circle">
                                    </span>
                                    <span>
                                        <span class="account-user-name"><?php echo $user_username; ?></span>
                                        <span class="account-position"><?php echo $user_type; ?></span>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                    <!-- item-->
                                    <div class=" dropdown-header noti-title">
                                        <h6 class="text-overflow m-0">Halo <?php echo $user_username; ?>!</h6>
                                    </div>

                                    <!-- item -->
                                    <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-account-circle me-1"></i>
                                        <span>My Account</span>
                                    </a> -->

                                    <!-- item-->
                                    <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-account-edit me-1"></i>
                                        <span>Settings</span>
                                    </a> -->

                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-logout me-1"></i>
                                        <span onclick="window.location.href = 'logout.php';">Logout</span>
                                    </a>
                                </div>
                            </li>

                        </ul>
                        <button class="button-menu-mobile open-left">
                            <i class="mdi mdi-menu"></i>
                        </button>
                    </div>
                    <!-- end Topbar -->

                    <!-- Start Content-->
                    <div class="container-fluid">
                            <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Performance
                                                    Tester</a></li>
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                            <li class="breadcrumb-item active">Data Tabel</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Data Tabel</h4>
                                </div>
                            </div>
                        </div>
                        <!-- end page title -->
                        <div class="card body table">
                            <div class="dropdown table-picker">
                                <button class="btn btn-secondary dropdown-toggle table-picker button" type="button" id="dropdown-tablePicker" data-bs-toggle="dropdown" aria-expanded="false">
                                <h4 class="header-title table" id="dropdown-title">Data Otomatis</h4></button>
                                <ul class="dropdown-menu table-list" aria-labelledby="dropdown-tablePicker" id="dropdown-options">
                                    <li><a class="dropdown-item" onclick="changeTable('otomatis')">Data Otomatis</a></li>
                                    <li><a class="dropdown-item" onclick="changeTable('manual')">Data Manual</a></li>
                                    <li><a class="dropdown-item" onclick="changeTable('offline-otomatis')">Data Otomatis Offline</a></li>
                                    <li><a class="dropdown-item" onclick="changeTable('offline-manual')">Data Manual Offline</a></li>
                                </ul>
                            </div>
                            <div class="row table">
                                <div class="row date-picker table">
                                    <div class="container date-picker-field">
                                        <div class="col-md-3 table date-picker filter">
                                            <input type="datetime-local" name="from_date" id="from_date" class="form-control form-control-light"
                                                placeholder="From Date" />
                                        </div>
                                        <div class="col-md-3 table date-picker filter">
                                            <input type="datetime-local" name="to_date" id="to_date" class="form-control form-control-light"
                                                placeholder="To Date" />
                                        </div>
                                    </div>
                                    <div class="col-md-5 table date-picker filter-button">
                                        <input type="button" name="filter" id="filter" value="Filter" class="btn btn-info date-picker filter" />
                                        <input type="button" name="export" id="downloadCSV" value="export" class="btn btn-info date-picker export" />
                                    </div>
                                </div>
                                <div style="clear:both"></div>
                                <br />
                                <div id="order_table">
                                    <table class="table table-bordered" id="table-otomatis">
                                        <thead>
                                            <tr>
                                                <th scope="col" width="5%">No</th>  
                                                <th scope="col" width="10%">Tegangann (V)</th>  
                                                <th scope="col" width="10%">Arus (A)</th>  
                                                <th scope="col" width="10%">Suhu Lingkungan (°C)</th>  
                                                <th scope="col" width="10%">Suhu Panel (°C)</th>  
                                                <th scope="col" width="10%">Iradiasi (W/m²)</th>  
                                                <th scope="col" width="10%">Performa (%)</th>  
                                                <th scope="col" width="15%">Waktu</th>  
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <?php
                                        while ($row = $result->fetch_assoc()) {
                                            ?>
                                            <tr>
                                                <td>
                                                    <?php echo $row["id"]; ?>
                                                </td>
                                                <td>
                                                    <?php echo $row["tegangan"]; ?>
                                                </td>
                                                <td>
                                                    <?php echo $row["arus"]; ?>
                                                </td>
                                                <td>
                                                    <?php echo $row["suhuLingkungan"]; ?>
                                                </td>
                                                <td>
                                                    <?php echo $row["suhuPanel"]; ?>
                                                </td>
                                                <td>
                                                    <?php echo $row["iradiasi"]; ?>
                                                </td>
                                                <td>
                                                    <?php echo $row["performa"]; ?>
                                                </td>
                                                <td>
                                                    <?php echo $row["waktu"]; ?>
                                                </td>
                                            </tr>
                                            <?php
                                        }
                                        ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <div class="popup" id="popup">
                            <h7> Masukkan rentang waktu yang sesuai !!!</h7>
                            <button type="button" id ="popup-button" class="btn btn-primary popup-button">OK</button>
                        </div>
                        <div class="popup-nodata" id="popup-nodata">
                            <h7> Tidak ada data dalam rentang waktu yang dipilih !!!</h7>
                            <button type="button" id ="popup-nodata-button" class="btn btn-primary popup-button">OK</button>
                        </div>
                        <div class="popup-clickfilter" id="popup-clickfilter">
                            <h7> Lakukan Filter terlebih dahulu !!!</h7>
                            <button type="button" id ="popup-clickfilter-button" class="btn btn-primary popup-button">OK</button>
                        </div>
                    </div> <!-- container -->
                </div> <!-- content -->

                <!-- Footer Start -->
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6" id="footer-year"></div>
                            <div class="col-md-6">
                                <div class="text-md-end footer-links d-none d-md-block">
                                    <a href="landing-page">Tentang</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->


        <!-- Right Sidebar -->
        <div class="end-bar">

            <div class="rightbar-title">
                <a href="javascript:void(0);" class="end-bar-toggle float-end">
                    <i class="dripicons-cross noti-icon"></i>
                </a>
                <h5 class="m-0">Settings</h5>
            </div>

            <div class="rightbar-content h-100" data-simplebar="">

                <div class="p-3">
                    <div class="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                    </div>

                    <!-- Settings -->
                    <h5 class="mt-3">Color Scheme</h5>
                    <hr class="mt-1">

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="color-scheme-mode" value="light"
                            id="light-mode-check" checked="">
                        <label class="form-check-label" for="light-mode-check">Light Mode</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="color-scheme-mode" value="dark"
                            id="dark-mode-check">
                        <label class="form-check-label" for="dark-mode-check">Dark Mode</label>
                    </div>


                    <!-- Width -->
                    <h5 class="mt-4">Width</h5>
                    <hr class="mt-1">
                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="width" value="fluid" id="fluid-check"
                            checked="">
                        <label class="form-check-label" for="fluid-check">Fluid</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="width" value="boxed" id="boxed-check">
                        <label class="form-check-label" for="boxed-check">Boxed</label>
                    </div>


                    <!-- Left Sidebar-->
                    <h5 class="mt-4">Left Sidebar</h5>
                    <hr class="mt-1">
                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="theme" value="default" id="default-check">
                        <label class="form-check-label" for="default-check">Default</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="theme" value="light" id="light-check"
                            checked="">
                        <label class="form-check-label" for="light-check">Light</label>
                    </div>

                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input" type="checkbox" name="theme" value="dark" id="dark-check">
                        <label class="form-check-label" for="dark-check">Dark</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="compact" value="fixed" id="fixed-check"
                            checked="">
                        <label class="form-check-label" for="fixed-check">Fixed</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="compact" value="condensed"
                            id="condensed-check">
                        <label class="form-check-label" for="condensed-check">Condensed</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="compact" value="scrollable"
                            id="scrollable-check">
                        <label class="form-check-label" for="scrollable-check">Scrollable</label>
                    </div>

                    <div class="d-grid mt-4">
                        <button class="btn btn-primary" id="resetBtn">Reset to Default</button>


                    </div>
                </div> <!-- end padding-->

            </div>
        </div>

        <div class="rightbar-overlay"></div>
        <!-- /End-bar -->


        <!-- bundle -->
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app.min.js"></script>
        <!-- End Bundle -->
        
        <!-- Third Party -->
        <script src="assets/vendor/DataTables/datatables.min.js"></script>
        <!-- end Third Party` -->
        
        <!-- js script -->
        <script src="assets/js/pages/data-table.js"></script>
        <!-- end js-->

        <script></script>
    </body>

    </html>
<?php
} else {
    header("Location: landing-page");
}
?>