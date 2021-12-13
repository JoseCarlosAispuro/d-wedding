<?php

add_filter('show_admin_bar', 'is_blog_admin');

//Disable Gutemberg from everywhere
function not_load_gutenberg_for_post_type( $can_edit, $post ) {
    return false;
}

add_filter( 'use_block_editor_for_post', 'not_load_gutenberg_for_post_type', 15, 2);