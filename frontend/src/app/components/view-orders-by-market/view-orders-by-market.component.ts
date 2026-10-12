import { DatePipe } from '@angular/common';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Profile } from 'src/app/models/Profile';
import { OrderService } from './../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/order';

@Component({
  selector: 'app-view-orders-by-market',
  templateUrl: './view-orders-by-market.component.html',
  styleUrls: ['./view-orders-by-market.component.css']
})
export class ViewOrdersByMarketComponent implements OnInit {
  orders: order[];
  profile: Profile;
  market_id: number;
  doneLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private ordersService: OrderService, private auth: AuthServiceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(value => {
      this.profile = value;
      this.ordersService.getMarketIdByUserId(this.profile.id).subscribe(value => {
        this.market_id = value['market_id'];
        this.ordersService.getOrdersByMarket(this.market_id).subscribe(value => {
          this.orders = value['orders'];
          this.orders.forEach(order => {
            order['created'] = this.datePipe.transform(order.created_at, "dd/MM/yy - hh:mm:ss a");
          });
          this.orders.forEach(order => {
            this.ordersService.getUserName(order.user_id).subscribe(value => {
              order['user'] = value['name'];
            });
          });
          console.log(this.orders[0].created_at);
          console.log(this.datePipe.transform(this.orders[0].created_at));
          console.log((this.orders[0].created_at as Date).getHours());
          this.doneLoaded = true;
        });
      });
    });
  }

  acceptOrder(id) {
    this.ordersService.acceptOrder(id).subscribe(value => {
      alert(value['msg']);
      window.location.reload();
    });
  }

  rejectOrder(id) {
    this.ordersService.rejectOrder(id).subscribe(value => {
      alert(value['msg']);
      window.location.reload();
    });
  }

}
