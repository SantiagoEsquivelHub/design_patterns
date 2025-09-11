/**
 * ! Abstract Factory:
 * It's a design pattern that allows creating families of related objects
 * without specifying their concrete classes.
 *
 * Instead of creating individual objects directly,
 * we create factories that produce a set of related objects.
 *
 * * It's useful when you need to create objects that are part of a family
 * * and you want to ensure that these objects complement each other.
 *
 * https://refactoring.guru/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 * !Instructions:
    1. Complete the Product Classes:
    •	ElectricCar should implement Vehicle and show the message "Assembling an electric car".
    •	GasCar should implement Vehicle and show the message "Assembling a gas car".
    •	ElectricEngine should implement Engine and show the message "Starting electric engine".
    •	GasEngine should implement Engine and show the message "Starting gas engine".

  2.	Complete the Factory Classes:
    •	ElectricVehicleFactory should create an ElectricCar and an ElectricEngine.
    •	GasVehicleFactory should create a GasCar and a GasEngine.

  3. Test the Code:
    •	Run the code to ensure each factory produces the correct type of vehicle and engine.

 */
// 1. Vehicle and Engine interfaces
interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

// 2. Concrete Product Classes

class ElectricCar implements Vehicle {
  // Implementation of the assemble method
  // 'Assembling an electric car'
  assemble(): void {
    console.log('Assembling an %celectric car', COLORS.violet);
  }
}

class GasCar implements Vehicle {
  // Implementation of the assemble method
  // 'Assembling a gas car'
  assemble(): void {
    console.log('Assembling an %cgas car', COLORS.cyan);
  }
}

class ElectricEngine implements Engine {
  // Implementation of the start method
  // 'Starting electric engine'
  start(): void {
    console.log('Starting an %celectric engine', COLORS.violet);
  }
}

class GasEngine implements Engine {
  // Implementation of the start method
  // 'Starting gas engine'
  start(): void {
    console.log('Starting an %cgas engine', COLORS.cyan);
  }
}

// 3. Abstract Factory Interface

interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// 4. Concrete Factory Classes

class ElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new ElectricCar();
  }
  createEngine(): Engine {
    return new ElectricEngine();
  }
  // Implementation of createVehicle and createEngine methods
}

class GasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new GasCar();
  }
  createEngine(): Engine {
    return new GasEngine();
  }
  // Implementation of createVehicle and createEngine methods
}

// 5. Client Code

function main(factory: VehicleFactory) {
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

// Tests
console.log('Creating electric vehicle:');
main(new ElectricVehicleFactory());

console.log('\nCreating gas vehicle:');
main(new GasVehicleFactory());
