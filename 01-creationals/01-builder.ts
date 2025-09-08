import { COLORS } from '../helpers/colors.ts';
/**
 * ! Builder Pattern:
 * It's a creational design pattern that allows us to build complex objects
 * step by step.
 *
 * The pattern allows us to produce different types and representations
 * of an object using the same construction code.
 *
 * * It's useful when we need to build a complex object with many parts
 * * and we want the construction process to be independent of the parts
 * * that compose it.
 *
 * https://refactoring.guru/design-patterns/builder
 */

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration() {
        console.log(`Computer Configuration
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Storage: ${this.storage}
            GPU: ${this.gpu ?? 'It does not have GPU'}
        `)
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build() {
        return this.computer;
    }
}


function main() {
    const basicComputer = new ComputerBuilder()
        .setCPU('Intel Core 2 Duo')
        .setRAM('4GB')
        .setStorage('256GB')
        .build()

    console.log('%cBasic Computer: ', COLORS.blue);
    basicComputer.displayConfiguration();

    const gamingComputer = new ComputerBuilder()
        .setCPU('Intel i9')
        .setRAM('32GB')
        .setStorage('1TB M2')
        .setGPU('Nvidia RTX 5090')
        .build()

    console.log('%cGaming Computer: ', COLORS.cyan);
    gamingComputer.displayConfiguration();
}

main();