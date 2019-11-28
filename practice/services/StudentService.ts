import GenericService from './GenericService';
import Student from  '../models/Student';

export default class StudentService extends GenericService<Student> {

    grade(student: Student, grade: string) {
        student.grade(grade);
    }  
}