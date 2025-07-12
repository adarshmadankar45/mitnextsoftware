// Service Pages JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });

    // Initialize animations
    initServiceAnimations();

    // Initialize custom cursor if it exists
    if (document.querySelector('.custom-cursor')) {
        initCustomCursor();
    }
});

function initServiceAnimations() {
    const animateElements = document.querySelectorAll('.service-feature, .testing-service, .design-service, .why-choose-card, .process-step, .faq-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
}

function initCustomCursor() {
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
    const hoverElements = document.querySelectorAll('a, button, .btn, .service-link, .faq-question, .why-choose-card, .testing-service, .design-service');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}