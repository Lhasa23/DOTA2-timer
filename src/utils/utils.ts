const utils = {
	timeFormat: (time: number): string => {
		const lessThanTwo = time.toString().length < 2
		return lessThanTwo ? `0${time}` : `${time}`
	},
	speechContent: (content: string) => {
		const speech = window.speechSynthesis

		while (!speech) {
		}

		const chineseVoice = speech.getVoices().find((voice) => voice.lang === 'zh-CN') as SpeechSynthesisVoice

		const utterance = new window.SpeechSynthesisUtterance()
		utterance.voice = chineseVoice
		utterance.text = content
		speech.speak(utterance)
	}
}

export default utils