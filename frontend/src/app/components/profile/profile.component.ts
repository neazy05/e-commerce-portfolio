import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import {ActivatedRoute} from "@angular/router";
import {MoneyService} from '../../services/money.service';
import {SharedService} from '../../services/shared.service';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile=new  Profile();
  constructor( private authService: AuthServiceService,private  moneyService:MoneyService,public sharedService:SharedService,public datePipe: DatePipe,
               private route: ActivatedRoute) {
    if (route.snapshot.data.profile) {

      this.profile = route.snapshot.data.profile;
      this.moneyService.getUserBalance(this.profile.id).subscribe(value => {
        this.profile.balance = value['balance'];
      });

    }
  }



  ngOnInit() {
  }




}

