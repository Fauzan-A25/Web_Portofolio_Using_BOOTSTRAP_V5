// Modern Portfolio JavaScript - Enhanced Version dengan Project Slider

class ModernPortfolio {
  constructor() {
    this.currentTheme = localStorage.getItem("theme") || "dark";
    this.isLoading = true;
    this.projectsSwiper = null;

    this.init();
  }

  init() {
    // Set initial theme
    document.documentElement.setAttribute("data-theme", this.currentTheme);

    // Initialize all features
    this.initLoadingScreen();
    this.initThemeToggle();
    this.initSmoothScrolling();
    this.initNavbarEffects();
    this.initScrollAnimations();
    this.initParallaxEffects();
    this.initTypingEffect();
    this.initCVDownload();
    this.initContactForm();
    this.initProjectsSlider(); // New slider functionality

    // Performance optimizations
    this.initLazyLoading();
    this.initIntersectionObserver();
  }

  // Loading Screen
  initLoadingScreen() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const loadingScreen = document.getElementById("loading");
        if (loadingScreen) {
          loadingScreen.style.opacity = "0";
          setTimeout(() => {
            loadingScreen.style.display = "none";
            this.isLoading = false;
            this.animateOnLoad();
          }, 500);
        }
      }, 1000); // Show loading for at least 1 second
    });
  }

  // Theme Toggle
  initThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle.querySelector("i");

    // Set initial icon
    this.updateThemeIcon(themeIcon);

    themeToggle.addEventListener("click", () => {
      this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", this.currentTheme);
      localStorage.setItem("theme", this.currentTheme);
      this.updateThemeIcon(themeIcon);

      // Add smooth transition effect
      document.body.style.transition =
        "background-color 0.3s ease, color 0.3s ease";
      setTimeout(() => {
        document.body.style.transition = "";
      }, 300);
    });
  }

  updateThemeIcon(icon) {
    icon.className =
      this.currentTheme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  }

  // Smooth Scrolling
  initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for navbar
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // Navbar Effects
  initNavbarEffects() {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Hide/show navbar on scroll
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      // Add background blur when scrolled
      if (scrollTop > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }

      lastScrollTop = scrollTop;
    });

    // Active nav link highlighting
    this.updateActiveNavLink();
    window.addEventListener("scroll", () => {
      this.updateActiveNavLink();
    });
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.pageYOffset;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Scroll Animations
  initScrollAnimations() {
    const animateElements = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    animateElements.forEach((el) => observer.observe(el));
  }

  // Parallax Effects
  initParallaxEffects() {
    window.addEventListener("scroll", () => {
      if (this.isLoading) return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      // Hero section parallax
      const hero = document.querySelector(".jumbotron::before");
      if (hero) {
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
      }

      // Floating animation for hero image
      const heroImage = document.querySelector(".hero-image");
      if (heroImage && scrolled < window.innerHeight) {
        const floatOffset = Math.sin(scrolled * 0.01) * 10;
        heroImage.style.transform = `translateY(${floatOffset}px) scale(${
          1 - scrolled * 0.0001
        })`;
      }
    });
  }

  // Typing Effect for Hero Title
  initTypingEffect() {
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.textContent = "";

      setTimeout(() => {
        this.typeWriter(heroTitle, text, 0, 50);
      }, 1500); // Start after loading
    }
  }

  typeWriter(element, text, i, speed) {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(() => this.typeWriter(element, text, i, speed), speed);
    }
  }

  // ===== PROJECT SLIDER INITIALIZATION ===== //
  initProjectsSlider() {
    // Wait for Swiper library to load
    if (typeof Swiper === "undefined") {
      setTimeout(() => this.initProjectsSlider(), 100);
      return;
    }

    // Initialize Swiper
    this.projectsSwiper = new Swiper(".projects-swiper", {
      // Basic settings
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: false,

      // Effects
      effect: "slide",
      speed: 800,

      // Auto height
      autoHeight: true,

      // Navigation
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },

      // Pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      // Keyboard control
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      // Mouse wheel
      // mousewheel: {
      //   invert: false,
      //   forceToAxis: false,
      //   sensitivity: 1,
      // },

      // Touch settings
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,

      // Responsive breakpoints
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },

      // Event callbacks
      on: {
        init: (swiper) => {
          this.updateProjectCounter(swiper);
          this.updateNavigationButtons(swiper);
        },
        slideChange: (swiper) => {
          this.updateProjectCounter(swiper);
          this.updateNavigationButtons(swiper);
          this.animateSlideContent(swiper);
        },
        resize: (swiper) => {
          swiper.update();
        },
      },
    });

    // Custom navigation events
    this.initCustomSliderControls();

    // Auto-play functionality (optional)
    // this.initSliderAutoPlay();

    // Keyboard shortcuts
    this.initSliderKeyboard();

    console.log("🎯 Projects slider initialized successfully!");
  }

  // Update project counter
  updateProjectCounter(swiper) {
    const currentProject = document.querySelector(".current-project");
    const totalProjects = document.querySelector(".total-projects");

    if (currentProject && totalProjects) {
      const current = (swiper.realIndex + 1).toString().padStart(2, "0");
      const total = swiper.slides.length.toString().padStart(2, "0");

      currentProject.textContent = current;
      totalProjects.textContent = total;
    }
  }

  // Update navigation button states
  updateNavigationButtons(swiper) {
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    if (prevBtn && nextBtn) {
      prevBtn.disabled = swiper.isBeginning;
      nextBtn.disabled = swiper.isEnd;

      // Add visual feedback
      if (swiper.isBeginning) {
        prevBtn.style.opacity = "0.3";
      } else {
        prevBtn.style.opacity = "0.8";
      }

      if (swiper.isEnd) {
        nextBtn.style.opacity = "0.3";
      } else {
        nextBtn.style.opacity = "0.8";
      }
    }
  }

  // Animate slide content on change
  animateSlideContent(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const content = activeSlide.querySelector(".project-content");
    const image = activeSlide.querySelector(".project-image");

    if (content && image) {
      // Reset animations
      content.style.opacity = "0";
      content.style.transform = "translateX(-30px)";
      image.style.opacity = "0";
      image.style.transform = "scale(0.9)";

      // Animate in
      setTimeout(() => {
        content.style.opacity = "1";
        content.style.transform = "translateX(0)";
        content.style.transition = "all 0.6s ease";

        image.style.opacity = "1";
        image.style.transform = "scale(1)";
        image.style.transition = "all 0.8s ease";
      }, 100);
    }
  }

  // Custom slider controls
  initCustomSliderControls() {
    // Touch/swipe gestures enhancement
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;

    const sliderContainer = document.querySelector(".projects-swiper");

    if (sliderContainer) {
      sliderContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      });

      sliderContainer.addEventListener("touchend", (e) => {
        distX = e.changedTouches[0].clientX - startX;
        distY = e.changedTouches[0].clientY - startY;

        // Check if horizontal swipe is dominant
        if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > 50) {
          if (distX > 0) {
            this.projectsSwiper.slidePrev();
          } else {
            this.projectsSwiper.slideNext();
          }
        }
      });
    }
  }

  // Auto-play functionality (pauses on hover)
  initSliderAutoPlay() {
    let autoPlayInterval;
    const autoPlayDelay = 8000; // 8 seconds
    const sliderContainer = document.querySelector(
      ".projects-slider-container"
    );

    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
        if (this.projectsSwiper && !this.projectsSwiper.isEnd) {
          this.projectsSwiper.slideNext();
        } else if (this.projectsSwiper && this.projectsSwiper.isEnd) {
          this.projectsSwiper.slideTo(0);
        }
      }, autoPlayDelay);
    };

    const stopAutoPlay = () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };

    if (sliderContainer) {
      // Start auto-play after initial delay
      setTimeout(startAutoPlay, 3000);

      // Pause on hover/focus
      sliderContainer.addEventListener("mouseenter", stopAutoPlay);
      sliderContainer.addEventListener("mouseleave", startAutoPlay);
      sliderContainer.addEventListener("focusin", stopAutoPlay);
      sliderContainer.addEventListener("focusout", startAutoPlay);

      // Pause when page is not visible
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          stopAutoPlay();
        } else {
          startAutoPlay();
        }
      });
    }
  }

  // Keyboard shortcuts for slider
  initSliderKeyboard() {
    document.addEventListener("keydown", (e) => {
      // Only handle when slider is in view
      const sliderSection = document.getElementById("projects");
      const rect = sliderSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView || !this.projectsSwiper) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          this.projectsSwiper.slidePrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          this.projectsSwiper.slideNext();
          break;
        case "Home":
          e.preventDefault();
          this.projectsSwiper.slideTo(0);
          break;
        case "End":
          e.preventDefault();
          this.projectsSwiper.slideTo(this.projectsSwiper.slides.length - 1);
          break;
      }
    });
  }

  // CV Download
  initCVDownload() {
    const cvButtons = document.querySelectorAll("#CV, #downloadCV");
    cvButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        // Add loading state
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="bi bi-download"></i> Downloading...';
        button.disabled = true;

        // Simulate download process
        setTimeout(() => {
          window.open(
            "https://docs.google.com/document/d/1zm9N7lCHsZPCChdz5zjfQK4wogPMqb5g/edit?usp=sharing&ouid=108411748673413313360&rtpof=true&sd=true",
            "_blank"
          );

          // Reset button
          button.innerHTML = originalText;
          button.disabled = false;
        }, 1000);
      });
    });
  }

  // Contact Form Enhancements
  initContactForm() {
    const contactButtons = document.querySelectorAll(
      'a[href^="mailto:"], a[href*="linkedin.com"]'
    );

    contactButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Add click animation
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
          button.style.transform = "scale(1)";
        }, 150);

        // Track interaction (you can integrate with analytics here)
        console.log("Contact interaction:", button.href);
      });
    });
  }

  // Lazy Loading for Images
  initLazyLoading() {
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  // Intersection Observer for Performance
  initIntersectionObserver() {
    // Animate skill badges when visible
    const skillBadges = document.querySelectorAll(".skills-badge");

    const badgeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, Math.random() * 300);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBadges.forEach((badge) => {
      badge.style.opacity = "0";
      badge.style.transform = "translateY(20px)";
      badge.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      badgeObserver.observe(badge);
    });
  }

  // Animate on Load
  animateOnLoad() {
    // Trigger hero animations
    const heroElements = document.querySelectorAll(
      ".hero-image, .hero-title, .hero-subtitle, .hero-actions"
    );
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  // Public methods for external control
  goToProject(index) {
    if (this.projectsSwiper) {
      this.projectsSwiper.slideTo(index);
    }
  }

  nextProject() {
    if (this.projectsSwiper) {
      this.projectsSwiper.slideNext();
    }
  }

  prevProject() {
    if (this.projectsSwiper) {
      this.projectsSwiper.slidePrev();
    }
  }
}

