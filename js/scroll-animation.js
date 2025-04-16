document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animate-on-scroll');

    function checkScreenSize() {
        if (window.innerWidth < 992) {
            document.body.classList.add('mobile-device');
        } else {
            document.body.classList.remove('mobile-device');
        }
    }

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowBottom = window.scrollY + window.innerHeight;

            if (windowBottom > sectionTop + sectionHeight / 4) {
                const animationClass = section.dataset.animation || 'animate__fadeIn';
                if (window.innerWidth >= 992) {
                    section.classList.add('animate__animated', animationClass);
                }
    section.classList.remove('animate-on-scroll');
            } else {
                section.classList.remove('animate__animated', animationClass);
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check on page load
});