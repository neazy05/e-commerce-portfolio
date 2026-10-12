import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { order } from "../models/order";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private orderUrl = environment.apiUrl;
  getOrdersByUser(id: number): Observable<any> {

    return this.http.get<any>(this.orderUrl + "/orders/user/" + id)

  }


  addOrder(order: order) {
    return this.http.post(this.orderUrl + "/orders/add-order", { user_id: order.user_id, market_id: order.market_id, deliverer_id: order.deliverer_id, deliver_scheduel: order.deliver_scheduel, address: order.address, is_accepted: order.is_accepted, is_delivered: order.is_delivered });
  }

  deleteOrder(id: number) {

    return this.http.post(this.orderUrl + "/orders/delete-order/" + id, null);

  }

  getOrdersByDeliverer(id: number) {

    return this.http.get<any>(this.orderUrl + "/deliverer/orders/" + id)
  }


  getProductsByOrder(order_id: number) {
    return this.http.get(this.orderUrl + "/deliverer/products/order/" + order_id);
  }


  confirmDelivery(order_id: number, deliverer_id: number) {
    return this.http.post(this.orderUrl + "/deliverer/confirm/" + order_id + "/" + deliverer_id, null);
  }

  getActiveOrder(deliverer_id: number) {
    return this.http.get(this.orderUrl + "/deliverer/order/active/" + deliverer_id);


  }

  getAllOrders() {
    return this.http.get(this.orderUrl + "/admin/orders/");

  }


  getNonDeliveredOrders() {
    return this.http.get(this.orderUrl + "/admin/orders/active");



  }



  getOrderWithoutDelivery() {
    return this.http.get(this.orderUrl + "/admin/orders/no-deliverer");



  }


  assignDeliverer(orderId: number, delivererId: number) {
    return this.http.post(this.orderUrl + "/admin/order/assign-deliverer/" + orderId + "/" + delivererId, {});
  }





  acceptOrder(id: number) {
    return this.http.post(this.orderUrl + "/market/accept-order/" + id, {});
  }




  rejectOrder(id: number) {
    return this.http.post(this.orderUrl + "/market/reject-order/" + id, {});
  }




  getOrdersByMarket(market_id: number) {
    return this.http.get(this.orderUrl + "/market/orders/" + market_id);
  }




  rateDeliverer(user_id: number, deliverer_id: number, rate: number) {
    return this.http.post(this.orderUrl + "/rate/deliverer/" + user_id + "/" + deliverer_id + "/" + rate, {});
  }

  averageRatingDeliverer(product_id: number) {
    return this.http.get(this.orderUrl + "/rate/deliverer/avg/" + product_id);
  }
  /// new new  new new  new new  new new  new new  new new  new new
  getDelivererName($deliverer_id) {
    return this.http.get(this.orderUrl + "/deliverer/name/" + $deliverer_id);
  }

  getUserName($user_id) {
    return this.http.get(this.orderUrl + "/user/name/" + $user_id);
  }

  getMarketIdByUserId($user_id) {
    return this.http.get(this.orderUrl + "/market/id/user/" + $user_id);
  }

}
