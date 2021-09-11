interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

// type EnginnerBlogger = Engineer & Blogger;

interface EnginnerBlogger extends Engineer, Blogger {}

const quill: EnginnerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

// type tmp = string & number;
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number){
    if(typeof x === 'string'){
        x.toUpperCase()
    }
    return x;
}

interface TmpFunc {
    (x: string): number;
    (x: number): number;
}

const upperHello: TmpFunc = function(x: string | number){return 0};
// interface FuncA {
//     (a: number, b: string): number;
//     (a: string, b: number): number;
// }
// interface FuncB {
//     (a: string): number;
// }

// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function (a: number | string, b?: number | string) {return 0}

interface FuncA {
    (a: number): number;
}
interface FuncB {
    (a: string): string;
}

let unionFunc: FuncA | FuncB;
unionFunc = function (a: number){ return 34}



type NomadWorker = Engineer | Blogger;

function describeNomadWorkerProfile(nomadWorker: NomadWorker){
    if('role' in nomadWorker){
        console.log(nomadWorker.name);
    }
    if('follower' in nomadWorker){
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: 'dog' = 'dog'
    speak() {
        console.log('bow-wow');
    }
}

class Bird {
    kind: 'bird' = 'bird'
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet){
    pet.speak();
    switch (pet.kind){
        case 'bird':
        pet.fly();
    }
}

// if(pet instanceof Bird){
//     pet.fly();
// }
havePet(new Bird())

const input = document.getElementById('input') as HTMLInputElement
input.value = 'initial input value';

(<HTMLInputElement>document.getElementById('input')).value = 'initial input value';


interface Designer {
    name: string;
    [index: string]: string
}

const desiger: Designer = {
    name: 'Quill',
    fafa: 'fa',
    hoge: 'fuuu',
}


interface DownloadedData {
    id: number;
    user: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downloadedData: DownloadedData = {
    id: 1,
    user : {}
}

console.log(downloadedData.user?.name?.first)

const userData = downloadedData.user ?? 'no-user'


type id = DownloadedData["user"]["name"]

enum Color {
    RED,
    BLUE
}

let target = Color.RED
let source = 0
target = source


function advancedFn(...args: readonly[number, string, boolean, ...number[]]){
    args[0]
}
advancedFn(0,'hi', true, 3, 3, 3)

let milk = 'milk' as const
// const milk = 'milk'
let drink = milk;
const array = [10, 20] as const;

const peter = {
    name: 'Peter',
    age: 38
} as const;

type PeterType = typeof peter;