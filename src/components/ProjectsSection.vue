<template>
  <section id="projects" class="relative z-10 bg-white overflow-hidden">
    <div class="py-24 max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mb-24">
        <h2 class="font-heading text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          Selected <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Works.</span
          >
        </h2>
        <p class="text-muted text-xl leading-relaxed max-w-xl">
          A curation of digital products built for the real world. Solving problems with spatial
          data and clean interfaces.
        </p>
      </div>

      <!-- Major Projects (Zig-Zag Layout) -->
      <div class="space-y-32 mb-32">
        <article v-for="(project, index) in MAJOR_PROJECTS" :key="index" class="relative group">
          <div
            :class="[
              'flex flex-col gap-12 items-center',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            ]"
          >
            <!-- Image / Visual Side -->
            <div class="w-full md:w-7/12 relative">
              <!-- Abstract Background Blob -->
              <div
                :class="[
                  'absolute -inset-4 bg-gradient-to-r opacity-20 blur-3xl rounded-full transition-all duration-700 group-hover:opacity-30',
                  project.gradient || 'from-indigo-500 to-purple-500',
                ]"
              ></div>

              <!-- Card -->
              <div
                class="relative bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 aspect-[16/10] group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-gray-200/50 transition-all duration-500"
              >
                <!-- Project Image -->
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <!-- Fallback Mock Interface -->
                <div
                  v-else
                  class="absolute inset-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <!-- Header bar -->
                  <div class="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                    <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <!-- Body content placeholder -->
                  <div class="p-8 flex items-center justify-center h-full bg-slate-50/50">
                    <h4
                      class="text-gray-300 font-heading text-4xl font-bold opacity-30 select-none uppercase tracking-widest"
                    >
                      {{ project.tag }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <!-- Text Content Side -->
            <div class="w-full md:w-5/12">
              <div
                class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/5 rounded-full"
              >
                {{ project.tag }}
              </div>
              <h3
                class="font-heading text-4xl font-bold text-dark mb-6 group-hover:text-primary transition-colors duration-300"
              >
                {{ project.title }}
              </h3>
              <p class="text-muted text-lg leading-relaxed mb-8">
                {{ project.description }}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-10">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Link -->
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="inline-flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors group/link"
              >
                <span class="border-b-2 border-dark/20 group-hover/link:border-primary pb-0.5"
                  >View Project</span
                >
                <span class="transform group-hover/link:translate-x-1 transition-transform"
                  ><i class="ri-arrow-right-line"></i
                ></span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Other Projects Section (Full Width Gray) -->
    <div v-if="OTHER_PROJECTS.length > 0" class="py-24 bg-light border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <h3 class="font-heading text-2xl font-bold text-dark mb-10 pb-4 inline-block">
          Other Noteworthy Projects
        </h3>

        <div class="grid md:grid-cols-3 gap-6">
          <article
            v-for="(project, index) in OTHER_PROJECTS"
            :key="index"
            class="group bg-white rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-200/40"
          >
            <div class="flex justify-between items-start mb-6">
              <div
                class="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors duration-300 text-2xl"
              >
                <i class="ri-folder-3-line"></i>
              </div>
              <!-- Optional link icon -->
            </div>

            <h4
              class="font-heading text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors"
            >
              {{ project.title }}
            </h4>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="text-xs font-mono text-gray-400"
              >
                #{{ tech }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MAJOR_PROJECTS, OTHER_PROJECTS } from '@/constants'
</script>
