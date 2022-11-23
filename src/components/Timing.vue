<template>
  <div class="timer">
    {{ minute }}:{{ second }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Speech from 'speak-tts'

const props = defineProps<{
  now: string
}>()

onMounted(() => {
  try {
    speechInit()
    speak()
  } catch (e) {
    console.log('uncatchable error')
    console.log(e)
  }
})

const timing = ref(props.now)

const minute = computed(() => timing.value.split(':')[0])
const second = computed(() => timing.value.split(':')[1])

const speech = ref(window.speechSynthesis)
const chineseVoice = computed(() => speech.value.getVoices().find((value) => value.lang === 'zh-CN'))

const speechInit = () => {
  // speech.value.setLanguage('zh-CN')
  // speech.value.init()
}
const speak = () => {
  let u = new window.SpeechSynthesisUtterance()
  u.voice = chineseVoice.value
  u.text = '请帮帮我'
  speech.value.speak(u)
}
</script>

<style scoped>

</style>