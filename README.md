# Jamuna Fisheries Website

A modern, responsive website for Jamuna Fisheries - a leading fish spawn and fingerlings supplier in Bankura, West Bengal, India.

## 🌐 Live Website

**Website URL:** https://jamunafisheries.github.io

## 🏢 About Jamuna Fisheries

Jamuna Fisheries, led by Mr. Ashis Nandi, specializes in the production of high-quality fish spawn and fingerlings. We are committed to supporting the aquaculture industry by providing superior fish seed that ensures successful fish farming operations across India.

### Contact Information
- **Phone:** +91 9609673056 / +91 9434653910
- **Email:** nandiashis01@gmail.com
- **Address:** Vill - Mouchura, Post - Teliberia, Onda, Bankura, West Bengal 722144
- **YouTube:** [@JamunaFisheries](https://www.youtube.com/@JamunaFisheries)

## 🚀 Features

- **Responsive Design:** Works perfectly on desktop, tablet, and mobile devices
- **Multi-language Support:** English, Hindi, and Bengali
- **Product Showcase:** Detailed information about fish spawn products
- **YouTube Integration:** Embedded videos and channel links
- **Contact Forms:** Easy ways to get in touch
- **SEO Optimized:** Search engine friendly with structured data
- **Fast Loading:** Optimized images and assets

## 🛠️ Technology Stack

- **HTML5:** Semantic markup
- **CSS3:** Modern styling with animations
- **JavaScript:** Interactive features and functionality
- **Font Awesome:** Icons
- **Google Fonts:** Typography
- **GitHub Pages:** Hosting

## 📁 Project Structure

```
jamunafisheries.github.io/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   ├── about-banner.jpeg
│   │   ├── about-sign.jpeg
│   │   ├── bata-fish.jpg
│   │   ├── catla-fish.jpg
│   │   ├── fingerlings.jpg
│   │   ├── grass-carp.jpg
│   │   ├── mrigal-fish.jpg
│   │   ├── owner-image.jpg
│   │   ├── puti-fish.jpg
│   │   ├── rohu-fish.jpg
│   │   └── silver-carp.jpg
│   └── js/
│       ├── config.js
│       ├── script.js
│       ├── translations.js
│       ├── update-videos.js
│       └── youtube-api.js
├── docs/
│   ├── DEPLOYMENT.md
│   ├── README.md
│   └── youtube-setup-guide.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Git (for development)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/jamunafisheries.github.io.git
   cd jamunafisheries.github.io
   ```

2. **Open in your browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **View the website:**
   - Navigate to `http://localhost:8000` (or the port shown by your server)

## 🌐 Deployment

This website is automatically deployed to GitHub Pages. The deployment process is handled by GitHub Actions.

### Automatic Deployment
- Every push to the `main` branch triggers automatic deployment
- The website is built and deployed to the `gh-pages` branch
- GitHub Pages serves the content from the `gh-pages` branch

### Manual Deployment
If you need to deploy manually:

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save the settings

2. **Trigger deployment:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

## 🔧 Configuration

### Updating Business Information
Edit `assets/js/config.js` to update:
- Contact information
- Business hours
- Product details
- Social media links
- SEO settings

### Adding New Products
1. Add product images to `assets/images/`
2. Update the products array in `config.js`
3. The website will automatically display new products

### Multi-language Support
Edit `assets/js/translations.js` to add or modify translations for:
- English (en)
- Hindi (hi)
- Bengali (bn)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions about the website:
- **Technical Issues:** Create an issue on GitHub
- **Business Inquiries:** Contact Mr. Ashis Nandi at +91 9609673056

## 🔄 Updates

- **Latest Update:** Website launched with multi-language support
- **Next Planned:** Enhanced product catalog and online ordering system

---

**Built with ❤️ for Jamuna Fisheries** 