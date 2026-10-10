/**
 * GOPIKA T K - DATA ANALYST PORTFOLIO
 * JavaScript File: script.js
 * 
 * Features:
 * 1. Dynamic Hero Typewriter Effect
 * 2. Sticky Navbar Blur & Shadow on Scroll
 * 3. Mobile Navigation Auto-close on link click
 * 4. Contact Form Validation with User Feedback
 * 5. Interactive Project Demo Modal
 * 6. Dynamic Copyright Year
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================
  // 1. DYNAMIC TYPEWRITER EFFECT IN HERO SECTION
  // ========================================================
  const typingElement = document.getElementById('typingText');
  
  // You can easily customize these roles for your own portfolio:
  const roles = [
    "DATA ANALYST",
    "PYTHON & SQL ENTHUSIAST",
    "POWER BI DEVELOPER",
    "DATA STORYTELLER",
    "CRITICAL PROBLEM SOLVER"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseBetweenWords = 1800;

  function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // Removing characters
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Typing characters
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    // Finished typing current word
    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, pauseBetweenWords);
      return;
    }

    // Finished deleting current word
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, currentSpeed);
  }

  // Start the typewriter loop
  typeEffect();


  // ========================================================
  // 2. NAVBAR SCROLL EFFECT (BLUR & SHADOW)
  // ========================================================
  const navbar = document.getElementById('mainNavbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  // ========================================================
  // 3. AUTO-CLOSE MOBILE NAVBAR ON LINK CLICK
  // ========================================================
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });


  // ========================================================
  // 4. CONTACT FORM VALIDATION & HANDLING
  // ========================================================
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      // Email validation regex pattern
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }

      // Validate Email
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('is-invalid');
        isValid = false;
      } else {
        subjectInput.classList.remove('is-invalid');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
      }

      if (isValid) {
        // Simulate sending process
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Sending Message...
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Message Sent!</span>
            <i class="fa-solid fa-circle-check"></i>
          `;

          // Display success alert
          formFeedback.className = 'mt-3 alert alert-success d-flex align-items-center gap-2';
          formFeedback.innerHTML = `
            <i class="fa-solid fa-circle-check fs-5"></i>
            <div>
              <strong>Thank you, ${nameInput.value.trim()}!</strong> Your message was validated successfully. 
              <br><small class="text-secondary">(Connect this form to Formspree or EmailJS in production to receive real inbox emails!)</small>
            </div>
          `;
          formFeedback.classList.remove('d-none');

          // Reset Form
          contactForm.reset();

          // Reset button text after 4 seconds
          setTimeout(() => {
            submitBtn.innerHTML = `
              <span>Send Message</span>
              <i class="fa-regular fa-paper-plane"></i>
            `;
          }, 4000);
        }, 1000);
      }
    });

    // Remove invalid style as user types
    const inputs = contactForm.querySelectorAll('.form-control');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.value.trim().length > 0) {
          input.classList.remove('is-invalid');
        }
      });
    });
  }


  // ========================================================
  // 5. PROJECT DEMO MODAL TRIGGER
  // ========================================================
  const demoButtons = document.querySelectorAll('.demo-btn');
  const demoProjectTitle = document.getElementById('demoProjectTitle');
  const demoModalElement = document.getElementById('demoModal');

  if (demoButtons && demoModalElement) {
    const demoModal = new bootstrap.Modal(demoModalElement);

    demoButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectTitle = button.getAttribute('data-project') || "Project Preview";
        if (demoProjectTitle) {
          demoProjectTitle.textContent = projectTitle;
        }
        demoModal.show();
      });
    });
  }


  // ========================================================
  // 6. DYNAMIC CURRENT YEAR FOR FOOTER
  // ========================================================
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});
