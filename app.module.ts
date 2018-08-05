import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http'; //to make http requests from posts service

import {RouterModule, Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import {CourseComponent} from './course.component';
import {ShoppingCartComponent} from './shoppingCart.component';
import {ProductComponent} from './product.component';
import {NewCourseComponent} from './newcourse.component';
import {PostComponent} from './post.component';
import {DefaultComponent} from './default.component';
import { PostDetailsComponent } from './postdetails.component';


//Define the routes in application.. Do not add '/' in paths here. 
//order in which the paths are mentioned matters a lot
const routes:Routes = [
    {path:'posts', component:PostComponent},
    {path:'cart',component:ShoppingCartComponent},
    {path:'course',component:NewCourseComponent},
    {path:'post/:id',component:PostDetailsComponent},
    {path:'',component:PostComponent}, //this is default path.. when app loads it will load PostComponent
    //Below should be at the last always.. this is path when nothing enetered in url matches either of the defined paths load NewcourseComponent
    {path:'**', component:DefaultComponent}
  ]


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)], //All the rotes mentioned here are w.r.t to root i.e. from index.html and hence we are tying these path "forRoot"
  declarations: [ AppComponent, CourseComponent, ShoppingCartComponent, ProductComponent, NewCourseComponent, PostComponent, DefaultComponent, PostDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
