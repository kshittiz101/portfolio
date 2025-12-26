<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        } else {
          entry.target.classList.remove('reveal-visible')
        }
      })
    },
    {
      threshold: 0.15, // Trigger when 15% visible
      rootMargin: '50px',
    },
  )

  const hiddenElements = document.querySelectorAll('.reveal-on-scroll')
  hiddenElements.forEach((el) => observer.observe(el))
})
</script>
