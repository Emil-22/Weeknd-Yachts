// Booking page functionality
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const yachtSelect = document.getElementById('yacht');
    const dateInput = document.getElementById('date');
    const durationSelect = document.getElementById('duration');
    const summaryContent = document.getElementById('summaryContent');
    const summaryFeatures = document.getElementById('summaryFeatures');
    const successModal = document.getElementById('successModal');
    
    // Populate yacht select
    yachts.forEach(yacht => {
        const option = document.createElement('option');
        option.value = yacht.id;
        option.textContent = `${yacht.name} - ${yacht.length} - AED ${yacht.priceAED.toLocaleString()}/day`;
        yachtSelect.appendChild(option);
    });
    
    // Check for pre-selected yacht from URL
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedYacht = urlParams.get('yacht');
    if (preselectedYacht) {
        yachtSelect.value = preselectedYacht;
        updateSummary();
    }
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Update summary when yacht or duration changes
    yachtSelect.addEventListener('change', updateSummary);
    durationSelect.addEventListener('change', updateSummary);
    
    function updateSummary() {
        const selectedYachtId = yachtSelect.value;
        if (!selectedYachtId) {
            summaryContent.innerHTML = `
                <div class="summary-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    </svg>
                    <p>Select a yacht to see booking details</p>
                </div>
            `;
            return;
        }
        
        const yacht = getYachtById(selectedYachtId);
        const duration = parseInt(durationSelect.value);
        const basePrice = yacht.priceAED;
        const totalPrice = Math.round(basePrice * (duration / 8));
        
        summaryContent.innerHTML = `
            <div class="summary-yacht-name">${yacht.name}</div>
            <div class="summary-details">${yacht.length} • ${yacht.capacity} guests • ${yacht.cabins} cabins</div>
            <div class="summary-details">${duration} hours charter</div>
            <div class="summary-price">AED ${totalPrice.toLocaleString()}</div>
        `;
    }
    
    // Form submission
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(bookingForm);
        const yacht = getYachtById(formData.get('yacht'));
        const duration = parseInt(formData.get('duration'));
        const totalPrice = Math.round(yacht.priceAED * (duration / 8));
        
        // Update modal content
        document.getElementById('confirmEmail').textContent = formData.get('email');
        document.getElementById('modalSummary').innerHTML = `
            <div class="summary-yacht-name">${yacht.name}</div>
            <div class="summary-details">${formData.get('date')} at ${formData.get('time')} • ${duration} hours</div>
            <div class="summary-price">AED ${totalPrice.toLocaleString()}</div>
        `;
        
        // Show modal
        successModal.classList.add('active');
        successModal.style.display = 'flex';
        
        // Reset form
        bookingForm.reset();
        updateSummary();
    });
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.classList.remove('active');
            successModal.style.display = 'none';
        }
    });
});
