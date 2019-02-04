$(document).ready(function() {
	$(".collapseBtn").click(function() {
		$('.collapse').collapse('toggle');

		const text = $(this).find("span").text();
		if (text === "+ View Resume") {
			$(this).find("span").text("- Close Resume");
		} else {
			$(this).find("span").text("+ View Resume");
		};
	}); // click
}); // ready