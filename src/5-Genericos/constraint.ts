interface Lengthy {
  length: number
}

function countAndPrint<T extends Lengthy>(
  element?: T,
): [T | undefined, string] {
  let descriptionText = 'No hay valor >:|'
  const length = element ? element.length : 0

  if (length > 0) {
    descriptionText = `Hay ${length} ${length === 1 ? 'elemento' : 'elementos'}`
  }

  return [element, descriptionText]
}

// [ [ 'A', 'B' ], 'Hay 2 elementos' ]
console.log(countAndPrint(['A', 'B']))
// [ [ 'María' ], 'Hay 1 elemento' ]
console.log(countAndPrint(['María']))
// [ undefined, 'No hay valor >:|' ]
console.log(countAndPrint())

export {}
