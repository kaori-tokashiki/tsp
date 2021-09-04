"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get('http://google.com');
let hello = 'hello';
// console.log(hello);
function add(a, b) {
    return a + b;
}
let hasValue = true;
let count = 11;
let float = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let helo;
hello = 'hello';
// Union
const fruits = ['Apple', 'Banana', 'Grapes', 1];
// Tuple: 配列よりも厳しく制限がかかったもの
const book = ['business', 1500, false];
// Enum: 列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
};
coffee.size = CoffeeSize.TALL;
// console.log(CoffeeSize.SHORT)
const person = {
    name: {
        fitst: 'Jack',
        last: 'Smith'
    },
    age: 21,
};
// console.log(person.name);
let unionType = 10;
unionType.toString();
unionType = 'hello';
let unionTypes = ['hoge', 555];
// リテラル型 apple しか入れられない
// 完全に決まった値しか受けられない
const apple = 'apple';
const isChecked = true;
let clotheSize = 'small';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add1(num1, num2) {
    return num1 + num2;
}
add1(3, 5);
function sayHello() {
    console.log('Hello');
    return;
}
// console.log(sayHello());
// let tmp: undefined = null;
// let tmpNull: null = undefined;
// const anotherAdd:(n1: number, n2:number) => number = add1;
const anotherAdd = function add1(num1, num2) {
    return num1 + num2;
};
const doubleNumber = (num) => num * 2;
// const doubleNumber2 = num => num * 2;
function doubleSndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    // console.log(doubleNum);   
}
doubleSndHandle(21, doubleNum => {
    return doubleNum;
});
// unknown型 なんでも入れられるけど、使う時は型を保証してね。
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never型:　何も返さない
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
