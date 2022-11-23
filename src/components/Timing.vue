<template>
  <div class="timer">
    {{ minute }}:{{ second }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  now: string
}>()

onMounted(() => {
  speak()
})

const timing = ref(props.now)

const minute = computed(() => timing.value.split(':')[0])
const second = computed(() => timing.value.split(':')[1])

const speech = ref(window.speechSynthesis)
const chineseVoice = computed(() => speech.value.getVoices().find((value) => value.lang === 'zh-CN'))

const speak = () => {
  let u = new window.SpeechSynthesisUtterance()
  u.voice = chineseVoice.value
  u.text = '请帮帮我'
  speech.value.speak(u)
}
</script>

<style scoped>

</style>