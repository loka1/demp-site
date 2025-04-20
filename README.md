# Vite Emulator Project

This project builds static HTML files from PHP templates by:
1. Extracting CSS and JavaScript from template files
2. Combining them into optimized output files
3. Generating a production-ready index.html

## Requirements
- PHP 7.4+
- Composer (optional, for development)

## Installation
1. Clone this repository
2. Ensure all template files are in the `tpl/` directory
3. Make sure required assets are in place (images, etc.)

## Usage

### Basic Usage
```bash
php vite_emulator.php
```

This will generate:
- `index.html` - The main HTML file
- `output.css` - Combined and optimized CSS
- `output.js` - Combined and optimized JavaScript

### Development Mode
For development with live reload:
```bash
php -S localhost:8000
```

Then open http://localhost:8000 in your browser

### Building for Production
The generated files are already production-optimized with:
- Minified CSS and JavaScript
- Combined assets for better performance
- Proper cache busting

## Project Structure
- `tpl/` - Contains all HTML templates
- `js/` - JavaScript source files
- `images/` - Image assets
- `styles.css` - Base stylesheet

## Customization
Edit the template files in `tpl/` to modify the content/structure. The build process will automatically:
1. Extract all CSS and JavaScript
2. Combine them into optimized files
3. Generate the final HTML

## License
MIT