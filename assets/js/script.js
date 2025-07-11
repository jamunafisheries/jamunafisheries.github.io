// Mobile Navigation Toggle - Enhanced with accessibility
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA attributes
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
        
        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
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
        
        // Prevent modal content clicks from closing the modal
        const modalContent = contactModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        
        // Add touch event support for mobile
        contactModal.addEventListener('touchstart', (e) => {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
        
        // Add swipe-to-close functionality for mobile
        let startY = 0;
        let currentY = 0;
        
        contactModal.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });
        
        contactModal.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
        });
        
        contactModal.addEventListener('touchend', (e) => {
            const diffY = startY - currentY;
            // If swiped up more than 100px, close the modal
            if (diffY > 100 && contactModal.classList.contains('active')) {
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
    modalImage.setAttribute('src', 'assets/images/fish/rohu-carp.webp');
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
        
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
            if (!contactModal.classList.contains('active')) {
                contactModal.style.display = 'none';
            }
        }, 300);
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

// News Banner Horizontal Scrolling
document.addEventListener('DOMContentLoaded', function() {
    const newsBanner = document.querySelector('.news-banner');
    const newsContent = document.querySelector('.news-content');
    
    if (newsContent && newsBanner) {
        // Ensure the animation is running
        newsContent.style.animationPlayState = 'running';
        
        // Add hover pause functionality
        newsBanner.addEventListener('mouseenter', function() {
            newsContent.style.animationPlayState = 'paused';
        });
        
        newsBanner.addEventListener('mouseleave', function() {
            newsContent.style.animationPlayState = 'running';
        });
        
        // Add touch pause for mobile devices
        newsBanner.addEventListener('touchstart', function() {
            newsContent.style.animationPlayState = 'paused';
        });
        
        newsBanner.addEventListener('touchend', function() {
            setTimeout(() => {
                newsContent.style.animationPlayState = 'running';
            }, 1000); // Resume after 1 second
        });
        
        // Force animation restart if it gets stuck
        setInterval(() => {
            if (newsContent.style.animationPlayState !== 'paused') {
                newsContent.style.animation = 'none';
                newsContent.offsetHeight; // Trigger reflow
                newsContent.style.animation = 'horizontalScroll 15s linear infinite';
            }
        }, 15000); // Restart every 15 seconds
        
        console.log('News banner horizontal scrolling initialized successfully');
    }
}); 

// ==========================================================================
// WEBSITE PROTECTION - DISABLE RIGHT CLICK AND VIEW SOURCE
// ==========================================================================

(function() {
    'use strict';

    // Protection message
    const protectionMessage = "Content protected! Right-click and developer tools are disabled.";

    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showProtectionAlert(protectionMessage);
        return false;
    });

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable text selection on double click
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Disable F12 (Developer Tools)
        if (e.keyCode === 123) {
            e.preventDefault();
            showProtectionAlert("Developer tools are disabled!");
            return false;
        }
        
        // Disable Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            showProtectionAlert("Developer tools are disabled!");
            return false;
        }
        
        // Disable Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            showProtectionAlert("Console access is disabled!");
            return false;
        }
        
        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            showProtectionAlert("View source is disabled!");
            return false;
        }
        
        // Disable Ctrl+Shift+C (Element Inspector)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            showProtectionAlert("Element inspector is disabled!");
            return false;
        }
        
        // Disable Ctrl+Shift+K (Console in Firefox)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
            e.preventDefault();
            showProtectionAlert("Console access is disabled!");
            return false;
        }
        
        // Disable Ctrl+A (Select All)
        if (e.ctrlKey && e.keyCode === 65) {
            e.preventDefault();
            showProtectionAlert("Text selection is disabled!");
            return false;
        }
        
        // Disable Ctrl+S (Save Page)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            showProtectionAlert("Page saving is disabled!");
            return false;
        }
        
        // Disable Ctrl+P (Print)
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            showProtectionAlert("Printing is disabled!");
            return false;
        }
        
        // Disable Ctrl+C (Copy)
        if (e.ctrlKey && e.keyCode === 67) {
            e.preventDefault();
            showProtectionAlert("Copy is disabled!");
            return false;
        }
        
        // Disable Ctrl+V (Paste)
        if (e.ctrlKey && e.keyCode === 86) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+X (Cut)
        if (e.ctrlKey && e.keyCode === 88) {
            e.preventDefault();
            showProtectionAlert("Cut is disabled!");
            return false;
        }
    });

    // Protection alert function
    function showProtectionAlert(message) {
        // Create a styled alert overlay
        const alertOverlay = document.createElement('div');
        alertOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999999;
            font-family: Arial, sans-serif;
        `;

        const alertBox = document.createElement('div');
        alertBox.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 400px;
            animation: alertBounce 0.5s ease-out;
        `;

        alertBox.innerHTML = `
            <div style="font-size: 48px; margin-bottom: 15px;">🔒</div>
            <h3 style="margin: 0 0 15px 0; font-size: 20px;">Protected Content</h3>
            <p style="margin: 0 0 20px 0; font-size: 16px;">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: white;
                color: #ff6b6b;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                font-size: 14px;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                OK
            </button>
        `;

        // Add animation keyframes
        if (!document.getElementById('alertAnimation')) {
            const style = document.createElement('style');
            style.id = 'alertAnimation';
            style.textContent = `
                @keyframes alertBounce {
                    0% { transform: scale(0.3); opacity: 0; }
                    50% { transform: scale(1.05); }
                    70% { transform: scale(0.9); }
                    100% { transform: scale(1); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        alertOverlay.appendChild(alertBox);
        document.body.appendChild(alertOverlay);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (alertOverlay.parentElement) {
                alertOverlay.remove();
            }
        }, 3000);
    }

    // Enhanced developer tools detection and blocking
    const devtools = {
        open: false,
        orientation: null,
        blocked: false
    };

    let devToolsDetected = false;
    let detectionMethods = 0;

    // Method 1: Window size detection - MORE SENSITIVE
    function detectDevToolsBySize() {
        const threshold = 160; // Reduced threshold for better detection
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            return true;
        }
        return false;
    }

    // Method 2: Console detection
    function detectDevToolsByConsole() {
        let devtools = false;
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                devtools = true;
                return 'devtools-detected';
            }
        });
        console.log(element);
        return devtools;
    }

    // Method 3: Debugger detection
    function detectDevToolsByDebugger() {
        let start = new Date().getTime();
        debugger;
        let end = new Date().getTime();
        return end - start > 100;
    }

    // Method 4: Console timing detection
    function detectDevToolsByTiming() {
        let start = performance.now();
        console.log('');
        let end = performance.now();
        return end - start > 1;
    }

    // Method 5: Function toString detection
    function detectDevToolsByToString() {
        const regex = /./;
        regex.toString = function() {
            devToolsDetected = true;
            return 'devtools-detected';
        };
        console.log(regex);
        return devToolsDetected;
    }

    // Aggressive blocking function
    function blockDevTools() {
        if (devtools.blocked) return;
        
        devtools.blocked = true;
        
        // Create full-screen blocking overlay
        const blockOverlay = document.createElement('div');
        blockOverlay.id = 'devtools-block-overlay';
        blockOverlay.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: linear-gradient(135deg, #ff0000, #cc0000) !important;
            z-index: 999999999 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            color: white !important;
            font-family: Arial, sans-serif !important;
            font-size: 24px !important;
            font-weight: bold !important;
            text-align: center !important;
            user-select: none !important;
            pointer-events: all !important;
        `;

        blockOverlay.innerHTML = `
            <div style="animation: pulse 1s infinite; margin-bottom: 30px;">
                <div style="font-size: 80px; margin-bottom: 20px;">🚫</div>
                <h1 style="font-size: 36px; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                    DEVELOPER TOOLS BLOCKED!
                </h1>
                <p style="font-size: 20px; margin-bottom: 30px; max-width: 600px; line-height: 1.4;">
                    This website is protected against unauthorized access.<br>
                    Developer tools, console, and inspection are strictly prohibited.
                </p>
                <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                    <p style="font-size: 18px; margin-bottom: 10px;">🔒 Protection Features Active:</p>
                    <ul style="list-style: none; padding: 0; font-size: 16px;">
                        <li>✓ Right-click disabled</li>
                        <li>✓ View source blocked</li>
                        <li>✓ Developer tools blocked</li>
                        <li>✓ Console access denied</li>
                        <li>✓ Keyboard shortcuts disabled</li>
                    </ul>
                </div>
                <button onclick="window.location.reload()" style="
                    background: white;
                    color: #cc0000;
                    border: none;
                    padding: 15px 30px;
                    font-size: 18px;
                    font-weight: bold;
                    border-radius: 25px;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                    transition: all 0.3s ease;
                " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    🔄 Reload Page
                </button>
            </div>
        `;

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(blockOverlay);

        // Prevent any interaction with the page
        document.body.style.overflow = 'hidden';
        
        // Block all keyboard events
        document.addEventListener('keydown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, true);

        // Show console warning
        console.clear();
        console.log('%c🚫 DEVELOPER TOOLS BLOCKED! 🚫', 'color: red; font-size: 40px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);');
        console.log('%cThis website is protected against unauthorized access.', 'color: red; font-size: 20px; font-weight: bold;');
        console.log('%cDeveloper tools access is strictly prohibited.', 'color: red; font-size: 16px;');
        
        // Continuous reload if dev tools remain open
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }

    // Enhanced detection with multiple methods - BALANCED
    function runDevToolsDetection() {
        let detected = false;
        detectionMethods = 0;

        // Only use window size detection for now (most reliable)
        if (detectDevToolsBySize()) {
            detected = true;
            detectionMethods++;
        }

        // Block only if dev tools are clearly detected
        if (detected) {
            if (!devtools.open) {
                devtools.open = true;
                blockDevTools();
            }
        } else {
            devtools.open = false;
        }
    }

    // Run detection every 500ms (balanced)
    setInterval(runDevToolsDetection, 500);

    // Additional detection on focus/blur events
    window.addEventListener('focus', runDevToolsDetection);
    window.addEventListener('blur', runDevToolsDetection);
    window.addEventListener('resize', runDevToolsDetection);

    // Prevent opening in new tab/window
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue = '';
    });

    // Disable image dragging
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
            images[i].addEventListener('contextmenu', function(e) {
                e.preventDefault();
                showProtectionAlert("Image protection is active!");
                return false;
            });
        }
    });

    // Enhanced console protection - BALANCED
    let consoleCleared = false;
    
    // Clear console only when dev tools are detected
    function clearConsoleIfDevToolsOpen() {
        if (detectDevToolsBySize()) {
            console.clear();
            console.log('%c🚫 DEVELOPER TOOLS BLOCKED! 🚫', 'color: red; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);');
            console.log('%cThis website is protected against unauthorized access.', 'color: red; font-size: 16px; font-weight: bold;');
            console.log('%cConsole usage is strictly prohibited.', 'color: red; font-size: 14px;');
        }
    }
    
    // Check and clear console every 2 seconds
    setInterval(clearConsoleIfDevToolsOpen, 2000);

    // Disable console functions - BALANCED (only disable some functions)
    const disableFunctions = ['debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd', 'table'];
    
    // Store original functions but don't block everything
    const originalConsole = {};
    disableFunctions.forEach(func => {
        originalConsole[func] = console[func];
        console[func] = function() {
            // Only block if dev tools are detected
            if (detectDevToolsBySize()) {
                blockDevTools();
            }
            return false;
        };
    });

    // Don't prevent console object manipulation - too aggressive
    // Object.defineProperty(window, 'console', {
    //     get: function() {
    //         blockDevTools();
    //         return originalConsole;
    //     },
    //     set: function() {
    //         blockDevTools();
    //         return false;
    //     }
    // });

    // Don't detect console usage - too aggressive
    // let consoleUsageDetected = false;
    // const originalLog = console.log;
    // console.log = function() {
    //     if (!consoleUsageDetected) {
    //         consoleUsageDetected = true;
    //         blockDevTools();
    //     }
    //     return false;
    // };

})();

