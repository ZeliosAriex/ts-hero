class DataStorage<T> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    const indexOfRemoving = this.data.indexOf(item)
    if (indexOfRemoving !== -1) this.data.splice(indexOfRemoving, 1)
  }

  getItems() {
    return [...this.data]
  }
}

type VegetableName = 'onion' | 'carrot' | 'mushroom'

const vegetableStorage = new DataStorage<VegetableName>()

vegetableStorage.addItem('onion')
vegetableStorage.addItem('carrot')
vegetableStorage.addItem('onion')
vegetableStorage.removeItem('onion')
vegetableStorage.addItem('mushroom')

// [ 'carrot', 'onion', 'mushroom' ]
console.log(vegetableStorage.getItems())

export {}
