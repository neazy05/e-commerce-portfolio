import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  constructor(private http: HttpClient) { }

  api = environment.apiUrl;

  //new new new new new new new new new new new new new new new
  getOwnerUsernameByMarketId(market_id: number) {
    return this.http.get(this.api + "/market/" + market_id);
  }

  getProductsOfMarket(market_id: number) {
    return this.http.get(this.api + "/market/products/" + market_id);
  }

  getAllMarket() {

    return this.http.get(this.api + "/markets");
  }
}
