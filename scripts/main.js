  // Initialize Lucide Icons
        lucide.createIcons();

        // Very minimal Modal Logic
        const modal = document.getElementById('projectModal');
        const titleEl = document.getElementById('modalTitle');
        const descEl = document.getElementById('modalDesc');

        function openModal(title, desc) {
            titleEl.innerText = title;
            descEl.innerText = desc;
            modal.showModal();
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.close();
            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        // Close modal if clicking outside the content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
