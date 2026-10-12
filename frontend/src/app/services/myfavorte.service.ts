import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/Profile';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyfavorteService {
  private Url = environment.apiUrl + '/';
  constructor(private http: HttpClient) { }

  getmyfavorteproducts(data:number) {
    return this.http.post(this.Url + "favorteproducts" + "/" + data,{});
  }

  addtofavorte(data:any){
    return this.http.post(this.Url + "addtofavorte",data);
  }

  deleteFavorte(data:any){
    return this.http.post(this.Url + "deletefavorte",data);
  }

}
