interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate } as Todo
}

const todo1 = {
  title: 'organizar escritorio',
  description: 'limpiar las migas de pan',
}

const todo2 = updateTodo(todo1, {
  description: 'tirar la basura',
})

// { title: 'organizar escritorio', description: 'tirar la basura' }
console.log(todo2)

export {}
