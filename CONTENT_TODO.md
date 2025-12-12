# Content Needed for Zac Lawless Website

## 🎯 Required Social Media Links

Update these URLs in [`src/components/SocialLinks.vue`](src/components/SocialLinks.vue):

- [ ] **TikTok** - Add your TikTok profile URL
- [ ] **Twitter/X** - Add your Twitter/X handle URL
- [ ] **Spotify** - Add your Spotify artist profile URL
- [ ] **Apple Music** - Add your Apple Music artist URL
- [ ] **SoundCloud** - Add your SoundCloud profile URL (if applicable)
- [ ] **Bandcamp** - Add your Bandcamp URL (if applicable)

✅ Already configured: Facebook, Instagram, YouTube

---

## 🎵 Music Streaming Links

Update these in:

- [`src/views/Home.vue`](src/views/Home.vue) - Lines with `musicLinks`
- [`src/views/Media.vue`](src/views/Media.vue) - Lines with `musicLinks`

Add URLs for:

- [ ] Spotify embed URLs (album/track/artist)
- [ ] Apple Music embed URLs
- [ ] SoundCloud track URLs
- [ ] Bandcamp album URLs

**Format Examples:**

- Spotify: `https://open.spotify.com/artist/YOUR_ARTIST_ID`
- Apple Music: `https://embed.music.apple.com/us/artist/YOUR_ARTIST_ID`
- SoundCloud: `https://soundcloud.com/yourusername/trackname`
- Bandcamp: `https://yourusername.bandcamp.com/album/albumname`

---

## 📝 About Page Content

Update [`src/views/About.vue`](src/views/About.vue):

- [x] Biography and story (✅ Added from original site)
- [x] Musical genres/styles (✅ Acoustic, Blue, Folk, Funk)
- [x] Professional profile photo (✅ Added from original site)
- [ ] Add discography section (albums, singles, EPs) if available

---

## 📅 Events Data

Update [`src/views/Events.vue`](src/views/Events.vue):

Add actual event objects to the `events` array:

```javascript
{
  id: 1,
  title: 'Event Name',
  date: '2025-12-31', // YYYY-MM-DD format
  venue: 'Venue Name',
  location: 'City, State',
  time: '8:00 PM',
  description: 'Event description',
  ticketUrl: 'https://tickets-link.com',
  eventUrl: 'https://venue-link.com',
  isSoldOut: false
}
```

---

## 🖼️ Media Assets Needed

### Photos

Upload to a `public/images` folder:

- [ ] Profile/hero image for About page
- [ ] Press photos for Media page photo gallery
- [ ] Event photos
- [ ] Album/single artwork

### Videos

- [ ] YouTube video IDs for Media page
- [ ] Or embed URLs from other platforms

### Other Assets

- [ ] Logo (if you have one)
- [ ] Favicon (16x16, 32x32, 192x192, 512x512)
- [ ] Open Graph image (1200x630 recommended)

---

## 🔍 SEO Content

Update [`src/composables/useSEO.js`](src/composables/useSEO.js) defaults and each page:

- [ ] Write compelling page descriptions
- [ ] Create page-specific titles
- [ ] Add OG image URL once uploaded

---

## 📧 Email Integration

To make the contact form functional, you'll need to:

1. **Option 1: Email Service (Recommended)**
   - Set up with services like:
     - Formspree (https://formspree.io/)
     - EmailJS (https://www.emailjs.com/)
     - SendGrid
2. **Option 2: Backend API**

   - Create a backend endpoint to handle form submissions
   - Update the `handleSubmit` function in [`src/views/Contact.vue`](src/views/Contact.vue)

3. **Option 3: Netlify Forms** (if deploying to Netlify)
   - Add `netlify` attribute to the form
   - Netlify will handle submissions automatically

---

## 📰 Newsletter Integration

To make newsletter signups functional in [`src/views/Events.vue`](src/views/Events.vue):

Choose a service:

- [ ] Mailchimp
- [ ] ConvertKit
- [ ] Buttondown
- [ ] Substack

Then integrate their API into the `handleNewsletterSubmit` function.

---

## 🚀 Next Steps

1. **Fill in content** - Replace all placeholder text with real content
2. **Add media** - Upload photos, videos, and other assets
3. **Connect services** - Set up email and newsletter integrations
4. **Test** - Review all pages on mobile and desktop
5. **Deploy** - Choose a hosting platform:
   - Netlify (recommended for Vue/Vite)
   - Vercel
   - GitHub Pages
   - Your own server

---

## 💡 Tips

- Keep social media links updated as you add new platforms
- Regularly update the events list
- Add new music releases to the Media page
- Consider adding a blog for news/updates (future enhancement)
- Monitor SEO performance with Google Search Console

---

## ❓ Questions?

Refer to the main [README.md](README.md) for development commands and [MODERNIZATION_PLAN.md](MODERNIZATION_PLAN.md) for the full roadmap.
