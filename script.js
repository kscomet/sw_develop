// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.innerHTML = '☰';
mobileMenuButton.classList.add('mobile-menu-toggle');
document.querySelector('.nav-container').appendChild(mobileMenuButton);

const navMenu = document.querySelector('.nav-menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Contact form submission handling
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show an alert
        alert(`감사합니다, ${name}님! 메시지가 성공적으로 전송되었습니다.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation to cards when they come into view
const cards = document.querySelectorAll('.card');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

cards.forEach(card => {
    observer.observe(card);
    card.classList.add('fade-in');
});

// Add fade-in animation to blog posts
const blogPosts = document.querySelectorAll('.blog-post');
blogPosts.forEach(post => {
    observer.observe(post);
    post.classList.add('fade-in');
});

// Add scroll-to-top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});