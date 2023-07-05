$(document).ready(function() {
    selesai();
});
 
function selesai() {
	setTimeout(function() {
		update();
		selesai();
	}, 200);
}
 
function update() {
	$.getJSON("../../api/service.data.php", function(data) {
		$("table").empty();
		var no = 1;
		consolo
	});
}