interface Bird {
  type: 'bird' // literal type
  flyingSpeed: number
}

interface Horse {
  type: 'horse' // literal type
  runningSpeed: number
}

type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
  let speed
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
    default:
      throw new Error('Cannot move instance that is not an animal')
  }
  console.log(`Moviéndose a ${speed} m/s (${animal.type})`)
}

// Moviéndose a 55.15 m/s (bird)
moveAnimal({ type: 'bird', flyingSpeed: 55.15 })
// Moviéndose a 23.61 m/s (horse)
moveAnimal({ type: 'horse', runningSpeed: 23.61 })

export {}
