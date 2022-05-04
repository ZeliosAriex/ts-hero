class Department {
  constructor(public name: string) {
    this.name = name
  }

  describe() {
    console.log(`Department: ${this.name}`)
  }
}

const itDepartment = new Department('Desarrollo')

itDepartment.describe() // Department: Desarrollo

const departmentCopy = { describe: itDepartment.describe }

departmentCopy.describe() // Department: undefined

export {}
