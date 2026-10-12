import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent implements OnInit {

  products: Product[] = null;
  categories: Category[];
  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(value => this.products = value['products']);
    this.categoriesService.getAllCategories().subscribe(value => this.categories = value as Category[]);
  }

}
