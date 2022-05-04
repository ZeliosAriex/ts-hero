interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Eliminar usuarios inactivos',
}

// No se puede cambiar
// @ts-ignore
todo.title = 'Regar las plantas'
export {}
