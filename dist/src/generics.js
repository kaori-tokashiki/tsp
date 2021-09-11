"use strict";
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'Quill', age: 38 }, 'age'));
// type K = keyof { name: string; age: number}
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
console.log(stringLightDatabase);
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables1 = ['Tomato', 'Broccoli', 'Asparagus'];
const vegetables2 = ['Tomato', 'Broccoli', 'Asparagus'];
let tmp;
let tmp4;
