// Video click handler
document.getElementById('about-video')?.addEventListener('click', function() {
    var video = this;
    video.controls = true;
    video.load();
    video.play();
});

// Gallery slideshow functionality
function initGallerySlideshow() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    if (!galleryImages.length) return;

    let currentImageIndex = 0;
    let images = [];
    let slideshowOverlay;
    let slideshowImage;
    let closeButton;
    let currentStartIndex = 0;
    let prevButton;
    let nextButton;

    galleryImages.forEach((img, index) => {
        images.push(img.src);
        img.addEventListener('click', () => {
            currentImageIndex = index;
            showSlideshow(currentImageIndex);
        });
    });

    function showGalleryImages() {
        let imagesToShow = window.innerWidth < 768 ? 1 : 
                         window.innerWidth < 992 ? 2 : 3;
        
        galleryImages.forEach((img, index) => {
            img.parentElement.style.display = 
                (index >= currentStartIndex && index < currentStartIndex + imagesToShow) ? 
                'block' : 'none';
        });
    }

    document.querySelector('.prev-button')?.addEventListener('click', () => {
        let imagesToShow = window.innerWidth < 768 ? 1 : 
                         window.innerWidth < 992 ? 2 : 3;
        currentStartIndex = (currentStartIndex - imagesToShow + images.length) % images.length;
        showGalleryImages();
    });

    document.querySelector('.next-button')?.addEventListener('click', () => {
        let imagesToShow = window.innerWidth < 768 ? 1 : 
                         window.innerWidth < 992 ? 2 : 3;
        currentStartIndex = (currentStartIndex + imagesToShow) % images.length;
        showGalleryImages();
    });

    function createSlideshow() {
        slideshowOverlay = document.createElement('div');
        slideshowOverlay.id = 'slideshow-overlay';
        slideshowOverlay.classList.add('slideshow-overlay');

        closeButton = document.createElement('span');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '&times;';

        const slideshowContent = document.createElement('div');
        slideshowContent.classList.add('slideshow-content');

        slideshowImage = document.createElement('img');
        slideshowImage.classList.add('slideshow-image');
        slideshowImage.alt = 'Slideshow Image';

        const navigationButtons = document.createElement('div');
        navigationButtons.classList.add('navigation-buttons');

        prevButton = document.createElement('button');
        prevButton.classList.add('prev-button');
        prevButton.innerHTML = '<';

        nextButton = document.createElement('button');
        nextButton.classList.add('next-button');
        nextButton.innerHTML = '>';

        navigationButtons.appendChild(prevButton);
        navigationButtons.appendChild(nextButton);
        slideshowContent.appendChild(slideshowImage);
        slideshowContent.appendChild(navigationButtons);
        slideshowOverlay.appendChild(closeButton);
        slideshowOverlay.appendChild(slideshowContent);
        document.body.appendChild(slideshowOverlay);

        closeButton.addEventListener('click', closeSlideshow);
        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showSlideshow(currentImageIndex);
        });
        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showSlideshow(currentImageIndex);
        });
        slideshowOverlay.addEventListener('click', (event) => {
            if (event.target === slideshowOverlay) {
                closeSlideshow();
            }
        });
    }

    function showSlideshow(index) {
        if (!slideshowOverlay) createSlideshow();
        slideshowImage.src = images[index];
        slideshowOverlay.style.display = 'flex';
        document.body.classList.add('slideshow-active');
        document.querySelector('nav.navbar')?.style.display = 'none';
        document.querySelector('footer.footer')?.style.display = 'none';
        document.body.style.overflow = 'hidden';
    }

    function closeSlideshow() {
        slideshowOverlay.style.display = 'none';
        document.body.classList.remove('slideshow-active');
        document.querySelector('nav.navbar')?.style.display = 'flex';
        document.querySelector('footer.footer')?.style.display = 'block';
        document.body.style.overflow = 'auto';
    }

    showGalleryImages();
}

// Hero slider functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        const slide = slides[index];
        slide.classList.add('active');
        slide.style.backgroundImage = `url('${slide.dataset.image}')`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    toggle?.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGallerySlideshow();
    initHeroSlider();
    initMobileMenu();
});