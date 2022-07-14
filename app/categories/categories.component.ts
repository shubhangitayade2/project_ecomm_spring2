import { Component, OnInit } from '@angular/core';
import { Ctegories } from '../models/categories';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    constructor(private _auth: AuthService) { }
  
    categoriess: Array<Ctegories> = new Array<Ctegories>();
    ngOnInit(): void {
  
      this._auth. getcategory().subscribe(res => this.categoriess = res, err => console.log(err))
    }

}
