'use strict'

const { getDayOfWeek, getMonth, getYear } = require('../lib/zeller')

const { argv: [,, ...args] } = process

const { parseArgs } = require('../lib/parseArgs')

// console.log("Indexed day of week:", getDayOfWeek(30, 8, 2016))
