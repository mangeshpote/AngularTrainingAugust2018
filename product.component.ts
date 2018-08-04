import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Product} from './product.model';

@Component({
    selector:'product',
    templateUrl:'../app/product.template.html',
    styleUrls:['../app/product.style.css']
    
})

export class ProductComponent{

    //@Input('prodDetails') productDetails = //new Product();  
    
    @Input('prodDetails') productDetails = new Product("Mobile", 10000, 100, "2.5", "https://n2.sdlcdn.com/imgs/a/p/v/white_iPhone_5c-923fe.jpg");

    testObj:any;

    isStyled:boolean = true;

    isFree:boolean = true;

}