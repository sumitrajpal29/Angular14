import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bool: boolean = false;
  bool2: boolean = true;
  style = { color: "red" };
  disableButton() {
    this.bool = this.bool ? false : true;
    this.bool2 = this.bool2 ? false : true;
    this.style.color = "red" ? "green" : "red";
  }


  inputVAlue = 'helloSumit';
  getInput(event: any) {
    this.inputVAlue = event.target.value;
  }

}
