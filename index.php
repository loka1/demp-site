<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dalba Group - مجموعة دلبا | رواد التطور الاقتصادي</title>
    <!-- Bootstrap RTL CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'tpl/navbar.html'; ?>
    <?php include 'tpl/hero.html'; ?>
    <?php
    $sections = [
        'tpl/about.html' => '1animate__fadeInLeft',
        'tpl/vision.html' => '1animate__fadeInRight',
        'tpl/mission.html' => '1animate__zoomIn',
        'tpl/services.html' => '1animate__fadeInLeft',
        // 'tpl/projects.html' => '1animate__fadeInRight',
        // 'tpl/partners.html' => '1animate__zoomIn',
        'tpl/news.html' => '1animate__fadeInLeft',
        'tpl/gallery.html' => '1animate__fadeInRight',
        // 'tpl/stats.html' => '1animate__zoomIn',
        'tpl/contact.html' => '1animate__fadeInLeft',
        // 'tpl/testimonials.html' => '1animate__fadeInRight',
        'tpl/faq.html' => '1animate__zoomIn',
        'tpl/footer.html' => '1animate__fadeInLeft',
    ];

    foreach ($sections as $template => $animation) {
        echo "<section class=\"animate-on-scroll\" data-animation=\"$animation\">";
        include $template;
        echo "</section>";
    }
    ?>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- jQuery for animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- Waypoints for triggering animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <!-- Counter Up for statistics -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
    <!-- Custom JavaScript -->
    <script>
        // Navbar scroll effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });

        // Counter animation
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // Smooth scrolling
        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 70
            }, 500);
        });
    </script>
        <script src="js/scroll-animation.js"></script>
</body>
</html>