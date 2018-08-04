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
var core_2 = require("@angular/core");
var product_model_1 = require("./product.model");
var ProductComponent = (function () {
    function ProductComponent() {
        //@Input('prodDetails') productDetails = //new Product();  
        this.productDetails = new product_model_1.Product("Mobile", 10000, 100, "2.5", "https://n2.sdlcdn.com/imgs/a/p/v/white_iPhone_5c-923fe.jpg");
        this.isStyled = true;
        this.isFree = true;
    }
    return ProductComponent;
}());
__decorate([
    core_2.Input('prodDetails'),
    __metadata("design:type", Object)
], ProductComponent.prototype, "productDetails", void 0);
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: '../app/product.template.html',
        styleUrls: ['../app/product.style.css']
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map