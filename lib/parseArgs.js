'use strict'

const parseArgs = (args) => {
	let month, year

	switch(args.length) {
		case 1: 
			month = ''
			year = args[0]
			break
		case 2:
			month = args[0]
			year = args[1]
			break
		default: 
		// new Date().getMonth() > index starts at 0
			month = new Date().getMonth()
			year = new Date().getFullYear()
			break
	}

	console.log(month, year)
	return {month, year}
}

module.exports = { parseArgs }
