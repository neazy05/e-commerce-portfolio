import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './../models/cart-item';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  api = environment.apiUrl;

  currentUserId: number = null;
  destinationAddress: string = "No Address Entered";
  currentMarketId: number = null;
  cartItems = new Array();
  totalPrice: number = 0;
  orderId: number = null;

  constructor(private http: HttpClient, private auth: AuthServiceService, private router: Router) { }

  addToCart(cartItem: CartItem) {
    if (this.currentUserId == null) {
      this.auth.getCurrentUser().subscribe(value => {
        this.currentUserId = value['id'];
      });
    }

    if (this.currentMarketId == null) {
      this.currentMarketId = cartItem.product.market_id;
    }

    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id == cartItem.product.id) {
        this.cartItems[i].count += 1;
        this.cartItems[i].price += cartItem.product.price;
        this.totalPrice += cartItem.product.price;
        return;
      }
    }

    cartItem.price = cartItem.product.price;
    this.totalPrice += cartItem.product.price;
    cartItem.count = 1;
    this.cartItems.push(cartItem);
  }

  getCartItems() {
    return this.cartItems;
  }

  submitCartAsOrder(address: string, totalPrice: number) {
    this.http.post(this.api + "/orders/add-order", {
      user_id: this.currentUserId,
      market_id: this.currentMarketId,
      address: address,
      is_accepted: 0,
      is_delivered: 0,
      total: totalPrice,
      is_paid: 0,
    }).subscribe(value => {
      this.orderId = value['id'];
      for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].count > 0 && this.cartItems[i].price > 0) {
          this.http.post(this.api + "/orders/add-order-product", {
            order_id: this.orderId,
            product_id: this.cartItems[i].product.id,
            quantity: this.cartItems[i].count,
          }).subscribe(value => {
            console.log(value);
            this.emptyCart();
            this.router.navigate(['allorders']);
          });
        }
      }
    });
  }

  submitCartAsGift(address: string, totalPrice: number) {
    var usersBalance = this.auth.getBalance().subscribe(value => {
      if (value['amout'] < this.totalPrice) {
        alert("Not enough money in account");
        return;
      } else {
        this.http.post(this.api + "/orders/add-order", {
          user_id: this.currentUserId,
          market_id: this.currentMarketId,
          address: address,
          total: totalPrice,
          is_paid: 1,
          is_accepted: 0,
          is_delivered: 0,
        }).subscribe(value => {
          this.orderId = value['id'];
          for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].count > 0 && this.cartItems[i].price > 0) {
              this.http.post(this.api + "/orders/add-order-product", {
                order_id: this.orderId,
                product_id: this.cartItems[i].product.id,
                quantity: this.cartItems[i].count,
                notes: "Has Paid"
              }).subscribe(value => {
                console.log("removing money...");
                this.auth.removeFromBalance(this.totalPrice).subscribe(value => {
                  this.emptyCart();
                  this.router.navigate(['allorders']);
                });
              });
            }
          }
        });
      }
    });
  }

  emptyCart() {
    this.currentUserId = null;
    this.destinationAddress = "No Address Entered";
    this.currentMarketId = null;
    this.cartItems = new Array();
    this.totalPrice = 0;
    this.orderId = null;
  }

}
