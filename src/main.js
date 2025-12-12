import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import { useAnalytics } from './composables/useAnalytics'

// Import views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Events from './views/Events.vue'
import Media from './views/Media.vue'
import Contact from './views/Contact.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/events', name: 'Events', component: Events },
    { path: '/media', name: 'Media', component: Media },
    { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Always scroll to top on route change
        return { top: 0 }
    }
})

// Initialize analytics (optional - configure GA4_ID in useAnalytics.js)
const { initGoogleAnalytics, trackPageView } = useAnalytics()
initGoogleAnalytics()

// Track page views on route changes
router.afterEach((to) => {
    trackPageView(to.path, document.title)
})

const app = createApp(App)
app.use(router)
app.mount('#app')
