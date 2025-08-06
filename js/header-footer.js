document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');

    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        mobileMenuBtn.innerHTML = navbar.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dropdown Menu Animation with GSAP
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');

        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 992) {
                gsap.fromTo(menu,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                );
            }
        });
    });

    // Animate footer elements on scroll
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.from('.footer-col', {
                    opacity: 0,
                    y: 50,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out'
                });

                gsap.from('.footer-bottom', {
                    opacity: 0,
                    y: 30,
                    delay: 0.5,
                    duration: 0.8,
                    ease: 'power2.out'
                });

                footerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const footer = document.querySelector('.footer');
    if (footer) {
        footerObserver.observe(footer);
    }
});

// Initialize animations when page loads
window.addEventListener('load', function() {
    // Animate header elements
    gsap.from('.logo', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.2
    });

    gsap.from('.navbar li', {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.4
    });

    gsap.from('.mobile-menu-btn', {
        opacity: 0,
        duration: 0.8,
        delay: 0.6
    });

});
document.addEventListener('DOMContentLoaded', function() {
            const mobileBtn = document.querySelector('.mn-mobile-btn');
            const navbar = document.querySelector('.mn-navbar');
            
            mobileBtn.addEventListener('click', function() {
                navbar.classList.toggle('active');
            });
        });
