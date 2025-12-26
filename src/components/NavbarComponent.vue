<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-gray-100/50"
  >
    <nav class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="text-3xl font-extrabold tracking-tight text-dark group">
        Kc<span class="text-primary group-hover:text-primary-hover transition-colors">.</span>
      </router-link>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#home" class="text-sm font-medium text-muted hover:text-primary transition-colors"
          >Home</a
        >
        <a href="#about" class="text-sm font-medium text-muted hover:text-primary transition-colors"
          >About</a
        >
        <a
          href="#projects"
          class="text-sm font-medium text-muted hover:text-primary transition-colors"
          >Projects</a
        >
      </div>

      <!-- CTA -->
      <div class="hidden md:block">
        <a
          href="#contact"
          class="px-6 py-2.5 rounded-full bg-dark text-white text-sm font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Contact Me
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden p-2 text-muted hover:text-primary transition-colors z-50 relative"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div
      v-show="isOpen"
      class="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 animate-fade-in"
    >
      <a
        href="#home"
        @click="isOpen = false"
        class="text-2xl font-medium text-dark hover:text-primary"
        >Home</a
      >
      <a
        href="#about"
        @click="isOpen = false"
        class="text-2xl font-medium text-dark hover:text-primary"
        >About</a
      >
      <a
        href="#projects"
        @click="isOpen = false"
        class="text-2xl font-medium text-dark hover:text-primary"
        >Projects</a
      >
      <a
        href="#contact"
        @click="isOpen = false"
        class="px-8 py-3 rounded-full bg-dark text-white text-lg font-medium hover:bg-gray-800"
        >Contact Me</a
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
