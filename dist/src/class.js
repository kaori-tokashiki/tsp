"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
let person2;
const quill = new Person('Quill');
quill.greeting();
console.log(quill);
const anotherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.greeting
};
// anotherQuill.anotherGreeting();
