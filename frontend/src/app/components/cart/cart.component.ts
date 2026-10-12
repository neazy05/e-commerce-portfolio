import { Router } from '@angular/router';
import { MarketsService } from 'src/app/services/markets.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  totalPrice: number;
  address: string = "";
  userBalance: number = 0;
  marketName: string;

  constructor(private cartService: CartService, private auth: AuthServiceService, private marketService: MarketsService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.totalPrice;
    console.log(this.cartItems);
    this.auth.getBalance().subscribe(value => {
      this.userBalance = value['amout'];
      console.log(value['amout']);
    });
    if (this.cartItems.length > 0) {
      this.marketService.getOwnerUsernameByMarketId(this.cartItems[0].product.market_id).subscribe(value => {
        this.marketName = value['market'];
        console.log(this.marketName);
      });
    }
  }

  submitCartAsOrder() {
    if (this.totalPrice == 0) {
      alert("Add something to cart");
      return
    }
    if (this.address == "") {
      alert("Please enter an address");
      return;
    }
    this.cartService.submitCartAsOrder(this.address, this.totalPrice);
  }

  submitCartAsGift() {
    if (this.totalPrice == 0) {
      alert("Add something to cart");
      return
    }
    if (this.address == "") {
      alert("Please enter an address");
      return;
    }
    if (this.userBalance < this.totalPrice) {
      alert("You don't have enough money in account");
      return;
    }
    // this.totalPrice = 0;
    // this.cartItems.forEach(item => {
    //   this.totalPrice += item.price;
    // });
    console.log(this.cartItems);
    this.cartService.submitCartAsGift(this.address, this.totalPrice);
  }

  changeTotal(product_id) {
    this.cartItems.forEach(item => {
      if (item.product.id == product_id) {
        if (item.count == 0) {
          item.price = 0;
        } else {
          item.price = item.count * item.product.price;
        }
      }
    });
    this.totalPrice = 0;
    this.cartItems.forEach(item => {
      this.totalPrice += item.price;
    });
    if (this.totalPrice <= 0) {
      window.location.reload();
    }
  }

  removeItem(id) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id == id) {
        this.cartItems[i].count = 0;
        this.cartItems[i].price = 0;
        this.cartService.cartItems[i].count = 0;
        this.cartService.cartItems[i].price = 0;
      }
    }
    this.totalPrice = 0;
    this.cartService.totalPrice = 0;
    this.cartItems.forEach(item => {
      this.totalPrice += item.price;
      this.cartService.totalPrice += item.price;
    });
    console.log(this.totalPrice);
    if (this.totalPrice == 0) {
      window.location.reload();
    }
  }

}
