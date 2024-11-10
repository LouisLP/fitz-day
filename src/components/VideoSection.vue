<script setup lang="ts">
interface Video {
  url: string
  caption: string
  poster?: string
}

const video: Video = {
  url: '/fitz-day/assets/videos/fitz-day-recording.mp4',
  caption: 'Local memorial service by the bois'
}
</script>

<template>
  <section id="video" class="py-8">
    <h2 class="text-3xl font-bold text-wave-blue mb-6">Videos</h2>
    <div class="max-w-lg mx-auto">
      <!-- Reduced max width for vertical video -->
      <div class="relative bg-storm-gray rounded-lg overflow-hidden" style="aspect-ratio: 9/16">
        <!-- Vertical aspect ratio -->
        <video :src="video.url" :poster="video.poster" controls class="w-full h-full object-fit">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>
