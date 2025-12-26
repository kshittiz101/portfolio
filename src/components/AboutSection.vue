<template>
  <section id="about" class="py-24 bg-light relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
      <!-- Text Content -->
      <div class="relative z-10">
        <h2 class="font-heading text-4xl font-bold text-dark mb-6">Profile Summary</h2>
        <p class="text-muted text-lg leading-relaxed mb-6">
          {{ PROFILE.bio_intro }}
        </p>
        <p class="text-muted text-lg leading-relaxed mb-8">
          {{ PROFILE.bio_desc }}
        </p>

        <div class="space-y-8">
          <!-- Skills -->
          <div>
            <h3 class="font-bold text-dark text-xl mb-4">Core Skills & Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in SKILLS"
                :key="skill"
                class="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-indigo-600"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Education -->
          <div>
            <h3 class="font-bold text-dark text-xl mb-4">Education</h3>
            <div class="space-y-4">
              <div
                v-for="edu in EDUCATION"
                :key="edu.level"
                class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <h4 class="font-bold text-dark">{{ edu.level }}</h4>
                <p class="text-sm text-gray-500">{{ edu.institution }}</p>
                <p class="text-xs text-muted mt-1">{{ edu.year }}</p>
              </div>
            </div>
          </div>

          <!-- Certs -->
          <div>
            <h3 class="font-bold text-dark text-xl mb-4">Certifications</h3>
            <ul class="list-disc list-inside text-muted space-y-2">
              <li v-for="cert in CERTIFICATIONS" :key="cert">{{ cert }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Image / Decor -->
      <div class="relative sticky top-24">
        <div
          class="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-20"
        ></div>
        <div
          class="relative bg-white p-2 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
        >
          <MapCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROFILE, SKILLS, EDUCATION, CERTIFICATIONS } from '@/constants'
import MapCard from '@/components/MapCard.vue'
</script>
