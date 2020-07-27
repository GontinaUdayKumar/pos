import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  cartList = [];
  cartSubTotal: number = 0;
  vatTax: number = 0;
  noOfItems: number = 0;
  cartTotal: number = 0;
  discount: number = 0;
  taxValue: number = 0;
  discountValue: number = 0;

  constructor() { }

  calculateCartOrder() {
    this.cartSubTotal = 0;
    this.noOfItems = 0;
    this.cartTotal = 0;
    this.cartList.forEach(item => {
      this.cartSubTotal = this.cartSubTotal + item.total;
      this.noOfItems = this.noOfItems + item.quantity;
    });
    this.vatTax = (this.taxValue / 100) * this.cartSubTotal;
    this.discount = (this.discountValue / 100) * this.cartSubTotal;
    this.cartTotal = this.cartSubTotal + this.vatTax - this.discount;
  }

  resetCartData() {
    this.cartSubTotal = 0;
    this.noOfItems = 0;
    this.cartTotal = 0;
    this.taxValue = 0;
    this.discountValue = 0;
    this.vatTax = 0;
    this.discount = 0;
    this.noOfItems = 0;
    this.cartList = [];
  }
}
