<template>
  <div class="timer">
    {{ minute }}:{{ second }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import utils from '../utils/utils'

const secondMap = (): string => {
  switch (second.value) {
    case '00':
      return '比赛开始'
    case '20':
      return '还有十秒出兵'
    case '50':
      return '出兵囤野'
    default:
      return ''
  }
}

const props = defineProps<{
  now: string
}>()

onMounted(() => {
  playSecondContent()
})

const timing = ref(props.now)

const minute = computed(() => timing.value.split(':')[0])
const second = computed(() => timing.value.split(':')[1])

const playSecondContent = () => {
  utils.speechContent(secondMap())
}
</script>

<style scoped>

</style>