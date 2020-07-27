import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptComponent } from './receipt.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDividerModule } from '@angular/material';
import { SharedService } from '../service/shared.service';
import { CartComponent } from '../cart/cart.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { ProductsComponent } from '../products/products.component';

fdescribe('ReceiptComponent', () => {
  let component: ReceiptComponent;
  let fixture: ComponentFixture<ReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatDividerModule
      ],
      providers: [SharedService],
      declarations: [ CartComponent, CartItemComponent, ProductsComponent, ReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ReceiptComponent', () => {
    expect(component).toBeTruthy();
  });
});
