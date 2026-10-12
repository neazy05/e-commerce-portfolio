import { Component, OnInit } from '@angular/core';
import { Market } from '../../models/Market';
import { MarketsService } from '../../services/markets.service';
import { MoneyService } from '../../services/money.service';
import { forEach } from '@angular-devkit/schematics';
@Component({
  selector: 'app-admin-deduct-money',
  templateUrl: './admin-deduct-money.component.html',
  styleUrls: ['./admin-deduct-money.component.css']
})
export class AdminDeductMoneyComponent implements OnInit {
  markets: Market[];
  selected: number;
  amount: number;
  constructor(private marketsService: MarketsService, private moneyService: MoneyService) {
    this.marketsService.getAllMarket().subscribe(value => {
      this.markets = value['market'];
      this.markets.forEach(market => {
        this.marketsService.getOwnerUsernameByMarketId(market.id).subscribe(value1 => market.market_name = value1['market']);
      });
      // console.log(this.markets)
    });

  }

  ngOnInit(): void {


  }
  deductMony() {
    this.moneyService.deductMoney(this.selected, this.amount).subscribe(value => {
      console.log(value['msg']);
      alert(value['msg']);
    });

  }

}
