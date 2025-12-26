<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <!-- Router View needs to be full width to support hero backgrounds -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue'
</script>
