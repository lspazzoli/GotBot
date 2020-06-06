
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

  emailInput(){
    return this.field == 0;
  }

  nameInput(){
    return this.field == 1;
  }

  mobileInput(){
    return this.field == 2;
  }

  output(){
    return this.field == 3;
  }

  addEmail() {
    this.email = document.getElementById('email').value;
    this.field=1;
    this.http.post(`http://localhost:3000/`, {email: this.email})
      .subscribe((res) => {
          alert(res);
      })
  }

  addName() {
    this.name = document.getElementById('name').value;
    this.field=2;
    this.http.post(`/api/name`, {email: this.email, name : this.name})
      .subscribe((res) => {
        alert(res);
      })
  }

  addMobile() {
    this.mobile = document.getElementById('mobile').value;
    this.field=3;
    this.http.post(`/api/mobile`, {email: this.email ,mobile: this.mobile})
      .subscribe((res) => {
        alert(res);
      })
  }

}
