function extractAndConvert<T extends object, K extends keyof T>(
  obj: T,
  key: K,
) {
  return `Valor: ${obj[key]}`
}

// Valor: Pablo
console.log(extractAndConvert({ name: 'Pablo' }, 'name'))
