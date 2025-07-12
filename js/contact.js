document.addEventListener('DOMContentLoaded', function() {
    // Hero Section Animation
    gsap.from('.contact-hero h1', {
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

    // Contact Form Character Counter
    const messageTextarea = document.getElementById('message');
    const charCount = document.querySelector('.char-count');

    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = `${currentLength} / 100`;

            if (currentLength > 100) {
                charCount.style.color = 'red';
            } else {
                charCount.style.color = '';
            }
        });
    }

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Form validation
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            if (!firstName || !lastName || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                    submitBtn.disabled = false;
                    contactForm.reset();
                    charCount.textContent = '0 / 100';
                }, 2000);
            }, 1500);
        });
    }

    // Office Cards Animation
    const officeCards = document.querySelectorAll('.office-card');
    officeCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            delay: 0.3 + (index * 0.1),
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Form Animation
    const contactFormContainer = document.querySelector('.contact-form-container');
    if (contactFormContainer) {
        gsap.from(contactFormContainer, {
            opacity: 0,
            x: 50,
            delay: 0.6,
            duration: 1,
            ease: 'power2.out'
        });
    }
});