<script lang="ts" setup>
import TimelineEvent from '@/components/TimelineEvent.vue'

interface Event {
  time: string
  text: string
}

const events: Event[] = [
  { time: 'Early AM', text: 'Storm hits with 50+ knot winds, 10-foot waves' },
  { time: '1:00 PM', text: 'Weather Service upgrades to storm warnings' },
  { time: '2:00 PM', text: 'Fitzgerald reports water intake and radar issues' },
  { time: '3:30 PM', text: 'Ship loses both radars, requests guidance' },
  { time: '4:10 PM', text: 'Reports worsening conditions but managing' },
  { time: '7:10 PM', text: 'Final message: "We are holding our own"' }
]
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
        <TimelineEvent
          v-for="event in events"
          :key="event.time"
          :time="event.time"
          :text="event.text"
        />
      </div>
    </div>
  </section>
</template>
