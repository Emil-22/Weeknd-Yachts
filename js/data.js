// Yacht Data
const yachts = [
    {
        id: "riva-82-diva",
        name: "Riva 82' Diva",
        length: "82ft / 29.29m",
        capacity: 25,
        cabins: 4,
        priceAED: 9000,
        priceUSD: 2465,
        features: ["Jacuzzi", "Sun Deck", "Premium Sound"],
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
        description: "The ultimate luxury experience on water"
    },
    {
        id: "ferreti-780",
        name: "Ferreti 780",
        length: "78ft / 24.01m",
        capacity: 20,
        cabins: 4,
        priceAED: 5000,
        priceUSD: 1370,
        features: ["Flybridge", "Water Toys", "Chef Available"],
        image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
        description: "Italian craftsmanship meets modern luxury"
    },
    {
        id: "catamaran",
        name: "Catamaran",
        length: "60ft / 18.3m",
        capacity: 45,
        cabins: 4,
        priceAED: 3500,
        priceUSD: 955,
        features: ["Stability", "Large Deck", "Perfect for Events"],
        image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
        description: "Spacious comfort for large gatherings"
    },
    {
        id: "caliente",
        name: "Caliente",
        length: "96ft / 29.3m",
        capacity: 60,
        cabins: 3,
        priceAED: 3000,
        priceUSD: 821,
        features: ["Party Ready", "DJ Setup", "LED Lighting"],
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
        description: "The perfect vessel for celebrations"
    },
    {
        id: "ferreti-670",
        name: "Ferreti 670",
        length: "67ft / 20.24m",
        capacity: 18,
        cabins: 3,
        priceAED: 2600,
        priceUSD: 712,
        features: ["Elegant Interior", "Sunset Cruises", "Fine Dining"],
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
        description: "Refined elegance for intimate cruises"
    },
    {
        id: "monte-carlo",
        name: "Monte Carlo",
        length: "60ft / 18.3m",
        capacity: 15,
        cabins: 3,
        priceAED: 2000,
        priceUSD: 547,
        features: ["Classic Style", "Premium Finish", "Private Chef"],
        image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
        description: "Timeless sophistication on the waves"
    },
    {
        id: "ozone",
        name: "Ozone",
        length: "55ft / 16.8m",
        capacity: 40,
        cabins: 2,
        priceAED: 2000,
        priceUSD: 547,
        features: ["Jacuzzi", "Open Layout", "Great Views"],
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
        description: "Modern design with breathtaking views"
    },
    {
        id: "pershing-5x",
        name: "Pershing 5X White",
        length: "54ft / 16.51m",
        capacity: 8,
        cabins: 2,
        priceAED: 2000,
        priceUSD: 547,
        features: ["Speed", "Sport Design", "Intimate Setting"],
        image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
        description: "Performance meets luxury"
    },
    {
        id: "amie-axie",
        name: "Amie & Axie",
        length: "63ft / 19.2m",
        capacity: 27,
        cabins: 3,
        priceAED: 1600,
        priceUSD: 440,
        features: ["Family Friendly", "Spacious", "Water Sports"],
        image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
        description: "Perfect for family adventures"
    },
    {
        id: "c-62",
        name: "C-62",
        length: "62ft / 18.9m",
        capacity: 25,
        cabins: 3,
        priceAED: 1300,
        priceUSD: 355,
        features: ["Modern", "Comfortable", "Value"],
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
        description: "Quality experience at great value"
    },
    {
        id: "fly",
        name: "Fly",
        length: "53ft / 16.2m",
        capacity: 21,
        cabins: 2,
        priceAED: 1100,
        priceUSD: 300,
        features: ["Compact", "Agile", "Perfect for Day Trips"],
        image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
        description: "Agile and perfect for day trips"
    },
    {
        id: "c-52",
        name: "C-52",
        length: "52ft / 15.8m",
        capacity: 17,
        cabins: 2,
        priceAED: 1000,
        priceUSD: 270,
        features: ["Entry Level Luxury", "Great Starter", "Full Experience"],
        image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
        description: "Your gateway to luxury yachting"
    }
];

// Helper function to get yacht by ID
function getYachtById(id) {
    return yachts.find(yacht => yacht.id === id);
}

// Helper function to create yacht card HTML
function createYachtCard(yacht) {
    return `
        <div class="yacht-card">
            <img src="${yacht.image}" alt="${yacht.name}" class="yacht-image">
            <div class="yacht-content">
                <div class="yacht-header">
                    <h3 class="yacht-name">${yacht.name}</h3>
                    <div>
                        <div class="yacht-price">AED ${yacht.priceAED.toLocaleString()}</div>
                        <div class="yacht-price-label">per day</div>
                    </div>
                </div>
                <p class="yacht-size">${yacht.length}</p>
                <div class="yacht-specs">
                    <div class="yacht-spec">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        ${yacht.capacity} guests
                    </div>
                    <div class="yacht-spec">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 4v16"></path>
                            <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                            <path d="M2 17h20"></path>
                            <path d="M6 8v9"></path>
                        </svg>
                        ${yacht.cabins} cabins
                    </div>
                </div>
                <div class="yacht-features">
                    ${yacht.features.map(feature => `<div class="yacht-feature">${feature}</div>`).join('')}
                </div>
                <a href="booking.html?yacht=${yacht.id}" class="btn btn-gold btn-full">BOOK NOW</a>
            </div>
        </div>
    `;
}
