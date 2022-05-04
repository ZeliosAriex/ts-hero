const frutas: Array<string> = ['Manzana', 'Kiwi']
frutas[0].toLowerCase()

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Done!')
  }, 2000)
})

promise.then((data) => {
  console.log(data.toLowerCase()) // done!
})

export {}
