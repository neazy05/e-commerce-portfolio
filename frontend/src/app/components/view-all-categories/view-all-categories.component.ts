import { Category } from './../../models/category';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';


@Component({
  selector: 'app-view-all-categories',
  templateUrl: './view-all-categories.component.html',
  styleUrls: ['./view-all-categories.component.css']
})
export class ViewAllCategoriesComponent implements OnInit {
  categories: Category[];


  constructor(private categoriesService:CategoriesService,private sharedService:SharedService) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(value => {
      this.categories = value as Category[];

    });
  }

}
