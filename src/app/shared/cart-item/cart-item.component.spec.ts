import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CartItemComponent } from "./cart-item.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule, MatDividerModule } from "@angular/material";
import { SharedService } from "../service/shared.service";
import { CartComponent } from "../cart/cart.component";
import { Product } from "src/app/dashboard/model/product.model";

fdescribe("CartItemComponent", () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  const productItem: Product = {
    name: "comuter",
    price: 130,
    category: "computers",
    description: "",
    image: "comuter.jpg",
    quantity: 2,
    total: 260,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatDividerModule,
      ],
      providers: [SharedService],
      declarations: [CartComponent, CartItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it("should create", () => {
    component.cartItem = productItem;
    expect(component).toBeTruthy();
  });

  it("onQuantityChange called: positive input", () => {
    component.item = productItem;
    component.onQuantityChange(3);
    expect(component.item.total).toEqual(390);
  });

  it("onQuantityChange called: negative input", () => {
    component.item = productItem;
    component.onQuantityChange(-3);
    expect(component.item.total).toEqual(0);
  });

  it("decrement called", () => {
    component.item = {
      name: "comuter",
      price: 130,
      category: "computers",
      description: "",
      image: "comuter.jpg",
      quantity: 2,
      total: 260,
    };
    component.sharedService.cartList = [component.item];
    component.decrement();
    expect(component.item.quantity).toEqual(1);
    expect(component.item.total).toEqual(130);
    expect(component.sharedService.cartList.length).toBe(1);
    expect(component.sharedService.noOfItems).toBe(1);
    expect(component.sharedService.vatTax).toBe(0);
    expect(component.sharedService.discount).toBe(0);
    expect(component.sharedService.cartSubTotal).toBe(130);
    expect(component.sharedService.cartTotal).toBe(130);
  });

  it("increment called", () => {
    component.item = {
      name: "comuter",
      price: 130,
      category: "computers",
      description: "",
      image: "comuter.jpg",
      quantity: 2,
      total: 260,
    };
    component.sharedService.cartList = [component.item];
    component.increment();
    expect(component.item.quantity).toEqual(3);
    expect(component.item.total).toEqual(390);
    expect(component.sharedService.cartList.length).toBe(1);
    expect(component.sharedService.noOfItems).toBe(3);
    expect(component.sharedService.vatTax).toBe(0);
    expect(component.sharedService.discount).toBe(0);
    expect(component.sharedService.cartSubTotal).toBe(390);
    expect(component.sharedService.cartTotal).toBe(390);
  });

  it("deleteIconClicked called", () => {
    spyOn(component.deleteItemEvent, "emit");
    component.deleteIconClicked(productItem);
    expect(component.deleteItemEvent.emit).toHaveBeenCalled();
  });
});
