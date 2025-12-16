# Weeknd Yachts - Luxury Yacht Charters Website

A complete HTML/CSS/JavaScript website for Weeknd Yachts luxury yacht charter service in Dubai.

## Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **5 Complete Pages**:
  - Home (index.html)
  - Fleet (fleet.html)
  - Booking (booking.html)
  - About (about.html)
  - Contact (contact.html)
- **Interactive Features**:
  - Dynamic yacht filtering and search
  - Booking form with price calculator
  - Contact form
  - Smooth scroll animations
  - Sticky navigation
- **Pure HTML/CSS/JavaScript** - No frameworks or build tools required

## File Structure

```
/
├── index.html          # Homepage
├── fleet.html          # Fleet listing page
├── booking.html        # Booking page with form
├── about.html          # About us page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # All website styles
├── js/
│   ├── data.js         # Yacht data
│   ├── main.js         # Homepage & navigation
│   ├── fleet.js        # Fleet page functionality
│   ├── booking.js      # Booking page functionality
│   └── contact.js      # Contact page functionality
├── assets/
│   ├── hero-yacht.jpg  # Hero section background
│   └── yacht-lifestyle.jpg # Lifestyle section background
└── public/
    ├── favicon.ico     # Website favicon
    ├── placeholder.svg # Placeholder image
    └── robots.txt      # SEO robots file
```

## How to Use

1. **Open Locally**: Simply open `index.html` in any modern web browser
2. **Deploy to Server**: Upload all files to your web server maintaining the folder structure
3. **Edit Content**: 
   - Edit HTML files to change text content
   - Modify `js/data.js` to update yacht information
   - Adjust `css/styles.css` to change colors, fonts, or styling

### Colors
All colors are defined as CSS variables in `css/styles.css`:
- `--gold: #D4AF37` - Primary accent color
- `--charcoal: #333333` - Dark backgrounds
- `--cream: #FAF7F2` - Light text on dark backgrounds

### Fonts
The website uses:
- **Playfair Display** (serif) for headings
- **Montserrat** (sans-serif) for body text

### Yacht Data
Edit the `yachts` array in `js/data.js` to add, remove, or modify yachts.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Weeknd Yachts 2025
