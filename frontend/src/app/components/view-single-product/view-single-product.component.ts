import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { MarketsService } from 'src/app/services/markets.service';
import { Location } from '@angular/common';
import {SharedService} from '../../services/shared.service';
import {MyfavorteService} from '../../services/myfavorte.service';
import {AuthServiceService} from '../../services/auth-service.service';
import {Profile} from '../../models/Profile';
import {forEach} from '@angular-devkit/schematics';
@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent implements OnInit {
  product: Product;
  owner: string;
  isFavorite: boolean;
  canEdit: boolean;
   user:Profile;
  products: Product[];
  constructor(private productsService: ProductsService,private sharedService:SharedService,
    private route: ActivatedRoute,
    private marketsService: MarketsService,
    private cartService: CartService,
    private myfavorteService:MyfavorteService,
    private  authServiceService:AuthServiceService,
    private location: Location) { }

  ngOnInit(): void {
    this.isFavorite =false;
    this.productsService.getProduct(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.product = value['product'];

      this.marketsService.getOwnerUsernameByMarketId(this.product.market_id).subscribe(value => {
        this.owner = value['market'];

      });
    });
    this.authServiceService.getUserProfile().subscribe(value => {
      this.user=value;
      this.myfavorteService.getmyfavorteproducts(this.user.id ).subscribe(value1 => {
        this.products=value1['product'];

        for (let item of this.products) {

          if(item.id==this.product.id){
            this.isFavorite =true;

          }else {
            this.isFavorite =false;

          }
        }
      });
    });

  //  this.isFavorite =false;
    this.canEdit = false;
  }

  addToCart() {
    if (this.cartService.getCartItems().length > 0) {
      if (this.cartService.getCartItems()[0].product.market_id == this.product.market_id) {
        var cartItem = new CartItem();
        cartItem.product = this.product;
        this.cartService.addToCart(cartItem);
        console.log(this.cartService.getCartItems());
      } else {
        alert("Must fill the cart from one market");
      }
    } else {
      var cartItem = new CartItem();
      cartItem.product = this.product;
      this.cartService.addToCart(cartItem);
      console.log(this.cartService.getCartItems());
    }
  }

  navigateBack() {
    this.location.back();
  }
  addToFavorte(){
 this.authServiceService.getUserProfile().subscribe(value => {
     this.user=value;
     this.myfavorteService.addtofavorte({user_id:this.user.id , producte_id:this.product.id}).subscribe(value1 => {
       window.location.reload();
     });
 });
  }

  RemoveToFavorte(){
    this.authServiceService.getUserProfile().subscribe(value => {
      this.user=value;
      this.myfavorteService.deleteFavorte({user_id:this.user.id , producte_id:this.product.id}).subscribe(value1 => {
        window.location.reload();
      });
    });
  }

}
