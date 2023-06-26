<?php
    include '../api/service.data.php';
?>  
    
<div class="data-flex">
    <div class="card-container">
    <div class="card text-center mt-3">
        <div class="card-header">Tegangan</div>
        <div class="card-body">
            <h5 class="card-title">
            <?=$tegangan;?> V
            </h5>
        </div>
        <div class="card-footer text-muted">1 Hari</div>
    </div>
    </div>
    <div class="card-container">
    <div class="card text-center mt-3">
        <div class="card-header">Arus</div>
        <div class="card-body">
            <h5 class="card-title">
            <?=$arus;?>
            A
            </h5>
        </div>
        <div class="card-footer text-muted">1 Hari</div>
    </div>
    </div>
    <div class="card-container">
    <div class="card text-center mt-3">
        <div class="card-header">Suhu</div>
        <div class="card-body">
            <h5 class="card-title">
            <?=$suhuPanel;?>
            C
            </h5>
        </div>
        <div class="card-footer text-muted">1 Hari</div>
    </div>
    </div>
</div>