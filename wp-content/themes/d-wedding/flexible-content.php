<?php
/**
 * Template Name: Flexible Content Template
 *
 * @package Bitrex
 * @since 1.0
 */
?>

<!DOCTYPE html>
<html lang="<?php get_locale() ?>">
<head>
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <?php wp_head() ?>
</head>

<body <?php body_class() ?>>

<div id="app" data-page-id="<?= get_the_ID() ?>" data-site-id="<?= get_current_blog_id() ?>">

</div>
<?php wp_footer() ?>
</body>
</html>