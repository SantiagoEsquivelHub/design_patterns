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
 *  The purpose of the Abstract Factory is to create families of related objects
 *  (in this case, hamburgers and drinks) without specifying the concrete classes
 *  of each of those objects in the main code.
 */


interface Hamburger {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

interface RestaurantFactory {
    createHamburger(): Hamburger;
    createDrink(): Drink;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing a %cchicken hamburger', COLORS.yellow);
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing a %cbeef hamburger', COLORS.brown);
    }
}

class Water implements Drink {
    pour(): void {
        console.log('Pouring a glass of %cwater', COLORS.blue);
    }
}

class Soda implements Drink {
    pour(): void {
        console.log('Pouring a glass of %csoda', COLORS.pink);
    }
}

class FastFoodRestaurantFactory implements RestaurantFactory {
    createHamburger(): Hamburger {
        return new BeefHamburger();
    }
    createDrink(): Drink {
        return new Soda();
    }
}

class HealthyRestaurantFactory implements RestaurantFactory {
    createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
    createDrink(): Drink {
        return new Water();
    }
}

function main(factory: RestaurantFactory) {
    const hamburger = factory.createHamburger();
    const drink = factory.createDrink();

    hamburger.prepare();
    drink.pour();
}

console.log('\n\n%c Order from Regular Menu', COLORS.green)
main(new FastFoodRestaurantFactory());

console.log('\n\n%c Order from Healthy Menu', COLORS.purple)
main(new HealthyRestaurantFactory());