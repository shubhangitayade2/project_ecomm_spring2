
import { HttpClient } from '@angular/common/http';
//import { Component } from '@angular/core';
import { Payment } from '../models/payment';
import { Component, OnInit } from '@angular/core';
//import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import {Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';

//import { ProductService } from '../services/product.service';


//import { Customer } from './customer.model';
@Component({
  selector: 'app-account',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {
  
  //public productt : any;
  //private _productservice: any;

  constructor(public httpc:HttpClient) {
   

  }
 
  
  paymentModel: Payment = new Payment();
  paymentModels: Array<Payment> = new Array<Payment>();
  Addpayment() {
    console.log(this.paymentModel);
    //this.CustmerModels.push(this.CustomerModel);

    var paymentto={
        
      FirstName:this.paymentModel.FirstName,
      SurName:this.paymentModel.SurName,
      CardNumber:Number(this.paymentModel.CardNumber),
   
      StreedAddress:this.paymentModel.StreedAddress,
      City:this.paymentModel.City,
      ZipCode:Number(this.paymentModel.ZipCode),

      Email:this.paymentModel.Email,

    }
    this.httpc.post("https://localhost:44350/api/Payment",paymentto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.paymentModel = new Payment();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  EditCustomer(input: Payment) {
    this.paymentModel = input;
  }
  DeleteCustomer(input: Payment) {
    var index=this.paymentModels.indexOf(input);
    this.paymentModels.splice(index,1);
  }
  getData(){
    console.log("Hi");
    this.httpc.get("https://localhost:44350/api/Payment").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.paymentModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
  
  
}