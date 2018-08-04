import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
    selector:'shopCart',
    // template:`<product *ngFor="let p of productsArray" [prodDetails] = "p"></product>
    // <product></product>`
    templateUrl:'../app/shopCart.template.html',
    styleUrls:[''] //Add style files here seperated by comma. Use proper path from ../app
})

export class ShoppingCartComponent{

    heading:string = "Shopping Cart!";

    ChangeHeading(){
        this.heading = "Flipkart";
    }

    ChangeHeadingOnChange(evt:any){
        this.heading = evt.target.value;
    }

    productsArray:Product[] = [
        {name:"Laptop",
        price:35000,
        quantity:15,
        rating:"4.6",
        imageURL:"data:image/jpeg;base64,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"
        },
        {name:"Washing Machine",
        price:32000,
        quantity:10,
        rating:"4.0",
        imageURL:"data:image/jpeg;base64,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"
        },
    ]
}