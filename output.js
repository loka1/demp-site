// Lazy load video
const aboutVideo = document.getElementById('about-video');

aboutVideo.addEventListener('click', function() {
  if (this.classList.contains('lazy')) {
    this.classList.remove('lazy');
    this.load();
  }
});
// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.animate-on-scroll');

//     function checkScreenSize() {
//         if (window.innerWidth < 992) {
//             document.body.classList.add('mobile-device');
//         } else {
//             document.body.classList.remove('mobile-device');
//         }
//     }

//     function checkScroll() {
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
//             const windowBottom = window.scrollY + window.innerHeight;

//             if (windowBottom > sectionTop + sectionHeight / 4) {
//                 const animationClass = section.dataset.animation || 'animate__fadeIn';
//                 if (window.innerWidth >= 992) {
//                     section.classList.add('animate__animated', animationClass);
//                 }
//                 section.classList.remove('animate-on-scroll');
//             } 
//         });
//     }

//     window.addEventListener('scroll', checkScroll);
//     checkScroll(); // Initial check on page load
// });

/* Template JS */

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            const slide = slides[index];
            slide.classList.add('active');
            const image = slide.dataset.image;
            slide.style.backgroundImage = `url('${image}')`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Initial slide
        showSlide(currentSlide);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Make nextSlide and prevSlide globally accessible
        window.nextSlide = nextSlide;
        window.prevSlide = prevSlide;
    });

                        document.getElementById('about-video').addEventListener('click', function() {
                            var video = this;
                            video.controls = true;
                            video.load();
                            video.play();
                        });
                    
    document.addEventListener('DOMContentLoaded', function() {
        const galleryImages = document.querySelectorAll('.gallery-item img');
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
                    let imagesToShow = 3; // Default to 3 for desktop
                    if (window.innerWidth < 768) {
                        imagesToShow = 1; // Mobile
                    } else if (window.innerWidth < 992) {
                        imagesToShow = 2; // Tablet
                    }
        
                    galleryImages.forEach((img, index) => {
                        if (index >= currentStartIndex && index < currentStartIndex + imagesToShow) {
                            img.parentElement.style.display = 'block';
                } else {
                    img.parentElement.style.display = 'none';
                }
            });
        }

        document.querySelector('.prev-button').addEventListener('click', () => {
                    let imagesToShow = 3; // Default to 3 for desktop
                    if (window.innerWidth < 768) {
                        imagesToShow = 1; // Mobile
                    } else if (window.innerWidth < 992) {
                        imagesToShow = 2; // Tablet
                    }
                    currentStartIndex = (currentStartIndex - imagesToShow + images.length) % images.length;
                    showGalleryImages();
                });

        document.querySelector('.next-button').addEventListener('click', () => {
                    let imagesToShow = 3; // Default to 3 for desktop
                    if (window.innerWidth < 768) {
                        imagesToShow = 1; // Mobile
                    } else if (window.innerWidth < 992) {
                        imagesToShow = 2; // Tablet
                    }
                    currentStartIndex = (currentStartIndex + imagesToShow) % images.length;
                    showGalleryImages();
                });

        showGalleryImages();

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
            if (!slideshowOverlay) {
                createSlideshow();
            }
            slideshowImage.src = images[index];
            slideshowOverlay.style.display = 'flex';
            document.body.classList.add('slideshow-active');
            document.querySelector('nav.navbar').style.display = 'none';
            document.querySelector('footer.footer').style.display = 'none';
            document.body.style.overflow = 'hidden';
        }

        function closeSlideshow() {
            slideshowOverlay.style.display = 'none';
            document.body.classList.remove('slideshow-active');
            document.querySelector('nav.navbar').style.display = 'flex';
            document.querySelector('footer.footer').style.display = 'block';
            document.body.style.overflow = 'auto';
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
    });
