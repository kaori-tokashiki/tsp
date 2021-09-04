class Person {
    name: string;

    constructor(initName: string){
        this.name = initName;
    }

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}`);
    }
}

let person2: Person;

const quill = new Person('Quill');
quill.greeting();
console.log(quill);

const anotherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.greeting
}

// anotherQuill.anotherGreeting();