import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from "../../../services/auth-service.service";
import {Profile} from '../../../models/Profile';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 profile:Profile;
  constructor(private authService: AuthServiceService,
    private router: Router) {

      if (this.authService.isLoggedIn()) {
      this.router.navigate(['/allcategories']);
    }}


    ngOnInit() {
    this.profile = new Profile();


    }
    register() {
this.profile.account_type="user";
      this.authService
        .register(this.profile)
        .subscribe(value => {
          this.authService.login(this.profile).subscribe(
            resToken => {
              localStorage.setItem("token", resToken.token);
              this.authService.prepareUserData();
              this.authService.getCurrentUser().subscribe(
                resUser => {
                  this.authService.currentUser = resUser;
                }
              );
              this.router.navigate(['/allcategories']);
            },

          );
        });
    }}
