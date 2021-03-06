'use strict'

module.exports.getDayOfWeek = (dayOfMonth, month, year) => {
// dayOfMonth is the day of the month
  let exp1 = dayOfMonth

// month is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)
  let exp2 = Math.floor((13 * (month+1)) / 5)

// year is the 4 digit year
  let exp3 = year + (Math.floor(year/4)) - Math.floor(year / 100)
  let exp4 =  Math.floor(year / 400)
  let result = (exp1 + exp2 + exp3 + exp4) % 7

// RESULT is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
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




