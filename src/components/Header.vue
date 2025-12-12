<template>
  <header class="bg-black text-white sticky top-0 z-50 shadow-lg">
    <nav class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="text-2xl font-bold">
          Zac Lawless
        </RouterLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink to="/" class="hover:text-gray-300 transition">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-gray-300 transition">About</RouterLink>
          <RouterLink to="/events" class="hover:text-gray-300 transition">Events</RouterLink>
          <RouterLink to="/media" class="hover:text-gray-300 transition">Media</RouterLink>
          <RouterLink to="/contact" class="hover:text-gray-300 transition">Contact</RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-4">
        <RouterLink 
          to="/" 
          @click="mobileMenuOpen = false"
          class="block hover:text-gray-300 transition"
        >
          Home
        </RouterLink>
        <RouterLink 
          to="/about" 
          @click="mobileMenuOpen = false"
          class="block hover:text-gray-300 transition"
        >
          About
        </RouterLink>
        <RouterLink 
          to="/events" 
          @click="mobileMenuOpen = false"
          class="block hover:text-gray-300 transition"
        >
          Events
        </RouterLink>
        <RouterLink 
          to="/media" 
          @click="mobileMenuOpen = false"
          class="block hover:text-gray-300 transition"
        >
          Media
        </RouterLink>
        <RouterLink 
          to="/contact" 
          @click="mobileMenuOpen = false"
          class="block hover:text-gray-300 transition"
        >
          Contact
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
