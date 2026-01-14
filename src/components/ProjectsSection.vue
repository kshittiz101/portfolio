<template>
  <section id="projects" class="relative z-10 bg-gradient-to-b from-white via-white to-gray-50/50 overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-20 -right-64 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 -left-64 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative py-32 max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mb-32 reveal-on-scroll">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6">
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span class="text-sm font-semibold text-primary/80 tracking-wide uppercase">Portfolio</span>
        </div>
        <h2 class="font-heading text-5xl md:text-7xl font-bold text-dark mb-8 leading-tight">
          Selected <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-secondary animate-gradient"
            >Works.</span
          >
        </h2>
        <p class="text-muted text-xl leading-relaxed max-w-xl">
          A curation of digital products built for the real world. Transforming ideas into elegant solutions with clean interfaces and modern technologies.
        </p>
      </div>

      <!-- Major Projects (Zig-Zag Layout) -->
      <div class="space-y-40 mb-40">
        <article
          v-for="(project, index) in MAJOR_PROJECTS"
          :key="index"
          class="relative group reveal-on-scroll"
        >
          <div
            :class="[
              'flex flex-col gap-16 items-center',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            ]"
          >
            <!-- Image / Visual Side -->
            <div class="w-full md:w-7/12 relative">
              <!-- Dynamic Background Blob -->
              <div
                class="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-all duration-700"
                :style="{
                  background: `radial-gradient(ellipse at center, ${getBlobColor(index)} 0%, transparent 70%)`,
                  filter: 'blur(60px)',
                }"
              ></div>

              <!-- Card -->
              <div
                class="relative bg-gradient-to-br from-white to-gray-50/30 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-white/60 backdrop-blur-xl aspect-[16/10] group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500"
              >
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent pointer-events-none"></div>
                
                <!-- Project Image -->
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="relative w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <!-- Fallback Mock Interface -->
                <div
                  v-else
                  class="absolute inset-3 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <!-- Header bar -->
                  <div class="h-10 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 flex items-center px-4 gap-2">
                    <div class="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-sm"></div>
                    <div class="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm"></div>
                    <div class="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-sm"></div>
                    <div class="flex-1 mx-4 h-5 bg-gray-100 rounded-lg"></div>
                  </div>
                  <!-- Body content placeholder -->
                  <div class="p-12 flex items-center justify-center h-full bg-gradient-to-br from-slate-50/80 to-white">
                    <h4
                      class="text-gradient font-heading text-5xl font-bold opacity-20 select-none uppercase tracking-widest"
                    >
                      {{ project.tag }}
                    </h4>
                  </div>
                </div>

                <!-- Shimmer effect on hover -->
                <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </div>

            <!-- Text Content Side -->
            <div class="w-full md:w-5/12">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase text-primary bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/10"
              >
                <span class="w-1.5 h-1.5 bg-primary rounded-full"></span>
                {{ project.tag }}
              </div>
              <h3
                class="font-heading text-4xl md:text-5xl font-bold text-dark mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300"
              >
                {{ project.title }}
              </h3>
              <p class="text-muted text-lg leading-relaxed mb-10">
                {{ project.description }}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2.5 mb-12">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-4 py-2 bg-gradient-to-br from-white to-gray-50 border border-gray-200/60 text-gray-700 text-sm font-medium rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Link -->
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:transform hover:-translate-y-0.5 transition-all duration-300 group/link"
              >
                <span>View Project</span>
                <span class="transform group-hover/link:translate-x-1 transition-transform"
                  ><i class="ri-arrow-right-line"></i
                ></span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Other Projects Section -->
    <div v-if="OTHER_PROJECTS.length > 0" class="relative py-32 bg-gradient-to-b from-gray-50/50 to-gray-100/80 border-t border-gray-100/60">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 reveal-on-scroll">
        <div class="flex items-end gap-4 mb-14">
          <h3 class="font-heading text-3xl md:text-4xl font-bold text-dark">
            More Projects
          </h3>
          <div class="flex-1 h-0.5 bg-gradient-to-r from-gray-200 to-transparent mb-2"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(project, index) in OTHER_PROJECTS"
            :key="index"
            class="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 border border-gray-100/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div class="relative flex justify-between items-start mb-8">
              <div
                class="p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl group-hover:from-primary/5 group-hover:to-white transition-all duration-300 text-3xl shadow-sm group-hover:shadow-md"
              >
                <i class="ri-folder-3-line text-gray-400 group-hover:text-primary transition-colors"></i>
              </div>
            </div>

            <h4
              class="font-heading text-2xl font-bold text-dark mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300"
            >
              {{ project.title }}
            </h4>
            <p class="text-gray-500 text-sm mb-8 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="relative flex flex-wrap gap-2 mt-auto">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1.5 bg-gray-50 text-gray-500 text-xs font-medium rounded-lg border border-gray-100 hover:border-primary/30 hover:text-primary hover:bg-white transition-all duration-300"
              >
                {{ tech }}
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

const blobColors = [
  'rgba(99, 102, 241, 0.15)',   // indigo
  'rgba(168, 85, 247, 0.15)',   // purple
  'rgba(236, 72, 153, 0.15)',   // pink
  'rgba(34, 211, 238, 0.15)',   // cyan
]

const getBlobColor = (index: number) => {
  return blobColors[index % blobColors.length]
}
</script>
