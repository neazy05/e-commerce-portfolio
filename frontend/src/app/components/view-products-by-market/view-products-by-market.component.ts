import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { MarketsService } from 'src/app/services/markets.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-view-products-by-market',
  templateUrl: './view-products-by-market.component.html',
  styleUrls: ['./view-products-by-market.component.css']
})
export class ViewProductsByMarketComponent implements OnInit {
  products: Product[];
  marketOwner: string;
  productCount: number;
  averagePrice: number;

  constructor(private marketsService: MarketsService, private route: ActivatedRoute, private cartService: CartService, private location: Location ,public sharedService:SharedService) { }

  ngOnInit(): void {
    this.marketsService.getProductsOfMarket(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.products = value['products'];
      console.log(this.products);
      this.productCount = this.products.length;
      var sum = 0;
      for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].price;
        console.log(sum);
      }
      this.averagePrice = sum / this.products.length;
    });
    this.marketsService.getOwnerUsernameByMarketId(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.marketOwner = value['market'];
      console.log(this.marketOwner);
    });
  }

  addToCart(product_id: number) {
    var selectedProduct;
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product_id) {
        selectedProduct = this.products[i];
      }
    }
    if (this.cartService.getCartItems().length > 0) {
      if (this.cartService.getCartItems()[0].product.market_id == selectedProduct.market_id) {
        var cartItem = new CartItem();
        cartItem.product = selectedProduct;
        this.cartService.addToCart(cartItem);
        console.log(this.cartService.getCartItems());
      } else {
        alert("Must fill the cart from one market");
      }
    } else {
      var cartItem = new CartItem();
      cartItem.product = selectedProduct;
      this.cartService.addToCart(cartItem);
      console.log(this.cartService.getCartItems());
    }
  }


  navigateBack() {
    this.location.back();
  }

}
