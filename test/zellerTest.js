'use strict'

const { isFunction } = require('chai').assert;

const { zellerFunc } = require('../lib/zeller')

describe('zeller', () => {
	describe('zellerFunc', () => {
		it('should be a function', () => {
			isFunction(zellerFunc)
		})
		// it('should return an integer representing the month', () => {
		// 	oneOf(getCurrentMonth(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
		// })
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
