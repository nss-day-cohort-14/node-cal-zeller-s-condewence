# node-cal-zeller-s-condewence
## Command Line Applications / Group Project 01 / Calendar

Team Members - [Jamey McAuliffe](https://github.com/JameyMcAuliffe) & [Eric Denton](https://github.com/iamericanartist)  

![Calendar](calendarScrn.jpg?raw=true "Calendar Screenshot")
***

## Requirements
Recreate the functionality of the Calendar application in Node. 
We can use the following methods to help set up our calendar/test against:
```
> Date.now()
1472571469500
> new Date()
2016-08-30T15:37:55.002Z
> Date()
'Tue Aug 30 2016 10:37:58 GMT-0500 (CDT)'
> (new Date()).getMonth()
7
> (new Date()).getYear()
116
> (new Date()).getFullYear()
2016
> 
```

We will be using [Zeller's Congruence](https://en.wikipedia.org/wiki/Zeller%27s_congruence) to calculate the day of the week (ie. 0:Saturday, 1:Sunday, 2:Monday) in the [zeller.js](https://github.com/nss-day-cohort-14/node-cal-zeller-s-condewence/blob/master/lib/zeller.js) file. ***Math!*** :sunglasses:

## Testing
Using Mocha, Chai, and Istanbul to run tests, we will be breaking down each piece of our
code and use testing to help us program.  

#### Getting Started
npm init --yes
npm install mocha --save-dev   
npm install chai --save-dev
npm install istanbul --save-dev

#### Running Tests
Edit our package.json "scripts" to easier call our testing:  
```
"scripts": {
    "test": "mocha",
    "coverage": "istanbul cover _mocha"
  },
```  

npm run test
npm run coverage
