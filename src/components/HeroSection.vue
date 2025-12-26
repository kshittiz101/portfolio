<template>
  <div class="relative pt-20 overflow-hidden bg-white selection:bg-indigo-100 selection:text-dark">
    <!-- Background Decor -> Blobs/Mesh -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
      ></div>
      <div
        class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"
      ></div>

      <div
        class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl opacity-60 animate-blob"
      ></div>
      <div
        class="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000"
      ></div>
    </div>

    <section class="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex flex-col justify-center">
      <div class="max-w-4xl">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-3 py-1 rounded-full border border-black-100 bg-gray-50 text-gray-600 text-xs font-semibold uppercase tracking-wide mb-8"
        >
          <span class="w-2 h-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
          Available for Contribution
        </div>

        <!-- Headline -->
        <h1
          class="font-heading font-bold tracking-tight text-dark text-5xl md:text-8xl leading-none mb-6"
        >
          Hi, I am
          <span class="text-outline"> Kshittiz. </span>
        </h1>

        <h2 class="font-heading text-3xl md:text-5xl font-bold text-dark/80 mb-8">
          Pragmatic Programmer & Learner.
        </h2>

        <!-- Description -->
        <p class="text-lg md:text-xl text-muted max-w-2xl leading-extra-loose mb-10 font-sans">
          I’m a Full-Stack Developer specialized in
          <span class="font-semibold text-dark">GIS-based applications</span>. I build robust
          platforms using <span class="font-semibold text-dark">Django</span>,
          <span class="font-semibold text-dark">Vue.js</span>, and
          <span class="font-semibold text-dark">PostGIS</span>.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <a
            href="#projects"
            class="px-8 py-4 rounded-xl bg-dark text-white font-semibold hover:bg-gray-800 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>

        <!-- Social Proof / Tech Stack (Optional) -->
        <div class="mt-16 border-t border-gray-100 pt-8">
          <p class="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wider">Tech Stack</p>
          <div
            class="flex flex-wrap gap-6 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
          >
            <!-- Icons -->
            <span
              v-for="item in LANDING_STACK"
              :key="item.name"
              class="font-bold text-xl text-gray-400 transition-colors"
              :style="{ '--hover-color': item.color }"
            >
              <span class="hover:text-[var(--hover-color)]">{{ item.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { LANDING_STACK } from '@/constants'
</script>

<style scoped>
.text-outline {
  -webkit-text-stroke: 1.5px var(--color-primary);
  color: transparent;
  letter-spacing: 0.02em;
  filter: drop-shadow(4px 4px 0px rgba(14, 165, 233, 0.2));
  transition: all 0.3s ease;
}

.text-outline:hover {
  color: var(--color-primary);
  -webkit-text-stroke: 0px;
  filter: drop-shadow(0px 0px 0px transparent);
}

/* Blob Animation */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
