

import {Component} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector:'new-course',
    templateUrl:'../app/newcourse.template.html',
    providers:[CourseService] //mention the service providers to inject the same in constructor
})

export class NewCourseComponent{
    constructor(private servObj:CourseService){
        console.log(this.servObj.getAllCourses());
    }

    courses:string[] = [];
    showAllCourses(){
        this.courses = this.servObj.getAllCourses();
    }

    courseToBeAdded:string;
    AddNewCourse(){
        if(this.courseToBeAdded !== "" || this.courseToBeAdded.length !== 0)//not working
            this.servObj.addNewCourse(this.courseToBeAdded);
    }
}