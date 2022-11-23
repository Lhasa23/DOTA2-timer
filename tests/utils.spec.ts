import { describe, it, expect } from 'vitest'
import timeFormat from 'src/utils/timeFormat'

describe('utils test', () => {
	it('should output correct bit time', () => {
		expect(timeFormat(0)).toEqual('00')
		expect(timeFormat(10)).toEqual('10')
		expect(timeFormat(9)).toEqual('09')
	})
})