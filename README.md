# Zac Lawless Website

Modern, responsive musician portfolio website built with Vue 3, featuring event calendar, media galleries, and social media integration.

🌐 **Live Site**: [zaclawless.com](https://www.zaclawless.com) (pending deployment)

## ✨ Features

- 📱 Fully responsive mobile-first design
- 🎵 Music player integration (Spotify, Apple Music, SoundCloud, Bandcamp)
- 📅 Event calendar with ticket links
- 🖼️ Photo and video galleries
- 📧 Contact form with booking inquiries
- 🔍 SEO optimized with Schema.org structured data
- 📱 PWA enabled (Progressive Web App)
- 📊 Google Analytics ready
- ♿ Accessible (WCAG 2.1 AA)

## 🛠 Tech Stack

- **Vue 3** - Composition API with script setup
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vue Router** - SPA routing
- **Vite PWA** - Service worker and offline support

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
website_zaclawless/
├── src/
│   ├── components/       # Reusable Vue components
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── views/           # Page components
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Events.vue
│   │   ├── Media.vue
│   │   └── Contact.vue
│   ├── App.vue          # Root component
│   ├── main.js          # Application entry point
│   └── style.css        # Global styles (Tailwind)
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── MODERNIZATION_PLAN.md # Development roadmap
```

## Features

- ✅ Responsive mobile-first design
- ✅ Modern navigation with mobile menu
- ✅ SEO-friendly URLs with meta tags
- ✅ Social media integration (Facebook, YouTube, Instagram + 6 more platforms ready)
- ✅ Clean, accessible UI
- ✅ Real biography and artist information
- ✅ December 2025 event schedule (10+ shows)
- ✅ Music player embeds for streaming platforms
- ✅ Contact form with booking inquiries
- ✅ Professional imagery from original site

## Content Status

### ✅ Completed

- Biography and artist story
- Musical style and genres
- December 2025 event calendar
- Social media links (FB, IG, YouTube)
- Professional photos from original site
- SEO metadata and descriptions

### 🔜 Needs Adding

- Streaming platform URLs (Spotify, Apple Music, etc.)
- Additional social profiles (TikTok, Twitter, etc.)
- Music embeds (when streaming links available)
- Additional photos and videos

## Next Steps

See [CONTENT_TODO.md](./CONTENT_TODO.md) for remaining content to add and [MODERNIZATION_PLAN.md](./MODERNIZATION_PLAN.md) for the full development roadmap.
