<template>
  <div class="music-player bg-gray-100 rounded-lg p-6 shadow-lg">
    <h3 class="text-xl font-bold mb-4">{{ title }}</h3>
    
    <!-- Spotify Embed -->
    <div v-if="spotifyUrl" class="mb-6">
      <h4 class="text-sm font-semibold text-gray-600 mb-2">Listen on Spotify</h4>
      <iframe 
        :src="getSpotifyEmbedUrl"
        width="100%" 
        height="352" 
        frameborder="0" 
        allowfullscreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        class="rounded-lg"
      ></iframe>
    </div>

    <!-- Apple Music Embed -->
    <div v-if="appleMusicUrl" class="mb-6">
      <h4 class="text-sm font-semibold text-gray-600 mb-2">Listen on Apple Music</h4>
      <iframe 
        :src="appleMusicUrl"
        width="100%" 
        height="450" 
        frameborder="0" 
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        loading="lazy"
        class="rounded-lg"
      ></iframe>
    </div>

    <!-- SoundCloud Embed -->
    <div v-if="soundcloudUrl" class="mb-6">
      <h4 class="text-sm font-semibold text-gray-600 mb-2">Listen on SoundCloud</h4>
      <iframe 
        width="100%" 
        height="166" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay"
        :src="getSoundCloudEmbedUrl"
        class="rounded-lg"
      ></iframe>
    </div>

    <!-- Bandcamp Embed -->
    <div v-if="bandcampUrl" class="mb-6">
      <h4 class="text-sm font-semibold text-gray-600 mb-2">Listen on Bandcamp</h4>
      <iframe 
        style="border: 0; width: 100%; height: 120px;" 
        :src="bandcampUrl"
        seamless
        class="rounded-lg"
      ></iframe>
    </div>

    <!-- Streaming Links -->
    <div v-if="!spotifyUrl && !appleMusicUrl && !soundcloudUrl && !bandcampUrl" class="text-center py-8">
      <p class="text-gray-600 mb-4">Music coming soon! Follow on social media for updates.</p>
      <SocialLinks />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SocialLinks from './SocialLinks.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Latest Music'
  },
  spotifyUrl: {
    type: String,
    default: ''
  },
  appleMusicUrl: {
    type: String,
    default: ''
  },
  soundcloudUrl: {
    type: String,
    default: ''
  },
  bandcampUrl: {
    type: String,
    default: ''
  }
})

// Convert Spotify track/album/playlist URL to embed URL
const getSpotifyEmbedUrl = computed(() => {
  if (!props.spotifyUrl) return ''
  // Convert open.spotify.com URLs to embed URLs
  return props.spotifyUrl.replace('open.spotify.com', 'open.spotify.com/embed')
})

// Convert SoundCloud URL to embed URL
const getSoundCloudEmbedUrl = computed(() => {
  if (!props.soundcloudUrl) return ''
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(props.soundcloudUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
})
</script>
