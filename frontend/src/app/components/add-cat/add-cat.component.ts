import { OrderService } from './../../services/order.service';
import { Profile } from './../../models/Profile';
import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { ProductsService } from './../../services/products.service';
import { Category } from './../../models/category';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { convertToObject } from 'typescript';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  name : string;
  id :number;
  files:any;
   cat:Category = new Category();
  constructor(private auth: AuthServiceService, private categoriesService: CategoriesService, private productsService: ProductsService, private router: Router, private ordersService: OrderService) {


  }


  ngOnInit(): void {


  }
  onFileSelect(event: any) {

    this.files = event.target.files[0];


}
uploadphoto(){
  let formdate = new FormData()
  formdate.append("file",this.files,this.files.name);
  this.categoriesService.uploadphoto(formdate).subscribe(value => {

  });
}

addGat() {


   this.cat.image=this.files.name;


      this.categoriesService.addCategory(this.cat).subscribe(value => {

        this.uploadphoto();

    });
  this.router.navigate(['/allcategories']);
}

}
