document.addEventListener('DOMContentLoaded', function() {
    // Hero Section Animation
    gsap.from('.portfolio-hero h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.hero-description', {
        opacity: 0,
        y: 50,
        delay: 0.3,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.hero-btns', {
        opacity: 0,
        y: 50,
        delay: 0.6,
        duration: 1,
        ease: 'power2.out'
    });

    // Projects Section Animation
    const projectsSection = document.querySelector('.portfolio-projects');
    if (projectsSection) {
        const projectsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.project-item', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.3,
                        duration: 1,
                        ease: 'power2.out'
                    });

                    projectsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        projectsObserver.observe(projectsSection);
    }

    // Image hover effects
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            gsap.to(img, {
                scale: 1.05,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        img.addEventListener('mouseleave', () => {
            gsap.to(img, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
});