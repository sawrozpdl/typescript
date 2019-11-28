export default class Teacher{
    name: string;
    age: number;
    subjects: string[] = [];

    constructor(name : string, age :number) {
        this.name = name;
        this.age = age
    }

    public teach(subject: string):void {
        this.subjects.push(subject);
    }

    public toString(): string {
        return `My name is ${this.name} and i teach: ${this.subjects}`;
    }

}