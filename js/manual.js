$(function () {

	$("a.toggle").click(function (e) {
		$(this).toggleClass("open");
		var element = $(this).attr("rel");		
		$("#"+element).toggle();		
		return false;
	
	});
	
	$(".tooltip").tipsy({
		gravity: 's',
		fade: true
	});

	
	// check is labelify loaded
	if(jQuery().labelify){
		$("input").labelify({
			labelledClass: "labelHighlight"
		});
	}	
	
});

