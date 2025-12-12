<template>
  <div class="media py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-12">Media</h1>
      
      <!-- Music Player Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Listen Now</h2>
        <MusicPlayer 
          title="Latest Releases"
          :spotifyUrl="musicLinks.spotify"
          :appleMusicUrl="musicLinks.appleMusic"
          :soundcloudUrl="musicLinks.soundcloud"
          :bandcampUrl="musicLinks.bandcamp"
        />
      </section>

      <!-- Video Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Videos</h2>
        <VideoGallery :videos="videos" />
      </section>

      <!-- Photo Gallery Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Photos</h2>
        <PhotoGallery :photos="photos" />
      </section>

      <!-- Press Kit Section -->
      <section>
        <h2 class="text-3xl font-bold mb-6">Press Kit</h2>
        <div class="bg-gray-100 rounded-lg p-8">
          <p class="text-gray-700 mb-4">
            For press inquiries, high-resolution photos, and EPK materials, please contact:
          </p>
          <a 
            href="mailto:zaclawless@gmail.com"
            class="text-blue-600 hover:text-blue-800 transition font-semibold"
          >
            zaclawless@gmail.com
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import MusicPlayer from '../components/MusicPlayer.vue'
import VideoGallery from '../components/VideoGallery.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import { useSEO } from '../composables/useSEO'
import { useStructuredData } from '../composables/useStructuredData'

// Add actual streaming URLs when available
const musicLinks = {
  spotify: '', // e.g., 'https://open.spotify.com/artist/...'
  appleMusic: '', // e.g., 'https://embed.music.apple.com/us/artist/...'
  soundcloud: '', // e.g., 'https://soundcloud.com/zaclawless/...'
  bandcamp: '' // e.g., 'https://zaclawless.bandcamp.com/album/...'
}

// Add YouTube video IDs from the channel
// To get video ID: https://www.youtube.com/watch?v=VIDEO_ID
const videos = [
  // Example:
  // {
  //   id: 1,
  //   youtubeId: 'dQw4w9WgXcQ',
  //   title: 'Live Performance at The Gem',
  //   description: 'Acoustic set featuring original songs',
  //   date: '2025-12-01'
  // }
]

// Add photo URLs from Instagram, Facebook, or uploaded locally
const photos = [
  {
    id: 1,
    url: 'https://static.wixstatic.com/media/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png/v1/fill/w_800,h_600,al_c,q_90,enc_avif,quality_auto/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png',
    alt: 'Zac Lawless performing'
  },
  {
    id: 2,
    url: 'https://static.wixstatic.com/media/04db04_f835fab8417946958f074d17902b95a4~mv2.png/v1/fill/w_400,h_400,al_c,q_90,enc_avif,quality_auto/D5F78A74-11F7-46C9-871B-364C801A7647_PNG.png',
    alt: 'Zac Lawless with guitar'
  }
  // Add more photos from social media or local uploads
]

onMounted(() => {
  useSEO({
    title: 'Media - Music, Videos & Photos | Zac Lawless',
    description: 'Listen to music, watch videos, and view photos of Zac Lawless performing live.',
    url: 'https://www.zaclawless.com/media'
  })
  
  const { addMusicianSchema, addBreadcrumbSchema } = useStructuredData()
  addMusicianSchema()
  addBreadcrumbSchema([
    { name: 'Home', url: 'https://www.zaclawless.com' },
    { name: 'Media', url: 'https://www.zaclawless.com/media' }
  ])
})
</script>
