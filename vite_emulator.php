<?php
class HtmlBuilder {
    private $output;
    private $cssContent;
    private $jsContent;

    public function __construct() {
        $this->output = '<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Dalba Group - مجموعة دلبا | رواد التطور الاقتصادي</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="output.css" />
</head>
<body>';

        $this->cssContent = file_get_contents('styles.css') . "\n\n/* Template CSS */\n";
        $this->jsContent = file_get_contents('js/scroll-animation.js') . "\n\n/* Template JS */\n";
    }

    private function extractContent($file, $pattern) {
        $content = file_get_contents($file);
        preg_match_all($pattern, $content, $matches);
        return implode("\n", $matches[1] ?? []);
    }

    private function removeTags($content, $pattern) {
        return preg_replace($pattern, '', $content);
    }

    public function addTemplate($path) {
        ob_start();
        include $path;
        $content = ob_get_clean();
        
        $this->output .= $this->removeTags(
            $this->removeTags($content, '/<style[^>]*>.*?<\/style>/s'),
            '/<script[^>]*>.*?<\/script>/s'
        );
        
        $this->cssContent .= $this->extractContent($path, '/<style[^>]*>(.*?)<\/style>/s');
        $this->jsContent .= $this->extractContent($path, '/<script[^>]*>(.*?)<\/script>/s');
        
        return $this;
    }

    public function addSection($path, $animation) {
        $this->addTemplate($path);
        $this->output .= "<section class=\"animate-on-scroll\" data-animation=\"$animation\">";
        return $this;
    }

    public function build() {
        $this->output .= '<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
<script src="output.js"></script>
</body>
</html>';

        return $this;
    }

    public function save() {
        $files = [
            'index.html' => $this->output,
            'output.css' => $this->cssContent,
            'output.js' => $this->jsContent
        ];

        foreach ($files as $path => $content) {
            if (file_put_contents($path, $content) === false) {
                throw new Exception("Failed to write $path");
            }
            echo "Successfully wrote content to $path" . PHP_EOL;
        }
    }
}

// Usage
try {
    $builder = new HtmlBuilder();
    
    // Add navbar and hero
    $builder->addTemplate('tpl/navbar.html')
            ->addTemplate('tpl/hero.html');
    
    // Add sections with animations
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
    
    foreach ($sections as $path => $animation) {
        $builder->addSection($path, $animation);
    }
    
    $builder->build()->save();
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . PHP_EOL;
    exit(1);
}