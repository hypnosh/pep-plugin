/* scripts.js */

( function($) {
	console.log('jquery');
	$(document).on('click', ".js-reject-image", function(e) {
		e.preventDefault();

		console.log("x");
		$(this).toggleClass("rejected");
	}); // js-reject-image
	$(document).on('click', ".js-reject-images", function(e) {
		e.preventDefault();
		
		console.log("y");
		var ids = $(".rejected").map( function() {
			return $(this).data('id');
		});
		console.log(ids);
		$.post( "http://pro.pep.photo/pep/v1" + "/reject-image", {ids: ids}, function(response) {
			if (!response) {
				$(".rejected").hide();
			}
		});
	}); // js-reject-images
	console.log('end of jquery');
})(jQuery); // $