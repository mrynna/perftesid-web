<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) { 
  $user_username = $_SESSION['user_username'];
  $user_type = $_SESSION['user_type'];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>PV Performance Tester</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/images/pnup.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/landing-page.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="landing-page">PERFTESID</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">Topik</a></li>
          <li><a class="nav-link scrollto" href="#why-us">Tujuan Penelitian</a></li>
          <li><a class="nav-link   scrollto" href="#services">Parameter Pengukuran</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#contact">Kontak</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up" data-aos-delay="200">
          <h1>Performance Tester</h1>
          <h2>Photovoltaic Panel</h2>
          <?php
          if (!isset($_SESSION['user_id']) && !isset($_SESSION['user_email'])) {
            ?>
          <div class="form-login">
            <form class="form" action="api/auth.php" method="post">
              <?php if (isset($_GET['error'])) { ?>
                <div class="alert alert-danger" role="alert">
                  <?= htmlspecialchars($_GET['error']) ?>
                </div>
              <?php } ?>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address or Username
                </label>
                <input type="text" name="email" value="<?php if (isset($_GET['email']))
                  echo (htmlspecialchars($_GET['email'])) ?>" class="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password
                </label>
                <input type="password" class="form-control" name="password" id="exampleInputPassword1">
              </div>
              <div class="d-flex justify-content-center justify-content-between">
                <button type="submit" class="btn btn-primary">LOGIN
                </button>
                <a href="https://youtu.be/I-mZHo0-b_s" class="glightbox btn-watch-video"><i
                    class="bi bi-play-circle"></i><span>Lihat Video</span></a>
              </div>
            </form>
          </div>
          <?php
          } else {
          ?>
            <div class="d-flex flex-column justify-content-left pt-2">
              <div class="d-flex flex-row justify-content-left">
                <h2 class="pr-2 pb-0">Hai <?php echo $user_username ?>!  </h2>
                <a onclick="window.location.href = 'logout.php';" class="glightbox btn-watch-video logout"><h4>Logout</h4><i class="bi bi-box-arrow-right"></i></a>
              </div>
              <div class="d-flex justify-content-start">
                <a href="index" class="btn btn-primary dashboard"><span>Dashboard  </span><i class="bi bi-graph-up-arrow"></i></a>
                <a href="https://youtu.be/I-mZHo0-b_s" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Lihat Video</span></a>
              </div>
            </div>
          <?php
          }
          ?>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="assets/images/landing-page/hero-img.png" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

  </section><!-- End Hero -->

  <main id="main">
    <!-- ======= Topics Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Topik</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              Di era modern ini, perkembangan teknologi di bidang energi terbarukan kian berkembang pesat.
               Salah satunya adalah energi sinar matahari. Bertambahnya kebutuhan akan energi bagi kalangan masyarakat 
               juga menjadi salah satu alasan berkembangnya teknologi energi terbarukan.
            </p>
            <p>
            Photovoltaic system merupakan salah satu contoh devais yang mampu 
            mengubah energi matahari menjadi energi listrik secara langsung, sehingga 
            tidak lagi memanfaatkan bahan bakar minyak yang lambat laun akan habis.
            </p>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            Panel surya adalah salah satu teknologi yang banyak digunakan untuk menghasilkan 
            energi lisrtik dari sinar matahari. Namun, performa panel surya dapat dipengarhui 
            oleh beberapa faktor, seperti suhu lingkungan, iradiasi matahari, dan kondisi cuaca. 
            Oleh karena itu, penting untuk mengukur performa panel surya secara akurat dan efisien. 
            Penelitian ini bertujuan untuk mengukur performa panel surya dengan membuat sebuah perangkat
             yang mampu mengukur tegangan hubung buka, arus hubung singkat, suhu lingkungan, suhu panel, 
             dan iradiasi matahari pada panel photovoltaic.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ======= Tujuan Penelitian Section ======= -->
    <section id="why-us" class="why-us section-bg">
      <div class="container-fluid" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-7 tujuan">

            <div class="content tujuan">
              <h3><strong>Tujuan</strong> Penelitian</h3>
            </div>
            <div class="row content tujuan">
              <div class="col-lg-6">
                <h5><i class="ri-check-double-line"></i> Dapat merancang dan membuat performance tester untuk panel photovoltaic.</h5>
              </div>
              <div class="col-lg-6">
                <h5><i class="ri-check-double-line"></i> Dapat menganalisis performa dari performance tester untuk panel photovoltaic.</h5>
              </div>
            </div>

          </div>

          <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style='background-image: url("assets/images/landing-page/why-us.png");' data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>

      </div>
    </section><!-- End Why Us Section -->

    <!-- ======= Parameter Pengukuran Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Parameter Pengukuran</h2>
          <p>Pengukuran performa sebuah panel photovoltaic dapat dilakukan pada berbagai kondisi dengan mengevaluasi performa parameter-parameter dari PV panel, 
            seperti tegangan hubung buka (Voc), Arus hubung singkat (Isc), suhu lingkungan, suhu panel, dan iradiasi matahari.</p>
        </div>

        <div class="row card-parameter">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch parameter" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-lightning-charge"></i></div>
              <h4>Tegangan Hubung Buka (Voc)</h4>
              <p>Pengukuran terhadap tegangan (V) dilakukan pada terminal positif dan negatif dari modul sel surya dengan 
                tidak menghubungkan sel surya dengan komponen lainnya. </p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 parameter" data-aos="zoom-in"
            data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-lightning-charge-fill"></i></div>
              <h4>Arus Hubung Singkat (Isc)</h4>
              <p>Untuk mengukur arus hubung singkat, maka kedua terminal dari modul dibuat rangkaian hubung singkat sehingga tegangannya menjadi nol dan arusnya maksimum. 
                </p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 parameter" data-aos="zoom-in"
            data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-thermometer-low"></i></div>
              <h4>Suhu Lingkungan</h4>
              <p>Suhu lingkungan ialah tingkatan derajat panas atau dingin yang berlaku dalam ruang sekitar.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 parameter" data-aos="zoom-in"
            data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-thermometer-half"></i></div>
              <h4>Suhu Panel</h4>
              <p>Suhu panel merupakan suhu yang terdapat atau yang berada pada cell dari panel surya.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 parameter" data-aos="zoom-in"
            data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-brightness-high"></i></div>
              <h4>Iradiasi Matahari</h4>
              <p>Iradiasi adalah besaran yang mengukur energi per satuan luas radiasi 
                matahari yang terjadi pada permukaan tertentu</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Dosen Pembimbing</h2>
        </div>

        <div class="row">

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/images/landing-page/team/team-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Ahmad Rosyid Idris, S.T., M.T.</h4>
                <span>Dosen Pembimbing I</span>
                <!-- <div class="social"> -->
                  <!-- <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a> -->
                <!-- </div> -->
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/images/landing-page/team/team-2.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Usman, S.T., M.T.</h4>
                <span>Dosen Pembimbing II</span>
                <!-- <div class="social"> -->
                  <!-- <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a> -->
                <!-- </div> -->
              </div>
            </div>
          </div>

      <div class="section-title pt-5">
        <h2>Team</h2>
      </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/images/landing-page/team/team-3.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Gunawan</h4>
                <span>Mahasiswa</span>
                <!-- <div class="social"> -->
                  <!-- <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a> -->
                <!-- </div> -->
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/images/landing-page/team/team-4.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Muhammad Riyan Ardiyansyah</h4>
                <span>Mahasiswa</span>
                <!-- <div class="social"> -->
                  <!-- <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a> -->
                <!-- </div> -->
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Team Section -->

    
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Kontak</h2>
        </div>

        <div class="row">

          <div class="col-lg-5 contact">
            <div class="info">
              <div class="row">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Alamat:</h4>
                  <p>Jalan Perintis Kemerdekaan KM.10 Tamalanrea , Makassar 90245</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>pnup@poliupg.ac.id</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Kontak:</h4>
                  <p style="margin-bottom: 0px;">+62 (411) 585365 | +62 (411) 585367 | +62 (411) 585368</p>
                </div>
              </div>
              <div class=map>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31790.325384078515!2d119.48213520109655!3d-5.137377168360036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPoliteknik%20Negeri%20Ujung%20Pandang!5e0!3m2!1sid!2sid!4v1688988384743!5m2!1sid!2sid" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-newsletter">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>PERFTESID</h3>
            <p>
              Politeknik Negeri Ujung Pandang <br>
              Makassar, Sulawesi Selatan<br>
              Indonesia <br><br>
              <strong>Phone:</strong> +62 (411) 585365<br>
              <strong>Email:</strong> pnup@poliupg.ac.id<br>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container footer-bottom clearfix" style="color: rgb(232, 230, 227); padding-top: 10px; padding-bottom: 10px; max-width: 720px; font-size: 14px;">
      <div class="copyright" style="float: left;">
        © Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
      </div>
      <div class="credits" style="font-size: 13px; float:right;">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer><!-- End Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>