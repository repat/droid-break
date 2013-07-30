console.log("testtesttest");

$(document).ready(function(){
	console.log("document ready");
	
	$("dt").click(function() {
		console.log("dt clicked");
		$(this).next("dd").slideToggle("fast");
		console.log("dd toggled");
	    $(this).children("a").toggleClass("open close");
		console.log("a class switched");
	    });
});
