<script lang="ts" setup>
import TimelineEvent from '@/components/TimelineEvent.vue'
</script>

<template>
  <section id="history">
    <h2 class="text-3xl font-bold text-wave-blue mb-6">The Story</h2>
    <div class="space-y-6">
      <p class="text-lg">
        On November 10, 1975, the SS Edmund Fitzgerald sank in Lake Superior during a severe storm,
        taking with her the entire crew of 29 men. The maritime disaster became one of the most
        well-known shipwrecks in Great Lakes history.
      </p>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TimelineEvent time="1:00 PM" text="The Fitzgerald reports heavy seas and reduced speed" />
        <TimelineEvent time="3:30 PM" text="Ship takes on water and lists" />
        <TimelineEvent time="7:10 PM" text="Last radio contact with the Fitzgerald" />
      </div>
    </div>
  </section>
</template>
