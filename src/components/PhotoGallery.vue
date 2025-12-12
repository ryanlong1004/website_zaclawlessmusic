<template>
  <div class="photo-gallery">
    <div v-if="photos.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div 
        v-for="(photo, index) in photos" 
        :key="photo.id || index"
        class="photo-card aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        @click="openLightbox(index)"
      >
        <img 
          :src="photo.url" 
          :alt="photo.alt || 'Zac Lawless photo'"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-else class="text-center py-16">
      <svg class="w-24 h-24 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
      <h3 class="text-2xl font-bold mb-4">Photo Gallery Coming Soon</h3>
      <p class="text-gray-600 mb-6">Follow on social media for the latest photos and updates</p>
      <SocialLinks />
    </div>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxOpen && photos.length > 0"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white hover:text-gray-300 transition"
        aria-label="Close"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <button
        v-if="currentIndex > 0"
        @click.stop="previousPhoto"
        class="absolute left-4 text-white hover:text-gray-300 transition"
        aria-label="Previous"
      >
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <img 
        :src="photos[currentIndex]?.url" 
        :alt="photos[currentIndex]?.alt || 'Zac Lawless photo'"
        class="max-h-full max-w-full object-contain"
        @click.stop
      />

      <button
        v-if="currentIndex < photos.length - 1"
        @click.stop="nextPhoto"
        class="absolute right-4 text-white hover:text-gray-300 transition"
        aria-label="Next"
      >
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {{ currentIndex + 1 }} / {{ photos.length }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SocialLinks from './SocialLinks.vue'

const props = defineProps({
  photos: {
    type: Array,
    default: () => []
    // Expected format:
    // [{
    //   id: 1,
    //   url: 'https://...',
    //   alt: 'Description',
    //   caption: 'Optional caption'
    // }]
  }
})

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextPhoto = () => {
  if (currentIndex.value < props.photos.length - 1) {
    currentIndex.value++
  }
}

const previousPhoto = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
