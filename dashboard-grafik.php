﻿<?php
  session_start();
  if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) { 
    $user_username = $_SESSION['user_username'];
    $user_type = $_SESSION['user_type'];

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
            <link rel="shortcut icon" href="assets/images/pnup.png">
    
            <!-- third party css -->
            <!-- <link href="assets/css/vendor/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css"> -->
            <!-- <script src="https://code.highcharts.com/highcharts.js"></script> -->
            <!-- <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script> -->
            <!-- <script>dayjs().format()</script> -->
            <!-- third party css end -->

            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js" integrity="sha512-UXumZrZNiOwnTcZSHLOfcTs0aos2MzBWHXOHOuB0J/R44QB0dwY5JgfbvljXcklVf65Gc4El6RjZ+lnwd2az2g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-zoom/2.0.1/chartjs-plugin-zoom.min.js" integrity="sha512-wUYbRPLV5zs6IqvWd88HIqZU/b8TBx+I8LEioQ/UC0t5EMCLApqhIAnUg7EsAzdbhhdgW07TqYDdH3QEXRcPOQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="https://unpkg.com/feather-icons"></script>
            
            <!-- App css -->
            <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css">
            <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="light-style">
            <link href="assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style">
    
        </head>

        <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
            <!-- Begin page -->
            <div class="wrapper">
                <!-- ========== Left Sidebar Start ========== -->
                <div class="leftside-menu">
        
                    <!-- LOGO -->
                    <a href="index.php" class="logo text-center logo-light">
                        <span class="logo-lg">
                            <img src="assets/images/pnup.png" alt="" height="55">
                        </span>
                        <span class="logo-sm">
                            <img src="assets/images/pnup.png" alt="" height="20">
                        </span>
                    </a>
    
                    <!-- LOGO -->
                    <a href="index.php" class="logo text-center logo-dark">
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
                            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                                <!-- <span class="badge bg-success float-end">2</span> -->
                                <span> Dashboards </span>
                            </a>
                            <div class="collapse" id="sidebarDashboards">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="index.php">Home</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-grafik.php">Data Grafik</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-tabel.php">Data Tabel</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="side-nav-title side-nav-item mt-1">Components</li>

                       <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" class="side-nav-link">
                                <i class="uil-location-point"></i>
                                <span> Maps </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarMaps">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="maps-google.html">Google Maps</a>
                                    </li>
                                    <li>
                                        <a href="maps-vector.html">Vector Maps</a>
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
                            <li class="dropdown notification-list d-lg-none">
                                <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i class="dripicons-search noti-icon"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                    <form class="p-3">
                                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                                    </form>
                                </div>
                            </li>
                            
                            
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
                                        <h6 class="text-overflow m-0">Welcome !</h6>
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
                        <div class="app-search dropdown d-none d-lg-block">
                            <form>
                                <div class="input-group">
                                    <input type="text" class="form-control dropdown-toggle" placeholder="Search..." id="top-search">
                                    <span class="mdi mdi-magnify search-icon"></span>
                                    <button class="input-group-text btn-primary" type="submit">Search</button>
                                </div>
                            </form>

                            <div class="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                                <!-- item-->
                                <div class="dropdown-header noti-title">
                                    <h5 class="text-overflow mb-2">Found <span class="text-danger">17</span> results</h5>
                                </div>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="uil-notes font-16 me-1"></i>
                                    <span>Analytics Report</span>
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="uil-life-ring font-16 me-1"></i>
                                    <span>How can I help you?</span>
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="uil-cog font-16 me-1"></i>
                                    <span>User profile settings</span>
                                </a>

                                <!-- item-->
                                <div class="dropdown-header noti-title">
                                    <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
                                </div>

                                <div class="notification-list">
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="d-flex">
                                            <div class="w-100">
                                                <h5 class="m-0 font-14">Erwin Brown</h5>
                                                <span class="font-12 mb-0">UI Designer</span>
                                            </div>
                                        </div>
                                    </a>

                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="d-flex">
                                            <div class="w-100">
                                                <h5 class="m-0 font-14">User1</h5>
                                                <span class="font-12 mb-0">Admin</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end Topbar -->
                    
                    <!-- Start Content-->
                    <div class="container-fluid">

                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Data Grafik</h4>
                                </div>
                            </div>
                        </div>
                        <!-- end page title -->

                        <div class="row">
                            <div class="col-12 chart">
                                <div class="card tegangan">
                                    <div class="card-body">
                                        <h4 class="header-title">Chart Tegangan</h4>
                                        <div dir="ltr chart">
                                            <div class="col chart-top">
                                                <div class = "row date-picker">
                                                    <input type="datetime-local" class="form-control form-control-light chart-date" id="timeStart" onchange="startTimeFilter('chart-tegangan', this)">
                                                    <input type="datetime-local" class="form-control form-control-light chart-date" id="timeEnd" onchange="endTimeFilter('chart-tegangan', this)">
                                                </div>
                                                <div class="btn-group btn-group-sm border-0"  role="group" aria-label="Small button group">
                                                    <button type="button" class="btn btn-primary reset border-0" data-toggle="tooltip" title="Reset Zoom" onclick="zoomReset('chart-tegangan')"><i class="icon" data-feather="x"></i></button>
                                                    <button type="button" class="btn btn-primary zoom-in border-0" data-toggle="tooltip" title="Zoom In" onclick="zoomIn('chart-tegangan')"><i class="icon" data-feather="zoom-in"></i></button>
                                                    <button type="button" class="btn btn-primary zoom-out border-0" data-toggle="tooltip" title="Zoom Out" onclick="zoomOut('chart-tegangan')"><i class="icon" data-feather="zoom-out"></i></i></button>
                                                    <div class="dropdown">
                                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        </button>
                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><a class="dropdown-item" onclick="saveAsPNG('chart-tegangan')">Save as PNG</a></li>
                                                            <li><a class="dropdown-item" onclick="saveAsJPG('chart-tegangan')">Save as JPG</a></li>
                                                            <li><a class="dropdown-item" id="downloadCSV">Export data as CSV</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <canvas id="chart-tegangan"></canvas> 
                                            <div class="popup" id="popup">
                                                <h7> Masukkan rentang waktu yang sesuai !!!</h7>
                                                <button type="button" id ="popup-button" class="btn btn-primary popup-button">OK</button>
                                            </div>
                                        </div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                                <div class="card tegangan mini">
                                    <div class="card-body">
                                        <h4 class="header-title">Chart Tegangan</h4>
                                        <div dir="ltr chart">
                                            <canvas id="chart-tegangan-mini"></canvas> 
                                        </div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>
                        <!-- end row -->

                        <div class="row">
                            <div class="col-xl-4 col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="dropdown float-end">
                                            <a href="#" class="dropdown-toggle arrow-none card-drop p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" class="dropdown-item">Refresh Report</a>
                                                <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                            </div>
                                        </div>
                                        <h4 class="header-title">Views Per Minute</h4>

                                        <div id="views-min" class="apex-charts mt-2" data-colors="#0acf97"></div>

                                        <div class="table-responsive mt-3">
                                            <table class="table table-sm mb-0 font-13">
                                                <thead>
                                                    <tr>
                                                        <th>Page</th>
                                                        <th>Views</th>
                                                        <th>Bounce Rate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="javascript:void(0);" class="text-muted">/hyper/dashboard-analytics</a>
                                                        </td>
                                                        <td>25</td>
                                                        <td>87.5%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="javascript:void(0);" class="text-muted">/hyper/dashboard-crm</a>
                                                        </td>
                                                        <td>15</td>
                                                        <td>21.48%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="javascript:void(0);" class="text-muted">/ubold/dashboard</a>
                                                        </td>
                                                        <td>10</td>
                                                        <td>63.59%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="javascript:void(0);" class="text-muted">/minton/home</a>
                                                        </td>
                                                        <td>7</td>
                                                        <td>56.12%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->

                            <div class="col-xl-4 col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="dropdown float-end">
                                            <a href="#" class="dropdown-toggle arrow-none card-drop p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" class="dropdown-item">Refresh Report</a>
                                                <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                            </div>
                                        </div>
                                        <h4 class="header-title">Sessions by Browser</h4>

                                        <div id="sessions-browser" class="apex-charts mt-3" data-colors="#727cf5"></div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->

                            <div class="col-xl-4 col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="dropdown float-end">
                                            <a href="#" class="dropdown-toggle arrow-none card-drop p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" class="dropdown-item">Refresh Report</a>
                                                <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                            </div>
                                        </div>
                                        <h4 class="header-title">Sessions by Operating System</h4>

                                        <div id="sessions-os" class="apex-charts mt-3" data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"></div>

                                        <div class="row text-center mt-2">
                                            <div class="col-6">
                                                <h4 class="fw-normal">
                                                    <span>6,510</span>
                                                </h4>
                                                <p class="text-muted mb-0">Online System</p>
                                            </div>
                                            <div class="col-6">
                                                <h4 class="fw-normal">
                                                    <span>2,031</span>
                                                </h4>
                                                <p class="text-muted mb-0">Offline System</p>
                                            </div>
                                        </div>

                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>
                        <!-- end row -->

                        <div class="row">
                            <div class="col-xl-4 col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="" class="p-0 float-end">Export <i class="mdi mdi-download ms-1"></i></a>
                                        <h4 class="header-title mt-1 mb-3">Channels</h4>

                                        <div class="table-responsive">
                                            <table class="table table-sm table-centered mb-0 font-14">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th>Channel</th>
                                                        <th>Visits</th>
                                                        <th style="width: 40%;"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Direct</td>
                                                        <td>2,050</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 65%; height: 20px;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Organic Search</td>
                                                        <td>1,405</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar bg-info" role="progressbar" style="width: 45%; height: 20px;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Refferal</td>
                                                        <td>750</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 30%; height: 20px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Social</td>
                                                        <td>540</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar bg-danger" role="progressbar" style="width: 25%; height: 20px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> <!-- end table-responsive-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->

                            <div class="col-xl-4 col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="" class="p-0 float-end">Export <i class="mdi mdi-download ms-1"></i></a>
                                        <h4 class="header-title mt-1 mb-3">Social Media Traffic</h4>

                                        <div class="table-responsive">
                                            <table class="table table-sm table-centered mb-0 font-14">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th>Network</th>
                                                        <th>Visits</th>
                                                        <th style="width: 40%;"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Facebook</td>
                                                        <td>2,250</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 65%; height: 20px;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Instagram</td>
                                                        <td>1,501</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 45%; height: 20px;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Twitter</td>
                                                        <td>750</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 30%; height: 20px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>LinkedIn</td>
                                                        <td>540</td>
                                                        <td>
                                                            <div class="progress" style="height: 3px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 25%; height: 20px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> <!-- end table-responsive-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->

                            <div class="col-xl-4 col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="" class="p-0 float-end">Export <i class="mdi mdi-download ms-1"></i></a>
                                        <h4 class="header-title mt-1 mb-3">Engagement Overview</h4>

                                        <div class="table-responsive">
                                            <table class="table table-sm table-centered mb-0 font-14">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th>Duration (Secs)</th>
                                                        <th style="width: 30%;">Sessions</th>
                                                        <th style="width: 30%;">Views</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0-30</td>
                                                        <td>2,250</td>
                                                        <td>4,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>31-60</td>
                                                        <td>1,501</td>
                                                        <td>2,050</td>
                                                    </tr>
                                                    <tr>
                                                        <td>61-120</td>
                                                        <td>750</td>
                                                        <td>1,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>121-240</td>
                                                        <td>540</td>
                                                        <td>1,040</td>  
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> <!-- end table-responsive-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->

                        </div>
                        <!-- end row -->

                    </div>
                    <!-- container -->

                </div>
                <!-- content -->

                <!-- Footer Start -->
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <script>document.write(new Date().getFullYear())</script> © Politeknik Negeri Ujung Pandang
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-end footer-links d-none d-md-block">
                                    <a href="javascript: void(0);">About</a>
                                    <a href="javascript: void(0);">Support</a>
                                    <a href="javascript: void(0);">Contact Us</a>
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
                        <input class="form-check-input" type="checkbox" name="color-scheme-mode" value="light" id="light-mode-check" checked="">
                        <label class="form-check-label" for="light-mode-check">Light Mode</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="color-scheme-mode" value="dark" id="dark-mode-check">
                        <label class="form-check-label" for="dark-mode-check">Dark Mode</label>
                    </div>
       

                    <!-- Width -->
                    <h5 class="mt-4">Width</h5>
                    <hr class="mt-1">
                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="width" value="fluid" id="fluid-check" checked="">
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
                        <input class="form-check-input" type="checkbox" name="theme" value="light" id="light-check" checked="">
                        <label class="form-check-label" for="light-check">Light</label>
                    </div>

                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input" type="checkbox" name="theme" value="dark" id="dark-check">
                        <label class="form-check-label" for="dark-check">Dark</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="compact" value="fixed" id="fixed-check" checked="">
                        <label class="form-check-label" for="fixed-check">Fixed</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="compact" value="condensed" id="condensed-check">
                        <label class="form-check-label" for="condensed-check">Condensed</label>
                    </div>

                    <div class="form-check form-switch mb-1">
                        <input class="form-check-input" type="checkbox" name="compact" value="scrollable" id="scrollable-check">
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

        <script>
            feather.replace()
        </script>

        <!-- bundle -->
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app.min.js"></script>

        <!-- third party js -->
        <!-- <script src="assets/js/vendor/Chart.bundle.min.js"></script> -->
        <!-- <script src="assets/js/vendor/apexcharts.min.js"></script> -->
        <!-- <script src="assets/js/vendor/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="assets/js/vendor/jquery-jvectormap-world-mill-en.js"></script> -->
        <!-- third party js ends -->

        <!-- demo app -->
        <script src="assets/js/pages/chart.datagrafik.js"></script>
        <!-- end demo js-->
    </body>

</html>
<?php 
}else {
    header("Location: login.php");
}
?>