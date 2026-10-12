import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthServiceService} from "../../../services/auth-service.service";
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  model=new Profile();
  constructor(
    private authService: AuthServiceService,
    private router: Router,
  ) {
    if (this.authService.isLoggedIn()) {
      //this.router.navigate(['/allcategories']);
    }
  }

  ngOnInit(): void {

  }


  userLogin() {

    this.authService.login(this.model).subscribe(
      res => {
        window.location.reload();
        localStorage.setItem("token", res.token);
        this.authService.prepareUserData();


      }

    );

    this.router.navigate(['/allcategories']);
  }


}
