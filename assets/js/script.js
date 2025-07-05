// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
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

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#1e40af'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .feature, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// YouTube section enhancement
const youtubeSection = document.querySelector('#youtube');
if (youtubeSection) {
    // Add loading animation for YouTube iframe
    const iframe = youtubeSection.querySelector('iframe');
    if (iframe) {
        iframe.addEventListener('load', () => {
            iframe.style.opacity = '1';
        });
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.5s ease';
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page with fade-in effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add click-to-copy functionality for contact info
    const contactItems = document.querySelectorAll('.contact-item p');
    
    // Category tabs functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categoryContents = document.querySelectorAll('.category-content');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const category = tab.getAttribute('data-category');
            
            // Remove active class from all tabs and contents
            categoryTabs.forEach(t => t.classList.remove('active'));
            categoryContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetContent = document.getElementById(category);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Image zoom functionality
    const zoomableImages = document.querySelectorAll('.zoomable');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    zoomableImages.forEach(card => {
        card.addEventListener('click', () => {
            const image = card.querySelector('.zoom-image');
            const imageSrc = image.getAttribute('src');
            const imageAlt = image.getAttribute('alt');
            
            modalImage.setAttribute('src', imageSrc);
            modalImage.setAttribute('alt', imageAlt);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Contact modal event listeners
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        // Close contact modal when clicking outside
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
        
        // Close contact modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        });
    }
    
    // Video modal functionality
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoTitle = document.getElementById('modalVideoTitle');
    const modalVideoDescription = document.getElementById('modalVideoDescription');
    
    // Add click event listeners to all video embeds
    const videoEmbeds = document.querySelectorAll('.video-embed');
    console.log('Found video embeds:', videoEmbeds.length); // Debug log
    
    videoEmbeds.forEach((videoEmbed, index) => {
        console.log(`Adding click listener to video ${index + 1}`); // Debug log
        
        // Prevent iframe from capturing clicks
        const iframe = videoEmbed.querySelector('iframe');
        if (iframe) {
            iframe.style.pointerEvents = 'none';
        }
        
        videoEmbed.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Video clicked!'); // Debug log
            
            const iframe = this.querySelector('iframe');
            const videoItem = this.closest('.video-item');
            const videoInfo = videoItem.querySelector('.video-info');
            const title = videoInfo.querySelector('h4').textContent;
            const description = videoInfo.querySelector('p').textContent;
            
            console.log('Video title:', title); // Debug log
            
            // Get the video URL and add autoplay parameter
            let videoUrl = iframe.src;
            if (videoUrl.includes('?')) {
                videoUrl += '&autoplay=1';
            } else {
                videoUrl += '?autoplay=1';
            }
            
            // Update modal content
            modalVideo.src = videoUrl;
            modalVideoTitle.textContent = title;
            modalVideoDescription.textContent = description;
            
            // Show modal
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close video modal when clicking outside
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
        
        // Close video modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeVideoModal();
            }
        });
    }
    
    // Add click-to-copy functionality for contact info
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Could not copy to clipboard', 'error');
            });
        });
    });
    
    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Close modal function
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Test modal function
function testModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.setAttribute('src', 'assets/images/rohu-fish.jpg');
    modalImage.setAttribute('alt', 'Test Image');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Test video modal function
function testVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoTitle = document.getElementById('modalVideoTitle');
    const modalVideoDescription = document.getElementById('modalVideoDescription');
    
    modalVideo.src = 'https://www.youtube.com/embed/m6ldeDh5-JI?autoplay=1';
    modalVideoTitle.textContent = 'Test Video';
    modalVideoDescription.textContent = 'This is a test video modal.';
    
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Show contact information function
function showContactInfo() {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close contact modal function
function closeContactModal() {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close video modal function
function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    if (videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Stop the video by clearing the src
        if (modalVideo) {
            modalVideo.src = '';
        }
    }
}

// Hero Image Slider
(function() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.slider-arrow.prev');
    const nextBtn = slider.querySelector('.slider-arrow.next');
    const dots = slider.querySelectorAll('.slider-dots .dot');
    let current = 0;
    let autoSlideInterval = null;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }
    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    // Auto-slide every 5 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();

    // Responsive fix: show first slide on load
    showSlide(0);
})(); 