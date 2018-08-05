"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseService = (function () {
    function CourseService() {
        this.listOfCourses = ['React', 'Redux', 'Node'];
    }
    CourseService.prototype.getAllCourses = function () {
        return this.listOfCourses;
    };
    CourseService.prototype.addNewCourse = function (newCourse) {
        this.listOfCourses.push(newCourse);
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map