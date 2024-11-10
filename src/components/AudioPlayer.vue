<script setup lang="ts">
import { ref, onMounted } from 'vue'

const audioPlayer = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const togglePlay = () => {
  if (!audioPlayer.value) return

  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play()
  }
  isPlaying.value = !isPlaying.value
}

// Add event listener to update isPlaying state when audio ends
onMounted(() => {
  if (!audioPlayer.value) return

  audioPlayer.value.addEventListener('ended', () => {
    isPlaying.value = false
  })
})
</script>

<template>
  <div class="fixed bottom-4 right-4 bg-storm-gray rounded-lg p-4 shadow-lg z-50">
    <div class="flex items-center gap-4">
      <button
        @click="togglePlay"
        class="bg-lighthouse-yellow hover:bg-wave-blue transition-colors text-nautical-blue p-2 rounded-full"
      >
        <span class="sr-only">{{ isPlaying ? 'Pause' : 'Play' }} background music</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            v-if="isPlaying"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 4h4v16H6zM14 4h4v16h-4z"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3l14 9-14 9V3z"
          />
        </svg>
      </button>
      <div class="text-sm">
        <div class="font-bold">The Wreck of the Edmund Fitzgerald</div>
        <div class="text-gray-300">Gordon Lightfoot</div>
      </div>
    </div>
    <audio
      ref="audioPlayer"
      src="/assets/wreck-of-the-edmund-fitzgerald.mp3"
      preload="metadata"
      loop
    />
  </div>
</template>
