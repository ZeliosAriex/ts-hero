interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const yoguiBear: Bear = {
  name: 'Yogui',
  honey: true,
}

export {}
