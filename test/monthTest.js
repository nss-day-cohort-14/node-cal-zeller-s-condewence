'use strict'

const { isFunction, oneOf, deepEqual, isNumber ,isUndefined, isAbove, isBelow} = require('chai').assert;

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
    it('should return undefined with arg !1-12', () => {
      const month = getMonth(13)
      isUndefined(month)
    })
    it('should return month +12 if monthArg is 1 or 2', () => {
      const month = 1
      const expected = month + 12
      const modifiedMonth = getMonth(month)
      deepEqual(modifiedMonth, expected)
    })    

//       it.skip('Each indexed month has a corresponding name', () => {
//       oneOf((getMonth), ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Janruary", "February"])
//     })

//     it('Month starts on a day', () => {
//       oneOf((??????), ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
//     })
// //     it('Has a certain range of weeks', () => {
// //       oneOf((??????), [4, 5, 6])
// //     })

// //     it('Has a certain range of days', () => {
// //       oneOf((??????), [28, 29, 30, 31])
// //     })
// //     it('a year should have 12 months', () => {
// //       oneOf((??????), [28, 29, 30, 31])
// //     })
// // })
 



// // 2 2014
// // starts on saturday
// // 28 days
// // 5 weeks
//     it('should start on a Saturday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 28 days', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 5 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })


// // 2 2015
// // starts on sunday
// // 28 days
// // 4 weeks
//     it('should start on a Sunday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 28 days', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 4 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })


// // 2 2016
// // starts on monday
// // 29 days
// // 5 weeks
//     it('should start on a Monday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 29 days', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 5 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })


// // 6 2016
// // Starts on wednesday
// // 30 days
// // 5 weeks
//     it('should start on a Wednesday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 30 days', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 5 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })


// // 9 2016
// // Starts on thursday
// // 30 days
// // 5 weeks
//     it('should start on a Thursday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 30 days', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 5 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })


// // 1 2016
// // starts on friday
// // 31 days
// // 6 weeks
//     it('should start on a Friday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 31 days', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 6 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })



// 11 2014
// starts on saturday
// 30 days
// 6 weeks
    // it('should start on a Saturday', () => {
    //   const
    //   const
    //   deepEqual(,)
    // })
    // it('should have 30 days', () => {
    //   const
    //   const
    //   deepEqual(,)
    // })
    // it('should be 6 weeks long', () => {
    //   const
    //   const
    //   deepEqual(,)
    // })




// // 2 2000
// // starts on tuesday
// // 29 days (leap century)
// // 5 weeks
//     it('should start on a Tuesday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 29 days', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should handle leap centuries', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 5 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })

// // 2 1900
// // starts on thursday
// // 28 days (non-leap century)
// // 5 weeks
//     it('should start on a Thursday', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should have 28 days', () => {
//       const
//       const
//       deepEqual(,)
//     it('should handle non-leap centuries', () => {
//       const
//       const
//       deepEqual(,)
//     })
//     it('should be 5 weeks long', () => {
//       const
//       const
//       deepEqual(,)
//     })



// node-cal 1752 // cal: year 1752 not in range 1753..9999
    it.skip('should be above 1752 (only return for a specified range of years)', () => {
      const arg = getYear(1753)
      isAbove(arg, 1752)
    })
    it('should be below 10000 years (only return for a specified range of years)', () => {
      const arg = getYear(5, 2015)
      isBelow(arg, 10000)
    })
    it('should return an integer', () => {
      const month = getMonth(5)
      isNumber(month, 'damn straight thats a number')
    })

// node-cal 10000 // cal: year 10000 not in range 1753..9999
// node-cal 13 2015 // cal: month 13 not in range 1..12

})
