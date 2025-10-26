# Nurse Care Website

A responsive HTML website for a senior care and nursing facility.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections Include**:
  - Hero section with call-to-action
  - About section with contact form
  - Services showcase
  - Team members
  - Testimonials
  - Pricing plans
  - Contact information
  - Footer with quick links

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Roboto & Roboto Slab)

## File Structure

```
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Responsive styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets (to be added)
│   ├── logo.png
│   ├── hero-image.jpg
│   ├── team-1.jpg
│   ├── team-2.jpg
│   └── team-3.jpg
└── README.md
```

## Setup Instructions

1. **Add Images**: Place your images in the `images/` folder:
   - `logo.png` - Your logo (recommended: 150x80px)
   - `hero-image.jpg` - Main hero image (recommended: 1920x1080px)
   - `team-1.jpg`, `team-2.jpg`, `team-3.jpg` - Team member photos

2. **Open the Website**: Simply open `index.html` in a web browser

3. **Customize Content**:
   - Edit text content in `index.html`
   - Modify colors in `css/style.css` (see CSS variables in `:root`)
   - Update contact information

## Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #DF7D64;
    --secondary-color: #F1EEE3;
    --text-color: #333333;
    --text-light: #666666;
}
```

### Fonts
The website uses Google Fonts. To change fonts, update the link in `index.html` and the font-family in `css/style.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features to Implement

- [ ] Add actual images
- [ ] Connect contact form to backend/email service
- [ ] Add image gallery lightbox
- [ ] Implement blog functionality
- [ ] Add Google Maps integration for location
- [ ] Set up analytics tracking

## License

This project is open source and available for personal and commercial use.

## Credits

Design inspired by modern healthcare websites.
Developed as a static HTML template.
