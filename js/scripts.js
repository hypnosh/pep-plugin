/* scripts.js */

( function($) {
	console.log('jquery');
	$(".js-reject-image").click( function(e) {
		e.preventDefault();

		console.log("x");
		$(this).toggleClass("rejected");
	}); // js-reject-image
	$(".js-reject-images").click(function(e) {
		e.preventDefault();
		
		console.log("y");
		var ids = $(".rejected").map( function() {
			return $(this).data('id');
		});
		$.post(
			"http://pro.pep.photo/pep/v1" + "/reject-image", 
			{ids: ids}, 
			function(response) {
				if (!response) {
					$(".rejected").hide();
				}
			});
	}); // js-reject-images
	console.log('end of jquery');
})(jQuery); // $