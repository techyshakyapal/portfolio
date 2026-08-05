document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.navbar a');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.querySelector('.back-to-top');

    var typed = new Typed(".text-typing", {
        strings: ["Embedded Systems Enthusiast", "Software Developer", "Flutter Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    mobileMenuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });

        if (pageYOffset > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    const showStatusMessage = (success, message) => {
        const statusContainer = document.getElementById('status-animation-container');
        const iconElement = statusContainer.querySelector('.animation-icon');
        const textElement = statusContainer.querySelector('.animation-text');

        iconElement.className = 'animation-icon';
        iconElement.innerHTML = '';
        textElement.textContent = message;

        if (success) {
            iconElement.innerHTML = '<i class="fas fa-check-circle"></i>';
            iconElement.classList.add('success-icon');
        } else {
            iconElement.innerHTML = '<i class="fas fa-times-circle"></i>';
            iconElement.classList.add('error-icon');
        }

        statusContainer.classList.add('show');

        setTimeout(() => {
            statusContainer.classList.remove('show');
        }, 3000);
    };

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const url = contactForm.action;
        if (!url) {
            showStatusMessage(false, 'Add your own form endpoint in index.html to enable sending.');
            return;
        }

        const form = new FormData(contactForm);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: form
            });

            if (response.ok) {
                showStatusMessage(true, 'Message sent successfully!');
                contactForm.reset();
            } else {
                showStatusMessage(false, 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showStatusMessage(false, 'An error occurred. Please check your network connection.');
        }
    });
});