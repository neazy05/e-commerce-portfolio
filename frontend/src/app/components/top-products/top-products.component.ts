import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
