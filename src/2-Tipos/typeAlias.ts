// Creamos un type alias
type Combinable = number | string

// Reducimos el boilerplate
function combine(input1: Combinable, input2: Combinable): Combinable {
  let result

  // Type guard, narrowing
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
}

const combinedAges = combine(30, 26)
console.log(combinedAges) // 56

const combinedNames = combine('Marta', 'Alex')
console.log(combinedNames) // MartaAlex

export {}
