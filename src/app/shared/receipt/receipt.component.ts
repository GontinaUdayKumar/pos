import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../service/shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReceiptComponent implements OnInit {
  moment = moment;
  todayDate = moment(new Date()).format('MM-DD-YYYY HH:mm:ss');

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

}
