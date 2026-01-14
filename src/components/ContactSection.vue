<template>
  <section id="contact" class="py-24 bg-dark text-white relative overflow-hidden">
    <!-- Background glow -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center reveal-on-scroll">
      <h2 class="font-heading text-4xl md:text-5xl font-bold mb-6">
        Let's build something amazing.
      </h2>
      <p class="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of
        your visions.
      </p>

      <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto mb-24 text-left space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label for="query" class="block text-sm font-medium text-gray-300 mb-2">Query</label>
          <textarea
            id="query"
            v-model="form.query"
            rows="5"
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
            placeholder="Tell me about your project or idea..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="group relative inline-flex items-center justify-center gap-3 w-full px-8 py-4 rounded-lg bg-white text-dark font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-xl shadow-white/5 overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-2">
            <i class="ri-mail-send-line text-xl"></i>
            <span class="text-lg">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
          </span>
        </button>

        <p v-if="successMessage" class="text-green-400 text-center text-sm">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-400 text-center text-sm">{{ errorMessage }}</p>
      </form>

      <footer
        class="border-t border-gray-800/50 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
      >
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-6 md:mb-0">
          <span class="font-heading font-bold text-gray-300 text-lg tracking-tight">{{
            PROFILE.name
          }}</span>
          <span class="hidden md:block w-1 h-1 rounded-full bg-gray-700"></span>
          <span>All rights reserved.</span>
        </div>

        <div class="flex gap-8">
          <a
            :href="CONTACT.socials.github"
            target="_blank"
            class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold hover:tracking-[0.15em] duration-300"
          >
            <i class="ri-github-fill text-lg"></i>
            Github</a
          >
          <a
            :href="CONTACT.socials.linkedin"
            target="_blank"
            class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold hover:tracking-[0.15em] duration-300"
          >
            <i class="ri-linkedin-fill text-lg"></i>
            LinkedIn</a
          >
          <a
            :href="CONTACT.socials.instagram"
            target="_blank"
            class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold hover:tracking-[0.15em] duration-300"
          >
            <i class="ri-instagram-line text-lg"></i>
            Instagram</a
          >
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { CONTACT, PROFILE } from '@/constants'

const form = reactive({
  name: '',
  email: '',
  query: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  const subject = encodeURIComponent(`Contact from ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nQuery:\n${form.query}`,
  )

  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`

  setTimeout(() => {
    isSubmitting.value = false
    successMessage.value = 'Opening your email client...'

    form.name = ''
    form.email = ''
    form.query = ''

    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  }, 1000)
}
</script>
