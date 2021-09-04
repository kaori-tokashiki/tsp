import axios from 'axios';

axios.get('http://google.com');
let hello: string = 'hello';
// console.log(hello);

function add(a: number, b: number): number{
    return a + b;
}

let hasValue: boolean = true;
let count: number = 11;
let float: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

let helo: string;
hello = 'hello';


// Union
const fruits: (string | number)[] = ['Apple', 'Banana', 'Grapes', 1]


// Tuple: 配列よりも厳しく制限がかかったもの
const book: [string, number, boolean] = ['business', 1500, false];

// Enum: 列挙型
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
}

const coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
}

coffee.size = CoffeeSize.TALL;
// console.log(CoffeeSize.SHORT)


const person = {
    name: {
        fitst: 'Jack',
        last: 'Smith'
    },
    age: 21,
}
// console.log(person.name);




let unionType: number | string = 10;
unionType.toString();
unionType = 'hello'

let unionTypes: (number | string)[] = ['hoge', 555]

// リテラル型 apple しか入れられない
// 完全に決まった値しか受けられない
const apple: 'apple' = 'apple';
const isChecked: true = true;


let clotheSize: 'small' | 'medium' | 'large' = 'small';
type ClothSize = 'small' | 'medium' | 'large'

const cloth: {
    color: string;
    size: ClothSize;
} = {
    color: 'white',
    size: 'medium'
}

function add1(num1: number, num2: number): number{
    return num1 + num2
}

add1(3, 5)

function sayHello(): void{
    console.log('Hello');
    return;
}

// console.log(sayHello());

// let tmp: undefined = null;
// let tmpNull: null = undefined;

// const anotherAdd:(n1: number, n2:number) => number = add1;

const anotherAdd:(n1: number, n2:number) => number = function add1(num1, num2){
    return num1 + num2
}

const doubleNumber = (num: number): number => num * 2;
// const doubleNumber2 = num => num * 2;

function doubleSndHandle(num: number, cb: (num: number) => number): void{
    const doubleNum = cb(num * 2)
    // console.log(doubleNum);   
}

doubleSndHandle(21, doubleNum => {
    return doubleNum;
});


// unknown型 なんでも入れられるけど、使う時は型を保証してね。
let unknownInput: unknown;
let anyInput: any;
let text: string
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;

if(typeof unknownInput === 'string'){
   text = unknownInput
}

// never型:　何も返さない
function error(message: string):never {
    throw new Error(message);
}

console.log(error('This is an error'));
