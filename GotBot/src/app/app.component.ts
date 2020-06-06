
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './input-data/input-data.component.html',
  styleUrls: ['./input-data/input-data.component.css']
})
export class AppComponent  implements OnInit {
  title = 'GotBot';
  field = 0;
  id = "";
  name = "";
  mobile = "";
  email = "";
  constructor(private http: HttpClient, private router: Router) {  }

  ngOnInit(): void {
  }

  nameInput(){
    return this.field == 0;
  }

  emailInput(){
    return this.field == 1;
  }

  mobileInput(){
      return this.field == 2;
    }

    output(){
          return this.field == 3;
        }

  // Add Name // TODO USE RESPONSE for step 2 and 3
  addName() {
    this.name = document.getElementById('name').value;
    this.field=1;
    /*this.http.post(`api/users`, {name})
      .subscribe(() => {
      })*/
  }

  addEmail() {
    this.email = document.getElementById('email').value;
    this.field=2;
    /*this.http.post(`api/name`, {email})
      .subscribe(() => {

      })*/
  }

  addMobile() {
    this.mobile = document.getElementById('mobile').value;
    this.field=3;
    /*this.http.post(`api/mobile`, {cell})
      .subscribe(() => {

      })*/
  }
}
