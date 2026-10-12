import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MoneyService } from '../../services/money.service';
import{Profile} from '../../models/Profile';
@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css']
})
export class TransComponent implements OnInit {
  selected: number;
  amount: number;
  profiles : Profile[];
  me : number = 6;
  constructor( private moneyService: MoneyService ,private auth : AuthServiceService) {
    this.auth.getAllUser().subscribe(value => {
      this.profiles = value['user'];
      this.profiles.forEach(profile => {
        this.auth.getByUserId(profile.id).subscribe(value1 => profile.username = value1['user']);
      });
      console.log(this.profiles)
    });
  }

  ngOnInit(): void {
  }

  deductMony() {
    this.moneyService.transferMoney(this.me ,this.selected, this.amount).subscribe(value => {
      console.log(value['msg']);
      alert(value['msg']);
    });

  }

}
