interface Admin {
  name: string
  privileges: string[]
}

interface Employee {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee
type UnknownEmployee = Admin | Employee

const printEmployeeInfo = (employee: UnknownEmployee) => {
  console.log(`Name: ${employee.name}`)

  if ('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges}`)
  }

  if ('startDate' in employee) {
    console.log(`Start date: ${employee.startDate}`)
  }
}

const e1: ElevatedEmployee = {
  name: 'David',
  privileges: ['create-server'],
  startDate: new Date(),
}

/* Name: David
   Privileges: create-server
   Start date: Wed May 02 2022 12:38:00 GMT+0200 (Central European Summer Time) */
printEmployeeInfo(e1)

export {}
