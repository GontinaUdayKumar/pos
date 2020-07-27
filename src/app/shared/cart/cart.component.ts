import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { MatDialog } from '@angular/material';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { ReceiptComponent } from './../receipt/receipt.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subTotal;
  vatTax;
  discount;
  total;
  noOfItems=0;

  constructor(public sharedService: SharedService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  cancelSaleClick() {
    this.sharedService.resetCartData();
    this.vatTax = 0;
    this.discount = 0;
  }

  processSaleClick() {
    this.openRecieptPopup();
  }

  openRecieptPopup(): void {
    const data = '';
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '800px',
      disableClose: true,
      data: {
        title: 'Reciept',
        data,
        component: ReceiptComponent,
        actionButtons: this.setDialogButtons()
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Callback');
      this.sharedService.resetCartData();
      this.vatTax = 0;
      this.discount = 0;
    });
  }

  setDialogButtons(): object[] {
    return [{
      title: 'Close',
      clickHandler: (dialogRef) => {
        dialogRef.close();
      }
    }];
  }

  deleteItemEvent(item) {
    this.sharedService.cartList.splice(this.sharedService.cartList.indexOf(item), 1);
    this.sharedService.calculateCartOrder();
  }

  onVatTaxChange(taxValue) {
    if((taxValue.indexOf('%') === (taxValue.length - 1)) && taxValue.length > 1) {
            this.sharedService.taxValue = +taxValue.slice(0,-1);
            this.sharedService.calculateCartOrder();
    } else if (isNaN(taxValue)) {
      setTimeout(() => {
        this.vatTax = '';
      },0);
        this.sharedService.taxValue = 0;
        this.sharedService.calculateCartOrder();
    } else {
      this.sharedService.taxValue = 0;
      this.sharedService.calculateCartOrder();
    }

  }

  onDiscountTaxChange(discountValue) {
    if ((discountValue.indexOf('%') === (discountValue.length - 1)) && discountValue.length > 1) {
      this.sharedService.discountValue = +discountValue.slice(0,-1);
      this.sharedService.calculateCartOrder();
    } else if (isNaN(discountValue)) {
      setTimeout(() => {
        this.discount = '';
      },0);
      this.sharedService.discountValue = 0;
      this.sharedService.calculateCartOrder();
    } else {
      this.sharedService.discountValue = 0;
      this.sharedService.calculateCartOrder();
    }
  }

}
