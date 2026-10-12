import { OrderService } from './../../services/order.service';
import { DatePipe } from '@angular/common';
import { ProductsService } from './../../services/products.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-view-market-products',
  templateUrl: './view-market-products.component.html',
  styleUrls: ['./view-market-products.component.css']
})
export class ViewMarketProductsComponent implements OnInit {
  products: Product[];
  profile: Profile;
  market_id: number;

  constructor(private auth: AuthServiceService, private productsService: ProductsService, private datePipe: DatePipe, private ordersService: OrderService) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(value => {
      this.profile = value;
      this.ordersService.getMarketIdByUserId(this.profile.id).subscribe(value => {
        this.market_id = value['market_id'];
        this.productsService.getProductsByMarket(this.market_id).subscribe(value => {
          console.log(value['products']);
          this.products = value['products'];
        });
      });
    });
  }

  deleteProduct(id) {
    this.productsService.deleteProduct(id).subscribe(value => {
      console.log(value);
      window.location.reload();
    })
  }

}
