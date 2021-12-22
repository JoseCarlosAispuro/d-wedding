<?php

$core = [
    'acf-configuration',
    'assets',
    'theme-configuration'
];

array_map(function ($coreFileNames) {
    $path = "core/{$coreFileNames}.php";
    require_once $path;
}, $core);

add_filter('show_admin_bar', 'is_blog_admin');