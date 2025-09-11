import { COLORS } from "../helpers/colors.ts";

/**
 * ! Factory Function
 * It's a design pattern that allows us to create objects or functions dynamically that will be
 * used later in the code.
 *
 * * It's useful when we need to create objects or functions dynamically,
 * * that is, at runtime and not at compile time.
 *
 */
type Languague = 'es' | 'en' | 'fr';

function createGreeter(lang: Languague) {
    return function (name: string) {
        const messages = {
            es: `Hola, %c${name}!`,
            en: `Hello, %c${name}!`,
            fr: `Bonjour, %c${name}!`,
        }

        return console.log(messages[lang], COLORS.red);
    }
}

function main() {
    const spanishGreeter = createGreeter('es');
    const englishGreeter = createGreeter('en');
    const frenchGreeter = createGreeter('fr');

    spanishGreeter('Santiago');
    englishGreeter('Santiago');
    frenchGreeter('Santiago');
}

main();