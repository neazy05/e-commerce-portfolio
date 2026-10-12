import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { CartService } from './../../services/cart.service';
import { MarketsService } from 'src/app/services/markets.service';
import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Location } from '@angular/common';
import { CartItem } from 'src/app/models/cart-item';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-view-single-category',
  templateUrl: './view-single-category.component.html',
  styleUrls: ['./view-single-category.component.css']
})
export class ViewSingleCategoryComponent implements OnInit {
  products: Product[];
  category: Category = null;
  constructor(private route: ActivatedRoute, private productsService: ProductsService, private marketsService: MarketsService, private location: Location, private cartService: CartService, private sharedService: SharedService, private catService: CategoriesService) { }

  ngOnInit(): void {
    console.log(parseInt(this.route.snapshot.paramMap.get('id')));
    this.productsService.getProductsByCategory(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.products = value['products'];
      console.log(value['products']);
      this.products.forEach(p => {
        //  this.getMarketName();
        this.marketsService.getOwnerUsernameByMarketId(p['market_id']).subscribe(value => {
          p['owner'] = value['market'];
          // console.log(p['owner']);
          this.catService.getCategoryName(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
            console.log(value);
            this.category = value['category'] as Category;
          });
        });
      });
    });
  }

  navigateBack() {
    this.location.back();
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
