'use strict'

const { getDayOfWeek, getMonth } = require('../lib/zeller')
const { argv: [,, ...args] } = process

console.log("Indexed day of week:", getDayOfWeek(30, 8, 2016))

console.log('getMonth:', getMonth('st'))
