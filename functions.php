<?php
/**
 * Custom functions that load before the parent theme's functions.php file.
 */


/**
 * Register and enqueue the requred CSS and Javascript.
 */
function custom_styles_scripts() {

    $theme_uri = get_stylesheet_directory_uri();

    // CSS for the parent theme.
    wp_register_style( 'parent-css', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'parent-css' );
    
    // Our style.css file, which inherits the parent theme's CSS.
    wp_register_style(
        'child-css',
        $theme_uri . '/css/custom.css',
        array( 'parent-css' )
    );
    wp_enqueue_style( 'child-css' );
    
    // Scripts that will appear in the header.
    // wp_register_script( 'typekit', 'http://use.typekit.net/fah7euc.js' );
    // wp_enqueue_script( 'typekit' );
    
    // Scripts that will appear in the footer.
    wp_register_script(
        'custom-js',
        $theme_uri . '/js/custom.js',
        array( 'jquery' ),
        false,
        true
    );
	wp_enqueue_script( 'custom-js' );
	
	// Make some PHP data available to our custom Javascript file.
	$data = array( 'url' => __( $theme_uri ) );
	wp_localize_script('custom-js', 'SiteData', $data);
}
add_action( 'wp_enqueue_scripts', 'custom_styles_scripts' );
