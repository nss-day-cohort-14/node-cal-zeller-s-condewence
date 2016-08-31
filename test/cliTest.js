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

////////////////////////////////////////////////////////////////////////////////
// const { assert: {oneOf} } = require('chai')
// describe('cli', () => {
//   it("should handle no args", (cb) => {           // Mocha assumes sync data, so to tell it async: "(cb)" as arg
//     exec('bin/diceroll', (err, stdout) => {
//       if (err) cb(err)
//       oneOf(stdout.toString(), ['1\n','2\n','3\n','4\n','5\n','6\n'])
//       cb()
//     })
//   })


//   // it.skip("should handle no args", () => {}) // use it.skip to count but ignore specific tests
//   it("should handle one arg", () => {
//     exec('bin/diceroll 1', (err, stdout) => {
//       if (err) cb(err)
//       oneOf(stdout.toString(), ['1\n'])
//       cb()
//     })
//   })

//   it("should handle two args", () => {
//         exec('bin/diceroll 2 2', (err, stdout) => {
//       if (err) cb(err)
//       oneOf(stdout.toString(), ['2\n', '3\n', '4\n'])
//       cb()
//     })
//       })
// })

// // // see test results in browser at:///Users/EricD/workspace/nssnode/exercises/cli-apps/01/coverage/lcov-report/lib/index.html