// Additional aggressive protection measures
(function() {
    'use strict';
    
    // Prevent iframe embedding
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }
    
    // Detect and block Firebug
    if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
        window.location.href = 'about:blank';
    }
    
    // Block common developer tool shortcuts with immediate action
    document.addEventListener('keydown', function(e) {
        // More aggressive F12 blocking
        if (e.keyCode === 123 || e.key === 'F12') {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            blockDevTools();
            return false;
        }
        
        // Block all developer shortcuts
        if ((e.ctrlKey || e.metaKey) && (
            (e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
            e.keyCode === 85 || // Ctrl+U
            e.keyCode === 83 || // Ctrl+S
            e.keyCode === 80    // Ctrl+P
        )) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            blockDevTools();
            return false;
        }
    }, true);
    
    // Monitor for developer tools opening through various methods - DISABLED TO PREVENT LOOPS
    // let devToolsChecker = setInterval(() => {
    //     // Check if console is open (Chrome method)
    //     if (window.chrome && window.chrome.runtime && window.chrome.runtime.onConnect) {
    //         blockDevTools();
    //     }
    //     
    //     // Check window dimensions aggressively
    //     if (window.outerWidth - window.innerWidth > 160 || 
    //         window.outerHeight - window.innerHeight > 160) {
    //         blockDevTools();
    //     }
    //     
    //     // Check for common developer tool indicators
    //     if (window.devtools || window.console._commandLineAPI) {
    //         blockDevTools();
    //     }
    //     
    //     // Check for Firebug
    //     if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
    //         blockDevTools();
    //     }
    //     
    //     // Check for Chrome DevTools
    //     if (window.chrome && window.chrome.runtime) {
    //         blockDevTools();
    //     }
    // }, 50); // Every 50ms
    
    // Override common debugging functions
    window.eval = function() {
        blockDevTools();
        return false;
    };
    
    window.Function = function() {
        blockDevTools();
        return false;
    };
    
    // Block source viewing attempts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.keyCode === 85) { // Ctrl+U
            e.preventDefault();
            blockDevTools();
            return false;
        }
    });
    
    // Prevent right-click with immediate blocking
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        blockDevTools();
        return false;
    }, true);
    
    // Block printing
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
        blockDevTools();
        return false;
    });
    
    // Monitor for debugger statements
    let debuggerBlocked = false;
    Object.defineProperty(window, 'debugger', {
        get: function() {
            if (!debuggerBlocked) {
                debuggerBlocked = true;
                blockDevTools();
            }
            return undefined;
        }
    });
    
    // Prevent source code access through various methods
    if (window.location.protocol === 'view-source:') {
        window.location.href = 'about:blank';
    }
    
    // Block common inspection methods
    ['inspect', 'getEventListeners', 'debug', 'undebug', 'monitor', 'unmonitor', 'monitorEvents', 'unmonitorEvents', 'copy', 'dir', 'dirxml', 'keys', 'values', 'profile', 'profileEnd', 'table'].forEach(method => {
        if (window[method]) {
            window[method] = function() {
                blockDevTools();
                return false;
            };
        }
    });
    
    // Smart DOM protection - only block when dev tools are detected
    let devToolsDetected = false;
    
    // Store original DOM methods
    const originalQuerySelector = document.querySelector;
    const originalQuerySelectorAll = document.querySelectorAll;
    const originalGetElementById = document.getElementById;
    const originalGetElementsByClassName = document.getElementsByClassName;
    const originalGetElementsByTagName = document.getElementsByTagName;
    const originalGetAttribute = Element.prototype.getAttribute;
    
    // Smart DOM method protection - only block if dev tools are open
    function smartDOMProtection() {
        if (detectDevToolsBySize()) {
            devToolsDetected = true;
            
            // Override DOM methods only when dev tools are detected
            document.querySelector = function() {
                blockDevTools();
                return null;
            };
            
            document.querySelectorAll = function() {
                blockDevTools();
                return [];
            };
            
            document.getElementById = function() {
                blockDevTools();
                return null;
            };
            
            // Block image extraction only when dev tools are open
            Element.prototype.getAttribute = function(name) {
                if (name === 'src' || name === 'href') {
                    blockDevTools();
                    return null;
                }
                return originalGetAttribute.call(this, name);
            };
        }
    }
    
    // Check for dev tools every 2 seconds and apply smart protection
    setInterval(smartDOMProtection, 2000);
    
})(); 