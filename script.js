// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSlider();
    initTabs();
    initMobileMenu();
    initSmoothScrolling();
    initHeaderScroll();
    initDropdowns();
    initFormHandling();
    initScrollAnimations();
    initLanguageSelector();
    initSearch();
    initButtonLoading();
    ensureNavVisibility();
    handleHashOnLoad();
    initApplicationModal();
});

// Handle hash in URL when page loads
function handleHashOnLoad() {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        const targetId = window.location.hash;
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 0;
                const totalOffset = headerHeight + topBarHeight;
                const targetPosition = targetSection.offsetTop - totalOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation link
                updateActiveNavLink(targetId);
            }, 100);
        }
    }
}

// Hero Slider Functionality
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    let slideInterval;
    
    // Auto slide function
    function autoSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });
    
    // Start auto slide
    function startAutoSlide() {
        slideInterval = setInterval(autoSlide, 6000); // Change slide every 6 seconds
    }
    
    // Reset auto slide timer
    function resetAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            startAutoSlide();
        }
    }
    
    // Start auto slide
    startAutoSlide();
    
    // Pause auto slide on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            if (slideInterval) clearInterval(slideInterval);
        });
        
        heroSection.addEventListener('mouseleave', startAutoSlide);
    }
}

// Tabs Functionality
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            btn.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) targetPane.classList.add('active');
        });
    });
}

// Dropdown Menu Functionality
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownLink = dropdown.querySelector('.nav-link');
        
        if (!dropdownMenu) return;
        
        // Desktop hover
        if (window.innerWidth > 959) {
            dropdown.addEventListener('mouseenter', () => {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
                dropdownMenu.style.display = 'block';
            });
            
            dropdown.addEventListener('mouseleave', () => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            });
            
            // Also handle click for desktop
            dropdownLink.addEventListener('click', (e) => {
                e.preventDefault();
                const isVisible = dropdownMenu.style.visibility === 'visible';
                if (isVisible) {
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.transform = 'translateY(-10px)';
                } else {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.visibility = 'visible';
                    dropdownMenu.style.transform = 'translateY(0)';
                    dropdownMenu.style.display = 'block';
                }
            });
        }
        
        // Mobile click
        if (window.innerWidth <= 959) {
            dropdownLink.addEventListener('click', (e) => {
                e.preventDefault();
                dropdownMenu.classList.toggle('active');
            });
        }
    });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            ensureNavVisibility();
        });
        
        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Don't prevent default for #apply links - let modal handler take over
            if (targetId === '#apply') {
                return;
            }
            
            e.preventDefault();
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const topBarHeight = document.querySelector('.top-bar').offsetHeight;
                const totalOffset = headerHeight + topBarHeight;
                const targetPosition = targetSection.offsetTop - totalOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation link
                updateActiveNavLink(targetId);
                
                // Close mobile menu if open
                const nav = document.querySelector('.nav');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });
    });
}

