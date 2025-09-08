/**
 * ! Factory Method:
 * The Factory Method pattern allows creating objects without specifying
 * the exact class of the object that will be created.
 *
 * Instead of that, we delegate object creation to subclasses or methods
 * that encapsulate this logic.
 *
 * * It's useful when a class cannot anticipate the class
 * * of objects it must create.
 *
 * https://refactoring.guru/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare(): void;
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

class BeanHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing a %cbean hamburger', COLORS.green);
    }
}

abstract class Restaurant {
    protected abstract createHamburger(): Hamburger;

    orderHamburguer(): void {
        const hamburguer = this.createHamburger();
        hamburguer.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

class BeanRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeanHamburger();
    }
}

function main() {
    let restaurant: Restaurant;
    const burgerType = prompt('What hamburger do you want? (chicken/beef/bean)');

    switch (burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;

        case 'beef':
            restaurant = new BeefRestaurant();
            break;

        case 'bean':
            restaurant = new BeanRestaurant();
            break;

        default:
            throw new Error('Not valid option')
    }

    restaurant.orderHamburguer();

}

main();