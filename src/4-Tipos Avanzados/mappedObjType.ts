type fieldName = 'email' | 'company' | 'name'

type ErrorContainer = {
  [prop in fieldName]?: string
}

const formErrors: ErrorContainer = {
  name: 'El nombre debe tener mínimo 2 caracteres',
  email: 'No es un email válido',
}

export {}
