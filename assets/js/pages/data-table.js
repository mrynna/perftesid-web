$(document).ready(function() {
    var table = $("#table-otomatis").DataTable({
        scrollY: 600,
        // scroller: true,
        responsive: true
    })
    // console.log(table)
    $("#filter").on("click", function() {
        var from_date = $('#from_date').val();
        var to_date = $('#to_date').val();
        if (from_date != "" && from_date != undefined && to_date != "" && to_date != undefined && from_date < to_date && from_date != to_date) {
            $.ajax({
                url: "api/filterTableOtomatis.php",
                method: "POST",
                data: { from_date: from_date, to_date: to_date },
                success: function (data) {
                    $('#order_table').html(data);
                    table.destroy()
                    table = $("#table-otomatis").DataTable({
                        scrollY: 600,
                        responsive: true
                    })
                },
                error: function () {
                    alert("Data not ready, try refresh the page");
                }
            });
        }
        else {
            document.getElementById("popup").classList.add('active')
        }
    })
    document.getElementById("popup-button").addEventListener("click", function(){
        document.getElementById("popup").classList.remove('active')
    })
})