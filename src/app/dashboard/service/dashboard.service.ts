import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cartData } from '../data/data';
import { Product } from '../model/product.model';
import { CartModel } from '../model/cart.model';

@Injectable()
export class DashboardService {

  //cartDataList: CartModel[]=[];

  constructor() { }

  getProductsList(): Observable<Product[]> {
    return of<Product[]>(cartData());
  }
}
