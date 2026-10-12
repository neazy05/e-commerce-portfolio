import { DatePipe } from '@angular/common';
import { OrderService } from './../../services/order.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DeliveryService } from './../../services/delivery.service';
import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/order';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-delivery-all-orders',
  templateUrl: './delivery-all-orders.component.html',
  styleUrls: ['./delivery-all-orders.component.css']
})
export class DeliveryAllOrdersComponent implements OnInit {
  orders: order[];
  profile: Profile;

  constructor(private deliveryService: DeliveryService, private auth: AuthServiceService, private ordersService: OrderService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(value => {
      this.profile = value;
      this.deliveryService.getOrdersByDeliverer(this.profile.id).subscribe(value => {
        console.log(value);
        this.orders = value['orders'];
        this.orders.forEach(order => {
          if (order.deliverer_id != null) {
            this.ordersService.getDelivererName(order.deliverer_id).subscribe(value => {
              order.deliverer = value['name'];
            });
          }
        });
        this.orders.forEach(order => {
          this.ordersService.getUserName(order.user_id).subscribe(value => {
            order['user'] = value['name'];
            // console.log(order.user_id);
            // console.log(value);
          });
        });
      });
    });
  }

  confirmDelivery(order_id, deliverer_id) {
    this.deliveryService.confirmDelivery(order_id, deliverer_id).subscribe(value => {
      console.log(value);
      window.location.reload();
    });
  }

}
