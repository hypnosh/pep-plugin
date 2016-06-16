<?php
/*
 * Plugin Name: Pep's Plugin
 * Plugin Author: Amit Sharma
 * Site URL: http://pro.pep.photo/
 * Tags: pep,
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
