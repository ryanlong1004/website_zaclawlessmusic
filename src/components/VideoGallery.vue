<template>
  <div class="video-gallery">
    <div v-if="videos.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="video in videos" 
        :key="video.id"
        class="video-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <!-- YouTube Embed -->
        <div class="aspect-video relative">
          <iframe
            v-if="video.youtubeId"
            :src="`https://www.youtube.com/embed/${video.youtubeId}`"
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div v-else class="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
              <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        </div>
        
        <!-- Video Info -->
        <div class="p-4">
          <h3 class="font-bold text-lg mb-2">{{ video.title }}</h3>
          <p v-if="video.description" class="text-gray-600 text-sm mb-3">
            {{ video.description }}
          </p>
          <div class="flex items-center justify-between">
            <span v-if="video.date" class="text-sm text-gray-500">{{ formatDate(video.date) }}</span>
            <a 
              v-if="video.youtubeId"
              :href="`https://www.youtube.com/watch?v=${video.youtubeId}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 transition font-semibold text-sm"
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-else class="text-center py-16">
      <svg class="w-24 h-24 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
      <h3 class="text-2xl font-bold mb-4">Video Content Coming Soon</h3>
      <p class="text-gray-600 mb-6">Check out the YouTube channel for live performances and more</p>
      <a 
        href="https://www.youtube.com/channel/UCcnxcE4DMSxCVJu8_ODZ7Tg"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
          <path fill="#000" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        Visit YouTube Channel
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videos: {
    type: Array,
    default: () => []
    // Expected format:
    // [{
    //   id: 1,
    //   youtubeId: 'VIDEO_ID',
    //   title: 'Video Title',
    //   description: 'Video description',
    //   date: '2025-01-01'
    // }]
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
