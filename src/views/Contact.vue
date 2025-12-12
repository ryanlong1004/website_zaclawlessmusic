<template>
  <div class="contact py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">Get In Touch</h1>
        <p class="text-gray-600 mb-12">Have a question or want to book a show? Send a message below.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Send a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-semibold mb-2">Name *</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  id="name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold mb-2">Email *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  id="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-semibold mb-2">Subject *</label>
                <select 
                  v-model="form.subject"
                  id="subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="press">Press / Media</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold mb-2">Message *</label>
                <textarea 
                  v-model="form.message"
                  id="message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold disabled:bg-gray-400"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div>
            <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-6 h-6 mr-3 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:zaclawless@gmail.com"
                      class="text-blue-600 hover:text-blue-800 transition"
                    >
                      zaclawless@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg class="w-6 h-6 mr-3 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold mb-1">Booking</h3>
                    <p class="text-gray-600">For show bookings and appearances</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg class="w-6 h-6 mr-3 mt-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold mb-1">Press & Media</h3>
                    <p class="text-gray-600">Media inquiries and press kits</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-black text-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold mb-6">Follow Me</h2>
              <p class="text-gray-300 mb-6">Stay connected on social media</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SocialLinks from '../components/SocialLinks.vue'
import { useSEO } from '../composables/useSEO'
import { useStructuredData } from '../composables/useStructuredData'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // TODO: Implement form submission to backend/email service
  // For now, just log and show alert
  console.log('Form submitted:', form.value)
  
  setTimeout(() => {
    alert('Thanks for your message! This form will be connected to email soon.')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    isSubmitting.value = false
  }, 1000)
}

onMounted(() => {
  useSEO({
    title: 'Contact Zac Lawless - Bookings & Inquiries',
    description: 'Get in touch with Zac Lawless for bookings, press inquiries, and general questions.',
    url: 'https://www.zaclawless.com/contact'
  })
  
  const { addMusicianSchema, addBreadcrumbSchema } = useStructuredData()
  addMusicianSchema()
  addBreadcrumbSchema([
    { name: 'Home', url: 'https://www.zaclawless.com' },
    { name: 'Contact', url: 'https://www.zaclawless.com/contact' }
  ])
})
</script>
