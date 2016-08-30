'use strict'

const { strictEqual, isFunction } = require('chai').assert;

const { getCurrentMonth } = require('../lib/cli')

describe('cli', () => {
	describe('getCurrentMonth', () => {
		it('should be a function', () => {
			isFunction(getCurrentMonth)
		})
	})
})
