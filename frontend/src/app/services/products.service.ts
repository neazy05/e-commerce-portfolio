import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  api = environment.apiUrl;

  getProduct(productID: number) {
    return this.http.get(this.api + "/products/" + productID);
  }

  getAllProducts() {
    return this.http.get(this.api + "/products");
  }

  addProduct(product: Product) {
    return this.http.post(this.api + "/products/add-product", {
      market_id: product.market_id, category_id: product.category_id, name: product.name,
      description: product.description, price: product.price, is_offer: product.is_offer, picture: product.picture
    });
  }

  updateProduct(product: Product) {
    return this.http.post(this.api + "/products/update-product/" + product.id, {
      market_id: product.market_id, category_id: product.category_id, name: product.name,
      description: product.description, price: product.price, is_offer: product.is_offer, picture: product.picture
    });
  }

  deleteProduct(productID: number) {
    return this.http.post(this.api + "/products/delete/" + productID, {});
  }

  getProductsByCategory(categoryID: number) {
    return this.http.get(this.api + "/category/products/" + categoryID);
  }

  getProductsByCategoryAndMarket(categoryID: number, marketID: number) {
    return this.http.get(this.api + "/category/products/" + categoryID + "/" + marketID);
  }

  rateProduct(userID: number, productID: number, rate: number) {
    return this.http.post(this.api + "/rate/product/" + userID + "/" + productID + "/" + rate, {});
  }

  averageRatingProduct(productID: number) {
    return this.http.get(this.api + "/rate/product/avg/" + productID);
  }


  //new new new new new new new new new new new new new new new new

  getProductsByMarket(marketID: number) {
    return this.http.get(this.api + "/market/products/" + marketID);
  }
  uploadphoto(photo:any){
    return this.http.post(this.api + "/uploadphoto" , photo);
  }

}
