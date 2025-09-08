/**
 * ! Immutability with copy
 * Although immutability is a good practice, it's not always possible.
 * In these cases, you can make a copy of the object and modify the copy.
 *
 *  * It's useful for maintaining a history of states in interactive applications.
 *
 */

/**
 1.	Complete the copyWith method in the Player class to allow 
 creating a copy with changes in name, score or level.
 
 2.	Use the client code to test the functionality of copyWith, 
 making changes to the player's score, level and name.
 */

import { COLORS } from '../helpers/colors.ts';

// 1. Immutable Player class
class Player {
  readonly name: string;
  readonly score: number;
  readonly level: number;

  constructor(name: string, score: number, level: number) {
    throw new Error('Method not implemented.');
  }

  // copyWith method to create a modified copy of the player
  copyWith({ name, score, level }: Partial<Player>): Player {
    throw new Error('Method not implemented.');
  }

  displayState(): void {
    console.log(`\n%cPlayer: ${this.name}`, COLORS.green);
    console.log(`%cScore: ${this.score}`, COLORS.yellow);
    console.log(`%cLevel: ${this.level}`, COLORS.blue);
  }
}

// 2. Client code for testing
function main() {
  // Create initial player
  let player = new Player('Carlos', 0, 1);
  console.log('Initial state:');
  player.displayState();

  // Increment the score
  player = player.copyWith({ score: 10 });
  console.log('\nAfter incrementing the score:');
  player.displayState();

  // Level up
  player = player.copyWith({ level: 2 });
  console.log('\nAfter leveling up:');
  player.displayState();

  // Change player name
  player = player.copyWith({ name: 'Carlos Pro' });
  console.log('\nAfter changing the name:');
  player.displayState();
}

main();
