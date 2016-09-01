'use strict'

const { isFunction, oneOf, deepEqual, isNumber } = require('chai').assert;

//const { getMonth, getYear } = require('../lib/month')
const { getDayOfWeek, getMonth, getYear } = require('../lib/zeller')


  describe('getMonth', () => {
    it('should be a function', () => {
      isFunction(getMonth)
    })
    it('should return an integer', () => {
      const month = getMonth(5)
      isNumber(month, 'damn straight thats a number')
    })
    it('should take an argument', () => {
      const arg = 2
      const expected = 14
      const month = getMonth(arg)
      deepEqual(month, expected)
    })
    it('should not return an indexed month with arg not 1-12', () => {
      const expected = undefined
      const month = getMonth(13)
      deepEqual(month, expected)
    })
    it('should ')
    //   it.skip('Each indexed month has a corresponding name', () => {
    //   oneOf((getMonth), ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Janruary", "February"])
    // })
    // it('Month starts on a day', () => {
    //   oneOf((??????), ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
    // })
    // it('Has a certain range of weeks', () => {
    //   oneOf((??????), [4, 5, 6])
    // })

    // it('Has a certain range of days', () => {
    //   oneOf((??????), [28, 29, 30, 31])
    // })
})
 
// 6 2016
// Starts on wednesday
// 31 days
// 5 weeks
    // it('', () => {
      
    // })


// 9 2016
// Starts on thursday
// 30 days
// 5 weeks
    // it('', () => {
      
    // })


// 2 2016
// starts on monday
// 29 days
// 5 weeks
    // it('', () => {
      
    // })


// 2 2014
// starts on saturday
// 28 days
// 5 weeks
    // it('', () => {
      
    // })


// 2 2015
// starts on sunday
// 28 days
// 4 weeks
    // it('', () => {
      
    // })


// 1 2016
// starts on friday
// 31 days
// 6 weeks
    // it('', () => {
      
    // })


// 11 2014
// starts on saturday
// 30 days
// 6 weeks
    // it('', () => {
      
    // })


// 2 1900
// starts on thursday
// 28 days (non-leap century)
// 5 weeks
    // it('', () => {
      
    // })


// 2 2000
// starts on tuesday
// 29 days (leap century)
// 5 weeks
    // it('', () => {
      
    // })
// node-cal 1752 // cal: year 1752 not in range 1753..9999
// node-cal 10000 // cal: year 10000 not in range 1753..9999
// node-cal 13 2015 // cal: month 13 not in range 1..12

