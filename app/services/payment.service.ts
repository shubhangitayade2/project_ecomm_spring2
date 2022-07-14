import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  

    public paymentItemList: any = []
    public payments = new BehaviorSubject<any>([]);
    //public search = new BehaviorSubject<string>("");
  
    

  private _paymentUrl = "https://localhost:44350/api/Payment";
  constructor(private http: HttpClient,private _router:Router) { }

  getPayments() {
    return this.payments.asObservable();
  }

  setPayments(productt: any) {
    this.paymentItemList.push(...productt);
    this.payments.next(productt);
  }
  addtopayment(productt: any) {
    this.paymentItemList.push(productt);
    this.payments.next(this.paymentItemList);
    console.log(this.paymentItemList)
  }

  getPayment() {
    return this.http.get<any>(this._paymentUrl);
  }
  





  







}
