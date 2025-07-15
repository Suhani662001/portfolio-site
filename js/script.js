// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Form validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// Show error message
function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Clear error message
function clearError(inputId) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

// Real-time validation
nameInput.addEventListener('input', function () {
    if (this.value.trim().length > 0) {
        if (validateName(this.value)) {
            clearError('name');
            this.style.borderColor = '#28a745';
        } else {
            showError('name', 'Name must be at least 2 characters long');
            this.style.borderColor = '#dc3545';
        }
    } else {
        clearError('name');
        this.style.borderColor = '#e9ecef';
    }
});

emailInput.addEventListener('input', function () {
    if (this.value.trim().length > 0) {
        if (validateEmail(this.value)) {
            clearError('email');
            this.style.borderColor = '#28a745';
        } else {
            showError('email', 'Please enter a valid email address');
            this.style.borderColor = '#dc3545';
        }
    } else {
        clearError('email');
        this.style.borderColor = '#e9ecef';
    }
});

messageInput.addEventListener('input', function () {
    if (this.value.trim().length > 0) {
        if (validateMessage(this.value)) {
            clearError('message');
            this.style.borderColor = '#28a745';
        } else {
            showError('message', 'Message must be at least 10 characters long');
            this.style.borderColor = '#dc3545';
        }
    } else {
        clearError('message');
        this.style.borderColor = '#e9ecef';
    }
});

// Form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    // Validate name
    if (!validateName(name)) {
        showError('name', 'Name must be at least 2 characters long');
        nameInput.style.borderColor = '#dc3545';
        isValid = false;
    } else {
        clearError('name');
        nameInput.style.borderColor = '#28a745';
    }

    // Validate email
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        emailInput.style.borderColor = '#dc3545';
        isValid = false;
    } else {
        clearError('email');
        emailInput.style.borderColor = '#28a745';
    }

    // Validate message
    if (!validateMessage(message)) {
        showError('message', 'Message must be at least 10 characters long');
        messageInput.style.borderColor = '#dc3545';
        isValid = false;
    } else {
        clearError('message');
        messageInput.style.borderColor = '#28a745';
    }

    if (isValid) {
        // Show success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        // You can add your form submission logic here, e.g., AJAX or displaying a success message.
    }
});