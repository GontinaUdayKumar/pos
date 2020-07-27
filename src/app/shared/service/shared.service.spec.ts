import { TestBed, getTestBed } from "@angular/core/testing";

import { SharedService } from "./shared.service";
import { Product } from "src/app/dashboard/model/product.model";

fdescribe("SharedService", () => {
  let injector: TestBed;
  let service: SharedService;
  const productItem: Product = {
    name: "comuter",
    price: 130,
    category: "computers",
    description: "",
    image: "comuter.jpg",
    quantity: 1,
    total: 130,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService],
    });
    injector = getTestBed();
    service = injector.get(SharedService);
  });

  it("should be created SharedService", () => {
    expect(service).toBeTruthy();
  });

  it("calculateCartOrder called", () => {
    service.cartList = [productItem];
    service.taxValue = 10;
    service.discountValue = 10;
    service.calculateCartOrder();
    expect(service.cartList).toContain(productItem);
    expect(service.cartSubTotal).toEqual(130);
    expect(service.vatTax).toEqual(13);
    expect(service.discount).toEqual(13);
    expect(service.cartTotal).toEqual(130);
  });
  it("resetCartData called", () => {
    service.cartList = [productItem];
    service.resetCartData();
    expect(service.cartList.length).toBe(0);
    expect(service.cartSubTotal).toEqual(0);
    expect(service.vatTax).toEqual(0);
    expect(service.discount).toEqual(0);
    expect(service.cartTotal).toEqual(0);
    expect(service.taxValue).toEqual(0);
    expect(service.discountValue).toEqual(0);
    expect(service.noOfItems).toEqual(0);
  });
});
