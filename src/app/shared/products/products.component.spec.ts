import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule, MatDividerModule } from "@angular/material";
import { SharedService } from "../service/shared.service";
import { CartComponent } from "../cart/cart.component";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { Product } from "src/app/dashboard/model/product.model";

fdescribe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
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
      declarations: [CartComponent, CartItemComponent, ProductsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create ProductsComponent", () => {
    expect(component).toBeTruthy();
  });

  it("imageClicked called", () => {
    spyOn(component.productClicked, "emit");
    component.imageClicked(productItem);
    expect(component.productClicked.emit).toHaveBeenCalled();
  });
});
