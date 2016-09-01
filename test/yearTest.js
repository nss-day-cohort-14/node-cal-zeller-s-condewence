'use strict'

const { isFunction, oneOf, deepEqual, isNumber } = require('chai').assert;

const { getMonth, getYear } = require('../lib/zeller')

describe('getYear', () => {
  it('should be a function', () => {
    isFunction(getYear)
  })
  it('should return an integer', () => {
    const year = getYear(5, 2016)
    isNumber(year, 'damn straight thats another number')
  })
  it('should take two arguments', () => {
    const expected = 2013
    const year = getYear(2, 2014)
    deepEqual(year, expected)
  })
  it('should return year -1 if monthArg is 1 or 2', () => {
    const year = 2014
    const expected = year -1
    const modifiedYear = getYear(1, year)
    deepEqual(modifiedYear, expected)
  })
  // it.skip('should take two arguments', () => {
  //   // const expected = 2013
  //   // const year = getYear(2, 2014)
  //   // deepEqual(year, expected)
  // })
})
