<script setup lang="ts">
defineProps<{
  time: string
  text: string
}>()
</script>

<template>
  <div class="bg-storm-gray p-4 rounded-lg">
    <div class="text-lighthouse-yellow font-bold">{{ time }}</div>
    <div>{{ text }}</div>
  </div>
</template>
