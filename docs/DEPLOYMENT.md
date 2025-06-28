# Deployment Guide - Jamuna Fisheries Website

This guide explains how to deploy and maintain the Jamuna Fisheries website on GitHub Pages.

## 🚀 Initial Setup

### 1. Repository Setup
1. Create a new repository on GitHub named `jamunafisheries.github.io`
2. Clone the repository to your local machine
3. Upload all website files to the repository
4. Push to the `main` branch

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Click **Save**

### 3. Configure GitHub Actions
The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will:
- Automatically build and deploy on every push to `main`
- Create the `gh-pages` branch if it doesn't exist
- Deploy the website to GitHub Pages

## 🔄 Deployment Process

### Automatic Deployment
1. Make changes to your website files
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. GitHub Actions will automatically:
   - Build the website
   - Deploy to the `gh-pages` branch
   - Make it live at `https://jamunafisheries.github.io`

### Manual Deployment (if needed)
If automatic deployment fails:

1. **Check GitHub Actions:**
   - Go to your repository
   - Click on **Actions** tab
   - Check for any failed workflows

2. **Manual deployment:**
   ```bash
   # Create gh-pages branch if it doesn't exist
   git checkout -b gh-pages
   
   # Add all files
   git add .
   git commit -m "Manual deployment"
   
   # Push to gh-pages branch
   git push origin gh-pages
   ```

## 🔧 Configuration Updates

### Updating Contact Information
1. Edit `assets/js/config.js`
2. Update phone numbers, email, address
3. Commit and push changes

### Adding New Products
1. Add product images to `assets/images/`
2. Update the products array in `config.js`
3. Commit and push changes

### Updating Content
1. Edit `index.html` for main content
2. Edit `assets/js/translations.js` for multi-language content
3. Commit and push changes

## 📊 Monitoring

### Check Deployment Status
1. Go to your repository on GitHub
2. Click **Actions** tab
3. Look for the latest deployment workflow
4. Green checkmark = successful deployment
5. Red X = deployment failed

### View Live Website
- **URL:** https://jamunafisheries.github.io
- **Note:** Changes may take 1-5 minutes to appear after deployment

## 🛠️ Troubleshooting

### Common Issues

**1. Website not updating:**
- Check GitHub Actions for failed deployments
- Ensure you're pushing to the `main` branch
- Wait 5-10 minutes for changes to propagate

**2. Images not loading:**
- Verify image paths are correct
- Check that images are committed to the repository
- Ensure image file names match exactly (case-sensitive)

**3. GitHub Pages not enabled:**
- Go to repository Settings > Pages
- Ensure source is set to "Deploy from a branch"
- Select `gh-pages` branch

**4. 404 errors:**
- Check that `index.html` is in the root directory
- Verify all file paths are correct
- Clear browser cache

### Getting Help
- Check GitHub Actions logs for error details
- Review the README.md for setup instructions
- Contact technical support if issues persist

## 🔒 Security Considerations

### Sensitive Information
- Never commit API keys or passwords
- Use environment variables for sensitive data
- Review all files before committing

### File Permissions
- Ensure proper file permissions
- Don't commit unnecessary files
- Use `.gitignore` to exclude sensitive files

## 📈 Performance Optimization

### Image Optimization
- Compress images before uploading
- Use appropriate image formats (JPEG for photos, PNG for graphics)
- Consider using WebP format for better compression

### Code Optimization
- Minify CSS and JavaScript files
- Remove unused code
- Optimize HTML structure

## 🔄 Regular Maintenance

### Weekly Tasks
- Check website functionality
- Review contact information accuracy
- Monitor GitHub Actions for any issues

### Monthly Tasks
- Update product information
- Review and update content
- Check for broken links
- Monitor website performance

### Quarterly Tasks
- Review and update business information
- Check for outdated content
- Update images and media
- Review SEO settings

---

**Last Updated:** December 2024
**Next Review:** March 2025 