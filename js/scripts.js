/* scripts.js */

$( function() {
	console.log('jquery');
	$(".js-reject-image").click( function() {
		$(this).closest(".grid-image").toggleClass("rejected");
	}); // js-reject-image
	$(".js-reject-images").click(function(e) {
		e.preventDefault();
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

}); // $