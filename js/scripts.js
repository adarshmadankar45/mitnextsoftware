// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();

    // Initialize scroll effects
    initScrollEffects();

    // Initialize animations
    initAnimations();

    // Initialize form interactions
    initForms();

    // Initialize counter animations
    initCounters();
});

// Particle system
function createParticles() {
    const container = document.createElement('div');
    container.className = 'particles-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-1';
    document.body.appendChild(container);

    const particleCount = 50;
    const colors = ['#00f5ff', '#667eea', '#ffffff', '#764ba2'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.8';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.animation = `floatParticle ${duration}s linear ${delay}s infinite`;
        container.appendChild(particle);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Scroll effects
function initScrollEffects() {
    // Navbar scroll effect
    const navbar = document.querySelector('.ultra-navbar');
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    scrollProgress.style.position = 'fixed';
    scrollProgress.style.top = '0';
    scrollProgress.style.left = '0';
    scrollProgress.style.height = '4px';
    scrollProgress.style.background = 'linear-gradient(90deg, #00f5ff, #667eea, #764ba2)';
    scrollProgress.style.zIndex = '1000';
    scrollProgress.style.width = '0%';
    scrollProgress.style.transition = 'width 0.3s ease';
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        scrollProgress.style.width = scrollPercent + '%';

        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation initialization
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-text, .animate-card, .animate-stat, .animate-image').forEach(el => {
        observer.observe(el);
    });

    // Add delay based on data-delay attribute
    document.querySelectorAll('[data-delay]').forEach(el => {
        const delay = parseFloat(el.getAttribute('data-delay'));
        el.style.transitionDelay = delay + 's';
    });
}

// Form interactions
function initForms() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.input-highlight').style.width = '100%';
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.querySelector('.input-highlight').style.width = '0%';
            }
        });
    });
}

// Counter animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(initCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initScrollAnimations();

    // Create particles
    createParticles();

    // Other initializations...
});

function initScrollAnimations() {
    // Select all elements with data-animate attribute
    const animateElements = document.querySelectorAll('[data-animate]');

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animated class when element is in view
                entry.target.classList.add('animated');

                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe each animated element
    animateElements.forEach(element => {
        observer.observe(element);

        // Apply delay if specified
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.transitionDelay = delay + 's';
        }
    });

    // Add scroll event for additional effects
    window.addEventListener('scroll', function() {
        // You can add additional scroll-based effects here
    });
}

// Enhanced particle system
function createParticles() {
    const container = document.createElement('div');
    container.className = 'particles-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-1';
    document.body.appendChild(container);

    const particleCount = window.innerWidth < 768 ? 30 : 60;
    const colors = ['rgba(0, 245, 255, 0.8)', 'rgba(102, 126, 234, 0.8)', 'rgba(255, 255, 255, 0.8)'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.8';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.animation = `floatParticle ${duration}s linear ${delay}s infinite`;
        container.appendChild(particle);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
// Enhanced Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    let animated = false;

    function animateCounters() {
        if (animated) return;

        const rect = counters[0].getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            animated = true;

            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const increment = target / speed;

                const updateCount = () => {
                    const current = +counter.innerText;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Check on load in case already in view
}

// Enhanced Portfolio Hover Effects
function initPortfolioHover() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.transform = 'translateY(0)';
            this.querySelector('img').style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-overlay').style.transform = 'translateY(100%)';
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
}

// Initialize all enhanced functions
document.addEventListener('DOMContentLoaded', function() {
    // Existing initializations
    createParticles();
    initScrollEffects();
    initAnimations();
    initForms();
    initCounters();

    // New initializations
    initPortfolioHover();

    // Remove duplicate initialization
    const existingScripts = document.querySelectorAll('script[src="scripts.js"]');
    if (existingScripts.length > 1) {
        existingScripts[1].remove();
    }
});

// Add this to your scripts.js
// Custom Cursor Animation
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    const clickEffect = document.querySelector('.cursor-click-effect');

    // Move cursor
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Click effect
    document.addEventListener('click', function(e) {
        clickEffect.style.left = e.clientX + 'px';
        clickEffect.style.top = e.clientY + 'px';
        clickEffect.style.transform = 'translate(-50%, -50%) scale(1)';
        clickEffect.style.opacity = '1';

        setTimeout(() => {
            clickEffect.style.transform = 'translate(-50%, -50%) scale(0)';
            clickEffect.style.opacity = '0';
        }, 500);
    });

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .btn, .service-card, .portfolio-item, .team-member, input, textarea, select, .read-more, .ultra-nav-link');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
});

// Page Loader Animation
// Page Loader Animation
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body
    document.body.classList.add('loading');

    window.addEventListener('load', function() {
        const pageLoader = document.querySelector('.page-loader');

        // Add a slight delay before fading out to ensure all animations complete
        setTimeout(() => {
            pageLoader.classList.add('fade-out');
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');

            // Remove loader from DOM after fade out completes
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 800); // Match this with the CSS transition duration
        }, 2500); // Total loader display time (matches animation durations)
    });
});