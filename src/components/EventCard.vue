<template>
  <div class="event-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="p-6">
      <!-- Date Badge -->
      <div class="flex items-start justify-between mb-4">
        <div class="bg-black text-white px-4 py-2 rounded-lg text-center min-w-[80px]">
          <div class="text-2xl font-bold">{{ day }}</div>
          <div class="text-sm uppercase">{{ month }}</div>
        </div>
        <span v-if="isSoldOut" class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Sold Out
        </span>
        <span v-else-if="isUpcoming" class="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Upcoming
        </span>
      </div>

      <!-- Event Details -->
      <h3 class="text-2xl font-bold mb-2 text-gray-900">{{ title }}</h3>
      
      <div class="space-y-2 text-gray-700 mb-4">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>{{ venue }}</span>
        </div>
        
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>{{ time }}</span>
        </div>

        <div v-if="location" class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
          </svg>
          <span>{{ location }}</span>
        </div>
      </div>

      <!-- Description -->
      <p v-if="description" class="text-gray-700 mb-4">
        {{ description }}
      </p>

      <!-- Ticket Button -->
      <div class="flex gap-3">
        <a 
          v-if="ticketUrl && !isSoldOut"
          :href="ticketUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold flex-1 text-center"
        >
          Get Tickets
        </a>
        <a 
          v-if="eventUrl"
          :href="eventUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold flex-1 text-center"
        >
          Event Info
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  location: {
    type: String,
    default: ''
  },
  time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  ticketUrl: {
    type: String,
    default: ''
  },
  eventUrl: {
    type: String,
    default: ''
  },
  isSoldOut: {
    type: Boolean,
    default: false
  }
})

const eventDate = computed(() => new Date(props.date))

const day = computed(() => {
  return eventDate.value.getDate()
})

const month = computed(() => {
  return eventDate.value.toLocaleString('en-US', { month: 'short' }).toUpperCase()
})

const isUpcoming = computed(() => {
  return eventDate.value > new Date()
})
</script>
