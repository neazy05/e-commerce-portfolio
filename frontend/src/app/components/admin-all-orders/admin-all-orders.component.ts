import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { order } from '../../models/order';
import {OrderService} from '../../services/order.service';
@Component({
  selector: 'app-admin-all-orders',
  templateUrl: './admin-all-orders.component.html',
  styleUrls: ['./admin-all-orders.component.css']
})
export class AdminAllOrdersComponent implements OnInit {
 orders:order[];

  constructor(private orderservice:OrderService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.orderservice.getAllOrders().subscribe(value =>{ this.orders = value['orders'];
    });

  }

}
