import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { SharedService } from "src/app/shared/service/shared.service";
import { DashboardService } from "../service/dashboard.service";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { of } from "rxjs";
import { cartData } from "../data/data";
import { Product } from '../model/product.model';

fdescribe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const productItem: Product = {
    name: "comuter",
    price: 130,
    category: "computers",
    description: "",
    image: "comuter.jpg",
    quantity: 1
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule.forRoot()],
      declarations: [DashboardComponent],
      providers: [DashboardService, SharedService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create DashboardComponent", () => {
    expect(component).toBeTruthy();
  });

  it("getProductsList called", inject(
    [DashboardService],
    (dashboardService: DashboardService) => {
      spyOn(dashboardService, "getProductsList").and.callFake(() => {
        return of(cartData());
      });
      component.getProductsList();
      expect(component.productsList.length).toBe(19);
    }
  ));

  it("productClicked called -> empty cart", () => {
    //case 1 empty cart
    component.sharedService.cartList = [];
    component.productClicked(productItem);
    expect(component.sharedService.cartList[0]['quantity']).toBe(1);
    expect(component.sharedService.cartList[0]['total']).toBe(130);
    expect(component.sharedService.cartList).toContain(productItem);
    expect(component.sharedService.noOfItems).toBe(1);
    expect(component.sharedService.cartSubTotal).toBe(130);
    expect(component.sharedService.cartTotal).toBe(130);
    expect(component.sharedService.vatTax).toBe(0);
    expect(component.sharedService.discount).toBe(0);
  });

  it("productClicked called -> non-empty cart", () => {
    //case 2 non-empty cart
    component.sharedService.cartList = [{
      name: "comuter",
      price: 130,
      category: "computers",
      description: "",
      image: "comuter.jpg",
      quantity: 1
    }];
    component.productClicked(productItem);
    expect(component.sharedService.cartList[0]['quantity']).toBe(2);
    expect(component.sharedService.cartList[0]['total']).toBe(260);
    expect(component.sharedService.noOfItems).toBe(2);
    expect(component.sharedService.cartSubTotal).toBe(260);
    expect(component.sharedService.cartTotal).toBe(260);
    expect(component.sharedService.vatTax).toBe(0);
    expect(component.sharedService.discount).toBe(0);
  });
});
