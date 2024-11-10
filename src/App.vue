<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue'
import HistorySection from '@/components/HistorySection.vue'
import GalleryView from '@/components/GalleryView.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaAnchor } from 'oh-vue-icons/icons/fa'

addIcons(FaAnchor)
</script>

<template>
  <div class="min-h-screen bg-nautical-blue">
    <HeaderNav />
    <main class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-lighthouse-yellow mb-8">
        <div class="flex items-center gap-2">
          <OhVueIcon name="fa-anchor" scale="2" />
          <span>The Wreck of the Edmund Fitzgerald</span>
        </div>
      </h1>
      <HistorySection />
      <GalleryView />
    </main>
    <AudioPlayer />
  </div>
</template>
