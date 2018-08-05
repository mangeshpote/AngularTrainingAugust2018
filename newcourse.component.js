"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var course_service_1 = require("./course.service");
var NewCourseComponent = (function () {
    function NewCourseComponent(servObj) {
        this.servObj = servObj;
        this.courses = [];
        console.log(this.servObj.getAllCourses());
    }
    NewCourseComponent.prototype.showAllCourses = function () {
        this.courses = this.servObj.getAllCourses();
    };
    NewCourseComponent.prototype.AddNewCourse = function () {
        if (this.courseToBeAdded !== "" || this.courseToBeAdded.length !== 0)
            this.servObj.addNewCourse(this.courseToBeAdded);
    };
    return NewCourseComponent;
}());
NewCourseComponent = __decorate([
    core_1.Component({
        selector: 'new-course',
        templateUrl: '../app/newcourse.template.html',
        providers: [course_service_1.CourseService] //mention the service providers to inject the same in constructor
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], NewCourseComponent);
exports.NewCourseComponent = NewCourseComponent;
//# sourceMappingURL=newcourse.component.js.map