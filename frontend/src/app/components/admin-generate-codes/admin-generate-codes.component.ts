import { Router } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { MoneyService } from '../../services/money.service';

@Component({
  selector: 'app-admin-generate-codes',
  templateUrl: './admin-generate-codes.component.html',
  styleUrls: ['./admin-generate-codes.component.css']
})
export class AdminGenerateCodesComponent implements OnInit {
  value: number;
  count: number;

  constructor(private moneyService: MoneyService, private router: Router) { }

  ngOnInit(): void {
    this.value;
    this.count;
  }

  ngOnChanges(): void {
  }

  callMe() {
    this.moneyService.generateCode(this.count, this.value).subscribe(value1 => {
      console.log(value1);
      this.router.navigate(['/admin/generated-coupons']);
    });
  }

}
