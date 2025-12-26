<template>
  <section id="contact" class="py-24 bg-dark text-white relative overflow-hidden">
    <!-- Background glow -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <h2 class="font-heading text-4xl md:text-5xl font-bold mb-6">
        Let's build something amazing.
      </h2>
      <p class="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of
        your visions.
      </p>

      <div class="flex flex-col items-center justify-center gap-6 mb-24">
        <a
          :href="'mailto:' + CONTACT.email"
          class="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-dark font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-xl shadow-white/5 overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-2">
            <i class="ri-mail-send-line text-xl"></i>
            <span class="text-lg">Say Hello</span>
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>
        </a>
        <p class="text-gray-500 text-sm">
          Or drop a mail at
          <a
            :href="'mailto:' + CONTACT.email"
            class="text-gray-300 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-0.5"
            >{{ CONTACT.email }}</a
          >
        </p>
      </div>

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
import { CONTACT, PROFILE } from '@/constants'
</script>
