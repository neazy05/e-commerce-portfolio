import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {order} from '../../models/order';

@Component({
  selector: 'app-admin-non-delivered-orders',
  templateUrl: './admin-non-delivered-orders.component.html',
  styleUrls: ['./admin-non-delivered-orders.component.css']
})
export class AdminNonDeliveredOrdersComponent implements OnInit {
 orders:order[]
  constructor(private  orderService:OrderService, private datePipe: DatePipe) { }

  ngOnInit(): void {
   this.orderService.getNonDeliveredOrders().subscribe(value =>{ this.orders=value['orders']

   })
  }

}
