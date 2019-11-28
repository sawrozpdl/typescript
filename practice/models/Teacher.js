"use strict";
exports.__esModule = true;
var Teacher = /** @class */ (function () {
    function Teacher(name, age) {
        this.subjects = [];
        this.name = name;
        this.age = age;
    }
    Teacher.prototype.teach = function (subject) {
        this.subjects.push(subject);
    };
    Teacher.prototype.toString = function () {
        return "My name is " + this.name + " and i teach: " + this.subjects;
    };
    return Teacher;
}());
exports["default"] = Teacher;
