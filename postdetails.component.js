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
var router_1 = require("@angular/router");
var PostDetailsComponent = (function () {
    //to get the details of current routed path use ActivatedRouter module and fetch the params from the same.
    function PostDetailsComponent(currRoute) {
        this.currRoute = currRoute;
    }
    //Lifecycle method : Instead of doing things in constructor use ngOnInit (implement OnInit interface to eliminate any typo error with this method name)
    //this.currRoute.params will fetch the parameters in the current routed path.. here we have only id
    //fetch the param value by passing the param name in square brackets
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currRoute.params.subscribe(function (p) {
            _this.postId = p["id"];
            var fetchedPosts = JSON.parse(localStorage["posts"]);
            _this.currFetchedPost = fetchedPosts.find(function (fp) {
                return fp.id == _this.postId;
            });
        });
    };
    return PostDetailsComponent;
}());
PostDetailsComponent = __decorate([
    core_1.Component({
        selector: 'postdetails',
        template: "\n    <h2>Post Details for {{postId}}</h2>\n    <p>Title : {{currFetchedPost.title}}</p>   \n    <p>UserId : {{currFetchedPost.userId}}</p>\n    <p>Body : {{currFetchedPost.body}}</p>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], PostDetailsComponent);
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=postdetails.component.js.map