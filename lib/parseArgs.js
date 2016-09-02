'use strict'

module.exports.parseArgs = (args) => {
	let month, year

	switch(args.length) {
		case 1: 
			year = args[0]
			break
		case 2:
			month = args[0]
			year = args[1]
			break
		default: 
			month = new Date().getMonth()
			year = new Date().getFullYear()
			break
	}
	return {month, year}
}
