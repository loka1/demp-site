# Dalba Group Website

## Project Overview
Arabic RTL website for Dalba Industrial Group (مجموعة دلبا الصناعية), a Saudi Arabian company specializing in:
- Polystyrene thermal insulation products (EPS/XPS)
- Agricultural packaging solutions (vegetable crates, seedling trays)
- Various polystyrene construction products

Established in 2006 in Al Kharj Industrial City, Saudi Arabia.

## Key Features
- Responsive design with Bootstrap 5 (RTL version)
- Arabic RTL interface with Cairo font
- Modern UI components:
  - Hero slider with product highlights
  - Video showcase in About section
  - Interactive product gallery
  - Certificate display with lightbox
  - Contact form with WhatsApp integration
  - Google Maps location
- Smooth scrolling and animations

## Technology Stack
### Frontend
- HTML5, CSS3 (with CSS variables)
- Vanilla JavaScript (for animations and interactions)
- Libraries:
  - Bootstrap 5 (RTL version)
  - Font Awesome 6
  - Animate.css
  - jQuery (minimal usage)

### Development
- PHP-based local development setup
- Simple build process (no complex tooling required)

## Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. For local development:
   - Ensure PHP is installed
   - Run development server:
     ```bash
     php -S localhost:8000
     ```
3. For production:
   - Deploy all files to any web server
   - No server-side requirements

## Project Structure
```
├── index.html          # Main entry point
├── index.php           # PHP entry point (for development)
├── vite_emulator.php   # Development helper script
├── styles.css          # Main stylesheet (261 lines)
├── js/
│   └── scroll-animation.js # Scroll animation logic
├── images/             # All website images (organized by section)
│   ├── about/          # About section images and video
│   ├── cer/            # Certificate images (7 files)
│   ├── footer/         # Footer assets
│   ├── products/       # Product images (8 categories)
│   └── slider/         # Homepage slider images (3 files)
└── tpl/                # HTML template partials
    ├── about.html
    ├── contact.html
    ├── faq.html
    ├── footer.html
    ├── hero.html
    ├── navbar.html
    └── [other sections]
```

## Usage
### Development
1. Edit HTML/CSS/JS files directly
2. For PHP-based updates:
   ```bash
   php vite_emulator.php
   ```
3. Test changes locally

### Production
- Deploy all files to web server
- No build step required

## Contribution Guidelines
- Follow existing code style:
  - Arabic RTL layout
  - Bootstrap-based responsive design
  - CSS variables for theming
- Image requirements:
  - Optimize all images (max width 1920px)
  - Maintain consistent naming convention
- Testing:
  - Verify on mobile devices
  - Check RTL rendering

## License
Proprietary - Copyright © Dalba Industrial Group  
Contact: Sales.xps@dalba.com.sa  
Phone: +966 55 686 5245