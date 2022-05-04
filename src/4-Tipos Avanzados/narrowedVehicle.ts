class Car {
  drive() {
    console.log('Conduciendo...')
  }
}

class Truck {
  drive() {
    console.log('Conduciendo un camión...')
  }

  loadCargo(amount: number) {
    console.log(`Cargando mercancía... ${amount} Kg`)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive()

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

// Conduciendo...
useVehicle(v1)

// Conduciendo...
// Cargando mercancía... 1000 Kg
useVehicle(v2)

export {}
