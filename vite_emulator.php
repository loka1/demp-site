<?php
$output = '<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Dalba Group - مجموعة دلبا | رواد التطور الاقتصادي</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="styles.css" />
</head>
<body>';

// Add navbar and hero
ob_start();
include 'tpl/navbar.html';
include 'tpl/hero.html';
$output .= ob_get_clean();

// Process sections
$sections = [
    'tpl/about.html' => '1animate__fadeInLeft',
    'tpl/vision.html' => '1animate__fadeInRight',
    'tpl/mission.html' => '1animate__zoomIn',
    'tpl/services.html' => '1animate__fadeInLeft',
    'tpl/news.html' => '1animate__fadeInLeft',
    'tpl/gallery.html' => '1animate__fadeInRight',
    'tpl/contact.html' => '1animate__fadeInLeft',
    'tpl/map.html' => '1animate__fadeInRight',
    'tpl/ads.html' => '1animate__fadeInRight',
    'tpl/faq.html' => '1animate__zoomIn',
    'tpl/footer.html' => '1animate__fadeInLeft'
];

foreach ($sections as $template => $animation) {
    ob_start();
    include $template;
    $sectionContent = ob_get_clean();
    $output .= "<section class=\"animate-on-scroll\" data-animation=\"$animation\">$sectionContent</section>";
}

// Add footer scripts
$output .= '<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
<script>
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(\'.navbar\').addClass(\'scrolled\');
        } else {
            $(\'.navbar\').removeClass(\'scrolled\');
        }
    });
    $(\'.counter\').counterUp({
        delay: 10,
        time: 1000
    });
    $(\'a[href*="#"]\').on(\'click\', function(e) {
        e.preventDefault();
        $(\'html, body\').animate({
            scrollTop: $($(this).attr(\'href\')).offset().top - 70
        }, 500);
    });
</script>
<script src="js/scroll-animation.js"></script>
</body>
</html>';

// Write to file
if (file_put_contents('index.html', $output) !== false) {
    echo "Successfully wrote HTML content to output.html" . PHP_EOL;
} else {
    echo "Failed to write HTML content to output.html" . PHP_EOL;
    exit(1);
}
?>