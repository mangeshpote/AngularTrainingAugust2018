import { Component } from '@angular/core';
import {Course} from "./course.model";


@Component({
  selector: 'my-app',
  template:`
  
  <b>Links :</b>
  <a routerLink="/posts">Posts</a>   <!--We have used routerLink instaedof href here. This is not to refresh the page on link click-->
  <a routerLink="/cart">ShoppingCart</a>

  <router-outlet></router-outlet>

  `
})

export class AppComponent  { 
  
}
