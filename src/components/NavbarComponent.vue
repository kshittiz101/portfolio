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
        class="md:hidden p-2 text-dark hover:text-primary transition-colors z-[70] relative"
        aria-label="Toggle Menu"
      >
        <transition name="rotate" mode="out-in">
          <i v-if="!isOpen" class="ri-menu-4-line text-2xl" key="menu"></i>
          <i v-else class="ri-close-line text-3xl" key="close"></i>
        </transition>
      </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-[60] bg-white md:hidden flex flex-col items-center justify-center space-y-8 h-screen w-screen"
      >
        <a
          v-for="item in ['Home', 'About', 'Projects']"
          :key="item"
          :href="`#${item.toLowerCase()}`"
          @click="isOpen = false"
          class="text-4xl font-heading font-black text-dark hover:text-primary transition-colors tracking-tight"
        >
          {{ item }}
        </a>

        <a
          href="#contact"
          @click="isOpen = false"
          class="mt-8 px-10 py-4 rounded-full bg-dark text-white text-xl font-medium hover:bg-gray-800 transition-transform active:scale-95 shadow-xl"
        >
          Contact Me
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isOpen = ref(false)

// Lock body scroll when menu is open
watch(isOpen, (value) => {
  if (value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Icon Rotation Transition */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.2s ease;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
