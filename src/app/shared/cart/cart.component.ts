import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  subTotal;
  vatTax;
  discount;
  total;
  noOfItems=0;


  constructor(public sharedService: SharedService) { }



  ngOnInit() {
  }

  cancelSaleClick() {

  }

  processSaleClick() {

  }

  deleteItemEvent(item) {
    this.sharedService.cartList.splice(this.sharedService.cartList.indexOf(item), 1);
    this.sharedService.calculateCartOrder();
  }

  onVatTaxChange(taxValue) {
    if (taxValue >= 0 && taxValue <= 100) {
      this.sharedService.taxValue = taxValue;
      this.sharedService.calculateCartOrder();
    } else {
      this.vatTax = 0;
      this.sharedService.taxValue = 0;
      this.sharedService.calculateCartOrder();
    }

  }

  onDiscountTaxChange(discountValue) {
    if (discountValue >= 0 && discountValue <= 100) {
      this.sharedService.discountValue = discountValue;
      this.sharedService.calculateCartOrder();
    } else {
      this.vatTax = 0;
      this.sharedService.discountValue = 0;
      this.sharedService.calculateCartOrder();
    }
  }


}
