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
import { siteConfig } from '../config'

// Use music links, videos, and photos from config
const musicLinks = siteConfig.music
const videos = siteConfig.videos.map((video, index) => ({
  id: index + 1,
  youtubeId: video.id,
  title: video.title,
  description: video.description,
  date: video.date
}))
const photos = siteConfig.photos

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
