import { Component, OnInit, Input } from '@angular/core';
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
  }


}
