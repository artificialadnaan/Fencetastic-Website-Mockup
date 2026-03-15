/* ============================================
   FENCETASTIC - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Scroll-based nav background ---
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile nav toggle ---
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');
  const navOverlay = document.querySelector('.nav-overlay');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }

  // --- Mobile dropdown toggles ---
  document.querySelectorAll('.nav__dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav__dropdown-trigger');
    if (trigger && window.innerWidth <= 768) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('open');
        }
      });
    }
  });

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // --- Scroll reveal animations ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- Parallax on split images ---
  const parallaxImgs = document.querySelectorAll('.parallax-img img');
  if (parallaxImgs.length > 0) {
    window.addEventListener('scroll', () => {
      parallaxImgs.forEach(img => {
        const rect = img.getBoundingClientRect();
        const scrolled = (rect.top - window.innerHeight) / (rect.height + window.innerHeight);
        const translate = scrolled * -30;
        img.style.transform = `translateY(${translate}px) scale(1.08)`;
      });
    }, { passive: true });
  }

  // --- Gallery filtering ---
  const filterBtns = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // --- Lightbox ---
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const lightboxCaption = lightbox?.querySelector('.lightbox__caption');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-item__caption');
      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        if (lightboxCaption && caption) {
          lightboxCaption.textContent = caption.textContent;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox__close')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Reviews Carousel ---
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewDots = document.getElementById('reviewDots');
  const reviewPrev = document.getElementById('reviewPrev');
  const reviewNext = document.getElementById('reviewNext');

  if (reviewsTrack) {
    const slides = reviewsTrack.children;
    let currentSlide = 0;
    const total = slides.length;

    // Create dots
    if (reviewDots) {
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'reviews-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to review ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        reviewDots.appendChild(dot);
      }
    }

    function goToSlide(idx) {
      currentSlide = idx;
      reviewsTrack.style.transform = `translateX(-${idx * 100}%)`;
      if (reviewDots) {
        reviewDots.querySelectorAll('.reviews-dot').forEach((d, i) => {
          d.classList.toggle('active', i === idx);
        });
      }
    }

    if (reviewPrev) reviewPrev.addEventListener('click', () => goToSlide((currentSlide - 1 + total) % total));
    if (reviewNext) reviewNext.addEventListener('click', () => goToSlide((currentSlide + 1) % total));

    // Auto-advance every 6 seconds
    let autoPlay = setInterval(() => goToSlide((currentSlide + 1) % total), 6000);
    reviewsTrack.closest('.reviews-carousel')?.addEventListener('mouseenter', () => clearInterval(autoPlay));
    reviewsTrack.closest('.reviews-carousel')?.addEventListener('mouseleave', () => {
      autoPlay = setInterval(() => goToSlide((currentSlide + 1) % total), 6000);
    });
  }

  // --- Back to top ---
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Animated counters ---
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 1800;
          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            el.textContent = prefix + current + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // --- Lazy loading images ---
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.addEventListener('load', () => {
            img.style.opacity = '1';
          });
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    lazyImages.forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.4s ease';
      imageObserver.observe(img);
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = nav ? nav.offsetHeight + 20 : 20;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
