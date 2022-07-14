import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  users: Array<UserData> = new Array<UserData>();
  ngOnInit(): void {

    this._auth.getUsers().subscribe(res => this.users = res, err => console.log(err))
  }

}