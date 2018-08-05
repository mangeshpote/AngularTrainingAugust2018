"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http"); //to make http requests from posts service
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var course_component_1 = require("./course.component");
var shoppingCart_component_1 = require("./shoppingCart.component");
var product_component_1 = require("./product.component");
var newcourse_component_1 = require("./newcourse.component");
var post_component_1 = require("./post.component");
var default_component_1 = require("./default.component");
var postdetails_component_1 = require("./postdetails.component");
//Define the routes in application.. Do not add '/' in paths here. 
//order in which the paths are mentioned matters a lot
var routes = [
    { path: 'posts', component: post_component_1.PostComponent },
    { path: 'cart', component: shoppingCart_component_1.ShoppingCartComponent },
    { path: 'course', component: newcourse_component_1.NewCourseComponent },
    { path: 'post/:id', component: postdetails_component_1.PostDetailsComponent },
    { path: '', component: post_component_1.PostComponent },
    //Below should be at the last always.. this is path when nothing enetered in url matches either of the defined paths load NewcourseComponent
    { path: '**', component: default_component_1.DefaultComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, course_component_1.CourseComponent, shoppingCart_component_1.ShoppingCartComponent, product_component_1.ProductComponent, newcourse_component_1.NewCourseComponent, post_component_1.PostComponent, default_component_1.DefaultComponent, postdetails_component_1.PostDetailsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map