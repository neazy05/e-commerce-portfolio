import { DatePipe } from '@angular/common';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { OrderService } from './../../services/order.service';
import { Profile } from './../../models/Profile';
import { order } from './../../models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-all-orders',
  templateUrl: './user-all-orders.component.html',
  styleUrls: ['./user-all-orders.component.css']
})
export class UserAllOrdersComponent implements OnInit {
  orders: order[];
  profile: Profile;

  constructor(private ordersService: OrderService, private auth: AuthServiceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(value => {
      this.profile = value;
      this.ordersService.getOrdersByUser(this.profile.id).subscribe((value: any) => {
        this.orders = value['orders'];
        this.orders.forEach(order => {
          if (order.deliverer_id != null) {
            this.ordersService.getDelivererName(order.deliverer_id).subscribe(value => {
              order.deliverer = value['name'];
            });
          }
        });
      });
    });
  }

  // getDelivererName(id) {
  //   if (id != null) {
  //     this.ordersService.getDelivererName(id).subscribe((value: any) => {
  //       console.log(value['name']);
  //       return value['name'];
  //     });
  //   }
  // }

}
