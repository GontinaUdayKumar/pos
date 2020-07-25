import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedService } from './service/shared.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsComponent, CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductsComponent, CartComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }
}
