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


class MyDocument {
    public title: string;
    public content: string;
    public author: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    clone(): MyDocument {
        return new MyDocument(this.title, this.content, this.author);
    }

    displayInfo() {
        console.log(`
            Title: ${this.title}
            Content: ${this.content}
            Author: ${this.author}
        `);
    }
}

function main() {
    const document1 = new MyDocument('Quote', '500 dollars', 'Santiago');

    console.log({ document1 });
    document1.displayInfo();

    const document2 = document1.clone();
    document2.title = 'New Quote'
    console.log({ document2 });
    document1.displayInfo();
}

main();