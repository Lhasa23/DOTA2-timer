<template>
  <div class="timer">
    {{ now }}{{ double }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  now: number
}>()

const timing = ref(props.now)

// inferred type: ComputedRef<number>
const double = computed(() => timing)
</script>

<style scoped>

</style>