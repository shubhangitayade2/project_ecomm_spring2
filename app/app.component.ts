import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



public searchTerm : string='';

  title = 'ecommerce-web';
  public totalItem : number = 0;
  constructor(private _auth:AuthService,private cartservice:CartService){ }

  

  ngOnInit(): void {
    this.cartservice.getProductts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

  }


search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartservice.search.next(this.searchTerm);

}

  LoggedIn(input:boolean){
    if(input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }
  LogOut(){
    this._auth.logoutUser();
  }
}