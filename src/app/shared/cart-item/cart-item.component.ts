import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/dashboard/model/product.model';
import { SharedService } from '../service/shared.service';

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

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

  onQuantityChange(quantityValue) {
    if (quantityValue >= 0) {
      this.item['total'] = quantityValue * this.item['price'];
      this.sharedService.calculateCartOrder();
    } else {
      this.item['quantity'] = 0;
      this.item['total'] = this.item['quantity'] * this.item['price'];
      this.sharedService.calculateCartOrder();
    }
  }

  decrement() {
    this.item['quantity'] = this.item['quantity'] - 1;
    this.item['total'] = this.item['quantity'] * this.item['price'];
    this.sharedService.calculateCartOrder();
  }

  increment() {
    this.item['quantity'] = this.item['quantity'] + 1;
    this.item['total'] = this.item['quantity'] * this.item['price'];
    this.sharedService.calculateCartOrder();
  }

  deleteIconClicked(item) {
    this.deleteItemEvent.emit(item);
  }

}
