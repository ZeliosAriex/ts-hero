// El tipo inferido es string
let ticketStatus = 'open'
ticketStatus = 'closed'

// El tipo inferido es la cadena literal 'closed'
const urgentTicketStatus = 'closed'

// Definimos una unión literal de cadena
let anotherTicketStatus: 'open' | 'closed' = 'open'

// Ahora podemos asignar un valor sin posibilidad de error
anotherTicketStatus = 'closed'

export {}
