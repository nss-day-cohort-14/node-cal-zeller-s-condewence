'use strict'





module.exports.zellerFunc = (q, m, J, K ) => {
	let exp1 = q
	let exp2 = Math.floor((13 * (m+1)) / 5)
	let exp3 = K
	let exp4 = Math.floor(K / 4) + Math.floor(J / 4) - (2 * J)
	let result = (exp1 + exp2 + exp3 + exp4) % 7
	return result
}



// h is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)

// q is the day of the month

// m is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)

// K the year of the century 

// J is the zero-based century  For example, the zero-based centuries for 1995 and 2000 are 19 and 20 respectively (to not be confused with the common ordinal century enumeration which indicates 20th for both cases).