// Utility Functions
class PortfolioUtils {
  // Smooth scroll to top
  static scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Copy to clipboard
  static copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showNotification("Copied to clipboard!");
    });
  }

  // Show notification
  static showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: var(--accent-gradient);
            color: white;
            border-radius: 50px;
            box-shadow: var(--shadow-primary);
            z-index: 10000;
            transform: translateX(300px);
            transition: transform 0.3s ease;
        `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Animate out and remove
    setTimeout(() => {
      notification.style.transform = "translateX(300px)";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Detect mobile device
  static isMobile() {
    return window.innerWidth <= 768;
  }

  // Get scroll percentage
  static getScrollPercentage() {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
  }
}

// Performance Monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      loadTime: 0,
      scrollEvents: 0,
      resizeEvents: 0,
      sliderInteractions: 0,
    };

    this.init();
  }

  init() {
    // Monitor load time
    window.addEventListener("load", () => {
      this.metrics.loadTime = performance.now();
      console.log(`Portfolio loaded in ${this.metrics.loadTime.toFixed(2)}ms`);
    });

    // Monitor scroll performance
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      this.metrics.scrollEvents++;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll ended
        if (this.metrics.scrollEvents > 1000) {
          console.warn("High scroll event count detected");
        }
      }, 100);
    });

    // Monitor resize events
    window.addEventListener("resize", () => {
      this.metrics.resizeEvents++;
    });
  }

  getMetrics() {
    return this.metrics;
  }
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const portfolio = new ModernPortfolio();
  const performanceMonitor = new PerformanceMonitor();

  // Make portfolio instance globally available
  window.portfolio = portfolio;

  // Global error handling
  window.addEventListener("error", (e) => {
    console.error("Portfolio error:", e.error);
    PortfolioUtils.showNotification(
      "Something went wrong. Please refresh the page.",
      "error"
    );
  });

  // Add scroll to top functionality
  let scrollToTopButton = document.createElement("button");
  scrollToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
  scrollToTopButton.className = "scroll-to-top";
  scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 6rem;
        left: 2rem;
        width: 48px;
        height: 48px;
        background: var(--accent-gradient);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        z-index: 999;
        box-shadow: var(--shadow-primary);
    `;

  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener("click", PortfolioUtils.scrollToTop);

  // Show/hide scroll to top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      scrollToTopButton.style.opacity = "1";
      scrollToTopButton.style.visibility = "visible";
    } else {
      scrollToTopButton.style.opacity = "0";
      scrollToTopButton.style.visibility = "hidden";
    }
  });

  console.log(
    "🚀 Modern Portfolio with Project Slider initialized successfully!"
  );
});

// Export for module usage (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ModernPortfolio, PortfolioUtils, PerformanceMonitor };
}
