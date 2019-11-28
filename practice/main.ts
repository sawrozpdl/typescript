import Teacher from './models/Teacher';
import Student from './models/Student';
import StudentService from './services/StudentService';
import TeacherService from './services/TeacherService';


let stsrvc :StudentService = new StudentService();
let tcsrvc :TeacherService = new TeacherService();



let t1 = new Teacher('Ramlal', 21);
let t2 = new Teacher('Shyamlal', 33);

let s1 = new Student('raghav', 11, ['social', 'nepali']);
let s2 = new Student('mike', 13, ['computer', 'english']);

stsrvc.add(s1);
stsrvc.add(s2);

tcsrvc.add(t1);
tcsrvc.add(t2);

stsrvc.grade(s1, 'A+');
tcsrvc.teach(t1, 'nepali');

console.log('Students => ', stsrvc.getAll());
console.log('Teachers => ', tcsrvc.getAll());