import { describe, it, expect, vi } from 'vitest'
import utils from 'src/utils/utils'

describe('utils test', () => {
	it('should output correct bit time', () => {
		expect(utils.timeFormat(0)).toEqual('00')
		expect(utils.timeFormat(10)).toEqual('10')
		expect(utils.timeFormat(9)).toEqual('09')
	})
})