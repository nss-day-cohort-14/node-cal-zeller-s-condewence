'use strict'

const { isFunction, oneOf } = require('chai').assert;

const { getDayOfWeek } = require('../lib/zeller')

describe('zeller', () => {
	describe('getDayOfWeek', () => {
		it('should be a function', () => {
			isFunction(getDayOfWeek)
		})
		it('should return an integer 0-6 representing the day', () => {
			oneOf(getDayOfWeek(31, 8, 20, 16), [0, 1, 2, 3, 4, 5, 6])
		})
	})
})



// describe('cli', () => {
// 	describe('getCurrentMonth', () => {
// 		it('should be a function', () => {
// 			isFunction(getCurrentMonth)
// 		})
// 		it('should return an integer representing the month', () => {
// 			oneOf(getCurrentMonth(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
// 		})
// 	})
// })
