class Vehicle {
    constructor(vehicletype, vehiclemodel, vehicleparts, vehiclefuel) {
        this.type = vehicletype
        this.model = vehiclemodel
        this.fuel = vehiclefuel

        vehicleparts.quality = vehicleparts.engine * vehicleparts.power
        this.parts=vehicleparts
    }

    drive(fuelLoss){
        this.fuel-=fuelLoss
    }
}
let parts = { engine: 6, power: 100 };

let vehicle = new Vehicle('a', 'b', parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

console.log(vehicle.parts.quality);