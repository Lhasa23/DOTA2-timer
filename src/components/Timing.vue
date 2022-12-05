<template>
  <div class="timer">
    {{ timing }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, Ref, ref } from 'vue'
import utils from '../utils/utils'

const secondMap = (): string => {
  switch (utils.timeFormat(second.value)) {
    case '20':
      return '还有十秒出兵'
    case '50':
      return '出兵囤野'
    default:
      return ''
  }
}
const minuteMap = (): string => {
  switch (timing.value) {
    case '00:00':
      return '比赛开始'
    case '01:50':
    case '03:50':
      return '圣水符要刷啦'
    case '02:50':
      return '赏金符要刷啦'
    case '05:50':
      return '赏金符和功能符准备'
    default:
      return ''
  }
}

const props = defineProps<{
  minute: number
  second: number
}>()

const timer: Ref<any> = ref(undefined)
onMounted(() => {
  playSecondContent()
  playMinuteContent()
  timer.value = startInterval()
  // utils.speechContent('111')
  // utils.speechContent('222')
})

const minute = ref(props.minute)
const second = ref(props.second)
const timing = computed(() => `${utils.timeFormat(minute.value)}:${utils.timeFormat(second.value)}`)

const playSecondContent = () => {
  utils.speechContent(secondMap())
}

const playMinuteContent = () => {
  utils.speechContent(minuteMap())
}

const startInterval = () => {
  return setInterval(() => {
    if (second.value < 59) {
      second.value += 1
    } else {
      second.value = 0
      minute.value += 1
    }
    playSecondContent()
    playMinuteContent()
  }, 1000)
}

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

<style scoped>

</style>