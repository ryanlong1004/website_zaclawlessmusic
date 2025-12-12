# Deployment Guide - Zac Lawless Website

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository access
- Domain name (zaclawless.com)

## Build for Production

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory.

## Hosting Options

### Option 1: Netlify (Recommended)

**Why Netlify:**

- Free tier available
- Automatic HTTPS
- Continuous deployment from Git
- Easy custom domain setup
- Built-in form handling

**Setup Steps:**

1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add custom domain in Netlify settings
5. SSL certificate is automatic

**netlify.toml:**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 2: Vercel

**Setup Steps:**

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts
4. Add custom domain in dashboard

### Option 3: GitHub Pages

**Setup Steps:**

1. Update `vite.config.js` with base path
2. Build: `npm run build`
3. Deploy to `gh-pages` branch
4. Enable GitHub Pages in repository settings

### Option 4: Traditional Hosting (cPanel/FTP)

**Setup Steps:**

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to web root
3. Configure .htaccess for SPA routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Environment Variables

Create a `.env` file for production:

```env
# Google Analytics (Get from https://analytics.google.com/)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Add streaming platform URLs when available
# These can be hardcoded in components if not using env vars
```

## Custom Domain Setup

### DNS Configuration

Point domain to hosting provider:

- Netlify: Add A record or CNAME as instructed
- Vercel: Add CNAME to `cname.vercel-dns.com`
- Traditional: A record to server IP

### SSL Certificate

- Netlify/Vercel: Automatic
- Traditional: Use Let's Encrypt or hosting provider's SSL

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test navigation between pages
- [ ] Check mobile responsiveness
- [ ] Verify social media links work
- [ ] Test contact form (when backend is added)
- [ ] Check SEO meta tags (View Page Source)
- [ ] Verify Google Analytics tracking (if configured)
- [ ] Test PWA functionality (Add to Home Screen)
- [ ] Check favicon displays correctly
- [ ] Verify SSL certificate is active
- [ ] Test page load speed (PageSpeed Insights)
- [ ] Submit sitemap to Google Search Console

## Performance Optimization

### Already Implemented

✓ Lazy loading images
✓ Vite code splitting
✓ Service worker for offline support
✓ Optimized image formats (AVIF)
✓ Minimal CSS with Tailwind

### Additional Optimizations

- Enable CDN for static assets
- Implement image CDN (Cloudinary, imgix)
- Add Redis caching if using backend
- Enable gzip/brotli compression

## Maintenance

### Regular Updates

- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Update content: events, photos, videos
- Refresh streaming platform embeds

### Monitoring

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor Google Analytics for traffic
- Check Google Search Console for SEO issues
- Review Core Web Vitals monthly

## Backup Strategy

### What to Backup

- Source code (Git repository)
- `.env` files (store securely, not in Git)
- Database (if implemented)
- User-uploaded content (photos, files)

### Recommended Tools

- Git for code versioning
- Automated database backups (if applicable)
- S3 or similar for media files

## Support Contacts

- **Domain Registrar**: [Provider name]
- **Hosting Provider**: [Provider name]
- **Analytics**: Google Analytics
- **Developer**: [Your contact info]

## Troubleshooting

### Issue: Routes show 404 on refresh

**Solution**: Ensure SPA routing is configured (see hosting options above)

### Issue: Images not loading

**Solution**: Check image URLs and ensure CDN is accessible

### Issue: Slow load times

**Solution**: Run Lighthouse audit, optimize images, enable caching

### Issue: Forms not submitting

**Solution**: Implement backend API or use Netlify Forms/Formspree

## Next Steps for Full Functionality

1. **Form Backend**: Integrate contact form with email service

   - Netlify Forms (if using Netlify)
   - Formspree
   - SendGrid API
   - Custom backend with Node.js

2. **CMS Integration** (Optional): For easy content updates

   - Netlify CMS
   - Strapi
   - Contentful

3. **Email Newsletter**: Connect signup form

   - Mailchimp
   - ConvertKit
   - SendGrid

4. **Social Media Feeds**: Integrate live feeds

   - Instagram Basic Display API
   - Facebook Graph API
   - YouTube Data API

5. **Analytics Dashboard**: Set up Google Analytics 4
   - Create property at analytics.google.com
   - Add tracking ID to `.env`
   - Configure goals and conversions

## Cost Estimates

### Free Tier Hosting

- Netlify: Free with custom domain
- Vercel: Free with custom domain
- GitHub Pages: Free

### Paid Services (Optional)

- Domain: $10-15/year
- Email hosting: $5-10/month
- Premium hosting: $5-50/month
- CDN: $0-50/month depending on traffic
- Email service (Mailchimp): $0-20/month

---

**Ready to Deploy!** Choose your hosting platform and follow the steps above.
