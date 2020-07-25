import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartModel } from 'src/app/dashboard/model/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  item: CartModel;
  @Output()
  itemChange = new EventEmitter<CartModel>();

  @Input()
  get cartItem() {
    return this.item;
  }
  set cartItem(val) {
    this.item = val;
    this.itemChange.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

  decrement() {
    this.item['quantity'] = this.item['quantity'] - 1;
  }

  increment() {
    this.item['quantity'] = this.item['quantity'] + 1;
  }

}
