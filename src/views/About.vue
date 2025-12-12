<template>
  <div class="about py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="mb-16">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Every Musical Journey Begins With One Note</h1>
          <p class="text-2xl text-gray-700 mb-8">
            Acoustic • Blue • Folk • Funk for the Soul
          </p>
        </div>

        <!-- Biography Section -->
        <section class="mb-16">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div class="bg-gray-200 rounded-lg aspect-square flex items-center justify-center mb-6">
                <img 
                  src="https://static.wixstatic.com/media/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png/v1/fill/w_761,h_600,al_c,q_90,enc_avif,quality_auto/04db04_29e395577290420e8aa9e11aaafc0b0d~mv2.png"
                  alt="Zac Lawless"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div class="prose prose-lg max-w-none">
              <p class="text-xl font-semibold mb-6">
                Hi, my name is Zac Lawless and I love playing music!
              </p>
              
              <p class="text-gray-700 mb-4 leading-relaxed">
                I grew up in a house filled with music, film, art and mechanics.
              </p>

              <p class="text-gray-700 mb-4 leading-relaxed">
                My first instrument was the snare drum which I played with my school band when I was 10 years old.
              </p>

              <p class="text-gray-700 mb-4 leading-relaxed">
                After a few years I hung up my sticks for a skateboard and a camera.
              </p>

              <p class="text-gray-700 mb-4 leading-relaxed">
                As I graduated high school, I was gifted an acoustic guitar by my parents and my life path changed forever.
              </p>

              <p class="text-gray-700 mb-4 leading-relaxed">
                I helped form my first band with some good friends and performed wherever and whenever we could.
              </p>

              <p class="text-gray-700 mb-4 leading-relaxed">
                For more than 20 years I have been performing as a solo acoustic act in and around The Pocono Mountains of Pennsylvania.
              </p>
            </div>
          </div>
        </section>

        <!-- Musical Style -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Musical Style</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 text-center">
              <p class="font-semibold text-lg">Acoustic</p>
            </div>
            <div class="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-6 text-center">
              <p class="font-semibold text-lg">Blue</p>
            </div>
            <div class="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 text-center">
              <p class="font-semibold text-lg">Folk</p>
            </div>
            <div class="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 text-center">
              <p class="font-semibold text-lg">Funk</p>
            </div>
          </div>
        </section>

        <!-- Performance Info -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Experience</h2>
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
            <p class="text-xl text-gray-700 leading-relaxed">
              With over <span class="font-bold text-2xl">20 years</span> of experience performing as a solo acoustic artist in and around The Pocono Mountains of Pennsylvania, Zac brings authentic energy and passion to every performance.
            </p>
          </div>
        </section>

        <!-- Connect Section -->
        <section class="bg-black text-white rounded-lg p-8 text-center">
          <h2 class="text-3xl font-bold mb-4">Let's Connect</h2>
          <p class="text-gray-300 mb-6">Follow me on social media and stay up to date with the latest music and shows</p>
          <SocialLinks />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialLinks from '../components/SocialLinks.vue'
import { useSEO } from '../composables/useSEO'
import { useStructuredData } from '../composables/useStructuredData'
import { onMounted } from 'vue'

onMounted(() => {
  useSEO({
    title: 'About Zac Lawless - Acoustic Musician from The Pocono Mountains',
    description: 'Learn about Zac Lawless, a solo acoustic artist with over 20 years of experience performing in The Pocono Mountains of Pennsylvania.',
    url: 'https://www.zaclawless.com/about'
  })
  
  const { addMusicianSchema, addBreadcrumbSchema } = useStructuredData()
  addMusicianSchema()
  addBreadcrumbSchema([
    { name: 'Home', url: 'https://www.zaclawless.com' },
    { name: 'About', url: 'https://www.zaclawless.com/about' }
  ])
})
</script>
