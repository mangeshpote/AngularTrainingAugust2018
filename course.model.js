"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = (function () {
    //This is a TypeScript feature.. no need to declare variables or initialize them in constructor.
    //Simply prepend access specifier - public to params in contructor 
    function Course(name, duration, classStrength) {
        if (name === void 0) { name = "Angular"; }
        if (duration === void 0) { duration = "3 days"; }
        if (classStrength === void 0) { classStrength = 9; }
        this.name = name;
        this.duration = duration;
        this.classStrength = classStrength;
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=course.model.js.map