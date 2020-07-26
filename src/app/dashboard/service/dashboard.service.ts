import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cartData } from '../data/data';
import { Product } from '../model/product.model';

@Injectable()
export class DashboardService {


  constructor() { }

  getProductsList(): Observable<Product[]> {
    return of<Product[]>(cartData());
  }
}
