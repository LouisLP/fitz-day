<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// interface AudioError {
//   message: string
//   code?: number
// }

const audioPlayer = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const isLoading = ref(false)
const error = ref<string>('')
const audioLoaded = ref(false)

const initAudio = async () => {
  if (!audioPlayer.value) return
  try {
    isLoading.value = true
    await audioPlayer.value.load()
    audioLoaded.value = true
  } catch (err) {
    console.error('Audio initialization error:', err)
  } finally {
    isLoading.value = false
  }
}

const handlePlay = async () => {
  if (!audioPlayer.value) return

  try {
    if (isPlaying.value) {
      audioPlayer.value.pause()
      isPlaying.value = false
      return
    }

    isLoading.value = true
    error.value = ''

    if (!audioLoaded.value) {
      await initAudio()
    }

    await audioPlayer.value.play()
    isPlaying.value = true
  } catch (err) {
    error.value = `Playback failed: ${err instanceof Error ? err.message : 'Unknown error'}`
    console.error('Audio playback error:', err)
    isPlaying.value = false
  } finally {
    isLoading.value = false
  }
}

const handleCanPlay = () => {
  isLoading.value = false
  audioLoaded.value = true
}

const handleError = (e: Event) => {
  const target = e.target as HTMLAudioElement
  isLoading.value = false
  isPlaying.value = false
  audioLoaded.value = false
  error.value = `Audio error: ${target.error?.message || 'Unknown error'}`
}

const handleEnded = () => {
  isPlaying.value = false
}

const handlePause = () => {
  isPlaying.value = false
}

// Handle page visibility changes
const handleVisibilityChange = () => {
  if (document.hidden && audioPlayer.value && isPlaying.value) {
    audioPlayer.value.pause()
    isPlaying.value = false
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange)
  initAudio()
})

onBeforeUnmount(() => {
  if (audioPlayer.value) {
    audioPlayer.value.pause()
    audioPlayer.value.src = ''
  }
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<template>
  <div class="fixed bottom-4 right-4 bg-storm-gray rounded-lg p-4 shadow-lg z-50">
    <div class="flex items-center gap-4">
      <button
        @click="handlePlay"
        class="bg-lighthouse-yellow hover:bg-wave-blue transition-colors text-nautical-blue p-2 rounded-full"
        :disabled="isLoading"
      >
        <span class="sr-only">{{ isPlaying ? 'Pause' : 'Play' }} background music</span>
        <!-- Loading spinner -->
        <svg
          v-if="isLoading"
          class="animate-spin h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <!-- Play/Pause icon -->
        <svg
          v-else
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
        <div v-if="error" class="text-red-500 text-xs mt-1">
          {{ error }}
        </div>
      </div>
    </div>
    <audio
      ref="audioPlayer"
      preload="metadata"
      loop
      @canplay="handleCanPlay"
      @error="handleError"
      @ended="handleEnded"
      @pause="handlePause"
    >
      <source src="/fitz-day/assets/wreck-of-the-edmund-fitzgerald.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
