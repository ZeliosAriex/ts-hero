type User = { name: string }

const jsonParse = (jsonString: string): unknown => JSON.parse(jsonString)

const user = jsonParse(`{ "name": "Antonio" }`) as User

console.log(user.name)

export {}
