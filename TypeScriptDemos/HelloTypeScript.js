var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 10;
//x = "a"; not allowed
var str; //Type annotation
str = "k";
var boolVar; //Type boolean
var anyVar; //Type any
//Arrays
var cars = ['BMW', 'MERCEDES'];
//Generics
var moreCars = new Array('TATA', 'MARUTI');
//for
//for-in ->> can be used to get the index of all items in collection
for (var x_1 in cars) {
    console.log(x_1);
}
//for-of
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var x_2 = cars_1[_i];
    console.log(x_2);
}
//foreach
cars.forEach(function (car) {
    console.log(car);
});
//Function:
//parameters are defined with type
//function returnType is also mentioned as number (:number)
//function can return multiple types - use OR operator and mention multiple return types
function Addition(x, y) {
    if (x <= 0) {
        return "x cannot be less than or equalto 0";
    }
    return x + y;
}
//declare result is of type number as Addition returnType is number
//declare variable with multiple returnType to be able to store the return value of corresponding type from function
var result = Addition(0, 20);
console.log(result);
//let : block level scope
{
    var scopedVar = "a";
    var a = 1;
    var a = 2; // var allows this
    //let scopedVar = '3';//this is an error
}
//console.log(scopedvar);//error cannot locate this variable outside block
//const
var PI = 3.14;
//this again has block level scoping. Here the PI is available in entire .ts file
//Optional Arguments for function
//Optional arguments should always be at the last in arguments list.. 
//All other arguments like default etc must be before optional arguments
function PrintBooks(Author, Publisher) {
    Author = Author || 'Unknown'; //If Author is undefined (not passed as a parameter in functioncall then assign 'Unknown' to Author)
    console.log(Author, Publisher);
}
PrintBooks(); //This will print undefined if there are no default values provided. 
//In above case it will print - <Unknown undefined>
PrintBooks('MI4', 'TOMCRUISE');
//Default Arguments:
function PrintBookDetails(Author, Publisher) {
    if (Author === void 0) { Author = "Ian Flemming"; }
    if (Publisher === void 0) { Publisher = "BOND007"; }
    console.log(Author, Publisher);
}
PrintBookDetails();
//We CANNOT declare functions with optional as well as default values.. something like : <author?:string="mangesh">
//Arrow Functions
var Square1 = function (x) { return x * x; };
var Square2 = function (x) { return x * x; }; //type annotation and return type
function Car() {
    var _this = this;
    this.name = "i20";
    this.brand = "Hyundai";
    //here this.name will be printed undefined : during runtime this is not resolved. It will try to resolve the context on invocation and would not find any reference to 'this'
    setTimeout(function () {
        console.log(this.name + " - printedfrom setTimeOut using func");
    }, 2000);
    //here this.name = "i20" 
    //Using fat arrow functions is an advantage here : context gets binded at the time of creation of function
    //rather than @ the time of invocation of function
    setTimeout(function () {
        console.log(_this.name + " - printedfrom setTimeOut using fat Arrow");
    }, 2000);
}
var carObject = new Car();
console.log(carObject.brand);
//We cannot create an instance of interface
//Below is object company assigned type of ICompany
var company = {
    name: 'Microsoft',
    location: 'Hyderabad',
    //abcd:1234 ,//not allowed.. it will adhere to the structure (properties) defined by interface : ICompany
    //*We didn't define isMNC here as it's optional member declared in Interface ICompany, but name and location are mandatory
    printSalary: function () {
        console.log("Salary Credited!");
    }
    //*We didn't define printDesignation function here as it's optional member declared in Interface ICompany
};
//Class:
var CarInfo = /** @class */ (function () {
    // constructor(options){
    //     this.name = options.name;
    //     this.speed = options.speed;
    // }
    function CarInfo(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    CarInfo.prototype.Accelerate = function () {
        return this.name + " is running at " + this.speed;
    };
    return CarInfo;
}());
//var carInfoObject = new CarInfo({speed:300});
//var carInfoObject = new CarInfo({name:"i20",speed:300});
var carInfoObject = new CarInfo("i20", 300);
console.log(carInfoObject.name + " " + carInfoObject.speed);
console.log(carInfoObject.Accelerate());
var BatmanCar = /** @class */ (function (_super) {
    __extends(BatmanCar, _super);
    function BatmanCar(name, speed, nitroPower) {
        var _this = _super.call(this, name, speed) || this;
        _this.useNitroPower = nitroPower;
        return _this;
    }
    //It's not mandatory to call base class's method declaration from derived one.. we just called it here.
    BatmanCar.prototype.Accelerate = function () {
        return _super.prototype.Accelerate.call(this) + " NitroPower ? " + this.useNitroPower;
    };
    return BatmanCar;
}(CarInfo));
var batmancarObj = new BatmanCar("BMW", 500, true);
console.log(batmancarObj);
//o/p=> BatmanCar { name: 'BMW', speed: 500, useNitroPower: true }
console.log(batmancarObj.Accelerate()); //If Accelerate func is not defined in BatmanCar then it will call the bae clas func
//o/p=> BMW is running at 500 NitroPower ? true
//Interface implementation by Class:
var Mycompany = /** @class */ (function () {
    function Mycompany() {
    }
    Mycompany.prototype.printSalary = function () {
        console.log("Salary += Salary");
    };
    return Mycompany;
}());
//class Mycompany implements ICompany,Interface2,Interface3 : [mention the list of interfaces]
//class Mycompany extends CarInfo implements ICompany : [here class is inheriting the calss as well implementing interface]
