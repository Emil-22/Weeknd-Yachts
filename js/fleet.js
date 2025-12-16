// Fleet page functionality
document.addEventListener('DOMContentLoaded', function() {
    const allYachtsContainer = document.getElementById('allYachts');
    const searchInput = document.getElementById('searchInput');
    const priceFilter = document.getElementById('priceFilter');
    const capacityFilter = document.getElementById('capacityFilter');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    let filteredYachts = [...yachts];
    
    // Render yachts
    function renderYachts() {
        if (filteredYachts.length === 0) {
            allYachtsContainer.style.display = 'none';
            noResults.style.display = 'block';
            resultsCount.textContent = 'No yachts found';
        } else {
            allYachtsContainer.style.display = 'grid';
            noResults.style.display = 'none';
            allYachtsContainer.innerHTML = filteredYachts.map(yacht => createYachtCard(yacht)).join('');
            resultsCount.textContent = `Showing ${filteredYachts.length} yacht${filteredYachts.length !== 1 ? 's' : ''}`;
        }
    }
    
    // Filter yachts
    function filterYachts() {
        const searchTerm = searchInput.value.toLowerCase();
        const priceRange = priceFilter.value;
        const capacityRange = capacityFilter.value;
        
        filteredYachts = yachts.filter(yacht => {
            // Search filter
            const matchesSearch = yacht.name.toLowerCase().includes(searchTerm);
            
            // Price filter
            let matchesPrice = true;
            if (priceRange === 'low') {
                matchesPrice = yacht.priceAED <= 2000;
            } else if (priceRange === 'mid') {
                matchesPrice = yacht.priceAED > 2000 && yacht.priceAED <= 5000;
            } else if (priceRange === 'high') {
                matchesPrice = yacht.priceAED > 5000;
            }
            
            // Capacity filter
            let matchesCapacity = true;
            if (capacityRange === 'small') {
                matchesCapacity = yacht.capacity <= 20;
            } else if (capacityRange === 'medium') {
                matchesCapacity = yacht.capacity > 20 && yacht.capacity <= 40;
            } else if (capacityRange === 'large') {
                matchesCapacity = yacht.capacity > 40;
            }
            
            return matchesSearch && matchesPrice && matchesCapacity;
        });
        
        renderYachts();
    }
    
    // Event listeners
    searchInput.addEventListener('input', filterYachts);
    priceFilter.addEventListener('change', filterYachts);
    capacityFilter.addEventListener('change', filterYachts);
    
    clearFiltersBtn.addEventListener('click', function() {
        searchInput.value = '';
        priceFilter.value = 'all';
        capacityFilter.value = 'all';
        filterYachts();
    });
    
    // Initial render
    renderYachts();
    
    // Sticky filters
    const filtersSection = document.getElementById('filtersSection');
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            filtersSection.style.top = navbarHeight + 'px';
        }
    });
});
