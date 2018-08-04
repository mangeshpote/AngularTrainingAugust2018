export class Course{
    //This is a TypeScript feature.. no need to declare variables or initialize them in constructor.
    //Simply prepend access specifier - public to params in contructor 
    constructor(public name:string="Angular", public duration:string="3 days", public classStrength:number=9)
    {    }
}