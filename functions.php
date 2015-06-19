<?php
/**
 * Custom functions that load before the parent theme's functions.php file.
 */


// Enqueue our custom CSS and Javascript.
function ad_styles_scripts() {
	$theme_uri = get_stylesheet_directory_uri();
	wp_enqueue_style( 'ad-style', $theme_uri . '/dist/css/styles.d41d8cd9.min.css' );
	wp_enqueue_script( 'ad-js', $theme_uri . '/dist/js/scripts.d9a3aad4.min.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'ad_styles_scripts', 99 );


// Add a custom footer to the admin menu.
function ad_custom_admin_footer() {
	echo '<span id="footer-thankyou">Theme developed by <a href="http://artsdigital.co" ' 
		. 'target="_blank">ArtsDigital</a></span>.';
}
add_filter( 'admin_footer_text', 'ad_custom_admin_footer' );


// Hide developer-only and unused admin pages.
function ad_remove_menu_items() {

	// Require an @artsdigital.co email address.
	if( strpos( wp_get_current_user()->user_email, '@artsdigital.co' ) === false):
	
		// Plugin menus
		remove_menu_page( 'edit.php?post_type=acf-field-group' ); // ACF
		remove_menu_page( 'cptui_main_menu' ); // CPT UI
		
		// WP settings
		define( 'DISALLOW_FILE_EDIT', true ); // remove theme editor
		remove_submenu_page( 'options-general.php', 'options-media.php' );
		remove_submenu_page( 'options-general.php', 'options-permalink.php' );
	endif;
}
add_action( 'admin_menu', 'ad_remove_menu_items' );


	       /*/ DEBUGGING BLOCK /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
       //                                                                             //
           $var = 'foo';
           echo "<pre style='font:14px Courier; padding:10px; border-radius:10px;";
           echo "color:#0E0; -webkit-box-shadow: 0 0 12px #000; margin:20px 0;";
           echo "background:rgba(0,0,0,.9);'>"; var_dump($var); echo "</pre>";
  //                                                                             //
 /////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////*/
