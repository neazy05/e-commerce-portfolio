
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(value => this.categories = value['categories']);
  }

}
