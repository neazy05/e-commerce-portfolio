import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OrderProduct } from './../../models/order-product';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderProducts: OrderProduct[];
  orderId: number = null;
  totalPrice: number = 0;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.orderId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.orderService.getProductsByOrder(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.orderProducts = value['products'];
      console.log(this.orderProducts);
      this.getTotalPrice();
    });
  }

  navigateBack() {
    this.location.back();
  }

  getTotalPrice() {
    this.orderProducts.forEach(item => {
      this.totalPrice += item.total_price;
    });
  }

}
