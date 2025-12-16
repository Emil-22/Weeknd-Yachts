# Quick Start Guide - Weeknd Yachts Website

## Getting Started in 3 Steps

### 1. Extract the Files
Unzip the `weeknd-yachts-html.zip` file to your desired location.

### 2. Open the Website
Double-click `index.html` to open it in your default web browser.

### 3. Start Editing
Open any HTML file in your favorite text editor (VS Code, Sublime Text, Notepad++, etc.) and start customizing!

## Common Edits

### Change Text Content
Open any `.html` file and find the text you want to change. All text is in plain HTML - no special syntax needed.

**Example - Change the hero title:**
```html
<!-- In index.html, find: -->
<h1 class="hero-title">
    Experience Luxury<br>
    <span class="hero-title-italic">on the Water</span>
</h1>

<!-- Change to: -->
<h1 class="hero-title">
    Your Custom Title<br>
    <span class="hero-title-italic">Your Subtitle</span>
</h1>
```

### Update Yacht Information
Open `js/data.js` and edit the yachts array:

```javascript
{
    id: "my-yacht",
    name: "My Yacht Name",
    length: "80ft / 24m",
    capacity: 20,
    cabins: 4,
    priceAED: 5000,
    priceUSD: 1360,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    image: "https://your-image-url.com/image.jpg",
    description: "Your yacht description"
}
```

### Change Colors
Open `css/styles.css` and modify the color variables at the top:

```css
:root {
    --gold: #D4AF37;        /* Change this to your primary color */
    --charcoal: #333333;    /* Change this to your dark color */
    --cream: #FAF7F2;       /* Change this to your light color */
}
```

### Replace Images
1. Add your images to the `assets/` folder
2. Update the image paths in the HTML files

**Example:**
```html
<!-- Change from: -->
<img src="assets/hero-yacht.jpg" alt="Luxury Yacht">

<!-- To: -->
<img src="assets/my-custom-image.jpg" alt="My Custom Image">
```

## Deploying to a Web Server

### Option 1: Simple Upload
1. Connect to your web server via FTP/SFTP
2. Upload all files maintaining the folder structure
3. Access via your domain (e.g., `https://yourdomain.com`)

### Option 2: Using cPanel
1. Log into cPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload the zip file
5. Extract it
6. Move all files from the extracted folder to `public_html`

### Option 3: Using GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in repository settings
5. Your site will be live at `https://yourusername.github.io/repository-name`

## Testing Locally

### Using Python (Built-in)
```bash
# Navigate to the website folder
cd path/to/yacht-html

# Start server (Python 3)
python -m http.server 8000

# Open browser to: http://localhost:8000
```

### Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Navigate to the website folder
cd path/to/yacht-html

# Start server
http-server

# Open browser to: http://localhost:8080
```

## Need Help?

- All pages are in the root folder (index.html, fleet.html, etc.)
- All styles are in `css/styles.css`
- All functionality is in the `js/` folder
- Images are in `assets/` and `public/` folders

**Remember:** This is pure HTML/CSS/JavaScript - no compilation or build process needed. Just edit and refresh your browser!
