function printName(nameObj: { first: string; last?: string }) {
  const nameToPrint = nameObj.last
    ? `${nameObj.first} ${nameObj.last}`
    : nameObj.first

  console.log(nameToPrint)
}

printName({ first: 'Alex' }) // Alex
printName({ first: 'Alex', last: 'García' }) // Alex García

export {}
