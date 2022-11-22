import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Timing from 'src/components/Timing.vue'

describe('Timing component functional test', () => {
	it('should broadcast game started', () => {
		const wrapper = mount(Timing, {
			props: {
				now: 0
			}
		})
		const timer = wrapper.find('.timer')
		expect(timer.text()).toEqual('00')
	})
})