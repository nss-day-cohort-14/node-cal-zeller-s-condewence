'use strict'

const { exec } = require('child_process')
const { isFunction, strictEqual, deepEqual, isObject } = require('chai').assert


const { getDayOfWeek } = require('../lib/cli')
// const parseArgs = require('../lib/parse-args')

describe('cli', () => {
  it('should handle no arguments ("cal" = current Month)', () => {
    const args = []
    // const expected = { 9 2016 }
    // deepEqual(parseArgs(args), expected)
  })

  it('should handle one argument ("cal arg" = requested year)', () => {
    const args = [2011]
    // const expected = 
    // deepEqual(parseArgs(args), expected)
  })

  it('should handle two arguments ("cal arg arg" = requested month / requested year)', () => {
    const args = [2, 2011]
    // const expected = 
    // deepEqual(parseArgs(args), expected)
  })
  it('should only accept integers as arguments', () => {
    const args = ["two thousand"]
    const expected = NaN
    // deepEqual(parseArgs(args), expected)
  })
  it.skip('should return an object', () => {
    isObject(outputVariable)
  })
  it('should return and object', () => {
    // const argsArray = args
    // isArray(argsArray)
  })
})
