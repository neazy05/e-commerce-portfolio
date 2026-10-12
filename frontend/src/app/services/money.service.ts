import { Injectable } from '@angular/core';
import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor(private http: HttpClient) { }

  api = environment.apiUrl;

  payForOrder(userID: number, price:number, marketID:number) {
    return this.http.post(this.api + "/payment/pay/" + userID + "/" + price + "/" + marketID, {});
  }

  transferMoney(user1ID: number, user2ID: number, amount: number) {
    return this.http.post(this.api + "/payment/transfer/" + user1ID + "/" + user2ID + "/" + amount, {});
  }

  addMoney(code: string, userID: number) {
    return this.http.post(this.api + "/payment/add/" + code + "/" + userID, {});
  }

  getUserBalance(userID: number) {
    return this.http.post(this.api + "/payment/user-balance/" + userID, {});
  }

  generateCode(count: number, amount: number) {
    return this.http.post(this.api + "/admin/qr/generate/" + count + "/" + amount, {});
  }

  deductMoney(marketID: number, amount: number) {
    return this.http.post(this.api + "/admin/money/deduct/" + marketID + "/" + amount, {});
  }

  getAllCodes() {
    return this.http.get(this.api + "/admin/allcodes");
  }

}
