import { Profile } from './models/Profile';
import { AuthServiceService } from './services/auth-service.service';
import { MoneyService } from './services/money.service';
import { Category } from './models/category';
import { CategoriesService } from './services/categories.service';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-laravel-test';
  msg: string = "dont mind me";
  constructor(private http: HttpClient, private auth: AuthServiceService, private router: Router) {

  };

  product: Product = new Product();
  isLoggedIn: boolean;
  profile: Profile = new Profile();

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.append('user_id', '1');
    var user_id = 2;

    var p: Product = new Product();

    this.isLoggedIn = this.auth.isLoggedIn();

    this.auth.getCurrentUser().subscribe(value => {
      this.profile = value;
    });
  };

  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('opened');
  }

  logOut() {
    this.auth.logout().subscribe(value => {
      window.location.reload();
      localStorage.removeItem("token");

    });
    this.router.navigate(["/login"]);
  }

}
