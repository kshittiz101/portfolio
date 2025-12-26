<template>
  <div class="h-[600px] w-full bg-gray-900 rounded-xl overflow-hidden relative group">
    <div id="map" class="h-full w-full z-0"></div>

    <!-- Overlay Card (Instruction) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="showInstruction"
        class="absolute bottom-8 left-0 right-0 z-[1000] flex justify-center pointer-events-none"
      >
        <div
          class="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl text-center mx-4 pointer-events-auto flex items-center gap-3 animate-bounce"
        >
          <i class="ri-cursor-fill text-xl"></i>
          <span class="text-dark font-medium text-sm">Click anywhere map to interact!</span>
        </div>
      </div>
    </transition>

    <!-- Reset Interaction Button -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-4 opacity-0"
    >
      <button
        v-if="!showInstruction"
        @click="resetMap"
        class="absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg font-medium text-sm text-dark border border-white/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
      >
        <span class="group-hover:rotate-180 transition-transform duration-500"
          ><i class="ri-refresh-line"></i
        ></span>
        Reset View
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const showInstruction = ref(true)
const mapInstance = ref<L.Map | null>(null)
const userMarker = ref<L.Marker | null>(null)
const INITIAL_CENTER: [number, number] = [27.7172, 85.324]
const INITIAL_ZOOM = 13

// Reset Interaction
const resetMap = () => {
  if (!mapInstance.value) return

  // Remove user marker
  if (userMarker.value) {
    userMarker.value.remove()
    userMarker.value = null
  }

  // Reset View
  mapInstance.value.closePopup()
  mapInstance.value.flyTo(INITIAL_CENTER, INITIAL_ZOOM)

  // Show instructions again
  showInstruction.value = true
}

onMounted(() => {
  const map = L.map('map', {
    center: INITIAL_CENTER,
    zoom: INITIAL_ZOOM,
    zoomControl: false, // We will manually place controls if needed, or keep it minimal
    attributionControl: false,
    scrollWheelZoom: true,
  })

  mapInstance.value = map

  // CartoDB Dark Matter with BRIGHTNESS FILTER
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    className: 'map-tiles',
  }).addTo(map)

  // Custom Marker Icon Generator
  const createMarkerIcon = (color = '#0ea5e9') =>
    L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px ${color}80;"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    })

  // Initial Location
  L.marker(INITIAL_CENTER, { icon: createMarkerIcon() }).addTo(map).bindPopup(`
      <div class="px-2 py-1 text-center">
        <h3 class="font-bold text-indigo-600 mb-0.5 text-base">My Base</h3>
        <p class="text-xs text-gray-500 font-medium">Kathmandu, Nepal</p>
      </div>
    `)

  // Interactive Click Event
  map.on('click', (e) => {
    // Hide instruction on first interaction
    showInstruction.value = false

    // Remove previous user marker if exists
    if (userMarker.value) {
      userMarker.value.remove()
    }

    // Add marker at clicked location
    const newMarker = L.marker(e.latlng, { icon: createMarkerIcon('#F43F5E') }) // Red/Rose color
      .addTo(map)
      .bindPopup(
        `
        <div class="px-1 py-1 text-center min-w-[140px]">
          <h3 class="font-bold text-rose-500 mb-1 text-sm">Selected Location</h3>
          <div class="inline-block bg-gray-50 px-2 py-1 rounded border border-gray-100">
            <p class="text-[10px] text-gray-500 font-mono tracking-tight">
              ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}
            </p>
          </div>
        </div>
      `,
      )
      .openPopup()

    userMarker.value = newMarker

    // Pan to click
    map.flyTo(e.latlng, map.getZoom())
  })
})
</script>

<style scoped>
/* Ensure map tiles load correctly */
:deep(.leaflet-pane) {
  z-index: 0;
}

/* Brighten Map Tiles */
:deep(.map-tiles) {
  filter: brightness(1.2) contrast(1.1) saturate(1.1);
}

/* Custom Popup Styling */
:deep(.leaflet-popup-content-wrapper) {
  border-radius: 16px;
  padding: 0;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

:deep(.leaflet-popup-content) {
  margin: 12px 16px;
  line-height: 1.4;
}

:deep(.leaflet-popup-tip) {
  background: white;
}

:deep(a.leaflet-popup-close-button) {
  display: none; /* Hide default close button for cleaner look */
}
</style>
