/*
BAD >:|
const userInput = '' // Problem here...

const storedData = userInput || 'DEFAULT'

console.log(storedData) // DEFAULT
 */

const userInput = ''
const storedData = userInput ?? 'DEFAULT'

console.log(storedData) //

export {}
