'use strict'

const { parseArgs } = require('../lib/parseArgs')

const { isFunction } = require('chai').assert

describe('parseArgs', () => {
	it('should be a function', () => {
		isFunction(parseArgs)
	})
})


