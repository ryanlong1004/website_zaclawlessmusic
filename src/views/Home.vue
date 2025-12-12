<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Video (Desktop only) -->
      <div v-if="!isMobile" class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div class="absolute inset-0 scale-[1.2]">
          <iframe
            v-if="heroVideoId"
            class="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            :src="`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`"
            title="Zac Lawless Performance"
            frameborder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>
      
      <!-- Background Image (Mobile fallback) -->
      <div 
        v-if="isMobile"
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://static.wixstatic.com/media/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png')"
      ></div>
      
      <div class="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      
      <div class="text-center text-white z-10 px-4">
        <h1 class="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">Zac Lawless</h1>
        <p class="text-2xl md:text-3xl text-gray-200 mb-4">Acoustic • Blue • Folk • Funk for the Soul</p>
        <p class="text-lg md:text-xl text-gray-300 mb-8">The Pocono Mountains, Pennsylvania</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <RouterLink 
            to="/events"
            class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition font-semibold"
          >
            Upcoming Shows
          </RouterLink>
          <RouterLink 
            to="/media"
            class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold"
          >
            Listen Now
          </RouterLink>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Latest Media Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Latest Media</h2>
        
        <!-- Recent Videos -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold mb-6 text-center">Recent Performances</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div 
              v-for="video in recentVideos" 
              :key="video.id"
              class="aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                class="w-full h-full"
                :src="`https://www.youtube.com/embed/${video.id}`"
                :title="video.title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="text-center">
          <p class="text-gray-600 mb-6">Follow for more content</p>
          <SocialLinks />
        </div>
      </div>
    </section>

    <!-- Upcoming Events Preview -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-4xl font-bold">Upcoming Shows</h2>
          <RouterLink 
            to="/events"
            class="text-blue-600 hover:text-blue-800 transition font-semibold"
          >
            View All →
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Next 3 upcoming shows -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="bg-black text-white px-4 py-2 rounded-lg text-center mb-4 inline-block">
              <div class="text-2xl font-bold">12</div>
              <div class="text-sm uppercase">Dec</div>
            </div>
            <h3 class="text-xl font-bold mb-2">The Original Pocono Pub</h3>
            <p class="text-gray-600 mb-2">8:00 PM</p>
            <RouterLink 
              to="/events"
              class="text-blue-600 hover:text-blue-800 transition font-semibold"
            >
              Details →
            </RouterLink>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="bg-black text-white px-4 py-2 rounded-lg text-center mb-4 inline-block">
              <div class="text-2xl font-bold">13</div>
              <div class="text-sm uppercase">Dec</div>
            </div>
            <h3 class="text-xl font-bold mb-2">Mary St. Bar & Grill</h3>
            <p class="text-gray-600 mb-2">9:00 PM</p>
            <RouterLink 
              to="/events"
              class="text-blue-600 hover:text-blue-800 transition font-semibold"
            >
              Details →
            </RouterLink>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="bg-black text-white px-4 py-2 rounded-lg text-center mb-4 inline-block">
              <div class="text-2xl font-bold">19</div>
              <div class="text-sm uppercase">Dec</div>
            </div>
            <h3 class="text-xl font-bold mb-2">Frogtown Chophouse</h3>
            <p class="text-gray-600 mb-2">5:00 PM</p>
            <RouterLink 
              to="/events"
              class="text-blue-600 hover:text-blue-800 transition font-semibold"
            >
              Details →
            </RouterLink>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <RouterLink 
            to="/events"
            class="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            View Full Schedule
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Connect Section -->
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Stay Connected</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Follow on social media for the latest updates, behind-the-scenes content, and exclusive announcements
        </p>
        <SocialLinks />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useSEO } from '../composables/useSEO'
import { useStructuredData } from '../composables/useStructuredData'
import MusicPlayer from '../components/MusicPlayer.vue'
import SocialLinks from '../components/SocialLinks.vue'

import { siteConfig } from '../config'

// Use hero video and recent videos from config
const heroVideoId = siteConfig.heroVideoId
const recentVideos = siteConfig.videos
const musicLinks = siteConfig.music

// Detect mobile device to show static image instead of video
const isMobile = ref(false)

onMounted(() => {
  // Check if device is mobile (screen width < 768px or touch device)
  isMobile.value = window.innerWidth < 768 || ('ontouchstart' in window)
  
  // Update on resize
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
  
  useSEO({
    title: 'Zac Lawless - Official Website | Music, Events & More',
    description: 'Official website of Zac Lawless. Listen to the latest music, check out upcoming shows, and stay connected.',
    url: 'https://www.zaclawless.com'
  })
  
  // Add structured data
  const { addMusicianSchema } = useStructuredData()
  addMusicianSchema()
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
