'use strict'

const { isFunction, oneOf, deepEqual } = require('chai').assert;

const { getDayOfWeek } = require('../lib/zeller')

describe('zeller', () => {
	describe('getDayOfWeek', () => {
		it('should be a function', () => {
			isFunction(getDayOfWeek)
		})
		it('should return an integer 0-6 representing the day', () => {
			oneOf(getDayOfWeek(31, 8, 20, 16), [0, 1, 2, 3, 4, 5, 6])
		})
		it('should take 3 args', () => {
			const args = [30, 8, 2016]
			const expected = 3
			deepEqual(getDayOfWeek(args), expected)
		})
	})
})