// Update Active Navigation Link
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`a[href="${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');
}

// Ensure navigation visibility
function ensureNavVisibility() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        // Force visibility for all navigation links
        link.style.visibility = 'visible';
        link.style.opacity = '1';
        link.style.display = 'flex';
    });
    
    // Special handling for Fırsatlar link
    const firsatlarNav = document.getElementById('firsatlar-nav');
    if (firsatlarNav) {
        firsatlarNav.style.visibility = 'visible';
        firsatlarNav.style.opacity = '1';
        firsatlarNav.style.display = 'inline-flex';
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll (only on mobile)
        if (window.innerWidth <= 959) {
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
}

// Form Handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                showNotification('Mesajınız başarıyla gönderildi!', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
        
        // Form validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

// Field Validation
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error
    clearFieldError(e);
    
    // Check required fields
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Bu alan zorunludur');
        return false;
    }
    
    // Check email format
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Geçerli bir e-posta adresi giriniz');
            return false;
        }
    }
    
    // Check phone format
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Geçerli bir telefon numarası giriniz');
            return false;
        }
    }
    
    return true;
}

// Show Field Error
function showFieldError(field, message) {
    // Remove existing error
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error element
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#dc3545';
    errorElement.style.fontSize = '14px';
    errorElement.style.marginTop = '5px';
    
    // Add error to field
    field.parentNode.appendChild(errorElement);
    field.style.borderColor = '#dc3545';
}

// Clear Field Error
function clearFieldError(e) {
    const field = e.target;
    const errorElement = field.parentNode.querySelector('.field-error');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.style.borderColor = '#e9ecef';
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '10px',
        color: '#ffffff',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#28a745';
            break;
        case 'error':
            notification.style.background = '#dc3545';
            break;
        default:
            notification.style.background = '#40b8b8';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Language Selector
function initLanguageSelector() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            langBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const language = btn.textContent;
            console.log(`Language changed to: ${language}`);
            
            // Show notification
            showNotification(`Dil ${language} olarak değiştirildi`, 'info');
        });
    });
}

// Search Functionality
function initSearch() {
    const searchBox = document.querySelector('.search-box');
    
    if (searchBox) {
        const input = searchBox.querySelector('input');
        const button = searchBox.querySelector('button');
        
        button.addEventListener('click', performSearch);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-box input');
    const query = searchInput.value.trim();
    
    if (query) {
        // Here you would implement actual search functionality
        console.log(`Searching for: ${query}`);
        showNotification(`"${query}" için arama yapılıyor...`, 'info');
    } else {
        showNotification('Lütfen arama terimi giriniz', 'error');
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .card-content, .section-header, .partner-item, .contact-item');
    animateElements.forEach(el => observer.observe(el));
}

// Add loading states for buttons
function initButtonLoading() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('btn-primary') || this.classList.contains('btn-secondary')) {
                // Don't show loading for form submit buttons
                if (this.type === 'submit') return;

                // Don't show loading for links that navigate to other pages or open modals
                if (this.tagName === 'A') {
                    const href = this.getAttribute('href');
                    const text = this.textContent.trim();

                    // Skip for apply buttons (they open modal)
                    if (href === '#apply' || text.includes('Kartınızı Alın') || text.includes('ŞİMDİ BAŞVUR')) {
                        return;
                    }

                    // Allow navigation for external pages (.html files)
                    if (href && (href.endsWith('.html') || !href.startsWith('#'))) {
                        return;
                    }
                }

                const originalText = this.textContent;
                this.textContent = 'Yükleniyor...';
                this.disabled = true;

                // Simulate loading (remove in production)
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
}

// Window resize handler
window.addEventListener('resize', () => {
    // Reinitialize dropdowns on resize
    initDropdowns();
});

// Add CSS for additional styles
const additionalStyles = `
    .field-error {
        color: #dc3545;
        font-size: 14px;
        margin-top: 5px;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .notification {
        animation: slideInRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    body.menu-open {
        overflow: hidden;
    }
    
    .dropdown-menu.active {
        display: block;
    }
    
    .dropdown-menu.active li {
        opacity: 1;
        transform: translateX(0);
    }
    
    .dropdown-menu li {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.3s ease;
    }
    
    .dropdown-menu.active li:nth-child(1) { transition-delay: 0.1s; }
    .dropdown-menu.active li:nth-child(2) { transition-delay: 0.2s; }
    .dropdown-menu.active li:nth-child(3) { transition-delay: 0.3s; }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Application Modal Functionality
function initApplicationModal() {
    const modal = document.getElementById('applicationModal');
    const closeBtn = modal?.querySelector('.modal-close');
    const overlay = modal?.querySelector('.modal-overlay');
    const form = modal?.querySelector('#applicationForm');

    // Open modal function
    window.openApplicationModal = function() {
        console.log('Opening modal...', modal);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Add #apply to URL when modal opens
            if (window.location.hash !== '#apply') {
                history.pushState(null, null, '#apply');
            }
            // Focus on first input
            const firstInput = modal.querySelector('input, select');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 300);
            }
        } else {
            console.error('Modal element not found!');
        }
    };

    // Check URL hash on page load - auto-open modal if #apply is in URL
    if (window.location.hash === '#apply') {
        console.log('Detected #apply in URL, opening modal automatically...');
        setTimeout(() => {
            window.openApplicationModal();
        }, 500); // Small delay to ensure page is fully loaded
    }
    
    // Close modal function
    window.closeApplicationModal = function() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            // Reset form
            if (form) {
                form.reset();
                // Clear any error messages
                const errors = modal.querySelectorAll('.field-error');
                errors.forEach(error => error.remove());
            }
            // Remove #apply from URL when modal closes
            if (window.location.hash === '#apply') {
                history.replaceState(null, null, window.location.pathname);
            }
        }
    };
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', window.closeApplicationModal);
    }
    
    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', window.closeApplicationModal);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            window.closeApplicationModal();
        }
    });

    // Handle browser back button - close modal if it's open
    window.addEventListener('popstate', function(e) {
        if (modal?.classList.contains('active') && window.location.hash !== '#apply') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            if (form) {
                form.reset();
            }
        } else if (!modal?.classList.contains('active') && window.location.hash === '#apply') {
            window.openApplicationModal();
        }
    });
    
    // Handle radio button styling
    const radioButtons = modal?.querySelectorAll('input[type="radio"]');
    radioButtons?.forEach(radio => {
        radio.addEventListener('change', function() {
            // Remove active class from all labels in the same group
            const groupName = this.name;
            const allLabels = modal.querySelectorAll(`input[name="${groupName}"]`);
            allLabels.forEach(r => {
                const label = r.closest('.radio-label');
                if (label) label.classList.remove('active');
            });
            
            // Add active class to checked radio's label
            const checkedLabel = this.closest('.radio-label');
            if (checkedLabel) checkedLabel.classList.add('active');
        });
        
        // Set initial state
        if (radio.checked) {
            const label = radio.closest('.radio-label');
            if (label) label.classList.add('active');
        }
    });
    
    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateApplicationForm(form)) {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                // Show loading state
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    showNotification('Başvurunuz başarıyla alındı!', 'success');
                    window.closeApplicationModal();
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
    
    // Update buttons to open modal - use event delegation for better reliability
    // Use capture phase to ensure we catch the event before smooth scrolling
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        if (!target) return;

        const href = target.getAttribute('href');
        const buttonText = target.textContent.trim();

        // Check if it's an apply button
        if (href === '#apply' || target.classList.contains('floating-apply-btn')) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('Apply button clicked, opening modal...');
            if (window.openApplicationModal) {
                window.openApplicationModal();
            } else {
                console.error('openApplicationModal not defined');
            }
            return false;
        }

        // Check if it's a "Kartınızı Alın" button
        if ((buttonText.includes('Kartınızı Alın') || buttonText.includes('Kartınızı alın') ||
             buttonText.includes('ŞİMDİ BAŞVUR')) &&
            target.classList.contains('btn')) {
            // Only handle if it's not linking to an HTML file or external URL
            if (href && !href.startsWith('http') && !href.endsWith('.html') &&
                !href.startsWith('mailto:') && href !== '#cards' && href !== '#partners' &&
                href !== '#contact' && href !== '#home') {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('Kartınızı Alın button clicked, opening modal...');
                if (window.openApplicationModal) {
                    window.openApplicationModal();
                } else {
                    console.error('openApplicationModal not defined');
                }
                return false;
            }
        }
    }, true); // Use capture phase
}

// Validate Application Form
function validateApplicationForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        // Clear previous errors
        clearFieldError({ target: field });
        
        if (field.type === 'checkbox') {
            if (!field.checked) {
                showFieldError(field, 'Bu alan zorunludur');
                isValid = false;
            }
        } else if (field.type === 'radio') {
            const radioGroup = form.querySelectorAll(`input[name="${field.name}"]`);
            const isChecked = Array.from(radioGroup).some(radio => radio.checked);
            if (!isChecked) {
                const firstRadio = radioGroup[0];
                showFieldError(firstRadio, 'Lütfen bir seçenek seçiniz');
                isValid = false;
            }
        } else {
            if (!field.value.trim()) {
                showFieldError(field, 'Bu alan zorunludur');
                isValid = false;
            } else if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    showFieldError(field, 'Geçerli bir e-posta adresi giriniz');
                    isValid = false;
                }
            }
        }
    });
    
    return isValid;
}
