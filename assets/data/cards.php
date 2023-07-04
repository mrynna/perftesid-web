<?php
    include ('../../api/connection.php');
    include ('../../api/service.data.php');
?>

<div class="row">
    <div class="col-lg-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-12">
                        <h4 class="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Tegangan (Voc)</h4>
                        <h3 class="my-2 py-1">
                            <?= $tegangan; ?> V
                        </h3>
                        <p class="mb-0 text-muted">
                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> Volt</span>
                        </p>
                    </div>
                </div> <!-- end row-->
            </div> <!-- end card-body -->
        </div> <!-- end card -->
    </div> <!-- end col -->

    <div class="col-lg-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-12">
                        <h4 class="text-muted fw-normal mt-0 text-truncate" title="New Leads">Arus</h4>
                        <h3 class="my-2 py-1">
                            <?= $arus; ?> A
                        </h3>
                        <p class="mb-0 text-muted">
                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> Ampere</span>
                        </p>
                    </div>
                </div> <!-- end row-->
            </div> <!-- end card-body -->
        </div> <!-- end card -->
    </div> <!-- end col -->


    <div class="col-lg-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-12">
                        <h4 class="text-muted fw-normal mt-0 text-truncate" title="Deals">Suhu Panel</h4>
                        <h3 class="my-2 py-1">
                            <?= $suhuPanel; ?> C
                        </h3>
                        <p class="mb-0 text-muted">
                            <span class="text-danger me-2"><i class="mdi mdi-arrow-up-bold"></i> Celcius</span>
                        </p>
                    </div>
                </div> <!-- end row-->
            </div> <!-- end card-body -->
        </div> <!-- end card -->
    </div> <!-- end col -->

    <div class="col-lg-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-12">
                        <h4 class="text-muted fw-normal mt-0 text-truncate" title="Booked Revenue">Suhu Lingkungan</h4>
                        <h3 class="my-2 py-1">
                            <?= $suhuLingkungan; ?> C
                        </h3>
                        <p class="mb-0 text-muted">
                            <span class="text-danger me-2"><i class="mdi mdi-arrow-up-bold"></i> Celcius</span>
                        </p>
                    </div>
                </div> <!-- end row-->
            </div> <!-- end card-body -->
        </div> <!-- end card -->
    </div> <!-- end col -->

    <div class="col-lg-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-12">
                        <h4 class="text-muted fw-normal mt-0 text-truncate" title="New Leads">Iradiasi</h4>
                        <h3 class="my-2 py-1">
                            <?= $iradiasi; ?> w/m2
                        </h3>
                        <p class="mb-0 text-muted">
                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> w/m2</span>
                        </p>
                    </div>
                </div> <!-- end row-->
            </div> <!-- end card-body -->
        </div> <!-- end card -->
    </div> <!-- end col -->
</div>
<!-- end row -->

