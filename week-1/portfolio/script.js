// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle Functionality
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);

// Toggle theme with animation
toggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    
    // Add transitioning class for animation
    toggle.classList.add("transitioning");
    
    // Change theme
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    // Remove transitioning class after animation
    setTimeout(() => {
        toggle.classList.remove("transitioning");
    }, 300);
});

// Get modal elements
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.getElementById('closeModalBtn');
const closeBtn2 = document.getElementById('closeModalBtn2');

// Open modal function
function openModal(title, description) {
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    modal.showModal();
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    modal.close();
    document.body.style.overflow = 'auto';
}

// Add click listeners to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        openModal(title, desc);
    });
    
    // Add hover effects for project cards
    card.addEventListener('mouseenter', function() {
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
    
    card.addEventListener('mouseleave', function() {
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

// Close modal button listeners
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    contactForm.reset();
});

// Smooth scroll with offset for fixed nav
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

// Update icon colors on theme change
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
            // Reinitialize icons to update colors
            lucide.createIcons();
        }
    });
});

observer.observe(root, {
    attributes: true,
    attributeFilter: ['data-theme']
});
