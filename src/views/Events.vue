<template>
  <div class="events py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-4 text-gray-900">Upcoming Shows</h1>
      <p class="text-gray-700 mb-12">Catch Zac Lawless live at these venues</p>
      
      <!-- Event Listings -->
      <div v-if="events.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <EventCard 
          v-for="event in events" 
          :key="event.id"
          :title="event.title"
          :date="event.date"
          :venue="event.venue"
          :location="event.location"
          :time="event.time"
          :description="event.description"
          :ticketUrl="event.ticketUrl"
          :eventUrl="event.eventUrl"
          :isSoldOut="event.isSoldOut"
        />
      </div>

      <!-- No Events Message -->
      <div v-else class="text-center py-16">
        <svg class="w-24 h-24 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <h2 class="text-2xl font-bold mb-4">No Upcoming Shows</h2>
        <p class="text-gray-600 mb-6">Check back soon for new dates or follow on social media for announcements</p>
        <SocialLinks />
      </div>

      <!-- Newsletter Signup -->
      <section class="bg-black text-white rounded-lg p-8 md:p-12 text-center">
        <h2 class="text-3xl font-bold mb-4">Never Miss a Show</h2>
        <p class="text-gray-300 mb-6">Subscribe to get notified about new tour dates and releases</p>
        <form @submit.prevent="handleNewsletterSubmit" class="max-w-md mx-auto flex gap-3">
          <input 
            v-model="email"
            type="email" 
            placeholder="Enter your email"
            required
            class="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button 
            type="submit"
            class="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition font-semibold"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EventCard from '../components/EventCard.vue'
import SocialLinks from '../components/SocialLinks.vue'

const email = ref('')

// Real events data from December 2025 schedule
const events = ref([
  {
    id: 1,
    title: 'Live at The Gem & Keystone',
    date: '2025-12-03',
    venue: 'The Gem & Keystone',
    location: 'Pocono Mountains, PA',
    time: '5:00 PM',
    description: 'Acoustic performance featuring original songs and classic covers',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 2,
    title: 'Newberry\'s Yard of Ale',
    date: '2025-12-06',
    venue: 'Newberry\'s Yard of Ale',
    location: 'Pocono Mountains, PA',
    time: '8:00 PM',
    description: 'An evening of live acoustic music',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 3,
    title: 'Snow Forge Festival',
    date: '2025-12-07',
    venue: 'The Cellar @ Cusumano',
    location: 'Pocono Mountains, PA',
    time: '1:00 PM',
    description: 'Special festival performance',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 4,
    title: 'The Original Pocono Pub',
    date: '2025-12-12',
    venue: 'The Original Pocono Pub',
    location: 'Pocono Mountains, PA',
    time: '8:00 PM',
    description: 'Live acoustic show',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 5,
    title: 'Mary St. Bar & Grill',
    date: '2025-12-13',
    venue: 'Mary St. Bar & Grill',
    location: 'Pocono Mountains, PA',
    time: '9:00 PM',
    description: 'Late night acoustic performance',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 6,
    title: 'Frogtown Chophouse',
    date: '2025-12-19',
    venue: 'Frogtown Chophouse',
    location: 'Pocono Mountains, PA',
    time: '5:00 PM',
    description: 'Dinner and live music',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 7,
    title: 'Ranch City Brewing',
    date: '2025-12-20',
    venue: 'Ranch City Brewing',
    location: 'Pocono Mountains, PA',
    time: '6:00 PM',
    description: 'Acoustic show at the brewery',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 8,
    title: 'The Cellar @ Cusumano',
    date: '2025-12-26',
    venue: 'The Cellar @ Cusumano',
    location: 'Pocono Mountains, PA',
    time: '7:00 PM',
    description: 'Post-holiday celebration with live music',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 9,
    title: 'Stonehaus Meadery',
    date: '2025-12-27',
    venue: 'Stonehaus Meadery',
    location: 'Pocono Mountains, PA',
    time: '9:00 PM',
    description: 'Live acoustic performance',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  },
  {
    id: 10,
    title: 'Jam Room Brewing Co.',
    date: '2025-12-28',
    venue: 'Jam Room Brewing Co.',
    location: 'Pocono Mountains, PA',
    time: '5:00 PM',
    description: 'Acoustic music and craft beer',
    ticketUrl: '',
    eventUrl: '',
    isSoldOut: false
  }
])

const handleNewsletterSubmit = () => {
  // TODO: Implement newsletter signup
  console.log('Newsletter signup:', email.value)
  alert('Thanks for subscribing! Feature coming soon.')
  email.value = ''
}
</script>
