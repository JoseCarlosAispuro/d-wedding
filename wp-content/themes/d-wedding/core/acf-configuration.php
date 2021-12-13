<?php

function acf_json_save_point($path)
{
    $path = get_template_directory() . '/acfs';
    return $path;
}

add_filter('acf/settings/save_json', 'acf_json_save_point');

function my_acf_json_load_point( $paths )
{
    unset($paths[0]);
    $paths[] = get_template_directory() . '/acfs';
    return $paths;
}

add_filter('acf/settings/load_json', 'my_acf_json_load_point');
