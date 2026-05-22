let initialized = false;

export function initLegacy() {
  if (initialized) {
    return;
  }

  initialized = true;
const navbar = document.getElementById("navbar");
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");

      if (mobileMenuBtn && navbar) {
        mobileMenuBtn.setAttribute("aria-expanded", "false");

        mobileMenuBtn.addEventListener("click", function () {
          navbar.classList.toggle("is-open");
          mobileMenuBtn.setAttribute("aria-expanded", navbar.classList.contains("is-open") ? "true" : "false");
        });

        navbar.querySelectorAll("a").forEach(function (link) {
          link.addEventListener("click", function () {
            navbar.classList.remove("is-open");
            mobileMenuBtn.setAttribute("aria-expanded", "false");
          });
        });
      }

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const floatingBuy = document.querySelector(".floating-buy");
      const whatsappFab = document.querySelector(".rn-whatsapp-fab");
      const backToTopBtn = document.querySelector(".rn-back-to-top");

      function addMotion(selector, classNames) {
        const classes = classNames.split(" ");
        document.querySelectorAll(selector).forEach(function (el) {
          el.classList.add.apply(el.classList, classes);
        });
      }

      function assignMotionClasses() {
        addMotion(".brand-logo", "rn-animate rn-fade-in");
        addMotion(".nav-links a", "rn-animate rn-fade-in");
        addMotion(".program-grid, .ticket-grid, .steps-grid, .partner-logo-grid, .faq-grid, .terms-accordion, .footer-grid", "rn-stagger");
        addMotion(".hero-actions .btn", "rn-button-motion");
        addMotion(".countdown-wrap", "rn-animate rn-fade-up rn-card-motion");
        addMotion(".section-heading .section-kicker, .section-heading h2, .section-heading p", "rn-animate rn-fade-up");
        addMotion(".split-card:first-child", "rn-animate rn-slide-right rn-card-motion");
        addMotion(".split-card:last-child", "rn-animate rn-slide-left rn-card-motion");
        addMotion(".value-item, .program-card, .ticket-card, .step-item, .partner-logo, .faq-item, .terms-accordion-item", "rn-animate rn-fade-up rn-card-motion");
        addMotion(".rundown-slider, .venue-card", "rn-animate rn-scale-in");
        addMotion(".rundown-slide img, .partner-logo img, .footer-brand-logo", "rn-image-reveal");
        addMotion(".btn, .ticket-btn, .nav-cta, .floating-buy a", "rn-button-motion");

        document.querySelectorAll(".hero h1 span").forEach(function (el, index) {
          el.style.setProperty("--rn-delay", (0.2 + (index * 0.12)).toFixed(2) + "s");
        });

        document.querySelectorAll(".rn-stagger").forEach(function (group) {
          Array.prototype.forEach.call(group.children, function (child, index) {
            child.style.setProperty("--rn-order", index);
          });
        });

        document.querySelectorAll(".nav-links a").forEach(function (item, index) {
          item.style.setProperty("--rn-delay", (0.08 + (index * 0.06)).toFixed(2) + "s");
        });

        document.querySelectorAll(".brand-logo, .nav-links a").forEach(function (el) {
          el.classList.add("rn-visible");
        });
      }

      function initNavbarScrollState() {
        const scrolled = window.scrollY > 28;
        if (navbar) {
          navbar.classList.toggle("is-scrolled", scrolled);
        }
      }

      function updateFloatingState() {
        const y = window.scrollY || window.pageYOffset;
        const showFab = y > 300;
        const showBackTop = y > 500;

        if (floatingBuy) {
          floatingBuy.classList.toggle("is-visible", showFab);
        }

        if (whatsappFab) {
          whatsappFab.classList.toggle("is-visible", showFab);
        }

        if (backToTopBtn) {
          backToTopBtn.classList.toggle("is-visible", showBackTop);
        }
      }

      function initMotionObserver() {
        const motionEls = document.querySelectorAll(".rn-animate");
        const floatEls = document.querySelectorAll(".rn-organic-float");

        if (reduceMotion) {
          motionEls.forEach(function (el) {
            el.classList.add("rn-visible");
          });
          return;
        }

        if ("IntersectionObserver" in window) {
          const motionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("rn-visible");
              }
            });
          }, {
            threshold: 0.16,
            rootMargin: "0px 0px -10% 0px"
          });

          motionEls.forEach(function (el) {
            motionObserver.observe(el);
          });

          const floatObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-float-active");
              } else {
                entry.target.classList.remove("is-float-active");
              }
            });
          }, {
            threshold: 0.2
          });

          floatEls.forEach(function (el, index) {
            el.style.setProperty("--rn-float-delay", (index * 0.12).toFixed(2) + "s");
            floatObserver.observe(el);
          });
        } else {
          motionEls.forEach(function (el) {
            el.classList.add("rn-visible");
          });

          floatEls.forEach(function (el, index) {
            el.style.setProperty("--rn-float-delay", (index * 0.12).toFixed(2) + "s");
            el.classList.add("is-float-active");
          });
        }
      }

      assignMotionClasses();
      document.body.classList.add("motion-ready");
      initMotionObserver();
      initNavbarScrollState();
      updateFloatingState();

      let scrollTicking = false;

      function updateScrollState() {
        initNavbarScrollState();
        updateFloatingState();
        scrollTicking = false;
      }

      window.addEventListener("scroll", function () {
        if (!scrollTicking) {
          scrollTicking = true;
          window.requestAnimationFrame(updateScrollState);
        }
      }, { passive: true });

      if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      const countdownDays = document.querySelector("[data-countdown-days]");
      const countdownHours = document.querySelector("[data-countdown-hours]");
      const countdownMinutes = document.querySelector("[data-countdown-minutes]");
      const countdownSeconds = document.querySelector("[data-countdown-seconds]");

      if (countdownDays && countdownHours && countdownMinutes && countdownSeconds) {
        const eventStartTime = new Date("2026-06-19T00:00:00+07:00").getTime();

        function pad(value) {
          return String(value).padStart(2, "0");
        }

        function updateCountdown() {
          const diffMs = Math.max(0, eventStartTime - Date.now());
          const totalSeconds = Math.floor(diffMs / 1000);

          const days = Math.floor(totalSeconds / 86400);
          const hours = Math.floor((totalSeconds % 86400) / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;

          countdownDays.textContent = pad(days);
          countdownHours.textContent = pad(hours);
          countdownMinutes.textContent = pad(minutes);
          countdownSeconds.textContent = pad(seconds);
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
      }
      const slider = document.querySelector("[data-rundown-slider]");

      if (slider) {
        const slides = slider.querySelectorAll(".rundown-slide");
        const dots = slider.querySelectorAll(".rundown-dots button");
        const prev = slider.querySelector(".rundown-prev");
        const next = slider.querySelector(".rundown-next");

        let current = 0;
        let autoplay;

        function showSlide(index) {
          if (!slides.length) return;

          if (index < 0) index = slides.length - 1;
          if (index >= slides.length) index = 0;

          slides.forEach(function (slide) {
            slide.classList.remove("is-active");
          });

          dots.forEach(function (dot) {
            dot.classList.remove("is-active");
          });

          slides[index].classList.add("is-active");

          if (dots[index]) {
            dots[index].classList.add("is-active");
          }

          current = index;
        }

        function startAutoplay() {
          autoplay = setInterval(function () {
            showSlide(current + 1);
          }, 6000);
        }

        function restartAutoplay() {
          clearInterval(autoplay);
          startAutoplay();
        }

        if (prev) {
          prev.addEventListener("click", function () {
            showSlide(current - 1);
            restartAutoplay();
          });
        }

        if (next) {
          next.addEventListener("click", function () {
            showSlide(current + 1);
            restartAutoplay();
          });
        }

        dots.forEach(function (dot, index) {
          dot.addEventListener("click", function () {
            showSlide(index);
            restartAutoplay();
          });
        });

        startAutoplay();
      }

      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach(function (item) {
        const btn = item.querySelector(".faq-question");

        if (!btn) return;

        btn.addEventListener("click", function () {
          item.classList.toggle("is-open");
        });
      });

      const termItems = document.querySelectorAll(".terms-accordion-item");

      termItems.forEach(function (item) {
        const button = item.querySelector(".terms-accordion-question");

        if (!button) return;

        button.addEventListener("click", function () {
          item.classList.toggle("is-open");
        });
      });
}
