import { DatePipe } from '@angular/common';
import { MoneyService } from './../../services/money.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generated-coupons',
  templateUrl: './generated-coupons.component.html',
  styleUrls: ['./generated-coupons.component.css']
})
export class GeneratedCouponsComponent implements OnInit {
  codes: Code[];

  constructor(private moneyService: MoneyService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.moneyService.getAllCodes().subscribe(value => {
      this.codes = value['codes'];
      // console.log(value['codes']);
    });
  }

}

class Code {
  id: number;
  code: string;
  amount: number;
  created_at: Date;

  constructor() { }
}
