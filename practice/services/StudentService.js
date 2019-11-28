"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var GenericService_1 = require("./GenericService");
var StudentService = /** @class */ (function (_super) {
    __extends(StudentService, _super);
    function StudentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentService.prototype.grade = function (student, grade) {
        student.grade(grade);
    };
    return StudentService;
}(GenericService_1["default"]));
exports["default"] = StudentService;
