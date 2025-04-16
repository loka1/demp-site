<?php

// Initialize cURL session
$ch = curl_init("http://127.0.0.1:7152/index.php");

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute cURL session
$html = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo "cURL error: " . curl_error($ch) . PHP_EOL;
    exit(1);
}

// Close cURL session
curl_close($ch);

// Write HTML content to dist.html
$file = fopen("index.html", "w");
if ($file) {
    if (fwrite($file, $html) !== false) {
        echo "Successfully wrote HTML content to dist.html" . PHP_EOL;
    } else {
        echo "Failed to write HTML content to dist.html" . PHP_EOL;
    }
    fclose($file);
} else {
    echo "Failed to open dist.html for writing" . PHP_EOL;
    exit(1);
}

?>