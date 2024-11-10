<script setup lang="ts">
const images = [
  {
    url: '/fitz-day/assets/images/fitz-1.jpg',
    caption: 'The SS Edmund Fitzgerald in better days'
  },
  {
    url: '/fitz-day/assets/images/fitz-2.jpg',
    caption: 'Lake Superior'
  },
  {
    url: '/fitz-day/assets/images/fitz-3.jpg',
    caption: 'Memorial at Whitefish Point'
  }
]
</script>

<template>
  <section id="gallery" class="mb-12">
    <h2 class="text-3xl font-bold text-wave-blue mb-6">Photo Gallery</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative aspect-video bg-storm-gray rounded-lg overflow-hidden"
      >
        <img :src="image.url" :alt="image.caption" class="w-full h-full object-cover" />
        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
          <p class="text-sm">{{ image.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
