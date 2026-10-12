import { MoneyService } from './../../services/money.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styleUrls: ['./apply-coupon.component.css']
})
export class ApplyCouponComponent implements OnInit {
  profile: Profile;
  code: string;
  balance: number;

  constructor(private auth: AuthServiceService, private moneyService: MoneyService) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(value => {
      this.profile = value;
      // console.log(value);
    });
    this.auth.getBalance().subscribe(value => {
      this.balance = value['amout'];
      // console.log(value);
    });
  }

  applyCoupon() {
    if (this.code != "") {
      this.moneyService.addMoney(this.code, this.profile.id).subscribe(value => {
        console.log(value);
        this.code = "";
        this.balance = value['balance'];
      })
    }
  }

}
