import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  title: string;
  todayDate = new Date();

  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any, private sharedService: SharedService) {
            this.title = 'Reciept';
        }


  ngOnInit() {
   }

   onClose() {
    this.dialogRef.close(false);
   }
}
