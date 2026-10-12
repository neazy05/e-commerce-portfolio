import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from "../services/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(public auth: AuthServiceService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.auth.isLoggedIn() && this.auth.currentUser && this.auth.currentUser.account_type=="admin") {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {returnUrl: state.url}
      });
      return false;
    }
  }
}
