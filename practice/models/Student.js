"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(name, age, subjects) {
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
    Student.prototype.grade = function (grade) {
        this.studentGrade = grade;
    };
    Student.prototype.toString = function () {
        return "Yoo mah name is " + this.name + " and i am " + this.age + " years old with grade: " + this.grade;
    };
    return Student;
}());
exports["default"] = Student;
