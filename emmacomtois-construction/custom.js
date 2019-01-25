$(document).ready(function() {
	$(".collapseBtn").click(function() {
		$('.collapse').collapse('toggle');

		const text = $(this).find("span").text();
		if (text === "View Resume") {
			$(this).find("span").text("Close Resume");
		} else {
			$(this).find("span").text("View Resume");
		}
		$(this).find("i").toggleClass("fa-plus").toggleClass("fa-minus");
	}); // click
}); // ready