// Site-wide configuration for Zac Lawless website

export const siteConfig = {
    // Site metadata
    siteName: 'Zac Lawless',
    siteUrl: 'https://www.zaclawless.com',
    email: 'zaclawless@gmail.com',
    location: 'The Pocono Mountains, Pennsylvania',

    // Musical genres
    genres: ['Acoustic', 'Blue', 'Folk', 'Funk'],
    tagline: 'Acoustic • Blue • Folk • Funk for the Soul',

    // Social media links
    social: {
        facebook: 'https://www.facebook.com/zaclawlessmusic',
        instagram: 'https://www.instagram.com/zaclawless/',
        youtube: 'https://www.youtube.com/channel/UCcnxcE4DMSxCVJu8_ODZ7Tg',
        tiktok: '', // Add URL when available
        twitter: '', // Add URL when available
        spotify: '', // Add URL when available
        appleMusic: '', // Add URL when available
        soundcloud: '', // Add URL when available
        bandcamp: '' // Add URL when available
    },

    // YouTube videos (in chronological order, newest first)
    // To add a video: Go to YouTube, copy the video ID from the URL
    // Example: https://www.youtube.com/watch?v=NhG7fyEZw-U -> use 'NhG7fyEZw-U'
    videos: [
        {
            id: 'NhG7fyEZw-U',
            title: 'Live at Shawnee Craft Brewery 15 Year Anniversary',
            description: 'Acoustic performance at Shawnee Craft Brewery',
            date: '2024-03-23'
        }
        // Add more videos here as they become available
        // {
        //   id: 'ANOTHER_VIDEO_ID',
        //   title: 'Performance Title',
        //   description: 'Performance description',
        //   date: '2024-12-01'
        // }
    ],

    // Hero video (background video on home page)
    heroVideoId: 'NhG7fyEZw-U',

    // Music streaming links
    music: {
        spotify: '', // e.g., 'https://open.spotify.com/artist/...'
        appleMusic: '', // e.g., 'https://embed.music.apple.com/us/artist/...'
        soundcloud: '', // e.g., 'https://soundcloud.com/zaclawless/...'
        bandcamp: '' // e.g., 'https://zaclawless.bandcamp.com/album/...'
    },

    // Photo gallery
    photos: [
        {
            id: 1,
            url: 'https://static.wixstatic.com/media/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png/v1/fill/w_800,h_600,al_c,q_90,enc_avif,quality_auto/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png',
            alt: 'Zac Lawless performing',
            caption: 'Live performance'
        },
        {
            id: 2,
            url: 'https://static.wixstatic.com/media/04db04_f835fab8417946958f074d17902b95a4~mv2.png/v1/fill/w_400,h_400,al_c,q_90,enc_avif,quality_auto/D5F78A74-11F7-46C9-871B-364C801A7647_PNG.png',
            alt: 'Zac Lawless with guitar',
            caption: 'Acoustic session'
        }
        // Add more photos from social media or local uploads
    ]
}
