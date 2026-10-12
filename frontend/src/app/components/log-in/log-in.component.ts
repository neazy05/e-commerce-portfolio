import { Component, OnInit } from '@angular/core';
import {Profile} from '../../models/Profile';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  model=new Profile();
  constructor(
    private authService: AuthServiceService,
    private router: Router,

  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {

  }


  userLogin() {
    console.log(this.model.email);
    this.authService.login(this.model).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.authService.prepareUserData();
        this.router.navigate(['/home']);
      }

    );
  }


}
