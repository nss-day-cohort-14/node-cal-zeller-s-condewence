'use strict'

const { argv: [,, ...args] } = process

const { getDayOfWeek, getMonth, getYear } = require('../lib/zeller')

const { parseArgs } = require('../lib/parseArgs')

const { getMonthName } = require('../lib/month')

let argObj = parseArgs(args)
let monthIndex = argObj.month
getMonthName(monthIndex)


// console.log("Indexed day of week:", getDayOfWeek(30, 8, 2016))
