'use strict'

const { getDayOfWeek } = require('../lib/zeller')
const { argv: [,, ...args] } = process

console.log("Indexed day of week:", getDayOfWeek(30, 8, 2016))
