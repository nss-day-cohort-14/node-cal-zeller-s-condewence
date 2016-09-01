'use strict'

const { getDayOfWeek, getMonth, getYear, parseArgs } = require('../lib/zeller')

const { month, year } = require('../lib/parseArgs')(args)

const { argv: [,, ...args] } = process

console.log("Indexed day of week:", getDayOfWeek(30, 8, 2016))

