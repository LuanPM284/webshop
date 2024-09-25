// a variable receives the required file
// const generateRandomNumber = require('./utils') // we give the placement

// const { generateRandomNumber, celciusToF } = require('./utils')

// console.log(`Random Number: ${generateRandomNumber()}`) // output: Random Number: 85

// console.log(`Celcius to fahrenhiet : ${celciusToF(0)}`)
// Celcius to fahrenhiet : 0

// we use import, and the module we want, with the correct path including the .js
// import { getPosts } from './postController.js'

console.log(getPosts())

// for the default type export we use without {}
import getPosts, { getPostsLength } from './postController.js'

console.log(`Post Length: ${getPostsLength()}`)
