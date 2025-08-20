// Vanilla JavaScript for Portfolio Website
// Performance optimized with modern ES6+ features

class PortfolioApp {
  constructor() {
    this.isMenuOpen = false;
    this.burgerBtn = null;
    this.closeBtn = null;
    this.mobileMenu = null;
    this.mobileMenuContent = null;
    
    // Bind methods to preserve 'this' context
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleResize = this.handleResize.bind(this);
    
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
    } else {
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    // Get DOM elements
    this.burgerBtn = document.getElementById('burger-menu');
    this.closeBtn = document.getElementById('close-menu');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.mobileMenuContent = this.mobileMenu?.querySelector('.mobile-menu-content');

    if (!this.burgerBtn || !this.closeBtn || !this.mobileMenu) {
      console.warn('Required menu elements not found');
      return;
    }

    // Menu toggle events
    this.burgerBtn.addEventListener('click', this.toggleMenu);
    this.closeBtn.addEventListener('click', this.closeMenu);

    // Backdrop click to close menu
    const backdrop = this.mobileMenu.querySelector('.mobile-menu-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', this.closeMenu);
    }

    // Keyboard events
    document.addEventListener('keydown', this.handleKeyPress);

    // Window resize events
    window.addEventListener('resize', this.handleResize);

    // Menu link clicks (close menu on navigation)
    const menuLinks = this.mobileMenu.querySelectorAll('.mobile-nav-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Close menu after a short delay to allow for smooth transition
        setTimeout(() => this.closeMenu(), 150);
      });
    });

    // Optimize scroll performance
    this.setupScrollOptimization();

    // Setup lazy loading for images
    this.setupLazyLoading();

    // Add focus management
    this.setupFocusManagement();

    console.log('Portfolio app initialized successfully');
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    if (this.isMenuOpen) return;

    this.isMenuOpen = true;
    this.mobileMenu.classList.add('open');
    this.burgerBtn.setAttribute('aria-expanded', 'true');
    this.burgerBtn.setAttribute('aria-label', 'Close navigation menu');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management
    this.closeBtn.focus();
    
    // Reset animations by removing and re-adding classes
    this.resetMenuAnimations();

    console.log('Menu opened');
  }

  closeMenu() {
    if (!this.isMenuOpen) return;

    this.isMenuOpen = false;
    this.mobileMenu.classList.remove('open');
    this.burgerBtn.setAttribute('aria-expanded', 'false');
    this.burgerBtn.setAttribute('aria-label', 'Open navigation menu');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to burger button
    this.burgerBtn.focus();

    console.log('Menu closed');
  }

  resetMenuAnimations() {
    const animatedElements = this.mobileMenu.querySelectorAll('.mobile-nav-link, .mobile-social-icons a');
    animatedElements.forEach(element => {
      element.style.animation = 'none';
      // Force reflow
      element.offsetHeight;
      element.style.animation = '';
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Escape' && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  handleClickOutside(e) {
    if (this.isMenuOpen && 
        !this.mobileMenuContent.contains(e.target) && 
        !this.burgerBtn.contains(e.target)) {
      this.closeMenu();
    }
  }

  handleResize() {
    // Close mobile menu on desktop resize
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  setupScrollOptimization() {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Add any scroll-based animations or effects here
      ticking = false;
    };

    const requestScrollUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  }

  setupLazyLoading() {
    // Enhanced lazy loading with Intersection Observer
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Fade in effect
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            
            img.onload = () => {
              img.style.opacity = '1';
            };
            
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // Observe all images with data-src attribute
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  setupFocusManagement() {
    // Improve focus management for accessibility
    const focusableElements = document.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    // Add visible focus indicators
    focusableElements.forEach(element => {
      element.addEventListener('focus', (e) => {
        e.target.classList.add('focus-visible');
      });

      element.addEventListener('blur', (e) => {
        e.target.classList.remove('focus-visible');
      });
    });

    // Trap focus within mobile menu when open
    this.mobileMenu?.addEventListener('keydown', (e) => {
      if (!this.isMenuOpen || e.key !== 'Tab') return;

      const focusableInMenu = this.mobileMenu.querySelectorAll(
        'button:not([disabled]), a[href]:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      const firstFocusable = focusableInMenu[0];
      const lastFocusable = focusableInMenu[focusableInMenu.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });
  }

  // Public method to programmatically control menu
  setMenuState(isOpen) {
    if (isOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  // Cleanup method for SPA-like behavior
  destroy() {
    // Remove all event listeners
    this.burgerBtn?.removeEventListener('click', this.toggleMenu);
    this.closeBtn?.removeEventListener('click', this.closeMenu);
    document.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('resize', this.handleResize);
    
    // Restore body styles
    document.body.style.overflow = '';
    
    console.log('Portfolio app destroyed');
  }
}

// Enhanced smooth scrolling for anchor links
function setupSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const headerOffset = 80; // Account for fixed navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Performance monitoring
function setupPerformanceMonitoring() {
  // Log core web vitals if available
  if ('web-vital' in window) {
    // Implementation would go here for production monitoring
  }

  // Simple performance logging
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
  });
}

// Error handling
function setupErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault(); // Prevent the default browser behavior
  });
}

// Initialize everything when DOM is ready
let portfolioApp;

function initializeApp() {
  try {
    portfolioApp = new PortfolioApp();
    setupSmoothScrolling();
    setupPerformanceMonitoring();
    setupErrorHandling();
    
    console.log('All systems initialized successfully');
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
}

// Start the app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export for potential external use
window.PortfolioApp = PortfolioApp;

// Hot reload support for development
if (module && module.hot) {
  module.hot.accept();
  
  module.hot.dispose(() => {
    if (portfolioApp) {
      portfolioApp.destroy();
    }
  });
}
