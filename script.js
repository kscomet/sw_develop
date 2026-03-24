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

// 튜토리얼 진행률 표시 기능
function updateTutorialProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        // 실제 구현에서는 사용자의 진행 상황을 추적하여 업데이트
        // 여기서는 데모용으로 60%로 설정
        progressFill.style.width = '60%';
    }
}

// 리소스 필터링 기능
function setupResourceFiltering() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const resourceItems = document.querySelectorAll('.resource-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성 버튼 표시
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // 리소스 아이템 필터링
            resourceItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 베스트 프랙티스 카테고리 필터링 기능
function setupBestPracticesFiltering() {
    const categoryButtons = document.querySelectorAll('.category-button');
    const practiceItems = document.querySelectorAll('.practice-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성 버튼 표시
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const categoryValue = button.getAttribute('data-category');
            
            // 베스트 프랙티스 아이템 필터링
            practiceItems.forEach(item => {
                if (categoryValue === 'all' || item.classList.contains(categoryValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 블로그 검색 기능
function setupBlogSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    if (searchInput && searchButton) {
        const performSearch = () => {
            const searchTerm = searchInput.value.toLowerCase();
            
            blogPosts.forEach(post => {
                const title = post.querySelector('h3').textContent.toLowerCase();
                const content = post.textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        };
        
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    updateTutorialProgress();
    setupResourceFiltering();
    setupBestPracticesFiltering();
    setupBlogSearch();
});
