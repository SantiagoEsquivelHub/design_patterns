/**
 * ! Prototype Pattern:

 * It's a creational design pattern that allows us to copy existing objects without making
 * the code depend on their classes.
 * 
 * * It's useful when we want to duplicate the content, 
 * * the title and author of a document, for example, or any complex object.
 * 
 * https://refactoring.guru/design-patterns/prototype
 */

class Pokemon {
  name: string;
  type: string;
  level: number;
  attacks: string[];

  constructor(name: string, type: string, level: number, attacks: string[]) {
    throw new Error('Method not implemented.');
  }

  // Method to clone the Pokémon
  clone(): Pokemon {
    // The attacks should avoid being passed by reference, i.e., they should not be the same array.
    // Complete: Should return a new Pokémon with the same attributes
  }

  displayInfo(): void {
    console.log(
      `Name: ${this.name}\nType: ${this.type}\nLevel: ${
        this.level
      }\nAttacks: ${this.attacks.join(', ')}`
    );
  }
}

// Task:
// 1. Create a base Pokémon.
// 2. Clone the base Pokémon and modify some attributes in the clones.
// 3. Call displayInfo on each Pokémon to show their details.

// Example:
// const basePokemon = new Pokemon("Charmander", "Fire", 1, ["Ember", "Scratch"]);
// const clone1 = basePokemon.clone();
// clone1.name = "Charmeleon";
// clone1.level = 16;
// clone1.attacks.push("Flamethrower");

// basePokemon.displayInfo(); // Here "Flamethrower" should not appear
// clone1.displayInfo();
