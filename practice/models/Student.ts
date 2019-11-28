export default class Student {
    name: string;
    age: number;
    subjects: string[];
    studentGrade: string;

    constructor(name : string, age :number, subjects : string[]) {
        this.name = name;
        this.age = age
        this.subjects = subjects;
    }

    public grade(grade):void {
        this.studentGrade = grade;
    }

    public toString(): string {
        return `Yoo mah name is ${this.name} and i am ${this.age} years old with grade: ${this.grade}`;
    }

}