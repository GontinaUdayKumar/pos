import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  cartList = [];

  cartSubTotal: number = 0;
  vatTax;
  noOfItems;
  cartTotal: number =0;


  constructor() { }
}
