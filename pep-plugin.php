<?php
/*
 * Plugin Name: Pep's Plugin
 * Version: 0.1.0
 * Plugin Author: Amit Sharma
 * Site URL: http://pro.pep.photo/
 * Tags: pep,
 */

add_action("wp_enqueue_scripts", "pep_enqueue");
function pep_enqueue() {
	// wp_enqueue_script('jquery-ui-datepicker');
	wp_enqueue_style("pep-styles", plugins_url("/css/styles.css?2", __FILE__));
	wp_enqueue_script("pep-scripts", plugins_url("/js/scripts.js?7", __FILE__), array('jquery'));
} // pep_enqueue

add_shortcode("all_images_today", "pep_all_images_today");
function pep_all_images_today() {
	$args = array(
		'post_type'		=> 'attachment',
		'post_status'	=> 'inherit',
		'posts_per_page'=> -1,
	);
	$images = get_posts($args);
	echo "<div class='spacer'>";
	echo "</div>";
	echo "<ul class='grid-images'>";
	foreach ($images as $img) {
		echo "<li class='grid-image js-reject-image' data-id='" . $img->ID . "'>";
			echo "<img src='" . $img->guid . "' class='grid-image-img'>";
		echo "</li>";
	}
	echo "</ul>";
	echo "<button class='js-reject-images reject-images'>Remove Selected</button>";
} // pep_all_images_today

function pep_reject_image() {
	foreach($_POST['ids'] as $id) {
		if (false !== wp_delete_attachment( $id, false )) {
			return false;
		} // some error
	}
	return $_POST['ids'];
} // pep_reject_image
add_action("rest_api_init", function() {
	register_rest_route('pep/v1', '/reject-image', array(
			'methods'	=> 'POST',
			'callback'	=> 'pep_reject_image',
		)
	);
}); // rest_api_init