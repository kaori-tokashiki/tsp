
// abstract class 継承のためにあるよ
abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if( age > 17 ){
            return true
        }
    }

    constructor(public readonly name: string, protected age: number){
    }

    incrementAge() {
        this.age +=1;
        
    }

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`);
        this.explainJob();
    }

    abstract explainJob(): void
}

class Teacher extends Person {
    private static instance: Teacher;

    explainJob(){
        console.log(`I'm a teacher and I teach ${this.subject}`);
        
    }

    private constructor(name: string, age: number, private _subject: string){
        super(name, age);
    }

    get subject(): string {
        if(!this._subject){
            throw new Error('There is no subject');
        }
        return this._subject
    }

    set subject(value){
        if(!value){
            throw new Error('There is no subject');
        }
        this._subject = value;
    }

    static getInstance() {
        if(Teacher.instance){
            return Teacher.instance;
        }
        Teacher.instance = new Teacher('Qauill', 38, 'Math');
        return Teacher.instance;
    }
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
teacher.greeting();