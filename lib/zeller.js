'use strict'

// const { getMonth, getYear} = require('../lib/month')

// module.exports.parseArgs = (args) => {
// 	let month, year

// 	switch(args.length) {
// 		case 1: 
// 			year = args[0]
// 			break
// 		case 2:
// 			month = args[0]
// 			year = args[1]
// 			break
// 		default: 
// 			month = new Date().getMonth()
// 			year = new Date().getFullYear()
// 	}
// 	return {month, year}
// }

module.exports.getDayOfWeek = (dayOfMonth, month, year) => {
	let exp1 = dayOfMonth
	let exp2 = Math.floor((13 * (month+1)) / 5)
	let exp3 = year + (Math.floor(year/4)) - Math.floor(year / 100)
	let exp4 =  Math.floor(year / 400)
	let result = (exp1 + exp2 + exp3 + exp4) % 7
	return result
}

module.exports.getYear = (month, year) =>{
  month < 3 ? year -= 1 : year 
  return year 
}

module.exports.getMonth = (month) =>{
 
  if (month < 3 && month > 0) {
  	return month + 12
  }
  else if (month > 3 && month < 12) {
  	return month  	
  }
  else {
  	console.log('Please enter a number 1-12')
  } 
}









// RESULT is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)

// dayOfMonth is the day of the month

// month is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)

// year is the 4 digit year
