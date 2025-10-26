# Quick Customization Guide

## 🎨 Changing Colors

Edit `/css/style.css` and find the `:root` section at the top:

```css
:root {
    --primary-color: #DF7D64;      /* Main brand color (buttons, accents) */
    --secondary-color: #F1EEE3;    /* Light background color */
    --text-color: #333333;         /* Main text color */
    --text-light: #666666;         /* Secondary text color */
}
```

Change these hex values to your brand colors!

## 📝 Updating Content

All content is in `index.html`. Look for these sections:

### Hero Section
```html
<h1 class="hero-title">Gentle elder nurse care support</h1>
<p class="hero-subtitle">A modern senior care center...</p>
```

### Services
Search for `<section class="services-section"` and edit the service cards.

### Team Members
Search for `<section class="team-section"` and update names and titles.

### Contact Information
Search for `<section class="contact-section"` and update:
- Address
- Phone number
- Email address

## 🖼️ Adding Your Images

Replace these placeholder SVG files with actual photos:

1. **Logo**: `images/logo.svg` → Use your actual logo
2. **Hero**: `images/hero-image.svg` → Use a high-quality photo of your facility
3. **Team**: `images/team-1.svg`, `team-2.svg`, `team-3.svg` → Use professional headshots

### Recommended Image Sizes:
- Logo: 150x80px (PNG or SVG)
- Hero: 1920x1080px or 1600x900px (JPG)
- Team photos: 800x1000px (JPG)

### Where to Get Free Stock Photos:
- [Unsplash](https://unsplash.com/s/photos/healthcare)
- [Pexels](https://www.pexels.com/search/nursing/)
- [Pixabay](https://pixabay.com/images/search/elderly-care/)

## 🔧 Common Customizations

### Change Font
In `index.html`, find the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Slab:wght@300;400;600;700&display=swap">
```

Replace with your preferred font, then update in `css/style.css`:
```css
--heading-font: 'Your Font Name', serif;
--body-font: 'Your Font Name', sans-serif;
```

### Change Button Style
In `css/style.css`, find `.btn-primary`:
```css
.btn-primary {
    background-color: var(--primary-color);
    color: #ffffff;
    border-radius: 50px; /* Change this for square/rounded buttons */
}
```

### Update Social Media Links
In `index.html`, find the social icons in header and footer:
```html
<a href="#" aria-label="Twitter">...</a>
<a href="#" aria-label="Instagram">...</a>
```

Replace `#` with your actual social media URLs.

## 📱 Testing Responsiveness

1. Open the website in your browser
2. Press `Cmd + Option + I` (Mac) or `F12` (Windows) to open DevTools
3. Click the device toggle icon (or press `Cmd + Shift + M`)
4. Test different screen sizes

## 🚀 Going Live

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site will be live at `yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your project folder
3. Get instant deployment with custom domain support

### Option 3: Traditional Web Hosting
1. Get web hosting (Bluehost, SiteGround, etc.)
2. Upload files via FTP
3. Point your domain to the hosting

## 🔍 SEO Tips

Add these to your `<head>` in `index.html`:

```html
<meta name="description" content="Your description here">
<meta name="keywords" content="nursing, elder care, senior care">
<meta property="og:title" content="Your Site Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="URL to image">
```

## 📧 Contact Form Integration

The contact form currently shows an alert. To make it functional:

### Option 1: FormSpree (Easy, Free)
1. Sign up at [Formspree.io](https://formspree.io/)
2. Get your form endpoint
3. In `js/main.js`, replace the form handler with FormSpree code

### Option 2: EmailJS (Free)
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Follow their integration guide
3. Update the form handler in `js/main.js`

### Option 3: Backend (Advanced)
Create your own backend using:
- PHP
- Node.js
- Python Flask/Django

## 📋 Checklist Before Launch

- [ ] Replace all placeholder images
- [ ] Update all text content
- [ ] Add real contact information
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check all links work
- [ ] Add favicon
- [ ] Set up analytics (Google Analytics)
- [ ] Test in different browsers
- [ ] Optimize images for web

## 🆘 Need Help?

Common issues:
- **Images not showing**: Check file paths and names match exactly
- **Mobile menu not working**: Make sure `js/main.js` is loaded
- **Styling looks broken**: Check that CSS files are properly linked

## 📚 Resources

- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

Happy customizing! 🎉
