<?php

add_action( 'wp_enqueue_scripts', 'builderpress2_enqueue_scipts' );

function builderpress2_enqueue_scripts() {
	wp_enqueue_script( 'bundle', get_stylesheet_directory_uri() . '/dist/bundle.js', arrary('jquery'), 1, false );
}