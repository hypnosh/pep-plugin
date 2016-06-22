/* scripts.js */

( function($) {
	$(document).on('click', ".js-reject-image", function(e) {
		e.preventDefault();

		$(this).toggleClass("rejected");
	}); // js-reject-image
	$(document).on('click', ".js-reject-images", function(e) {
		e.preventDefault();
		
		var ids = $(".rejected").map( function() {
			console.log($(this).data('id'));
			if ($(this).data('id') > 0) {
				return $(this).data('id');
			}
		}).get();
		console.log(ids);
		if (ids.length > 0) {
			var earlier = $(this).html();
			$(this).html("Removing").prop('disabled', true);
			jQuery.post( "http://pro.pep.photo/wp-json/pep/v1" + "/reject-image", {ids: ids}, function(response) {
				if (!response) {
					$(".rejected").hide();
				}
				$(this).html(earlier).removeProp('disabled');
			}.bind(this));
		} 
	}); // js-reject-images
})(jQuery); // $