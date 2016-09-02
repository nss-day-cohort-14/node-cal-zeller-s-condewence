'use strict'

const { exec } = require('child_process')
const { isFunction, strictEqual, deepEqual, isObject, isArray, isNaN } = require('chai').assert

const { getDayOfWeek } = require('../lib/cli')
const { parseArgs } = require('../lib/parseArgs')

describe('cli', () => {
  it('should handle no arguments ("cal" = current Month)', () => {
    const args = []
    const expected = { month: 9, year: 2016 }
    deepEqual(parseArgs(args), expected)
  })

  it('should handle one argument ("cal arg" = requested year)', () => {
    const args = [2011]
    const parseArgsFunc = parseArgs(args)
    const expected = { month: '', year: 2011 }
    deepEqual(parseArgsFunc, expected)
  })

  it('should handle two arguments ("cal arg arg" = requested month / requested year)', () => {
    const args = [2, 2011]
    const parseArgsFunc = parseArgs(args)
    const expected = { month: 2, year: 2011 }
    deepEqual(parseArgs(args), expected)
  })
  it('should only accept integers as arguments', () => {
    const args = "two thousand"
    const expected = NaN
    isNaN(args, expected)
  })
})
