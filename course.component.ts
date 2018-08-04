import {Component} from "@angular/core"
import {Input} from "@angular/core"
import {Course} from "./course.model"


@Component({
     selector:`course`, //this is a tag name in HTML
    // selector:`[course]`, //this is a attribute name in HTML
    // selector:`.course`, //this is a class for element in HTML
    // template:`
    // <h1>{{courseName}}</h1>
    // `
    template:`
    <h2>{{courseDetails.name}}</h2>
    <b>Duration : </b> {{courseDetails.duration}} <span> & Class Strength:{{courseDetails.classStrength}}</span>
    `

    // template:`<my-app></my-app>`
})
export class CourseComponent{
    //Input property with @Input decorator. This way it can be used as attribute to the component
    //We can use a different/alias name as an attribute.. pass ur desired attrib name to @Input. This should be used only in HTML template where component is being referred.
    //This alias prop name can't be used in iterpolation.. like the propName we used on top '{{courseName}}'
    @Input('name') courseName:string = "Angular"; 

    //@Input('details') courseDetails = {name:"Angular", duration:"3 days"};
    @Input('details') courseDetails = new Course(); //Using Course model here rather than hard coded object in above line

}