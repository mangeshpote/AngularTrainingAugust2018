export class CourseService{
    listOfCourses:string[]=['React','Redux','Node'];
    
    getAllCourses():string[]{
        return this.listOfCourses;
    }

    addNewCourse(newCourse:string):void{
        this.listOfCourses.push(newCourse);
    }

}