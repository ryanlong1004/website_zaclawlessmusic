export function useStructuredData() {
    const addMusicianSchema = () => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'MusicGroup',
            'name': 'Zac Lawless',
            'genre': ['Acoustic', 'Blues', 'Folk', 'Funk'],
            'url': 'https://www.zaclawless.com',
            'logo': 'https://static.wixstatic.com/media/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png/v1/fill/w_400,h_400,al_c,q_90,enc_avif,quality_auto/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png',
            'image': 'https://static.wixstatic.com/media/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png/v1/fill/w_1200,h_630,al_c,q_90,enc_avif,quality_auto/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png',
            'description': 'Solo acoustic artist performing Acoustic, Blue, Folk, and Funk music in The Pocono Mountains of Pennsylvania for over 20 years.',
            'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Pocono Mountains',
                'addressRegion': 'PA',
                'addressCountry': 'US'
            },
            'sameAs': [
                'https://www.facebook.com/zaclawlessmusic',
                'https://www.youtube.com/channel/UCcnxcE4DMSxCVJu8_ODZ7Tg',
                'https://www.instagram.com/zaclawless/'
            ],
            'contactPoint': {
                '@type': 'ContactPoint',
                'email': 'zaclawless@gmail.com',
                'contactType': 'bookings'
            }
        }

        insertSchema('musician-schema', schema)
    }

    const addEventSchema = (event) => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'MusicEvent',
            'name': event.title,
            'startDate': `${event.date}T${convertTo24Hour(event.time)}`,
            'location': {
                '@type': 'Place',
                'name': event.venue,
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': event.location || 'Pocono Mountains, PA'
                }
            },
            'performer': {
                '@type': 'MusicGroup',
                'name': 'Zac Lawless'
            },
            'offers': event.ticketUrl ? {
                '@type': 'Offer',
                'url': event.ticketUrl,
                'availability': event.isSoldOut ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock'
            } : undefined
        }

        insertSchema(`event-schema-${event.id}`, schema)
    }

    const addBreadcrumbSchema = (items) => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': items.map((item, index) => ({
                '@type': 'ListItem',
                'position': index + 1,
                'name': item.name,
                'item': item.url
            }))
        }

        insertSchema('breadcrumb-schema', schema)
    }

    function insertSchema(id, schema) {
        if (typeof document === 'undefined') return

        // Remove existing schema with same ID
        const existing = document.getElementById(id)
        if (existing) {
            existing.remove()
        }

        // Create and insert new schema
        const script = document.createElement('script')
        script.id = id
        script.type = 'application/ld+json'
        script.text = JSON.stringify(schema)
        document.head.appendChild(script)
    }

    function convertTo24Hour(time) {
        // Convert "8:00 PM" to "20:00:00"
        const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i)
        if (!match) return '19:00:00' // Default

        let [, hours, minutes, period] = match
        hours = parseInt(hours)

        if (period.toUpperCase() === 'PM' && hours !== 12) {
            hours += 12
        } else if (period.toUpperCase() === 'AM' && hours === 12) {
            hours = 0
        }

        return `${hours.toString().padStart(2, '0')}:${minutes}:00`
    }

    return {
        addMusicianSchema,
        addEventSchema,
        addBreadcrumbSchema
    }
}
