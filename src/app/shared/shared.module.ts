import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedService } from './service/shared.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { DynamicComponentLoader } from './dynamic-component-loader/dynamicComponentLoader';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [ProductsComponent, CartComponent, CartItemComponent, CustomDialogComponent, DynamicComponentLoader, ReceiptComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule
  ],
  entryComponents: [ReceiptComponent, CustomDialogComponent],
  exports: [
    ProductsComponent, CartComponent, CustomDialogComponent
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
