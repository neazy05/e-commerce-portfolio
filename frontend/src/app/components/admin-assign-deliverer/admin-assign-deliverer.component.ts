import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-assign-deliverer',
  templateUrl: './admin-assign-deliverer.component.html',
  styleUrls: ['./admin-assign-deliverer.component.css']
})
export class AdminAssignDelivererComponent implements OnInit {
  items: object[];
  order_id: number;
  constructor(private deliveryService: DeliveryService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.deliveryService.getFreeDeliveres().subscribe(value => this.items = value['user']);
    this.route.queryParams.subscribe(params => {
      this.order_id = params['id'];
    });
  }


  RowSelected(item: any) {
    this.deliveryService.assignDeliverer(this.order_id, item.deliverer.id).subscribe(value => console.log(value))
    this.router.navigate(['admin/orders-without-delivery']);
  }

  navigateBack() {
    this.location.back();
  }
}
