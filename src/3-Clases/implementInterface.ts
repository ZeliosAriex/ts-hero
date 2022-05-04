interface Named {
  readonly name: string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person implements Greetable {
  readonly name: string

  constructor(name: string) {
    this.name = name
  }

  greet(phrase = 'Hola'): void {
    console.log(`${phrase} ${this.name}`)
  }
}

const p1 = new Person('Juan')
const p2 = new Person('Carmen')

// Es solo lectura, la siguiente línea fallaría
// p1.name = 'Juanjo'

p1.greet() // Hola Juan
p2.greet('Que onda') // Que onda Carmen

export {}
