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
var posts_service_1 = require("./posts.service");
var PostComponent = (function () {
    //callBack Way
    // constructor(private servObj:PostsService)
    // {
    //     this.servObj.getPosts((responseFromService:any)=>{
    //         this.allPosts = responseFromService;
    //     });
    // }
    //allPosts here is an array of Json objects
    //Displaying the titles from these objects can be done directly by referring to title property of each item in allPosts
    //Promise way
    // constructor(private servObj:PostsService)
    // {
    //     let aPromise = this.servObj.getPosts();
    //     aPromise.then(
    //         (responseFromService)=>{
    //             this.allPosts = responseFromService.json();
    //         },
    //         (err)=>{
    //                 console.log("Error : " + err);
    //         }
    //     );
    // }
    //Subscribing to observable collection of Posts
    function PostComponent(servObj) {
        var _this = this;
        this.servObj = servObj;
        this.allPosts = [];
        this.servObj.getPosts().subscribe(function (responseFromservice) {
            _this.allPosts = responseFromservice;
            localStorage["posts"] = JSON.stringify(responseFromservice);
        }, function (err) {
            console.log('ERROR : ' + err);
        });
    }
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'post',
        template: "\n    <h2>Posts</h2>\n    <!--{{allPosts | json}}-->\n    <p><b>Titles for all posts below:</b></p>\n    <ul>\n        <li *ngFor=\"let post of allPosts\">\n            <a routerLink=\"/post/{{post.id}}\">\n                {{post.title}}\n            </a>\n        </li>\n    </ul>\n    ",
        providers: [posts_service_1.PostsService] //Provider for the defined service is required to consume it in component
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map