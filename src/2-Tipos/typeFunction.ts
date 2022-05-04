type AddFnType = (n1: number, n2: number) => number

interface AddFnInterface {
  (n1: number, n2: number): number
}

const add: AddFnType = (n1, n2) => n1 + n2

add(2, 2) // 4

export {}
