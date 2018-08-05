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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise"); //to use toPromise(), import this method specifically from rxjs
require("rxjs/add/operator/map"); //to use map()
var PostsService = (function () {
    function PostsService(httpObj) {
        this.httpObj = httpObj;
    }
    //here we are subscribing to this link to get the data and working on the respinse received.
    //Just logging the response in text format
    // getPosts(){
    //     this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    //     .subscribe(function(response){
    //         console.log((response.text()));
    //     });
    // getPosts(callbackFunc:any){
    //     this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    //     .subscribe(function(response){
    //         callbackFunc(response.json())           
    //     });
    // }
    //promises
    // getPosts(){
    //     return this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    //     .toPromise(); //toPromise is a method provided by rxjs : additonal methods for better handling 
    // }
    //return Observable collection
    //this is to achieve continuously follow the changes happening in response. GUI will be updated as per the changes
    //.json() is a method here which will return the array of objects which is be mapped to Post
    //'res' - response here is a http response so in order to get only the relevant data we are calling json() on response
    PostsService.prototype.getPosts = function () {
        return this.httpObj.get("https://jsonplaceholder.typicode.com/posts").map(function (res) { return res.json(); });
    };
    return PostsService;
}());
PostsService = __decorate([
    core_1.Injectable() //To allow service to call another service. Required for another service to be injected in this service - HTTP here
    ,
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map