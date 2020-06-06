
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './input-data/input-data.component.html',
  styleUrls: ['./input-data/input-data.component.css']
})
export class AppComponent  implements OnInit {
  title = 'GotBot';
  field = 0;
  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
  }

  inc(){
    this.field++;
    alert(this.field);
  }

  nameInput(){
    return this.field == 0;
  }

  emailInput(){
    return this.field == 1;
  }

  cellInput(){
      return this.field == 2;
    }

  // Add Name // TODO USE RESPONSE for step 2 and 3
  addName(name) {
    this.http.post(`api/users`, {name})
      .subscribe(() => {

      })
  }

  addEmail(email) {
    this.http.post(`api/name`, {email})
      .subscribe(() => {

      })
  }

  addNumber(cell) {
    this.http.post(`api/mobile`, {cell})
      .subscribe(() => {

      })
  }

}
