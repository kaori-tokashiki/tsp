"use strict";
// type addFunc = (num1: number, num2: number) => number;
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'hgoe'
};
class Developer {
    constructor(name, age, exparence, initName) {
        this.name = name;
        this.age = age;
        this.exparence = exparence;
        if (initName) {
            this.name = initName;
        }
    }
    greeting(message) {
        console.log('Hello!');
    }
}
const human = {
    name: 'Quill',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
const user = new Developer('hoge', 33, 3);
