'use strict'

const { exec } = require('child_process')
const { isFunction, strictEqual, deepEqualAasdfGsdfAAA } = require('chai').assert

const { zellerFunc } = require('../lib/cli')
// const parseArgs = require('../lib/parse-args')

describe('cli', () => {
  it('should handle no arguments ("cal" = current Month)', () => {
    // const args = []
    // deepEqual(parseArgs(args), expected)
  })

  it('should handle one argument ("cal arg" = requested year)', () => {
    // const args = [10]
    // deepEqual(parseArgs(args), expected)
  })

  it('should handle two arguments ("cal arg arg" = requested month / requested year)', () => {
    // const args = [20 , 30]
    // deepEqual(parseArgs(args), expected)
  })
})
