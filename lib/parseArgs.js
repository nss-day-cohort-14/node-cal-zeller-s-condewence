'use strict'

const parseArgs = (args) => {
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
		// new Date().getMonth() > index starts at 0
			month = new Date().getMonth() + 1
			year = new Date().getFullYear()
	}

	console.log(month, year)
	return {month, year}
}

module.exports = { parseArgs }
