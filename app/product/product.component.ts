import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-produvt',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


    constructor(private _prouct: ProductService) { }
  
    products: Array<Product> = new Array<Product>();
    ngOnInit(): void {
  
      this._prouct. getProducts().subscribe(res => this.products = res, err => console.log(err))
    }

}