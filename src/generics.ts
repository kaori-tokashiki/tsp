function copy<T extends { name: string}, U extends keyof T >(value: T, key: U): T {
    value[key]
    return value;
}
console.log(copy({ name: 'Quill', age: 38}, 'age'));

// type K = keyof { name: string; age: number}

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item)
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
    get() {
        return this.data;
    }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple')
stringLightDatabase.add('Banana')
stringLightDatabase.add('Grape')
console.log(stringLightDatabase)

// interface TmpDatabase<T> {
//     id: number;
//     data: T[];
// }

// const tmpDatabase: TmpDatabase<number> = {
//     id: 3,
//     data: [32, 36]
// }

interface Todo {
    title: string;
    text: string;
}

type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('hello')
    }, 3000)
})
fetchData.then(data => {
    data.toUpperCase();
})

const vegetables1: string[] = ['Tomato', 'Broccoli', 'Asparagus']
const vegetables2: Array<string> = ['Tomato', 'Broccoli', 'Asparagus']

interface ResponsData<T extends { message: string } = any> {
    data: T;
    status: number;
}
let tmp: ResponsData;

interface Vegetables {
    readonly tomato?: string;
    pumpkin?: string;
}

type MappedTypes = {
    -readonly[P in keyof Vegetables]-?: string
}

type ConditionalTypes = 'tomato' extends string ? number : boolean

type ConditionalTypesInfer = { tomato: 'tomato'} extends { tomato: infer R } ? R : boolean
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>