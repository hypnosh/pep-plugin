<?
/*
Author: 13 Llama Studio
*/

add_shortcode("all_images_today", "pep_all_images_today");
function pep_all_images_today() {
	$args = array(
		'post_type'		=> 'attachment',
		'post_status'	=> 'publish',
	);
	$images = get_posts($args);

	foreach ($images as $img) {
		echo "<img src='" . $img->guid . "'>";
	}
} // pep_all_images_today
