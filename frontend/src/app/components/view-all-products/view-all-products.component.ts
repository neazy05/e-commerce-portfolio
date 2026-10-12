import { CartService } from './../../services/cart.service';
import { MarketsService } from './../../services/markets.service';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import {SharedService} from '../../services/shared.service';



@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService, private marketsService: MarketsService, private cartService: CartService,private sharedService:SharedService) { }

  ngOnInit(): void {

    this.productsService.getAllProducts().subscribe(value => {
      this.products = value['products'];
      this.products.forEach(p => {
        //  this.getMarketName();
        this.marketsService.getOwnerUsernameByMarketId(p['market_id']).subscribe(value => {
          p['owner'] = value['market'];
          console.log(p['owner']);
        });
      });
    });
  }

  getMarketName(market_id) {

  }

  addToCart(product: Product) {
    if (this.cartService.getCartItems().length > 0) {
      if (this.cartService.getCartItems()[0].product.market_id == product.market_id) {
        var cartItem = new CartItem();
        cartItem.product = product;
        this.cartService.addToCart(cartItem);
        console.log(this.cartService.getCartItems());
      } else {
        alert("Must fill the cart from one market");
      }
    } else {
      var cartItem = new CartItem();
      cartItem.product = product;
      this.cartService.addToCart(cartItem);
      console.log(this.cartService.getCartItems());
    }
  }

}
