import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import Timing from 'src/components/Timing.vue'
import utils from 'src/utils/utils'

describe('Timing component functional test', () => {
	utils.speechContent = vi.fn().mockImplementation(() => (content: string) => content)

	it('should broadcast game started', () => {
		const wrapper = mount(Timing, {
			props: {
				now: '00:00'
			}
		})
		const timer = wrapper.find('.timer')
		expect(timer.text()).toEqual('00:00')
		expect(utils.speechContent).toHaveBeenCalledWith('比赛开始')
	})

	it('should broadcast game started', () => {

		const wrapper = mount(Timing, {
			props: {
				now: '00:20'
			}
		})

		expect(utils.speechContent).toHaveBeenCalledWith('还有十秒出兵')
	})
})