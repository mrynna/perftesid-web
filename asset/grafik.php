<?php
    include "../api/service.data.php"; 
?>

<div class="chartBox">
    <canvas id="myChart" width=600px height=300px></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
    labels: <?php echo json_encode($arrayID);?>,
    datasets: [{
        label: 'Suhu',
        data: <?php echo json_encode($arraySuhu);?>,
        borderWidth: 1
    },
    {
        label: 'Arus',
        data: <?php echo json_encode($arrayArus);?>,
        borderWidth: 1
    }]
    },
    options: {
    animation: {
        duration: 0
    },
    scales: {
        y: {
        beginAtZero: true,
        min : 0
        }
    }
    }
});
</script>

