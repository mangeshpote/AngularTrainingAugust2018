import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {CourseComponent} from './course.component';
import {ShoppingCartComponent} from './shoppingCart.component';
import {ProductComponent} from './product.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CourseComponent, ShoppingCartComponent, ProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
