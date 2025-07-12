document.addEventListener('DOMContentLoaded', function() {
    // Hero Section Animation
    gsap.from('.about-hero h1', {
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

    gsap.from('.about-hero-image', {
        opacity: 0,
        x: 100,
        delay: 0.9,
        duration: 1.5,
        ease: 'power2.out'
    });

    // About Company Animation
    const aboutCompany = document.querySelector('.about-company');
    if (aboutCompany) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.about-company-content', {
                        opacity: 0,
                        x: -50,
                        duration: 1,
                        ease: 'power2.out'
                    });

                    gsap.from('.about-company-image', {
                        opacity: 0,
                        x: 50,
                        duration: 1,
                        ease: 'power2.out'
                    });

                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        aboutObserver.observe(aboutCompany);
    }

    // Vision & Mission Animation
    const visionMission = document.querySelector('.vision-mission');
    if (visionMission) {
        const vmObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.vision-card', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    gsap.from('.mission-card', {
                        opacity: 0,
                        y: 50,
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    vmObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        vmObserver.observe(visionMission);
    }

    // Values Animation
    const valuesSection = document.querySelector('.values-section');
    if (valuesSection) {
        const valuesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.value-card', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    valuesObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        valuesObserver.observe(valuesSection);
    }

    // Stats Counter Animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = document.querySelectorAll('.stat-item h3');
                    const speed = 200;

                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-count');
                        const count = +counter.innerText;
                        const increment = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target;
                        }

                        function updateCount() {
                            const count = +counter.innerText;
                            const increment = target / speed;

                            if (count < target) {
                                counter.innerText = Math.ceil(count + increment);
                                setTimeout(updateCount, 1);
                            } else {
                                counter.innerText = target;
                            }
                        }
                    });

                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // Team Animation
    const teamSection = document.querySelector('.team-section');
    if (teamSection) {
        const teamObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.team-member', {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    teamObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        teamObserver.observe(teamSection);
    }

    // Testimonials Animation
    const testimonialsSection = document.querySelector('.testimonials-section');
    if (testimonialsSection) {
        const testimonialsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from('.testimonial-item', {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power2.out'
                    });

                    // Initialize testimonial slider
                    $('.testimonials-slider').slick({
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        pauseOnHover: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });

                    testimonialsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        testimonialsObserver.observe(testimonialsSection);
    }
});