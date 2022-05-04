/*
BAD >:|
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB)
}

const merged = merge({ name: 'Max' }, { age: 30 })

// Problem...
// @ts-ignore
console.log(merged.age)
*/

function merge<A, B>(objA: A, objB: B) {
  return Object.assign(objA, objB)
}

const merged = merge({ name: 'Max' }, { age: 30 })

// Ahora si podemos acceder a los campos
console.log(merged.age)
