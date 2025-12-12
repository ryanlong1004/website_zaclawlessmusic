import { onMounted } from 'vue'

/**
 * Composable for Google Analytics 4 (GA4) tracking
 * 
 * Setup Instructions:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
 * 2. Replace 'YOUR-GA4-ID' below with your actual ID
 * 3. Import and call useAnalytics() in your main App.vue or main.js
 * 
 * Privacy-friendly alternatives:
 * - Plausible Analytics: https://plausible.io/
 * - Fathom Analytics: https://usefathom.com/
 * - Simple Analytics: https://simpleanalytics.com/
 */

// Replace with your actual GA4 Measurement ID
const GA4_ID = 'YOUR-GA4-ID' // e.g., 'G-XXXXXXXXXX'

export function useAnalytics() {
    const initGoogleAnalytics = () => {
        if (typeof window === 'undefined' || !GA4_ID || GA4_ID === 'YOUR-GA4-ID') {
            console.warn('Google Analytics not configured. Set GA4_ID in useAnalytics.js')
            return
        }

        // Load gtag.js script
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
        document.head.appendChild(script)

        // Initialize dataLayer
        window.dataLayer = window.dataLayer || []
        function gtag() {
            window.dataLayer.push(arguments)
        }
        window.gtag = gtag

        gtag('js', new Date())
        gtag('config', GA4_ID, {
            page_path: window.location.pathname,
            // Anonymize IP for privacy compliance
            anonymize_ip: true
        })
    }

    const trackPageView = (pagePath, pageTitle) => {
        if (typeof window === 'undefined' || !window.gtag) return

        window.gtag('config', GA4_ID, {
            page_path: pagePath,
            page_title: pageTitle
        })
    }

    const trackEvent = (eventName, eventParams = {}) => {
        if (typeof window === 'undefined' || !window.gtag) return

        window.gtag('event', eventName, eventParams)
    }

    // Common event helpers
    const trackButtonClick = (buttonName) => {
        trackEvent('button_click', { button_name: buttonName })
    }

    const trackFormSubmit = (formName) => {
        trackEvent('form_submit', { form_name: formName })
    }

    const trackSocialClick = (platform) => {
        trackEvent('social_click', { platform: platform })
    }

    const trackMusicPlay = (platform) => {
        trackEvent('music_play', { platform: platform })
    }

    const trackTicketClick = (eventName) => {
        trackEvent('ticket_click', { event_name: eventName })
    }

    return {
        initGoogleAnalytics,
        trackPageView,
        trackEvent,
        trackButtonClick,
        trackFormSubmit,
        trackSocialClick,
        trackMusicPlay,
        trackTicketClick
    }
}

/**
 * Usage example in main.js or App.vue:
 * 
 * import { useAnalytics } from './composables/useAnalytics'
 * 
 * const { initGoogleAnalytics } = useAnalytics()
 * initGoogleAnalytics()
 * 
 * // Track page views on route changes:
 * router.afterEach((to) => {
 *   const { trackPageView } = useAnalytics()
 *   trackPageView(to.path, to.meta.title || document.title)
 * })
 */
