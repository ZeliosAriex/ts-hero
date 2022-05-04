type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const yoguiBear: Bear = {
  name: 'Yogui',
  honey: true,
}

export {}
