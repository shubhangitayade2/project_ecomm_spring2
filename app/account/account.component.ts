import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import {Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public productt : any;
searchKey:string="";
    constructor(private _productservice: ProductService,  private cartservice: CartService) { }

   // products: Array<Product> = new Array<Product>();
    ngOnInit(): void {
  
      this._productservice.getProducts().subscribe(res =>{ this.productt = res;
               this.productt.forEach((a:any)=>{
          Object.assign(a,{quantity:1});
        });
    })


this.cartservice.search.subscribe((val:any)=>{
  this.searchKey=val;
})



  }
      addtocart(productt: any) {
        this.cartservice.addtoCart(productt);
          
      }
  
  

}