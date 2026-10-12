import { Category } from './../../models/category';
import { CategoriesService } from './../../services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  categories: Category[];

  constructor(private route: ActivatedRoute, private location: Location, private productsService: ProductsService, private catService: CategoriesService) { }

  ngOnInit(): void {
    this.productsService.getProduct(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(value => {
      this.product = value['product'];
      console.log(value['product']);
      this.catService.getAllCategories().subscribe(value => {
        this.categories = value as Category[];
        console.log(value as Category[]);
      });
    });
  }

  updateProduct() {
    this.productsService.updateProduct(this.product).subscribe(value => {
      console.log(value);
      this.location.back();
    });
  }


  navigateBack() {
    this.location.back();
  }

}
