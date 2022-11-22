<template>
  <div>
    <h2 class="title">Dota2 Timer Reminder</h2>

    <template v-if="!timing">
      <input type="number" class="now" :value="now" />

      <button class="start" @click="toggleTimingStatus(true)">Start</button>
    </template>
    <template v-else>
      <Timing :now="now" />

      <button class="stop" @click="toggleTimingStatus(false)">Stop</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Timing from 'src/components/Timing.vue'

const now = ref(0)
const timing = ref(false)

const toggleTimingStatus = (status: boolean) => {
  timing.value = status
}
</script>

<style scoped>
</style>
