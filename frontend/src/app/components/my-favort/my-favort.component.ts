import { Component, OnInit } from '@angular/core';
import { MyfavorteService } from 'src/app/services/myfavorte.service';
import {Product} from '../../models/product';
import {AuthServiceService} from '../../services/auth-service.service';
import {Profile} from '../../models/Profile';
import {SharedService} from '../../services/shared.service';
@Component({
  selector: 'app-my-favort',
  templateUrl: './my-favort.component.html',
  styleUrls: ['./my-favort.component.css']
})
export class MyFavortComponent implements OnInit {
  products: Product[] ;
  profile=new Profile();
  constructor(private MyfavorteService:MyfavorteService, private authService: AuthServiceService,public sharedService:SharedService) {



  }

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(res=>{
      this.profile=res;
      this.MyfavorteService.getmyfavorteproducts(this.profile.id).subscribe(value => this.products = value ['product']);
    });

  }
  toggleicon(product:Product){


      this.MyfavorteService.deleteFavorte({user_id:this.profile.id , producte_id:product.id}).subscribe(value1 => {

        window.location.reload();
    });

  }
}
