
// ===============================
// INITIALIZE
// ===============================

// Initialize Lucide Icons
lucide.createIcons();

const root = document.documentElement;


// ===============================
// THEME LOAD (NO BUTTON TOGGLE)
// ===============================

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  // User already chose
  root.setAttribute("data-theme", savedTheme);
} else {
  // First-time visitor → use system preference
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", systemDark ? "dark" : "light");
}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

mediaQuery.addEventListener("change", (e) => {
  const savedTheme = localStorage.getItem("theme");

  // Only react if user is in "system" mode
  if (!savedTheme) {
    root.setAttribute("data-theme", e.matches ? "dark" : "light");
  }
});

// ===============================
// MODAL LOGIC
// ===============================

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.getElementById('closeModalBtn');
const closeBtn2 = document.getElementById('closeModalBtn2');

function openModal(title, description) {
  if (!modal) return;
  modalTitle.textContent = title;
  modalDesc.textContent = description;
  modal.showModal();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.close();
  document.body.style.overflow = 'auto';
}

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    openModal(
      card.getAttribute('data-title'),
      card.getAttribute('data-desc')
    );
  });

  card.addEventListener('mouseenter', function () {
    const h3 = this.querySelector('h3');
    const arrow = this.querySelector('.w-10');
    const border = this.querySelector('.aspect-\\[4\\/3\\]');

    if (h3) h3.style.color = 'var(--primary-purple)';
    if (arrow) {
      arrow.style.background = 'var(--primary-purple)';
      arrow.style.borderColor = 'var(--primary-purple)';
    }
    if (border) border.style.borderColor = 'var(--primary-purple)';
  });

  card.addEventListener('mouseleave', function () {
    const h3 = this.querySelector('h3');
    const arrow = this.querySelector('.w-10');
    const border = this.querySelector('.aspect-\\[4\\/3\\]');

    if (h3) h3.style.color = 'var(--text-primary)';
    if (arrow) {
      arrow.style.background = '';
      arrow.style.borderColor = 'var(--dividers-borders)';
    }
    if (border) border.style.borderColor = 'var(--dividers-borders)';
  });
});

if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (closeBtn2) closeBtn2.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    contactForm.reset();
  });
}


// ===============================
// REDUCED MOTION
// ===============================

const motionKey = "reduceMotion";
const savedMotion = localStorage.getItem(motionKey);

if (savedMotion === "true" || savedMotion === "false") {
  root.setAttribute("data-reduce-motion", savedMotion);
} else {
  const systemReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.setAttribute("data-reduce-motion", systemReduced ? "true" : "false");
}


// ===============================
// SMOOTH SCROLL (RESPECT MOTION)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    const reduceMotion =
      root.getAttribute("data-reduce-motion") === "true";

    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  });
});


// ===============================
// ICON UPDATE ON THEME CHANGE
// ===============================

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'data-theme') {
      lucide.createIcons();
    }
  });
});

observer.observe(root, {
  attributes: true,
  attributeFilter: ['data-theme']
});


// ===============================
// PREFERENCES HAMBURGER MENU
// ===============================

const prefBtn = document.getElementById("prefBtn");
const prefDropdown = document.getElementById("prefDropdown");

if (prefBtn && prefDropdown) {

  prefBtn.addEventListener("click", () => {
    const open = prefBtn.getAttribute("aria-expanded") === "true";
    prefBtn.setAttribute("aria-expanded", String(!open));
    prefDropdown.hidden = open;
  });

  // Theme switching
  document.querySelectorAll("[data-theme-set]").forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme-set");

      if (theme === "system") {
        // Clear manual choice to enable system preference mode
        localStorage.removeItem("theme");

        // Force re-evaluation of system preference immediately
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const newTheme = systemDark ? "dark" : "light";
        
        console.log("System preference detected:", newTheme);
        root.setAttribute("data-theme", newTheme);
      } else {
        // Manual override (dark or light)
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        console.log("Manual theme set:", theme);
      }

      prefDropdown.hidden = true;
      prefBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Reduced Motion Toggle
  const reduceBtn = document.getElementById("reduceMotionToggle");

  function syncReducedMotionUI() {
    if (!reduceBtn) return;
    const isOn = root.getAttribute("data-reduce-motion") === "true";

    reduceBtn.classList.toggle("active", isOn);
    reduceBtn.setAttribute("aria-pressed", String(isOn));
  }

  if (reduceBtn) {
    // Initial state sync
    syncReducedMotionUI();

    reduceBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-reduce-motion") === "true";
      const next = (!current).toString();

      console.log("Reduced motion toggled to:", next);
      
      root.setAttribute("data-reduce-motion", next);
      localStorage.setItem("reduceMotion", next);

      syncReducedMotionUI();
    });
  }
}