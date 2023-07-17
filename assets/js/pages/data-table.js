$(document).ready(() => {
  $('#filter').click(() => {
      var from_date = $('#from_date').val();
      var to_date = $('#to_date').val();
      if (from_date != '' && to_date != '') {
          $.ajax({
              url: "api/getFilterTable.php",
              method: "POST",
              data: { from_date: from_date, to_date: to_date },
              success: function (data) {
                  $('#order_table').html(data);
              }
          });
      }
      else {
          alert("Please Select Date");
      }
  });
});  
