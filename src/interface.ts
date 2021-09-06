
// type addFunc = (num1: number, num2: number) => number;

interface addFunc {
    (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

// interface Namable {
//   name: string;
// }

type Namable = {
    name: string;
    nickName?: string;
}

const nameable: Namable = {
    name: 'hgoe'
}



interface Human extends Namable {
    name: string;
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    constructor(public name: string, public age: number, public exparence: number, initName?: string){
        if(initName){
            this.name = initName;
        }
    }
    greeting(message: string){
        console.log('Hello!');
    }
}

const human: Human = {
    name: 'Quill',
    age: 38,
    greeting(message: string) {
        console.log(message);
    }
}

const user: Human = new Developer('hoge', 33, 3)