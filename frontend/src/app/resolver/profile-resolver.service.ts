import { Injectable } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Profile } from 'src/app/models/Profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any>{

  constructor(private authser:AuthServiceService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log("helooo"+this.authser.getUserProfile().subscribe(res=>{res.id}));
    return this.authser.getUserProfile();


}
}