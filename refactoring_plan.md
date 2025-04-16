# Refactoring Plan for index.html

## Overview

This plan outlines the steps to refactor the `index.html` file by extracting distinct sections into individual HTML files within a `tpl` directory and then creating an `index.php` file that includes these sections using PHP's `include` function.

## Steps

1.  **Create a `tpl` directory:** This directory will hold the extracted HTML sections.
2.  **Extract the `<nav>` section (lines 14-51) into `tpl/navbar.html`.**
3.  **Extract the `<section id="home">` section (lines 53-62) into `tpl/hero.html`.**
4.  **Extract the `<section id="about">` section (lines 64-93) into `tpl/about.html`.**
5.  **Extract the `<section id="services">` section (lines 95-122) into `tpl/services.html`.**
6.  **Extract the `<section id="projects">` section (lines 124-151) into `tpl/projects.html`.**
7.  **Extract the `<section id="partners">` section (lines 153-171) into `tpl/partners.html`.**
8.  **Extract the `<section id="news">` section (lines 173-203) into `tpl/news.html`.**
9.  **Extract the `<section id="gallery">` section (lines 205-235) into `tpl/gallery.html`.**
10. **Extract the `<section class="contact">` section (lines 237-304) into `tpl/contact.html`.**
11. **Extract the `<section id="stats">` section (lines 306-339) into `tpl/stats.html`.**
12. **Extract the `<section id="testimonials">` section (lines 341-386) into `tpl/testimonials.html`.**
13. **Extract the `<section id="faq">` section (lines 388-430) into `tpl/faq.html`.**
14. **Extract the `<footer>` section (lines 432-484) into `tpl/footer.html`.**
15. **Create `index.php` and include the extracted sections using PHP's `include` function.** The `index.php` file will also contain the `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags, as well as the links to CSS and JavaScript files.

## Visualization

```mermaid
graph TD
    A[index.html] --> B(tpl/navbar.html)
    A --> C(tpl/hero.html)
    A --> D(tpl/about.html)
    A --> E(tpl/services.html)
    A --> F(tpl/projects.html)
    A --> G(tpl/partners.html)
    A --> H(tpl/news.html)
    A --> I(tpl/gallery.html)
    A --> J(tpl/contact.html)
    A --> K(tpl/stats.html)
    A --> L(tpl/testimonials.html)
    A --> M(tpl/faq.html)
    A --> N(tpl/footer.html)
    O[index.php] --> B
    O --> C
    O --> D
    O --> E
    O --> F
    O --> G
    O --> H
    O --> I
    O --> J
    O --> K
    O --> L
    O --> M
    O --> N