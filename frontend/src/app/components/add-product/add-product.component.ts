import { OrderService } from './../../services/order.service';
import { Profile } from './../../models/Profile';
import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { ProductsService } from './../../services/products.service';
import { Category } from './../../models/category';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  profile: Profile;
  market_id: number;

  constructor(private auth: AuthServiceService, private categoriesService: CategoriesService, private productsService: ProductsService, private router: Router, private ordersService: OrderService) { }

  categories: Category[];
  files:any;
  product: Product = new Product();
  urlLink: string;

  // name: string;

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(value => {
      this.categories = value as Category[];

    });

  }

  viewValues() {
    console.log(this.product);
    console.log(this.urlLink);
  }

  onFileSelect(event: any) {

      this.files = event.target.files[0];

  }
  uploadphoto(){
    let formdate = new FormData()
    formdate.append("file",this.files,this.files.name);
    this.productsService.uploadphoto(formdate).subscribe(value => {

    });
  }
  addProduct() {

    this.auth.getCurrentUser().subscribe(value => {
      this.profile = value;
      this.ordersService.getMarketIdByUserId(this.profile.id).subscribe(value => {

        this.market_id = value['market_id'];
        this.product.picture = this.files.name;
        this.product.market_id = this.market_id;
        this.product.category_id = parseInt(this.product.category_id.toString());
        this.product.is_offer = false;
        this.auth.getmarketid().subscribe(res => this.product.market_id = res);
        this.productsService.addProduct(this.product).subscribe(value => {
          this.uploadphoto();

        });
      });
    });

    this.router.navigate(['/allproducts']);
  }

}
