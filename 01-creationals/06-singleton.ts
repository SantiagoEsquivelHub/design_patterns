/**
 * ! Singleton:
 * It's a creational design pattern that ensures a class
 * has only one instance and provides a global access point to it.
 *
 * * It's useful when you need to control access to a single instance
 * * of a class, for example, in a database object or a
 * * configuration object.
 *
 * https://refactoring.guru/design-patterns/singleton
 */

class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
        }

        return DragonBalls.instance;
    }

    collectBall(): void {
        if (this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log(`Collected ball. Total: ${this.ballsCollected}`);
            return;
        }

        console.log('The 7 dragon ball have already been collected');
    }

    summonShenLong(): void {
        if (this.ballsCollected === 7) {

            console.log('Shenlong has been invocated, make your wish');
            this.ballsCollected = 0;
            return;
        }

        console.log(`Still missing ${7 - this.ballsCollected} to invocate Shenlong`);
    }
}

function main() {
    const gokuDragonBalls = DragonBalls.getInstance();

    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();

    gokuDragonBalls.summonShenLong();

    const vegetaDragonBalls = DragonBalls.getInstance();

    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();

    gokuDragonBalls.summonShenLong();
    vegetaDragonBalls.summonShenLong();

}

main();