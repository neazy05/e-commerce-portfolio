import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Profile } from '../models/Profile';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router) { }


  private authUrl = environment.apiUrl + '/auth/';
  public username: string | undefined;
  public cart: any | undefined;
  public cartItem: any | undefined;
  public profile: any | undefined;
  public currentUser: any | undefined;

  uploadphoto(photo:any){
    return this.http.post(this.authUrl + "uploadphoto" , photo);
  }

  updateProfile(data: any): Observable<any> {


    return this.http.post<void>(this.authUrl + "update", data);

  }

  register(data: any): Observable<void> {


    return this.http.post<void>(this.authUrl + "register", data);

  }

  login(data: any): Observable<any> {

    return this.http.post<any>(this.authUrl + "login", data);

  }


  logout() {


    return this.http.post(this.authUrl + "logout", null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  getUserProfile(): Observable<any> {

    return this.http.get<any>(this.authUrl + "profile");

  }

  getBalance(): Observable<any> {

    return this.http.get<any>(this.authUrl + "getBalance");

  }

  removeFromBalance(amount: number): Observable<any> {

    return this.http.post<any>(this.authUrl + "removeMoney/" + amount, {});

  }

  getCurrentUser(): Observable<any> {

    return this.http.get<any>(this.authUrl + "getUser");

  }
  getToken() {
    return localStorage.getItem("token");
  }
  refresh(): Observable<any> {

    return this.http.post<any>(this.authUrl + "refresh", null);

  }

  refresh_token() {
    this.refresh().subscribe(res => {
      localStorage.setItem('token', res.token);
    })
  }

  getAdresses(): Observable<any> {
    return this.http.get<any>(this.authUrl + "getAdresses");
  }

  getCity(country_id: number): Observable<any> {
    return this.http.get<any>(this.authUrl + "getCity/" + country_id);

  }

  getmarketid() {
    return this.http.get<any>(this.authUrl + "getmarketid/");
  }

  getCounty(City_id: number): Observable<any> {
    return this.http.get<any>(this.authUrl + "getCounty/" + City_id);

  }

  getCountry(): Observable<any> {
    return this.http.get<any>(this.authUrl + "getCountry");

  }

  prepareUserData() {
    if (this.isLoggedIn()) {
      this.getCurrentUser().subscribe(resUser => {
        this.currentUser = resUser;
      });

    }
  }




}
