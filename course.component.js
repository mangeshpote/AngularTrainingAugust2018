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
var core_2 = require("@angular/core");
var course_model_1 = require("./course.model");
var CourseComponent = (function () {
    function CourseComponent() {
        //Input property with @Input decorator. This way it can be used as attribute to the component
        //We can use a different/alias name as an attribute.. pass ur desired attrib name to @Input. This should be used only in HTML template where component is being referred.
        //This alias prop name can't be used in iterpolation.. like the propName we used on top '{{courseName}}'
        this.courseName = "Angular";
        //@Input('details') courseDetails = {name:"Angular", duration:"3 days"};
        this.courseDetails = new course_model_1.Course(); //Using Course model here rather than hard coded object in above line
    }
    return CourseComponent;
}());
__decorate([
    core_2.Input('name'),
    __metadata("design:type", String)
], CourseComponent.prototype, "courseName", void 0);
__decorate([
    core_2.Input('details'),
    __metadata("design:type", Object)
], CourseComponent.prototype, "courseDetails", void 0);
CourseComponent = __decorate([
    core_1.Component({
        selector: "course",
        // selector:`[course]`, //this is a attribute name in HTML
        // selector:`.course`, //this is a class for element in HTML
        // template:`
        // <h1>{{courseName}}</h1>
        // `
        template: "\n    <h2>{{courseDetails.name}}</h2>\n    <b>Duration : </b> {{courseDetails.duration}} <span> & Class Strength:{{courseDetails.classStrength}}</span>\n    "
        // template:`<my-app></my-app>`
    })
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map