import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';
import {Profile} from '../../models/Profile';

@Component({
  selector: 'app-sign-up-owner',
  templateUrl: './sign-up-owner.component.html',
  styleUrls: ['./sign-up-owner.component.css']
})
export class SignUpOwnerComponent implements OnInit {
  profile:Profile;
  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.profile = new Profile();
  }

  register() {
    this.authService
      .register(this.profile)
      .subscribe(value => {
        window.alert("Create user");
      });
  }

}
