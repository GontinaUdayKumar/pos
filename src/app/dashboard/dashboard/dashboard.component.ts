import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { CartModel } from '../model/cart.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  imageUrl: string = '';
  productsList = [];
  cartDataMap = new Map();

  constructor(private dashboardService: DashboardService,
             ) {
    this.imageUrl = './assets/images/';
  }

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.dashboardService.getProductsList().subscribe(products => {
      this.productsList = products;
      console.log(this.productsList);
    });
  }

  productClicked(product) {
    // console.log(product);
    // let quantity = (this.cartDataMap.get(product.name)).get('quantity');
    // const cartModel: CartModel = {
    //   name: product.name,
    //   price: product.price,
    //   quantity: quantity+1,
    //   total: (product.price*quantity)
    // };
    // this.cartDataMap.set(product.name, cartModel);


  }

}
