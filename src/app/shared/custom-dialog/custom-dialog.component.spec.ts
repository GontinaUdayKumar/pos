import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomDialogComponent } from "./custom-dialog.component";
import { DynamicComponentLoader } from "../dynamic-component-loader/dynamicComponentLoader";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatDialogModule,
  MatDividerModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { SharedService } from "../service/shared.service";

fdescribe("CustomDialogComponent", () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;
  const dialogMock = {
    close: () => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDialogComponent, DynamicComponentLoader],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatDividerModule,
      ],
      providers: [
        SharedService,
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create CustomDialogComponent", () => {
    expect(component).toBeTruthy();
  });

  it("onClose called", () => {
    const spy = spyOn(component.dialogRef, "close").and.callThrough();
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });
});
