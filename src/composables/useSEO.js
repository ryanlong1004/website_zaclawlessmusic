export function useSEO(options = {}) {
    const {
        title = 'Zac Lawless - Acoustic Musician from The Pocono Mountains, PA',
        description = 'Official website of Zac Lawless - Solo acoustic artist performing Acoustic, Blue, Folk, and Funk music in The Pocono Mountains of Pennsylvania for over 20 years. Check out upcoming shows and listen to original music.',
        image = 'https://static.wixstatic.com/media/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png/v1/fill/w_1200,h_630,al_c,q_90,enc_avif,quality_auto/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png',
        url = typeof window !== 'undefined' ? window.location.href : 'https://www.zaclawless.com',
        type = 'website'
    } = options

    if (typeof document !== 'undefined') {
        // Update page title
        document.title = title

        // Update or create meta tags
        updateMetaTag('description', description)

        // Open Graph tags
        updateMetaTag('og:title', title, 'property')
        updateMetaTag('og:description', description, 'property')
        updateMetaTag('og:image', image, 'property')
        updateMetaTag('og:url', url, 'property')
        updateMetaTag('og:type', type, 'property')

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image')
        updateMetaTag('twitter:title', title)
        updateMetaTag('twitter:description', description)
        updateMetaTag('twitter:image', image)

        // Additional meta tags
        updateMetaTag('author', 'Zac Lawless')
    }
}

function updateMetaTag(name, content, attribute = 'name') {
    let element = document.querySelector(`meta[${attribute}="${name}"]`)

    if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
    }

    element.setAttribute('content', content)
}
