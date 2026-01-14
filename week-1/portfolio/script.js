// Initialize Lucide Icons
lucide.createIcons();

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
    alert('Message sent!');
});