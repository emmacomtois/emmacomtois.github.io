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

var initialSrc = "images/index/portrait.png";
var scrollSrc = "images/index/logo.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 100)
      $(".logo-index").attr("src", scrollSrc);
   else
      $(".logo-index").attr("src", initialSrc);
});

$(document).ready(function() {
	$("#menuBtn").click(function(event) {
		event.preventDefault();
		$(".nav-col").toggleClass("d-none d-md-block");
		$(this).find("i").toggleClass("fa-bars").toggleClass("fa-times");
	}); // click
}); // ready