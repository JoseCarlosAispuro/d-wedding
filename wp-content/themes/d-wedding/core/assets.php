<?php

wp_enqueue_style( 'd-wedding-styles', get_template_directory_uri().'/public/css/app.css', array(), '1.0.0');
wp_enqueue_script( 'd-wedding-script', get_template_directory_uri().'/public/js/App.js', array(), '1.0.0', true);