'use strict'

const { zellerFunc } = require('../lib/zeller')
const { argv: [,, ...args] } = process

console.log(zellerFunc(30, 8, 20, 16))
