let url, urlFilter
urlFilter = 'api/filterTableOtomatis.php'

$(document).ready(function() {
    
    var table = $("#table-otomatis").DataTable({
        scrollY: 600,
        // scroller: true,
        responsive: true
    })

    $("li").on("click", function(){
        $.ajax({
            url: url,
            method: "POST",
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
    })
    // console.log(table)
    $("#filter").on("click", function() {
        var from_date = $('#from_date').val();
        var to_date = $('#to_date').val();
        if (from_date != "" && from_date != undefined && to_date != "" && to_date != undefined && from_date < to_date && from_date != to_date) {
            $.ajax({
                url: urlFilter,
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

const changeTable = (table) => {
    switch(table){
        case 'otomatis':
            title = 'Data Otomatis'
            url = 'api/getTableOtomatis.php'
            urlFilter = 'api/filterTableOtomatis.php'
            console.log(url)
            console.log(urlFilter)
            console.log("ini otomatis")
            break
        case 'manual':
            title = 'Data Manual'
            url = 'api/getTableManual.php'
            urlFilter = 'api/filterTableManual.php'
            console.log(url)
            console.log(urlFilter)
            console.log("ini manual")
            break
        case 'offline-otomatis':
            title = 'Data Otomatis Offline'
            url = 'api/getTableOffOtomatis.php'
            urlFilter = 'api/filterTableOffOtomatis.php'
            console.log(url)
            console.log(urlFilter)
            console.log("ini offline otomatis")
            break
        case 'offline-manual':
            title = 'Data Manual Offline'
            url = 'api/getTableOffManual.php'
            urlFilter = 'api/filterTableOffManual.php'
            console.log(url)
            console.log(urlFilter)
            console.log("ini offline manual")
            break
    }
    document.getElementById("dropdown-title").innerHTML = title
}