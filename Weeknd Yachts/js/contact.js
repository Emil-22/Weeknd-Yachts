// Contact page functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success modal
        successModal.classList.add('active');
        successModal.style.display = 'flex';
        
        // Reset form
        contactForm.reset();
    });
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.classList.remove('active');
            successModal.style.display = 'none';
        }
    });
});
