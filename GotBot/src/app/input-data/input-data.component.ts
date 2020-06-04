import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Add Name // TODO USE RESPONSE for step 2 and 3
  addName(name) {
    this.http.post(`api/users`, {name})
      .subscribe(() => {

      })
  }

  addEmail(email) {
    this.http.post(`api/name`, {name})
      .subscribe(() => {

      })
  }

  addNumber(name) {
    this.http.post(`api/mobile`, {name})
      .subscribe(() => {

      })
  }

}
