import GenericService from './GenericService';
import Teacher from  '../models/Teacher';

export default class StudentService extends GenericService<Teacher> {

    teach(teacher: Teacher, subject: string) {
        teacher.teach(subject);
    }  
}