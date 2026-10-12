import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {order} from '../../models/order';

@Component({
  selector: 'app-admin-orders-without-delivery',
  templateUrl: './admin-orders-without-delivery.component.html',
  styleUrls: ['./admin-orders-without-delivery.component.css']
})
export class AdminOrdersWithoutDeliveryComponent implements OnInit {
  orders:order[];
  constructor(private orderService:OrderService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.orderService.getOrderWithoutDelivery().subscribe(value => {this.orders=value['orders']
    console.log(this.orders);
    });
  }


}
