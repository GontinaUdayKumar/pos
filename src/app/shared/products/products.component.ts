import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() imageUrl: string = '';
  @Input() productsList = [];
  @Output() productClicked = new EventEmitter();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  imageClicked(product) {
    this.productClicked.emit(product);
  }

}
