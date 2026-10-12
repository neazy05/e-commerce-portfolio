import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  api = environment.apiUrl;

  getAllCategories() {
    return this.http.get(this.api + "/category");
  }

  addCategory(cat: Category) {
    return this.http.post(this.api + "/category/add", {
      name: cat.name
    });
  }

  updateCategory(cat: Category) {
    return this.http.post(this.api + "/category/update", {
      id: cat.id,
      name: cat.name
    });
  }

  deleteCategory(categoryID: number) {
    return this.http.post(this.api + "/category/delete/" + categoryID, {});
  }

  getCategoryName(id: number) {
    return this.http.get(this.api + "/category/" + id);
  }

}
