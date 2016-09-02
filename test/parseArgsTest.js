'use strict'

const { parseArgs } = require('../lib/parseArgs')

const { strictEqual, isFunction, isObject } = require('chai').assert

describe('parseArgs', () => {
  it('should be a function', () => {
    isFunction(parseArgs)
  })
  it('should return an object when one arg entered', () => {
      const args = 2016
      const argsEntered = parseArgs(args)
      isObject(argsEntered)
  })
  it('should return an object when two args entered', () => {
      const args = [9, 2016]
      const argsEntered = parseArgs(args)
      isObject(argsEntered)
  })
  it('should return an object when no arg entered', () => {
      const args = ""
      const argsEntered = parseArgs(args)
      isObject(argsEntered)
  })
  it.skip('should return an object with 2 key value pairs', () => {
  		const args = ''
  		const obj = parseArgs(args)
    	const objArray = Object.keys('obj')
    	const arrayLength = objArray.length
    	const expected = 2
    	strictEqual(arrayLength, expected)
  })
  it.skip('', () => {
    isFunction()
  })
	it.skip('', () => {
		isFunction()
	})
})


