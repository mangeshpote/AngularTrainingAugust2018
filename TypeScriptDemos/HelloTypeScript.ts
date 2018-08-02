var x =10;
//x = "a"; not allowed

var str:string;//Type annotation
str = "k";

var boolVar:boolean;//Type boolean
var anyVar:any;//Type any

//Arrays
var cars:string[] = ['BMW', 'MERCEDES']; 

//Generics
var moreCars:Array<string> = new Array<string>('TATA', 'MARUTI');

//for
//for-in ->> can be used to get the index of all items in collection
for(let x in cars)
{
    console.log(x);
}
//for-of
for(let x of cars)
{console.log(x);}

//foreach
cars.forEach((car)=>{
    console.log(car);
});

//Function:
//parameters are defined with type
//function returnType is also mentioned as number (:number)
//function can return multiple types - use OR operator and mention multiple return types
function Addition(x:number, y:number):number | string{
    if(x <= 0)
    {
        return "x cannot be less than or equalto 0";
    }
    return x+y;
}
 //declare result is of type number as Addition returnType is number
 //declare variable with multiple returnType to be able to store the return value of corresponding type from function
var result:number|string = Addition(0,20);
console.log(result);

//let : block level scope
{
    let scopedVar = "a";
    var a = 1;
    var a = 2;// var allows this
    //let scopedVar = '3';//this is an error
}
//console.log(scopedvar);//error cannot locate this variable outside block

//const
const PI = 3.14;
//this again has block level scoping. Here the PI is available in entire .ts file

//Optional Arguments for function
//Optional arguments should always be at the last in arguments list.. 
//All other arguments like default etc must be before optional arguments
function PrintBooks(Author?:string, Publisher?:string){
    Author = Author || 'Unknown';//If Author is undefined (not passed as a parameter in functioncall then assign 'Unknown' to Author)
    console.log(Author, Publisher);
}

PrintBooks();//This will print undefined if there are no default values provided. 
//In above case it will print - <Unknown undefined>
PrintBooks('MI4', 'TOMCRUISE');

//Default Arguments:
function PrintBookDetails(Author:string="Ian Flemming", Publisher:string="BOND007"){
    console.log(Author, Publisher);
}

PrintBookDetails();
//We CANNOT declare functions with optional as well as default values.. something like : <author?:string="mangesh">

//Arrow Functions
var Square1 = (x)=> x*x;
var Square2 = (x:number):number=> x*x; //type annotation and return type

function Car(){
    this.name = "i20";
    this.brand = "Hyundai";

    //here this.name will be printed undefined : during runtime this is not resolved. It will try to resolve the context on invocation and would not find any reference to 'this'
    setTimeout(function(){
        console.log(`${this.name} - printedfrom setTimeOut using func`);
    }, 2000);

    //here this.name = "i20" 
    //Using fat arrow functions is an advantage here : context gets binded at the time of creation of function
    //rather than @ the time of invocation of function
    setTimeout(()=>{
        console.log(`${this.name} - printedfrom setTimeOut using fat Arrow`);
    }, 2000);
}

var carObject = new Car();
console.log(carObject.brand);


//Interfaces:
//We cannot change the structure of the object if it's been defined/implemented using interface
interface ICompany{
    name:string,
    location:string,
    isMNC?:boolean, // optional member
    printSalary():void
    printDesignation?():void //optional member function
}
//We cannot create an instance of interface

//Below is object company assigned type of ICompany
var company : ICompany = {
    name:'Microsoft',
    location:'Hyderabad',
    //abcd:1234 ,//not allowed.. it will adhere to the structure (properties) defined by interface : ICompany
    //*We didn't define isMNC here as it's optional member declared in Interface ICompany, but name and location are mandatory
    printSalary(){
        console.log("Salary Credited!");
    }
    //*We didn't define printDesignation function here as it's optional member declared in Interface ICompany

}

//Class:
class CarInfo{
    name:string;
    speed:number;
    private id:number //we have private public and protected access specifiers

    // constructor(options){
    //     this.name = options.name;
    //     this.speed = options.speed;
    // }
    constructor(name:string, speed:number){
        this.name = name;
        this.speed = speed;
    }

    Accelerate():string{
        return `${this.name} is running at ${this.speed}`;
    }
}

//var carInfoObject = new CarInfo({speed:300});
//var carInfoObject = new CarInfo({name:"i20",speed:300});
var carInfoObject = new CarInfo("i20",300);
console.log(`${carInfoObject.name} ${carInfoObject.speed}`);
console.log(carInfoObject.Accelerate());

class BatmanCar extends CarInfo{
    useNitroPower:boolean;
    constructor(name:string, speed:number, nitroPower:boolean){
        super(name,speed);//mandatory
        this.useNitroPower = nitroPower;
    }

    //It's not mandatory to call base class's method declaration from derived one.. we just called it here.
    Accelerate():string{
        return super.Accelerate() + " NitroPower ? " + this.useNitroPower;
    }

}

var batmancarObj = new BatmanCar("BMW", 500, true);
console.log(batmancarObj);
//o/p=> BatmanCar { name: 'BMW', speed: 500, useNitroPower: true }
console.log(batmancarObj.Accelerate());//If Accelerate func is not defined in BatmanCar then it will call the bae clas func
//o/p=> BMW is running at 500 NitroPower ? true



//Interface implementation by Class:
class Mycompany implements ICompany{
    name:string;
    location:string;
    
    printSalary(){
        console.log("Salary += Salary");
    }
}

//class Mycompany implements ICompany,Interface2,Interface3 : [mention the list of interfaces]
//class Mycompany extends CarInfo implements ICompany : [here class is inheriting the calss as well implementing interface]