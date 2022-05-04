function sometimesThrow(): string | never {
  if (Math.random() > 0.5) {
    return 'OK'
  }

  throw new Error('Algo ha cascado...')
}

const result = sometimesThrow()

console.log(result) // OK

export {}
