import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  imageUrl: string = '';
  productsList = [];
  cartList = [];

  constructor(private dashboardService: DashboardService,
              private sharedService: SharedService) {
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
    console.log(product);
    if (this.sharedService.cartList.indexOf(product) === -1) {
      product.quantity = 1;
      product.total = (product.quantity * product.price);
      this.sharedService.cartList.push(product);
    } else {
      this.sharedService.cartList.forEach(item => {
        if (item.name === product.name) {
          item.quantity++;
          item.total = (item.quantity * item.price);
        }
      });
    }
    this.sharedService.calculateCartOrder();
  }

}
