import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from "@angular/core/testing";

import { CartComponent } from "./cart.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatDialogModule, MatDividerModule } from "@angular/material";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { SharedService } from "../service/shared.service";
import { Product } from "../../dashboard/model/product.model";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

fdescribe("CartComponent", () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  const productItem: Product = {
    name: "comuter",
    price: 130,
    category: "computers",
    description: "",
    image: "comuter.jpg",
    quantity: 1,
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
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create CartComponent", () => {
    expect(component).toBeTruthy();
  });

  it("cancelSaleClick called", () => {
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
      },
    ];
    component.cancelSaleClick();
    expect(component.sharedService.cartList.length).toBe(0);
    expect(component.sharedService.noOfItems).toBe(0);
    expect(component.sharedService.cartSubTotal).toBe(0);
    expect(component.sharedService.cartTotal).toBe(0);
    expect(component.sharedService.vatTax).toBe(0);
    expect(component.sharedService.discount).toBe(0);
    expect(component.vatTax).toEqual(0);
    expect(component.discount).toEqual(0);
  });

  it("deleteItemEvent called", () => {
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
      },
    ];
    component.deleteItemEvent(productItem);
    expect(component.sharedService.cartList.length).toBe(0);
  });

  it("onVatTaxChange called -> percentage input", () => {
    // percentage input => 10% scenario
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
        total: 130,
      },
    ];
    component.vatTax = "10%";
    component.onVatTaxChange("10%");
    expect(component.sharedService.taxValue).toEqual(10);
    expect(component.sharedService.noOfItems).toEqual(1);
    expect(component.sharedService.cartSubTotal).toEqual(130);
    expect(component.sharedService.vatTax).toEqual(13);
    expect(component.vatTax).toEqual("10%");
    expect(component.sharedService.cartTotal).toEqual(143);
  });

  it("onVatTaxChange called -> non-percentage input: number", () => {
    // percentage input => 10 scenario
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
        total: 130,
      },
    ];
    component.vatTax = "10";
    component.onVatTaxChange("10");
    expect(component.sharedService.noOfItems).toEqual(1);
    expect(component.sharedService.cartSubTotal).toEqual(130);
    expect(component.sharedService.taxValue).toEqual(0);
    expect(component.sharedService.vatTax).toEqual(0);
    expect(component.vatTax).toEqual("10");
    expect(component.sharedService.cartTotal).toEqual(130);
  });

  it("onVatTaxChange called -> non-percentage input: text", fakeAsync(() => {
    // percentage input => 10 scenario
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
        total: 130,
      },
    ];
    component.vatTax = "10a";
    component.onVatTaxChange("10a");
    tick(1);
    fixture.detectChanges();
    expect(component.sharedService.noOfItems).toEqual(1);
    expect(component.sharedService.cartSubTotal).toEqual(130);
    expect(component.sharedService.taxValue).toEqual(0);
    expect(component.sharedService.vatTax).toEqual(0);
    expect(component.vatTax).toEqual("");
    expect(component.sharedService.cartTotal).toEqual(130);
  }));

  it("onDiscountTaxChange called -> percentage input", () => {
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
        total: 130,
      },
    ];
    component.discount = "10%";
    component.onDiscountTaxChange("10%");
    expect(component.sharedService.discountValue).toEqual(10);
    expect(component.sharedService.noOfItems).toEqual(1);
    expect(component.sharedService.cartSubTotal).toEqual(130);
    expect(component.sharedService.discount).toEqual(13);
    expect(component.discount).toEqual("10%");
    expect(component.sharedService.cartTotal).toEqual(117);
  });

  it("onDiscountTaxChange called -> non-percentage input: number", () => {
    // percentage input => 10 scenario
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
        total: 130,
      },
    ];
    component.discount = "10";
    component.onDiscountTaxChange("10");
    expect(component.sharedService.noOfItems).toEqual(1);
    expect(component.sharedService.cartSubTotal).toEqual(130);
    expect(component.sharedService.discountValue).toEqual(0);
    expect(component.sharedService.discount).toEqual(0);
    expect(component.discount).toEqual("10");
    expect(component.sharedService.cartTotal).toEqual(130);
  });

  it("onDiscountTaxChange called -> non-percentage input: text", fakeAsync(() => {
    // percentage input => 10 scenario
    component.sharedService.cartList = [
      {
        name: "comuter",
        price: 130,
        category: "computers",
        description: "",
        image: "comuter.jpg",
        quantity: 1,
        total: 130,
      },
    ];
    component.discount = "10a";
    component.onDiscountTaxChange("10a");
    tick(1);
    fixture.detectChanges();
    expect(component.sharedService.noOfItems).toEqual(1);
    expect(component.sharedService.cartSubTotal).toEqual(130);
    expect(component.sharedService.discountValue).toEqual(0);
    expect(component.sharedService.discount).toEqual(0);
    expect(component.discount).toEqual("");
    expect(component.sharedService.cartTotal).toEqual(130);
  }));
});
