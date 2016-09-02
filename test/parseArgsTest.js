'use strict'

const { parseArgs } = require('../lib/parseArgs')

const { strictEqual, isFunction, isObject } = require('chai').assert

describe('parseArgs', () => {
  it('should be a function', () => {
    isFunction(parseArgs)
  })
  it('when one arg entered it should return an object', () => {
      const args = 2016
      const argsEntered = parseArgs(args)
      isObject(argsEntered)
  })
  it('when two arg entered should return an object', () => {
      const args = [9, 2016]
      const argsEntered = parseArgs(args)
      isObject(argsEntered)
  })
  it('when no arg entered should return an object', () => {
      const args = ""
      const argsEntered = parseArgs(args)
      isObject(argsEntered)
  })
  it.skip('', () => {
    isFunction()
  })
  it.skip('', () => {
    isFunction()
  })
	it.skip('', () => {
		isFunction()
	})
})


