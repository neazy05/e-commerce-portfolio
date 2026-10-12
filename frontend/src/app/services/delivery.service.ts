import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrdersByDeliverer(user_id: number) {
    return this.http.get(this.api + "/deliverer/orders/user/" + user_id);
  }

  getFreeDeliveres() {
    return this.http.get(this.api + "/deliverer/getDelivererNonBusy");
  }
  assignDeliverer(order_id: number, deliverer_id: number) {
    return this.http.post(this.api + "/admin/order/assign-deliverer/" + order_id + "/" + deliverer_id, null);
  }


  confirmDelivery(order_id: number, deliverer_id: number) {
    return this.http.post(this.api + "/deliverer/confirm/" + order_id + "/" + deliverer_id, {});
  }

}
