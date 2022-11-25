<template>
  <div>
    <h2 class="title">Dota2 Timer Reminder</h2>

    <template v-if="!timing">
      <section class="stopping">
        <section class="time-zone">
          <input type="checkbox" v-model="minus" :value="true">before start
          <input type="number" class="minute" :min="0" v-model="minute" />
          <input type="number" class="second" :min="0" :max="59" v-model="second" />
        </section>

        <button class="start" @click="toggleTimingStatus(true)">Start</button>
      </section>
    </template>
    <template v-else>
      <Timing :now="now" />

      <button class="stop" @click="toggleTimingStatus(false)">Stop</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Timing from 'src/components/Timing.vue'
import utils from './utils/utils'

const minus = ref(false)
const minute = ref(0)
const second = ref(0)
const timing = ref(false)

const now = computed(() => `${utils.timeFormat(minute.value)}:${utils.timeFormat(second.value)}`)

const toggleTimingStatus = (status: boolean) => {
  timing.value = status
}
</script>

<style scoped>
.stopping {
  margin: 0 auto;
  width: 55%;
  display: flex;
  flex-direction: column;
}
</style>
