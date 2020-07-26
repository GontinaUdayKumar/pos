import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/dashboard/model/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  item: Product;
  @Output()
  itemChange = new EventEmitter<Product>();

  @Output() deleteItemEvent = new EventEmitter<Product>();

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

  onKeyUp(event) {
    this.item['total'] = this.item['quantity'] * this.item['price'];
  }

  decrement() {
    this.item['quantity'] = this.item['quantity'] - 1;
    this.item['total'] = this.item['quantity'] * this.item['price'];
  }

  increment() {
    this.item['quantity'] = this.item['quantity'] + 1;
    this.item['total'] = this.item['quantity'] * this.item['price'];
  }

  deleteIconClicked(item) {
    this.deleteItemEvent.emit(item);
  }

}
