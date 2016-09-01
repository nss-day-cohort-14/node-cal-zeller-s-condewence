'use strict'

const { getMonth, getYear} = require('../lib/month')

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
}

module.exports.getMonth = (month) =>{
  month < 3 ? month += 12 : month
}









// RESULT is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)

// dayOfMonth is the day of the month

// month is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)

// year is the 4 digit year
