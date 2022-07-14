import { HttpClient } from '@angular/common/http';
//import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { Component, OnInit } from '@angular/core';
//import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import {Router } from '@angular/router';
import { CartService } from '../services/cart.service';

//import { ProductService } from '../services/product.service';


//import { Customer } from './customer.model';
@Component({
  selector: 'app-account',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  cartservice: any;
  //public productt : any;
  //private _productservice: any;

  constructor(public httpc:HttpClient) {
   

  }
 
  
  title = 'ecom';
  myname = 'shubhangi'
  adminModel: Product = new Product();
  adminModels: Array<Product> = new Array<Product>();
  Addadmin() {
    console.log(this.adminModel);
    //this.CustmerModels.push(this.CustomerModel);

    var adminto={
        
      productName:this.adminModel.productName,
      productDescription:this.adminModel.productDescription,
      productImage:this.adminModel.productImage,

      catID:Number(this.adminModel.catID),
    }
    this.httpc.post("https://localhost:44350/api/Product",adminto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.adminModel = new Product();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  EditCustomer(input: Product) {
    this.adminModel = input;
  }
  DeleteCustomer(input: Product) {
    var index=this.adminModels.indexOf(input);
    this.adminModels.splice(index,1);
  }
  getData(){
    console.log("Hi");
    this.httpc.get("https://localhost:44350/api/Product").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.adminModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
  
  
}