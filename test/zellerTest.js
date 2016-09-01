'use strict'

const { isFunction, oneOf, deepEqual } = require('chai').assert;

const { getDayOfWeek } = require('../lib/zeller')

describe('zeller', () => {
	describe('getDayOfWeek', () => {
		it('should be a function', () => {
			isFunction(getDayOfWeek)
		})
		it('should return an integer 0-6 representing the day', () => {
			oneOf(getDayOfWeek(31, 8, 2016), [0, 1, 2, 3, 4, 5, 6])
		})
		it('should take 3 args', () => {
			const expected = 3
			const getDay = getDayOfWeek(30, 8, 2016)
			deepEqual(getDay, expected)
		})
	})
})


